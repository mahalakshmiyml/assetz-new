import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
// import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
// import VirtualTour from "../Includes/VirtualTour";
import SixtyThreeEastMasterPlan from "./SixtyThreeEastMasterPlan";
import SixtyThreeEastPrice from "./SixtyThreeEastPrice";
import SixtyThreeEastSlider from "./SixtyThreeEastSlider";
// import OtherProjectsSixtyThreeEast from "./OtherProjectsSixtyThreeEast";
import {Helmet} from "react-helmet";

const SixtyThreeEast = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>63<sup>0</sup>East | Assetz | 3BHK | 4BHK Apartments </title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/avalon-park" />
        <meta
          name="description"
          content="63 East well developed Assetz project in 25 Acres, Homes are built as Tower with 1,2 & 3BHK."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <SixtyThreeEastSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      Assectz 63<sup>0</sup> East Project Highlights
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
                          <td>25-Acre</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>6 Towers & 2250 Units</td>
                        </tr>
                        <tr>
                          <th>No. of Rooms</th>
                          <td>1, 2 & 3BHK</td>
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
                  <Col md={12}>
                    <h2 className="py-2 text-center text-primary fs-3">
                    About Assetz 63<sup>0</sup> East
                    </h2>
                    <p>
                    A residential space designed for a wholesome community lifestyle that includes healthy living and social activities combined with luxury eco friendly homes; caring not just for your family, but also for the environment.
                    </p>
                    <p>Homes at 63˚ East have been efficiently planned & designed to incorporate optimal use of space & hence offers areas that are luxurious and filled with natural light and healthy air circulation. They are also fitted with the finest high quality specifications with international fixtures.</p>
                    <p>At 63° East, we believe in giving you a home that ensures a convenient and luxurious lifestyle through details both within the home and outside it. Each specification and fixture is carefully curated from amongst the finest in international brands.</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div id="master-plan">
              <SixtyThreeEastMasterPlan />
            </div>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-2 py-md-3 fs-3">
                 Assetz 63<sup>0</sup> East Amenities
                  </h2>
                  <p>Go for a jog, a swim, a game of tennis or a calming yoga session. At 63 ˚ East there are a host of over 25 fitness & social amenities to choose from. We follow global standard facilities along with design sensibilities to make sure you wake up to a healthy & fulfilling life. When we say we promise you a full life, we mean it.</p>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Futsal Court</li>
                      <li>5 Swimming Pools</li>
                      <li>Squash Court</li>
                      <li>3 Badminton Courts</li>
                      <li>Yoga Deck</li>
                      <li>Aerobics Studio</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Tennis Court</li>
                      <li>Steam Room & Changing Rooms</li>
                      <li>Pool Tables</li>
                      <li>Volleyball Court</li>
                      <li>Dedicated Walking Path</li>
                      <li>Skating Rink</li>
                    </ul>
                  </Col><Col md={3} xs={6}>
                    <ul>
                      <li>2 Gymanasiums</li>
                      <li>Basketball Court</li>
                      <li>Table Tennis</li>
                      <li>Dedicated Cycing  Path</li>
                      <li>Billiards</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <SixtyThreeEastPrice />
                  <Info />
                  {/* <VirtualTour /> */}
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      {/* <OtherProjectsSixtyThreeEast /> */}
      {/* <About /> */}
      <FixedIcons />
    </div>
  );
};

export default SixtyThreeEast;
