import React, { useState, useEffect } from "react";
import Overview1 from "./Overview1";
import Overview2 from "./Overview2";
import Overview3 from "./Overview3";
import OverallOverview from "./OverallOverview";

function Overview({ userId, selectedOverview }) {
  const [componentToRender, setComponentToRender] = useState(<OverallOverview />);

  useEffect(() => {
    switch (selectedOverview) {
      case 0:
        setComponentToRender(<Overview1 />);
        break;
      case 1:
        setComponentToRender(<OverallOverview />);
        break;
      case 2:
        setComponentToRender(<Overview2 />);
        break;
      case 3:
        setComponentToRender(<Overview3 />);
        break;
      default:
        setComponentToRender(<Overview1 />);
        break;
    }
  }, [selectedOverview]);

  return <>{componentToRender}</>;
}

export default Overview;
