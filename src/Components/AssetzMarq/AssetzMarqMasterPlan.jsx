import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import AssetzMarqMasterPlanImages from "./AssetzMarqMasterPlanImages";
import AssetzMarqAllImages from "./AssetzMarqAllImages";
import AssetzMarqFourBhk from "./AssetzMarqFourBhk";

const AssetzMarqMasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center text-primary fs-4">
        Assetz Marq 3.0 Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <AssetzMarqAllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <AssetzMarqMasterPlanImages />
        </Tab>
        <Tab eventKey="four-bhk" title="4BHK">
          {<AssetzMarqFourBhk />}
        </Tab>
      </Tabs>
    </div>
  );
};

export default AssetzMarqMasterPlan;
