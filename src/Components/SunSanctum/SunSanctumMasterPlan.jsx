import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import SunSanctumTwoBhk from "./SunSanctumTwoBhk";
import SunSanctumAllImages from "./SunSanctumAllImages";
import SunSanctumMasterPlanImages from "./SunSanctumMasterPlanImages";
import SunSanctumOneBhk from "./SunSanctumOneBhk";

const SunSanctumMasterPlan = () => {
    const [key, setKey] = useState("all")

  return (
    <div>
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary">
        Assetz Sun & Sanctum - Master & Floor Plans
      </h2>
      <Container fluid className="ps-0 pe-0">
        <Row>
          <Col>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 text-dark"
            >
              <Tab eventKey="all" title="All" className="text-dark">
                <SunSanctumAllImages />
              </Tab>
              <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
                <SunSanctumMasterPlanImages />
              </Tab>
              <Tab eventKey="three-bhk" title="2BHK">
                <SunSanctumOneBhk />
              </Tab>
              <Tab eventKey="four-bhk" title="3BHK">
                <SunSanctumTwoBhk />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default SunSanctumMasterPlan;
