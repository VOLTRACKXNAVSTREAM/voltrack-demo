import React from 'react'
import MainPageCards from '../../Cards/MainPageCards'
import { TbCircuitVoltmeter } from 'react-icons/tb'
import CircularProgressBar from '../../Graph/DoughnutGraph/CircularProgressBar'
import LineGraph from '../../Graph/LineGraph/LineGraph'
import DoughnutGraph from '../../Graph/DoughnutGraph/DoughnutGraph'
import VariableLineGraph from '../../Graph/LineGraph/VariableLineGraph'
import Alerts from "../Alerts/Alerts";
import Indicators from "../Indicators/Indicators";
function AnalysisSimple() {
  return (
    <div>
        <div className="flex flex-wrap gap-5 lg:h-[40vh] md:h-fit sm:h-fit snap-start">
          <div className="lg:w-[49%] md:w-full sm:w-full">
            <MainPageCards
              icon={<TbCircuitVoltmeter size={50} />}
              graph={<CircularProgressBar value={88} max={100} />}
              title="Charging"
              lGraph={<LineGraph name={"voltage"} />}
              value={127}
            />
          </div>
          <div className="lg:w-[49%]  md:w-full sm:w-full">
            <MainPageCards
              icon={<TbCircuitVoltmeter size={50} />}
              graph={<CircularProgressBar value={88} max={100} />}
              title="Voltage"
              lGraph={<LineGraph name={"voltage"} />}
              value={127}
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="my-4 w-full flex flex-wrap gap-5 lg:h-[40vh] md:h-fit sm:h-fit">
          <div className="flex lg:w-[49%] sm:w-full md:full h-full gap-5">
            {/* left div */}
            <div className="p-2 w-[80%] rounded-xl flex flex-col justify-center bg-white shadow-lg items-center">
              <DoughnutGraph
                arr={[1, 10, 12, 14, 16, 18, 20, 21, 25, 29, 30, 45]}
              />
              <div className="font-bold">Temperature</div>

              {/* <div className="border-slate-400 border-2 w-full">
              <h3 className="font-semibold  text-blue-400 inline-block relative top-[-14px] left-5 bg-white">
                in 24 h
              </h3>
              <h3 className="m-1 font-medium">max:</h3>
              <h3 className="m-1 font-medium">min:</h3>
            </div> */}
            </div>
            {/* mid div */}
            <div className="flex flex-col w-full gap-4 rounded-xl">
              <MainPageCards
                icon={<TbCircuitVoltmeter size={50} />}
                graph={<CircularProgressBar value={88} max={100} />}
                title="SOH"
                value={127}
              />
              <MainPageCards
                icon={<TbCircuitVoltmeter size={50} />}
                graph={<CircularProgressBar value={88} max={100} />}
                title="SOC"
                value={127}
              />
            </div>
          </div>

          {/* right div */}
          <div className=" lg:w-[49%] sm:w-full md:full">
            <MainPageCards
              icon={<TbCircuitVoltmeter size={50} />}
              lGraph={<VariableLineGraph name={"SOC"} name2={"SOH"} />}
              title="Power"
              value={127}
            />
          </div>
        </div>
        {/* End 2nd row */}

        {/* row3 */}
        <div className="my-4 flex flex-wrap gap-5 lg:h-[50vh] md:h-fit sm:h-fit snap-start">
          <Alerts />

          {/* indicators */}
          <Indicators />
        </div>
      </div>
  )
}

export default AnalysisSimple
