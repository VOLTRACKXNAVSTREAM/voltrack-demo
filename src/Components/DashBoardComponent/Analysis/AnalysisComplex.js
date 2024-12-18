import React from "react";
import MainPageCards from "../../Cards/MainPageCards";
import { TbCircuitVoltmeter } from "react-icons/tb";
import VariableLineGraph from "../../Graph/LineGraph/VariableLineGraph";

function AnalysisComplex() {
  return (
      <div className="h-full w-full flex gap-2">
        {/* left */}
        <div className="h-full w-[75%] flex flex-col p-2">
          <div className="w-full h-2/3">
            <MainPageCards
              icon={<TbCircuitVoltmeter size={50} />}
              lGraph={<VariableLineGraph name={"SOC"} name2={"SOH"} />}
              title="Power"
              value={127}
            />
          </div>
          <div className="w-full flex flex-wrap gap-2 my-2">
            <MainPageCards
              icon={<TbCircuitVoltmeter size={50} />}
              lGraph={<VariableLineGraph name={"SOC"} name2={"SOH"} />}
              title="Voltage"
              value={127}
            />{" "}
            <MainPageCards
              icon={<TbCircuitVoltmeter size={50} />}
              lGraph={<VariableLineGraph name={"SOC"} name2={"SOH"} />}
              title="Charging"
              value={127}
            />{" "}
            <MainPageCards
              icon={<TbCircuitVoltmeter size={50} />}
              lGraph={<VariableLineGraph name={"SOC"} name2={"SOH"} />}
              title="Power"
              value={127}
            />
          </div>         
        </div>
        {/* right */}
        <div className="h-full flex w-1/3 flex-col gap-4">
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>
          <div className="p-1 px-4 bg-white w-full rounded-xl shadow-lg border-2 border-gray-300 hover:border-gray-200 flex justify-between items-center hover:bg-blue-300 hover:translate-x-3 transition-transform delay-150">
            <span className="m-2 font-semibold text-4xl"><TbCircuitVoltmeter/></span>
            <span>Voltage</span>
            <span>400 V</span>
          </div>

         
        </div>
      </div>
  );
}

export default AnalysisComplex;
