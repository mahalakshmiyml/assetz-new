import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import EarthEssenceAllImages from "./EarthEssenceAllImages";
import EarthEssenceLocationImages from "./EarthEssenceLocationImages";
import EarthEssenceMasterPlanImages from "./EarthEssenceMasterPlanImages";

const EarthEssenceMasterPlan= () => {
    const [key, setKey] = useState("all")

  return (
    <div>
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary fs-3">
        Assetz Earth & Essence - Master & Floor Plans
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
                <EarthEssenceAllImages />
              </Tab>
              <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
                <EarthEssenceMasterPlanImages />
              </Tab><Tab eventKey="location" title="Location" className="text-dark">
                <EarthEssenceLocationImages />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default EarthEssenceMasterPlan
