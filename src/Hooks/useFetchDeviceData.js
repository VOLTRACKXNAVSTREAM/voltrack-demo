import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

const useFetchDeviceData = (deviceId) => {
  const dispatch = useDispatch();
  const userId = 'voltrackTest'; // User ID for the WebSocket connection

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = io('http://35.154.29.77:3000', {
      query: { userId, deviceId }, // Send deviceId and userId as query parameters
    });

    // Listen for live data updates
    socket.on('liveData', (data) => {
      console.log('Received live data:', data);

      // Dispatch data to Redux store
      if (data) {
        dispatch(setSHT30(data.SHT30));
        dispatch(setAnalog(data.ANALOG));
        dispatch(setRelay(data.Relay));
        dispatch(setLED(data.LED));
        dispatch(setDigital(data.Digital));
        dispatch(setTime(data.Time));
        dispatch(setGCE_RS485(data.GCE_RS485));
        dispatch(setDeviceUID(data.device_uid));
        dispatch(setTimestamp(data.timestamp));
      }
    });

    // Handle WebSocket connection errors
    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
      alert('Failed to connect to WebSocket. Please try again.');
    });

    // Handle WebSocket disconnections
    socket.on('disconnect', () => {
      console.log('WebSocket disconnected.');
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, [dispatch, deviceId, userId]); // Add userId to dependency array for dynamic updates

};

export default useFetchDeviceData;
