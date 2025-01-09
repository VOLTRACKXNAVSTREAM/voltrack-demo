import React, { useEffect } from "react";
import MainPageCards from "../../Cards/MainPageCards";
import CircularProgressBar from "../../Graph/DoughnutGraph/CircularProgressBar";
import LineGraph from "../../Graph/LineGraph/LineGraph";
import { TbCircuitVoltmeter } from "react-icons/tb";
import Alerts from "../Alerts/Alerts";
import Indicators from "../Indicators/Indicators";
import useFetchDeviceData from "../../../Hooks/useFetchDeviceData";
import { useSelector, useDispatch } from "react-redux";
import { resetRefreshFlag } from "../../../Redux/Slices/deviceSlice";

function getBaseColorFromRgba(rgbaColor) {
  // Extract RGBA values and return only the RGB part
  const rgba = rgbaColor.match(/\d+/g);
  return `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
}

function Overview1({ userId }) {
  const dispatch = useDispatch();
  const { selectedDevice, shouldRefreshData, isDataLoading } = useSelector((state) => state.device);
  
  // Fetch device data based on selected device
  useFetchDeviceData();
  const sht30Data = useSelector((state) => state.data.SHT30 || {});
  const GCE_RS485 = useSelector(state => state.data.GCE_RS485 || {});
  const timeStamp = useSelector(state => state.data.timestamp);
  const [currentDeviceName, setCurrentDeviceName] = React.useState(null);

  // Reset data when device changes
  useEffect(() => {
    if (shouldRefreshData) {
      dispatch(resetRefreshFlag());
      setCurrentDeviceName(selectedDevice.name);
    }
  }, [selectedDevice, shouldRefreshData, dispatch]);

  // Fallback device name if no device is selected
  const deviceName = selectedDevice?.name || 'No Device Selected';

  return (
    <div className="m-2 flex flex-col gap-4 overflow-y-scroll no-scrollbar h-full pb-5 pt-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:min-h-[30vh]">
        {/* Temperature Card */}
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={<LineGraph 
            name={"Temperature"} 
            data={sht30Data.Temperature || []} 
            gradientColors={["rgba(255, 99, 71, 0.5)", "rgba(255, 159, 64, 0.1)"]} 
            lineColor={getBaseColorFromRgba("rgba(255, 99, 71, 0.5)")} 
            xLabelNum={3} 
            referenceTime={timeStamp} 
            labelCount={3} 
            timeFrame={3}
            device={currentDeviceName}
          />}
          title={`Temperature (${deviceName})`}
          unit={"°C"}
          value={isDataLoading ? null : (sht30Data.Temperature !== undefined ? sht30Data.Temperature : null)}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(255, 99, 71, 0.5)")}
        />
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={<LineGraph 
            name={"SOH"} 
            data={GCE_RS485.SOH || []} 
            gradientColors={["rgba(75, 192, 192, 0.9)", "rgba(75, 192, 192, 0.1)"]} 
            lineColor={getBaseColorFromRgba("rgba(75, 192, 192, 0.9)")} 
            xLabelNum={3} 
            referenceTime={timeStamp} 
            labelCount={3} 
            timeFrame={3}
          />}
          title={`State of Health (${deviceName})`}
          value={isDataLoading ? null : (GCE_RS485.SOH !== undefined ? GCE_RS485.SOH : null)}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(75, 192, 192, 0.9)")}
          device={currentDeviceName}
        />
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={<LineGraph 
            name={"SOC"} 
            data={GCE_RS485.SOC || []} 
            gradientColors={["rgba(34, 139, 34, 0.5)", "rgba(144, 238, 144, 0.1)"]} 
            lineColor={getBaseColorFromRgba("rgba(34, 139, 34, 0.5)")} 
            xLabelNum={3} 
            referenceTime={timeStamp} 
            labelCount={3} 
            timeFrame={3}
          />}
          title={`State of Charge (${deviceName})`}
          value={isDataLoading ? null : (GCE_RS485.SOC !== undefined ? GCE_RS485.SOC : null)}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(34, 139, 34, 0.5)")}
          device={currentDeviceName}
        />
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={<LineGraph 
            name={"Power"} 
            data={
              GCE_RS485.VoltageMV && GCE_RS485.CurrentMA < 0 
                ? [(Math.abs(GCE_RS485.VoltageMV * GCE_RS485.CurrentMA) / 1000000)] 
                : []
            } 
            gradientColors={["rgba(111, 0, 255, 0.5)", "rgba(196, 144, 238, 0.1)"]} 
            lineColor={getBaseColorFromRgba("rgba(111, 0, 255, 0.5)")} 
            xLabelNum={3} 
            referenceTime={timeStamp} 
            labelCount={3} 
            timeFrame={3} 
          />}
          title={`Power Usage (${deviceName})`}
          unit={"W"}
          value={
            isDataLoading ? null : (
              GCE_RS485.VoltageMV !== undefined && GCE_RS485.CurrentMA < 0 
                ? Math.abs((GCE_RS485.VoltageMV * GCE_RS485.CurrentMA) / 1000000).toFixed(2)
                : GCE_RS485.VoltageMV !== undefined && GCE_RS485.CurrentMA > 0
                ? 0 
                : null
            )
          }
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(111, 0, 255, 0.5)")}
          device={currentDeviceName}
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:min-h-[40vh] h-auto">
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          graph={<CircularProgressBar value={88} max={100} />}
          title={`Total Voltage (${deviceName})`}
          unit="V"
          lGraph={<LineGraph 
            name={"Voltage"} 
            data={GCE_RS485.VoltageMV ? [Math.abs(GCE_RS485.VoltageMV) / 1000] : []} 
            gradientColors={["rgba(0, 68, 255, 0.9)", "rgba(113, 146, 235, 0.1)"]} 
            lineColor={getBaseColorFromRgba("rgba(0, 68, 255, 0.9)")} 
            xLabelNum={6} 
            referenceTime={timeStamp} 
            labelCount={5} 
            timeFrame={8}
          />}
          value={isDataLoading ? null : (GCE_RS485.VoltageMV !== undefined ? Math.abs(GCE_RS485.VoltageMV) / 1000 : null)}
          valueColor={getBaseColorFromRgba("rgba(0, 68, 255, 0.9)")}
          device={currentDeviceName}
        />
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          graph={<CircularProgressBar value={88} max={100} />}
          title={
            GCE_RS485.CurrentMA < 0 && GCE_RS485.CurrentMA !== undefined 
              ? `Current A (Discharging) - (${deviceName})` 
              : GCE_RS485.CurrentMA > 0 && GCE_RS485.CurrentMA !== undefined
              ? `Current A (Charging) - (${deviceName})`
              : `Current A (${deviceName})`
          }
          unit="A"
          lGraph={<LineGraph 
            name={"Current"} 
            data={GCE_RS485.CurrentMA ? [(GCE_RS485.CurrentMA) / 1000] : []} 
            gradientColors={["rgba(139, 0, 0, 0.5)", "rgba(255, 99, 71, 0.1)"]} 
            lineColor={getBaseColorFromRgba("rgba(139, 0, 0, 0.5)")} 
            xLabelNum={6} 
            referenceTime={timeStamp} 
            labelCount={5} 
            timeFrame={8}
          />}
          value={isDataLoading ? null : (GCE_RS485.CurrentMA !== undefined ? (GCE_RS485.CurrentMA) / 1000 : null)}
          valueColor={getBaseColorFromRgba("rgba(139, 0, 0, 0.5)")}
          device={currentDeviceName}
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:min-h-[40vh] h-auto">
        <Alerts data={GCE_RS485}/>
        <Indicators data={GCE_RS485}/>
      </div>
    </div>
  );
}

export default Overview1;