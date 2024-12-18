// useDeviceData.js
import { useSelector } from 'react-redux';

const useDeviceData = () => {
    const SHT30 = useSelector(state => state.data.SHT30);
    const ANALOG = useSelector(state => state.data.ANALOG);
    const Relay = useSelector(state => state.data.Relay);
    const LED = useSelector(state => state.data.LED);
    const Digital = useSelector(state => state.data.Digital);
    const Time = useSelector(state => state.data.Time);
    const GCE_RS485 = useSelector(state => state.data.GCE_RS485);
    const deviceUID = useSelector(state => state.data.device_uid);
    const timestamp = useSelector(state => state.data.timestamp);

    return {
        SHT30,
        ANALOG,
        Relay,
        LED,
        Digital,
        Time,
        GCE_RS485,
        deviceUID,
        timestamp,
    };
};

export default useDeviceData;
