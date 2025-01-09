import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalysisData, setTimePeriod } from '../../../Redux/Slices/AnalysisDataSlice';
import MainPageCards from "../../Cards/MainPageCards";
import LineGraphStatic from "../../Graph/LineGraph/LineGraphStatic";
import { TbCircuitVoltmeter } from "react-icons/tb";
import { useAnalysisData } from "../../../Hooks/useAnalysisData";
import { useMemo } from 'react';

function getBaseColorFromRgba(rgbaColor) {
  const rgba = rgbaColor.match(/\d+/g);
  return `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
}

function AnalysisComplex() {
  const dispatch = useDispatch();
  const { data, loading, error, timePeriod } = useSelector(state => state.analysisData);

  const timePeriods = [
    { label: '1 Day', value: '1day' },
    { label: '1 Week', value: '1week' },
    { label: '15 Days', value: '15days' },
    { label: '1 Month', value: '1month' },
    { label: '3 Months', value: '3month' },
    { label: '6 Months', value: '6month' }
  ];

  useEffect(() => {function AnalysisComplex() {
    const { rawData, loading, error, aggregateData } = useAnalysisData('deviceId');
    const [timePeriod, setTimePeriod] = useState('1month');
  
    const aggregatedData = useMemo(() => {
      switch(timePeriod) {
        case '1day': return aggregateData.aggregate1Day();
        case '1week': return aggregateData.aggregate1Week();
        case '15days': return aggregateData.aggregate15Days();
        case '1month': return aggregateData.aggregate1Month();
        case '3month': return aggregateData.aggregate3Months();
        case '6month': return aggregateData.aggregate6Months();
        default: return aggregateData.aggregate1Month();
      }
    }, [timePeriod, aggregateData]);
  
    // Rest of the component remains the same
  }
    dispatch(fetchAnalysisData({ timePeriod }));
  }, [dispatch, timePeriod]);

  const handleTimePeriodChange = (period) => {
    dispatch(setTimePeriod(period));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="m-2 flex flex-col gap-4 overflow-y-scroll no-scrollbar h-full pb-5 pt-5">
      <div className="flex justify-center mb-4">
        {timePeriods.map(period => (
          <button
            key={period.value}
            onClick={() => handleTimePeriodChange(period.value)}
            className={`mx-2 px-4 py-2 ${
              timePeriod === period.value 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* Existing graph rendering logic using data */}
      {data && (
        <div className="grid grid-cols-2 gap-3 h-full">
        {/* Temperature */}
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={
            <LineGraphStatic
              name={"Temperature"}
              data={data.temperature || 'N/A'}
              gradientColors={["rgba(255, 99, 71, 0.5)", "rgba(255, 159, 64, 0.1)"]}
              lineColor={getBaseColorFromRgba("rgba(255, 99, 71, 0.5)")}
              xLabelNum={30}
              isMonthlyView={true}
            />
          }
          title="Temperature"
          unit="°C"
          value={data.temperature || 'N/A'}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(255, 99, 71, 0.5)")}
        />

        {/* State of Health (SOH) */}
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={
            <LineGraphStatic
              name={"SOH"}
              data={data.soh || 'N/A'}
              gradientColors={["rgba(75, 192, 192, 0.9)", "rgba(75, 192, 192, 0.1)"]}
              lineColor={getBaseColorFromRgba("rgba(75, 192, 192, 0.9)")}
              xLabelNum={30}
              isMonthlyView={true}
            />
          }
          title="State of Health (SOH)"
          value={data.soh || 'N/A'}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(75, 192, 192, 0.9)")}
        />

        {/* State of Charge (SOC) */}
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={
            <LineGraphStatic
              name={"SOC"}
              data={data.soc || 'N/A'}
              gradientColors={["rgba(34, 139, 34, 0.5)", "rgba(144, 238, 144, 0.1)"]}
              lineColor={getBaseColorFromRgba("rgba(34, 139, 34, 0.5)")}
              xLabelNum={30}
              isMonthlyView={true}
            />
          }
          title="State of Charge (SOC)"
          value={data.soc || 'N/A'}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(34, 139, 34, 0.5)")}
        />

        {/* Power Usage */}
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={
            <LineGraphStatic
              name={"Power"}
              data={data.power || 'N/A'}
              gradientColors={["rgba(111, 0, 255, 0.5)", "rgba(196, 144, 238, 0.1)"]}
              lineColor={getBaseColorFromRgba("rgba(111, 0, 255, 0.5)")}
              xLabelNum={30}
              isMonthlyView={true}
            />
          }
          title="Power Usage"
          unit="W"
          value={data.power || 'N/A'}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(111, 0, 255, 0.5)")}
        />

        {/* Voltage */}
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={
            <LineGraphStatic
              name={"Voltage"}
              data={data.voltage || 'N/A'}
              gradientColors={["rgba(0, 68, 255, 0.9)", "rgba(113, 146, 235, 0.1)"]}
              lineColor={getBaseColorFromRgba("rgba(0, 68, 255, 0.9)")}
              xLabelNum={30}
              isMonthlyView={true}
            />
          }
          title="Voltage"
          unit="V"
          value={data.voltage || 'N/A'}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(0, 68, 255, 0.9)")}
        />

        {/* Current */}
        <MainPageCards
          icon={<TbCircuitVoltmeter size={50} />}
          lGraph={
            <LineGraphStatic
              name={"Current"}
              data={data.current || 'N/A'}
              gradientColors={["rgba(139, 0, 0, 0.5)", "rgba(255, 99, 71, 0.1)"]}
              lineColor={getBaseColorFromRgba("rgba(139, 0, 0, 0.5)")}
              xLabelNum={30}
              isMonthlyView={true}
            />
          }
          title={data.current < 0 ? "Current (Discharging)" : "Current (Charging)"}
          unit="A"
          value={data.GCE_RS485.CurrentMA || 'N/A'}
          graphContainerClass="h-full"
          valueColor={getBaseColorFromRgba("rgba(139, 0, 0, 0.5)")}
        />
      </div>
      )}
    </div>
  );
}

export default AnalysisComplex;
