import React, { useState } from "react";
import { TbCircuitVoltmeter } from "react-icons/tb";
import HelloDiv from "../../HelloDiv/HelloDiv";
import AnalysisComplex from "./AnalysisComplex";
import AnalysisSimple from "./AnalysisSimple";
import { HiOutlineViewGrid } from "react-icons/hi";


function Analysis() {
  const [analysisPageSwitcher, setAnalysisPageSwitcher] = useState(true);

  return (
    <div className="w-full h-full px-3 py-1 overflow-y-auto snap-y snap-mandatory no-scrollbar">
      <HelloDiv
        name={"Analysis"}
        button1={<HiOutlineViewGrid />}
        analysisPageSwitcher={analysisPageSwitcher}
        setAnalysisPageSwitcher={setAnalysisPageSwitcher}
      />
      {/* {analysisPageSwitcher ? <AnalysisComplex /> : <AnalysisSimple />} */}
      <AnalysisComplex/>
    </div>
  );
}

export default Analysis;
