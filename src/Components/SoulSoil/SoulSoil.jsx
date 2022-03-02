import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
// import About from '../Includes/AboutDeveloper'
import Contact from '../Includes/Contact'
import FixedIcons from '../Includes/FixedIcons'
import Info from '../Includes/Info'
// import VirtualTour from '../Includes/VirtualTour'
import {Helmet} from 'react-helmet'
// import OtherProjectsSoulSoil from './OtherProjectsSoulSoil'
import SoulSoilPrice from './SoulSoilPrice'
import SoulSoilMasterPlan from './SoulSoilMasterPlan'
import SoulSoilSlider from './SoulSoilSlider'

const SoulSoil = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soul & Soil | Assetz | 2BHK | 3BHK Apartments</title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/eden-park" />
        <meta
          name="description"
          content="Assetz Soul & Soil is one of the 124 Row Houses, 2 & 3 BHK Luxury Apartments in 7 acres of land."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <SoulSoilSlider />
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
                          <td>7 Acres</td>
                        </tr>
                        <tr>
                          <th>Types</th>
                          <td>124 Row Houses</td>
                        </tr>
                        <tr>
                          <th>Unit Variants</th>
                          <td>98 Row Houses, 18 Villas, 12 Apartments</td>
                        </tr>
                        <tr>
                          <th>No. of Rooms</th>
                          <td>2 & 3 BHK</td>
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
                      About Assetz Soul & Soil
                    </h2>
                    <p>
                    Presenting Soul & Soil — A space that will take you back to the simplicity and joy of a time long forgotten. A childhood that was filled with barefeet discoveries, nourishing company and the goodness of the earth.
                    </p>
                    <p>Explore a return to goodness in a space that offers an organic, close-to-nature way of living. At Soul & Soil, experiences are key. Whether it's being with nature, the community or a return to a simpler, more connected way of living. </p>
                    <p>Three-and-four-bedroom row houses that are created for a simpler, yet more luxurious life, with skylights letting in the healing rays of the sun and gardens bursting with soothing greens. And, for those looking for accessible luxury with all the comforts of an exclusive community, there are well planned one-bedroom apartments. All this set in 7 cosy acres that are abundant in nature and good energies.</p>
                    <p>Soul & Soil gives the urban heart who yearns for a touch of the earth an organic, close-to-nature way of living. Situated in North Bangalore (off the Hennur-Bagalur Road), Soul & Soil is a neighbourhood that is well-planned, fast-growing, and a prime investment area. Here, togetherness is key. Whether it’s being with nature, the community or a simpler, more connected way of living.</p>
                    <p>Attention to the finer details of every home at Soul & Soil and being conscious of the environment we live in is what makes life here an experience that is modern, yet close to nature.</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <SoulSoilMasterPlan />

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Assetz Soul & Soil - Amenities
                  </h2>
                  <p>Soul & Soil offers a variety of amenities that are all created to enhance the core philosophy of the space - return to happiness.</p>
                  <p>Every step at Soul & Soil connects you to the earth in various ways. Be it through a closer bond with your family and community, or through the variety of amenities we offer you.</p>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Half Basketball Court</li>
                      <li>Interactive Play Area</li>
                      <li>Beach Volleyball Court</li>
                      <li>Tot Lot</li>
                      <li>Focal Pavilion</li>
                      <li>Rooftop Swimming Pool & Toddlers Pool</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Gymanasium</li>
                      <li>Aerobics & Yoga</li>
                      <li>Steam Room</li>
                      <li>Indoor Badminton Court</li>
                      <li>Wellness Garden</li>
                      <li>Multipurpose hall</li>
                    </ul>
                  </Col><Col md={3} xs={6}>
                    <ul>
                      <li>Space for Pool/ Cards/ Carom & Other Indoor games</li>
                      <li>Community Table & Pantry Facility</li>
                      <li>Party Lawn</li>
                      <li>Seating Alcove</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <SoulSoilPrice />
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
      {/* <OtherProjectsSoulSoil /> */}
      {/* <About /> */}
      <FixedIcons />
    </div>
  )
}

export default SoulSoil