import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import {
  setSHT30,
  setAnalog,
  setRelay,
  setLED,
  setDigital,
  setTime,
  setGCE_RS485,
  setDeviceUID,
  setTimestamp,
} from '../Redux/Slices/dataSlice';

const useFetchDeviceData = () => {
  const dispatch = useDispatch();
  const { selectedDevice } = useSelector(state => state.device);
  const userId = 'voltrackTest';
  const socketServer = process.env.REACT_APP_SOCKET_SERVER;
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const user = localStorage.getItem('userID');

  const [socket, setSocket] = useState(null);
  const [connectionError, setConnectionError] = useState(false);
  const [lastDeviceId, setLastDeviceId] = useState(null);

  const connectWebSocket = (deviceId) => {
    // Prevent reconnecting to the same device
    if (deviceId === lastDeviceId) return;

    if (connectionError) {
      console.log("Connection attempt halted due to critical errors.");
      return;
    }

    // Disconnect existing socket
    if (socket) {
      socket.disconnect();
    }

    if (!deviceId || !token) {
      console.log("Waiting for device selection or token.");
      return;
    }

    const newSocket = io(socketServer, {
      query: { userId, deviceId, user, token, username },
      reconnection: true,
      reconnectionAttempts: 3,
      reconnectionDelay: 1000,
      transports: ['websocket', 'polling'],
      withCredentials: true,
    });

    newSocket.on("connect", () => {
      console.log(`WebSocket connected for device: ${deviceId}`);
      setConnectionError(false);
      setLastDeviceId(deviceId);
    });

    newSocket.on("liveData", (data) => {
      console.log("Received live data:", data);
      if (data) {
        // Reset all data slices when a new device is selected
        dispatch(setSHT30({}));
        dispatch(setAnalog({}));
        dispatch(setRelay({}));
        dispatch(setLED({}));
        dispatch(setDigital({}));
        dispatch(setTime(null));
        dispatch(setGCE_RS485({}));
        dispatch(setDeviceUID(null));
        dispatch(setTimestamp(null));

        // Then set new data
        dispatch(setSHT30(data.SHT30 || {}));
        dispatch(setAnalog(data.ANALOG || {}));
        dispatch(setRelay(data.Relay || {}));
        dispatch(setLED(data.LED || {}));
        dispatch(setDigital(data.Digital || {}));
        dispatch(setTime(data.Time || null));
        dispatch(setGCE_RS485(data.GCE_RS485 || {}));
        dispatch(setDeviceUID(data.device_uid || null));
        dispatch(setTimestamp(data.timestamp || null));
      }
    });

    newSocket.on("connect_error", (error) => {
      console.error("WebSocket connection error:", error);
      if (error.message.includes("CORS")) {
        console.error("CORS issue detected. Stopping further connection attempts.");
        setConnectionError(true);
      }
    });

    newSocket.on("disconnect", (reason) => {
      console.warn(`WebSocket disconnected for device ${deviceId}. Reason:`, reason);
      if (reason === "io server disconnect" || reason === "transport error") {
        console.error("Critical WebSocket error occurred. Stopping reconnection attempts.");
        setConnectionError(true);
        newSocket.close();
      }
    });

    setSocket(newSocket);
  };

  useEffect(() => {
    if (selectedDevice?.device_uid) {
      connectWebSocket(selectedDevice.device_uid);
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [selectedDevice]); // Depend on Redux selected device

  return null;
};

export default useFetchDeviceData;