import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import SixtyThreeEastAllImages from "./SixtyThreeEastAllImages";
// import SixtyThreeEastFourBhk from "./SixtyThreeEastFourBhk";
import SixtyThreeEastMasterPlanImages from "./SixtyThreeEastMasterPlanImages";
// import SixtyThreeEastThreeBhk from "./SixtyThreeEastThreeBhk";

const SixtyThreeEastMasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center text-primary fs-3">
       Assetz 63<sup>0</sup> East - Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <SixtyThreeEastAllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <SixtyThreeEastMasterPlanImages />
        </Tab>
        {/* <Tab eventKey="three-bhk" title="3BHK">
          <SixtyThreeEastThreeBhk />
        </Tab>
        <Tab eventKey="four-bhk" title="4BHK">
          <SixtyThreeEastFourBhk />
        </Tab> */}
      </Tabs>
    </div>
  );
};

export default SixtyThreeEastMasterPlan;
