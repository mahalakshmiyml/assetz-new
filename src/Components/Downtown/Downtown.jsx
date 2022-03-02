import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
// import About from '../Includes/AboutDeveloper'
import Contact from '../Includes/Contact'
import FixedIcons from '../Includes/FixedIcons'
import Info from '../Includes/Info'
// import VirtualTour from '../Includes/VirtualTour'
// import OtherProjectsDowntown from './OtherProjectsDowntown'
import {Helmet} from 'react-helmet'
import DowntownSlider from './DowntownSlider'
import DowntownMasterPlan from './DowntownMasterPlan'
import DowntownPrice from './DowntownPrice'

const Downtown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Downtown The Neighbourhood | Assetz| 3BHK | 4BHK Apartments</title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/eden-park" />
        <meta
          name="description"
          content="Assetz Downtown The Neighbourhood is one of the blocks of the 234 units of 2 Phases in 4.5 acres of land. This township consists of 3BHK and 4BHK Apartments."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <DowntownSlider />
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
                          <td>4.5 Acres</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>234 units</td>
                        </tr>
                        <tr>
                          <th>No. of Rooms</th>
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
                      About Assetz The Downtown Neighbourhood
                    </h2>
                    <p>Experience the buzz, the energy, the verve and the joy that make life worth living through sleek restaurants, upscale boutiques, and charming cafés – all just 
outside your door. </p>
                    <p>
                    Each home comes with great rooms with larger-than-life windows, seamlessly connected to private decks, tastefully designed ancillary spaces, and more.
                    </p>
                    <p>These homes reflect modern history, which is appropriate because they’re designed for people who will make history if they haven’t already.</p>
                    <p>A single, large, open plan living space, flooded with light that accommodates the living room, dining and kitchen, each flowing seamlessly one into the other.</p>
                    <p>Decks that extend out from the main living areas offering a space for the ultimate form of leisure and relaxation.</p>
                    </Col>
                </Row>
              </Container>
            </div>

            <DowntownMasterPlan />

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    The Downtown Neighbourhood - Amenities
                  </h2>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Gymnasium</li>
                      <li>Fitness studio</li>
                      <li>Indoor badminton</li>
                      <li>Provision for creche</li>
                      <li>Indoor games</li>
                      <li>Multipurpose hall</li>
                      <li>Spa</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Swimming pools: Lap/ Leisure pool Kids’ pool</li>
                      <li>Skating rink</li>
                      <li>Multiplay court</li>
                      <li>Half basketball court</li>
                      <li>Children’s play area</li>
                      <li>Outdoor gym</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <DowntownPrice />
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
      {/* <OtherProjectsDowntown /> */}
      {/* <About /> */}
      <FixedIcons />
    </div>
  )
}

export default Downtown