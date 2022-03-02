import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import LeaveLivesAllImages from "./LeaveLivesAllImages";
import LeaveLivesMasterPlanImages from "./LeaveLivesMasterPlanImages";
import LeaveLivesFloorplan from "./LeaveLivesFloorplan";

const LeaveLivesMasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center text-primary fs-4">
        Assetz Leaves & Lives - Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <LeaveLivesAllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <LeaveLivesMasterPlanImages />
        </Tab>
        <Tab eventKey="three-bhk" title="Floor-Plan">
          {<LeaveLivesFloorplan />}
        </Tab>
      </Tabs>
    </div>
  );
};

export default LeaveLivesMasterPlan;
