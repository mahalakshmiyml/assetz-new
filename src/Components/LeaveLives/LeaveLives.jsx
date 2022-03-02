import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
// import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
// import VirtualTour from "../Includes/VirtualTour";
import LeaveLivesMasterPlan from "./LeaveLivesMasterPlan";
import LeaveLivesSlider from "./LeaveLivesSlider";
import { Helmet } from "react-helmet";
import LeaveLivesPrice from "./LeaveLivesPrice";
// import OtherProjectsLeaveLives from "./OtherProjectsLeaveLives";

const LeaveLives = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Leaves & Lives| Assetz | 3BHK | 4BHK | RowHouses </title>
        <link
          rel="canonical"
          href="https://theprestigecitysarjapur.com/projects/meridian-park"
        />
        <meta
          name="description"
          content="Assetz Leaves & Lives is a spacious high-rise RowHouses located within the upcoming  township, which comprises Villa, 3 & 4BHK Apartments."
          name="Robots"
          content="INDEX,FOLLOW"
          name="allow-search"
          content="yes"
          name="search engines"
          content="ALL"
          name="expires"
          content="Never"
        />
      </Helmet>
      <LeaveLivesSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
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
                          <td>7-Acres</td>
                        </tr>
                        <tr>
                          <th> Towers</th>
                          <td>6 types(A to F)</td>
                        </tr>
                        <tr>
                          <th>Unit Plans</th>
                          <td> 2 Ground Floors + First Floor + Terrace</td>
                        </tr>
                        <tr>
                          <th>Number of Rooms</th>
                          <td>3 & 4 BHK</td>
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
                      About Assetz Leaves & Lives
                    </h2>
                    <p>
                      Nature is no longer a place to get away to. It is home. -
                      79 luxury row houses nestled among 150 trees, part of a
                      26-acre sustainable township. Wind down, unplug and
                      recharge to the tune of nature’s songs where the city
                      meets lush greenery to set a tranquil scene for you.
                    </p>
                    <p>
                      Life in the Rhythm of Nature - Only the best will do for
                      those who appreciate the finer things in life. Chic yoga
                      decks, sprawling basketball & volleyball courts, lush
                      organic farming spaces and a whole lot more. All
                      connecting you back to the pulsing heart of nature.
                    </p>
                    <p>
                      Communing with Nature - Reconnect with nature while living
                      right in the city. In Sarjapur, the new neighbourhood that
                      has got the city and its people buzzing. After all, it is
                      about having the best of both worlds.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div id="master-plan">
              <LeaveLivesMasterPlan />
            </div>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Assetz Leaves & Lives - Amenities
                  </h2>
                  <p>Designed to help you live your best life, the range of social and fitness–based amenities available for residents is extensive. Large-scale amenities such as the basketball court, tennis court, the skating rink and more can be readily accessed.</p>
                  <h3>Fitness</h3>
                  <Col md={4} xs={6}>
                    
                    <ul>
                      <li>3 Badminton Courts</li>
                      <li>Squash Court</li>
                      <li>2 Gymnasiums</li>
                      <li>2 Table Tennis Courts</li>
                      <li>Volleyball Court</li>
                      <li>Skating Rink</li>
                    </ul>
                  </Col>
                  <Col md={4} xs={6}>
                    <ul>
                      <li>Basketball Court</li>
                      <li>Yoga Deck</li>
                      <li>2 Pool Tables</li>
                      <li>Cycling + Walking Path</li>
                      <li>Futsal Court</li>
                    </ul>
                  </Col>
                  <Col md={4} xs={12}>
                    <ul>
                      <li>5 Swimming Pools (Includes 2 Kids' Pools)</li>
                      <li>Aerobics Studio</li>
                      <li>2 Billiards</li>
                      <li>Steam & Changing Rooms</li>
                      <li>Tennis Court</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                <h3>Others</h3>
                <Col md={4} xs={6}>
                    
                    <ul>
                      <li>Creche </li>
                      <li>Bus Bay</li>
                      <li>Kids' Play Area</li>
                      <li>Amphitheatre</li>
                      <li>Work Space (Indoor & Outdoor)</li>
                      <li>Provision for Retail| ATM | Laundromat | Store, etc.</li>
                    </ul>
                  </Col>
                  <Col md={4} xs={6}>
                    <ul>
                      <li>Party Hall with Pantry</li>
                      <li>Provision for Salon & Spa</li>
                      <li>Terrace With Seating & Provision For Barbeque</li>
                      <li>Dedicated Organic Farming Space</li>
                      <li>Multi-Utility Furnished Space Grocery store | Board Games | Library</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <LeaveLivesPrice />
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
      {/* <OtherProjectsLeaveLives /> */}
      {/* <About /> */}
      <FixedIcons />
    </div>
  );
};

export default LeaveLives;
