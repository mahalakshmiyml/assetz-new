import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
// import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
// import Info from "../Includes/Info";
// import VirtualTour from "../Includes/VirtualTour";
import { Helmet } from "react-helmet";
// import OtherProjectsEarthEssence from "./OtherProjectsEarthEssence";
import EarthEssencePrice from "./EarthEssencePrice";
import EarthEssenceMasterPlan from "./EarthEssenceMasterPlan";
import EarthEssenceSlider from "./EarthEssenceSlider";
import Info from "../Includes/Info";
import EarthEssenceModal from "./EarthEssenceModal";

const EarthEssence = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Assetz Earth & Essence | Luxury Plots | Row Houses</title>
        <link
          rel="canonical"
          href="https://theprestigecitysarjapur.com/projects/great-acres"
        />
        <meta
          name="description"
          content="Assetz Earth & Essence is a Residential Plots are Developed in 13,000 sqft with 90+ Plots."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <EarthEssenceSlider />
      <Container fluid className="bg-light">
        <Row>
          <Col md={9}>
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      Assetz Earth & Essence Project Highlights
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
                          <td>13,000 sqft</td>
                        </tr>
                        <tr>
                          <th>Total No. of Plots</th>
                          <td>90+ Luxury Plots</td>
                        </tr>
                        <tr>
                          <th>Rowhouses</th>
                          <td>75 Rowhouses</td>
                        </tr>
                        <tr>
                          <th>Rooms</th>
                          <td>3, 4 & 5BHK</td>
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
                      About Assetz Earth & Essence
                    </h2>
                    <p>A breath of fresh air, waking up to clear sunlight, returning to rustling greenery… just a few of the original elements of happiness, of a life well-lived, surrounded by nature. That is the power of Earth & Essence – introducing homes and lifestyles connected to nature.</p>
                    <p>Imagine the soft warm sunlight, rustling leaves, and gentle breeze. Now imagine that you’re nestled right among it, but in an extraordinary 3 BHK row house in Bangalore. This is your reality when you choose Earth and Essence project’s row houses for sale in North Bangalore. At this nature-inspired project by Assetz Property Group, 25 acres of land is woven by well-planned row houses in international airport road alongside luxury plots, with plenty of open space in between to breathe, move and build a community of people just like you! </p>
                    <p>Each of the row houses and the plotted development is built to help you form connections not only with all the members of the community at The Central Togetherness Space but with yourself as well, in your own personal backyard. These row houses in airport road, Bangalore are in elegant spaces of 3 BHK, with plenty of natural ventilation, alfresco living, and stunning skylights that blankets the multi-floored housing. The 3 BHK housing especially comes with the luxurious experience of a bar lounge, backyard dining, and an elevator-powered home that makes Earth and Essence property one of the most spectacular row house projects in North Bangalore.</p>
                    <p>Similarly, the low-rise plotted development is a blank canvas to building your own 3 BHK row house in Bangalore. These plots are carefully designed to exude luxury, and comfort while keeping environmental conservation at its core. The Earth Club is an arena like no other. It’s not just a social space, but a sanctuary with over 20 amenities to create lasting memories. From infinity pools, trampoline areas, badminton courts, tree houses and organic farms, what you can do in the space is endless and crafted for everyone.</p>
                    <p>The Central Spine containing dialogue nooks, fireplace seating, forest lounge, and a pollinator meadow brings the essence to genuine community building. Investing in this grand project by Assetz Property Group doesn’t just give you a 3 BHK row house in Bangalore, but also a space surrounded by nature that inspires and enriches you. What makes Earth and Essence stand out among the other row house projects in Bangalore is the true harmony between nature and architecture, comfort and class, luxury and community living.</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <EarthEssenceMasterPlan />

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Assetz Earth & Essence Amenities
                  </h2>
                  <Col md={3} xs={6}>
                    <h3>Sports</h3>
                    <ul>
                      <li>Half basketball court</li>
                      <li>Futsal field</li>
                      <li>Community dining</li>
                      <li>Interactive pipe</li>
                      <li>Slide play ground</li>
                      <li>Swings</li>
                      <li>Sand pit</li>
                      <li>Zipline</li>
                      <li>Sprinkler plaza</li>
                      <li>Infinity pool</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <h3>Health</h3>
                    <ul>
                      <li>Trampoline</li>
                      <li>Tree house </li>
                      <li>Tennis court</li>
                      <li>Pool deck</li>
                      <li>Organic farm</li>
                      <li>Farmers’ market</li>
                    </ul>
                  </Col><Col md={3} xs={6}>
                    <h3>Others</h3>
                    <ul>
                      <li>Multipurpose hall +Indoor games</li>
                      <li>Lounge</li>
                      <li>Spa + Changing rooms +Showers + Steam rooms</li>
                      <li>Gym</li>
                      <li>Badminton court</li>
                      <li>Supermarket</li>
                      <li>ATM</li>
                    </ul>
                  </Col>
                </Row>              
                <Row className="justify-content-center">
                  <Col md={12} className="text-center"> 
                  <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Enquire Now
                      </Button> 
                  </Col>
                </Row>
              </Container>
            </div>

            <Container fluid className="ps-0 pe-0 text-center ">
              <Row>
                <EarthEssencePrice />
                
                
                {/* <VirtualTour /> */}
              </Row>
              <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Enquire Now
                      </Button>
            </Container>
            <Container>
            <Row>
              <Col md={12}>
              <Info />
              </Col>
            </Row>
            </Container>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      {/* <OtherProjectsEarthEssence /> */}
      {/* <About /> */}
      <FixedIcons />
      <EarthEssenceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default EarthEssence;
