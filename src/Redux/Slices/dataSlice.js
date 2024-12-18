import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState={
    SHT30: {
    Temperature: null,
    Humidity: null,
  },
  ANALOG: {
    "0": null,
    "1": null,
    "2": null,
    "3": null,
  },
  Relay: null,
  LED: null,
  Digital: null,
  Time: null,
  GCE_RS485: {
    RemainingCapacity: null,
    MaxChargingCurrent: null,
    SOH: null,
    SOC: null,
    Status: {},
    Warning: {},
    Protection: {},
    ErrorCode: {},
    CycleCounts: null,
    FullCapacitymAS: null,
    CellNum: null,
    DesignedCapacityAh: null,
    CellBalanceStatus: {},
    Voltage_mV: null,
    Current_mA: null,
    CellVoltage_mV: {},
  },
  device_uid: null,
  timestamp: null,
    
};

export const dataSlice= createSlice({
      name: 'data',
  initialState,
  reducers: {
    setSHT30: (state, action) => {
      state.SHT30 = action.payload;
    },
    setAnalog: (state, action) => {
      state.ANALOG = action.payload;
    },
    setRelay: (state, action) => {
      state.Relay = action.payload;
    },
    setLED: (state, action) => {
      state.LED = action.payload;
    },
    setDigital: (state, action) => {
      state.Digital = action.payload;
    },
    setTime: (state, action) => {
      state.Time = action.payload;
    },
    setGCE_RS485: (state, action) => {
      state.GCE_RS485 = { ...state.GCE_RS485, ...action.payload };
    },
    setDeviceUID: (state, action) => {
      state.device_uid = action.payload;
    },
    setTimestamp: (state, action) => {
      state.timestamp = action.payload;
    },
  },
});

export const {
  setSHT30,
  setAnalog,
  setRelay,
  setLED,
  setDigital,
  setTime,
  setGCE_RS485,
  setDeviceUID,
  setTimestamp,
} = dataSlice.actions;

export default dataSlice.reducer;
