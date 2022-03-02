import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
// import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
// import VirtualTour from "../Includes/VirtualTour";
// import OtherProjectsAtmosAura from "./OtherProjectsAtmosAura";
import { Helmet } from "react-helmet";
import AtmosAuraSlider from "./AtmosAuraSlider";
import AtmosAuraPrice from "./AtmosAuraPrice";
import AtmosAuraMasterPlanImages from "./AtmosAuraMasterPlanImages";

const AtmosAura = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Assetz Atmos & Aura | Luxury Plots</title>
        <link
          rel="canonical"
          href="https://theprestigecitysarjapur.com/projects/eden-park"
        />
        <meta
          name="description"
          content="Assetz Atmos & Aura is one of the Luxury 244 Plots in 15.6 acres of land."
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
      <AtmosAuraSlider />
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
                          <td>PR/211008/004353</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>15.6 Acres</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>244 Plots</td>
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
                      About Assetz Atmos & Aura
                    </h2>
                    <p>
                      This development draws inspiration from the ancient
                      Japanese concept - Ikigai, which means ‘Reason for being.’
                      The idea of Ikigai is to elucidate the purpose of life;
                      The reason we wake up to usher in a new day. It combines
                      four elements - what you love, what you are good at, what
                      the world needs, and what you can be paid for, to arrive
                      at the innate purpose present in us all. A purpose that
                      some have discovered and some are yet to. we provide
                      spaces designed keeping in mind this ideology, where each
                      individual can live out their life’s purpose and discover
                      their true self.
                    </p>
                    <p>
                      The residents can indulge in an array of lifestyle and
                      fitness amenities - be it a quick lap in the pool, a
                      healthy game of tennis, or a relaxing yoga session to help
                      unwind. There’s something for everyone here.
                    </p>
                    <p>
                      Our intention is to promote a greener way of life, one
                      that encourages harmony between man and earth.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <AtmosAuraMasterPlanImages />

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Assetz Atmos & Aura - Amenities
                  </h2>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Board Game Room</li>
                      <li>Table Tennis room</li>
                      <li>Open Yoga Terrace</li>
                      <li>Gymanasium</li>
                      <li>Pool Table Room</li>
                      <li>Barbeque Counter</li>
                      <li>Children's Play Area - 2</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Children's Play Area - 2</li>
                      <li>Multipurpose Court</li>
                      <li>Tennis court</li>
                      <li>Pool deck</li>
                      <li>Organic farm</li>
                      <li>Party Hall With Pantry</li>
                      <li>Farmers’ market</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <AtmosAuraPrice />
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
      {/* <OtherProjectsAtmosAura /> */}
      {/* <About /> */}
      <FixedIcons />
    </div>
  );
};

export default AtmosAura;
