import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
// import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import VirtualTour from "../Includes/VirtualTour";
import {Helmet} from "react-helmet";
import AssetzMarqSlider from "./AssetzMarqSlider";
import AssetzMarqPrice from "./AssetzMarqPrice";
import AssetzMarqMasterPlan from "./AssetzMarqMasterPlan";
// import OtherProjectsAssetzMarq from "./OtherProjectsAssetzMarq";

const AssetzMarq = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Assetz Marq 3.0| 3BHK | 4BHK Ultra Modern Apartments</title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/aspen-greens" />
        <meta
          name="description"
          content="Assetz Marq a Luxurious 3 & 4BHK with private garden area and covered space to park 2 cars comfortably built in 22 Acres."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <AssetzMarqSlider />
      <Container fluid>
        <Row>
          <Col md={9} className="bg-light">
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      Project Highlights
                    </h2>
                    <span className="bg-danger position-absolute start-50 span-line"></span>
                    <Table className="table table-bordered align-middle">
                      <tbody>
                        <tr>
                          <th>RERA No</th>
                          <td>PR/210928/004316</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>22 Acres</td>
                        </tr>
                        <tr>
                          <th>Towers</th>
                          <td>2</td>
                        </tr>
                        <tr>
                          <th>Floors</th>
                          <td>B + Ground + 29</td>
                        </tr>
                        <tr>
                          <th>No. of Rooms</th>
                          <td>3 & 4BHK</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-2 py-md-2">
              <Container fluid className="ps-0 pe-0">
                <Row>
                <h2 className="py-2 text-center text-primary fs-4">
                       About ASSETZ MARQ 3.0
                    </h2>
                  <Col md={6}>
                    <ul>
                      <li>Constructed by Shapoorji & Pallonji – Who has 150 Years of Experience in Construction Sector – So you are sure of the Quality of your Dream Home.</li>
                      <li>Highest Carpet Area in Bangalore – 78%.</li>
                      <li>Main Road Development, Marq has well connectivity.</li>
                      <li>In-House School & Retails for a Hassle free Life.</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul>
                    <li>Walkin Wardrobe & Tucked in Wardrobe for better space</li>
                    <li>6 Acres of Park</li>
                    <li>80% Open Space</li>
                    <li>30 % Green Space</li>
                    </ul>
                    </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <AssetzMarqMasterPlan />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Assetz Marq Amenities
                  </h2>
                  <Col md={3} xs={6}>
                    <h3>Sports</h3>
                    <ul>
                      <li>Badminton courts</li>
                      <li>Amphitheatre</li>
                      <li>Squash court</li>
                      <li>Indoor gymnasium</li>
                      <li>Table tennis</li>
                      <li>Basketball court</li>
                      <li>Pool tables</li>
                      <li>Billiards table</li>
                      <li>Tennis court</li>
                      <li>Skating rink</li>
                      <li>Volleyball court</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <h3>Others</h3>
                    <ul>
                      <li>Creche</li>
                      <li>Kids’ play area</li>
                      <li>Linear park</li>
                      <li>Party halls</li>
                      <li>Party lawn</li>
                      <li>Pet park</li>
                      <li>Amphitheatre</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <h3>Health</h3>
                    <ul>
                      <li>Party ZoneIndoor gymnasium</li>
                      <li>Outdoor gym</li>
                      <li>Jogging track</li>
                      <li>Aerobics stud</li>
                      <li>Steam & changing rooms</li>
                      <li>Regular swimming pools & kids’ pool</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <AssetzMarqPrice />
                  <Info />
                  <VirtualTour />
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      {/* <OtherProjectsAssetzMarq /> */}
      {/* <About /> */}
      <FixedIcons />
    </div>
  );
};

export default AssetzMarq;
