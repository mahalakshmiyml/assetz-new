import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
// import About from '../Includes/AboutDeveloper'
import Contact from '../Includes/Contact'
import FixedIcons from '../Includes/FixedIcons'
import Info from '../Includes/Info'
import VirtualTour from '../Includes/VirtualTour'
import {Helmet} from 'react-helmet'
import SunSanctumSlider from './SunSanctumSlider'
import SunSanctumMasterPlan from './SunSanctumMasterPlan'
import SunSanctumPrice from './SunSanctumPrice'
import SunSanctumModal from './SunSanctumModal'
// import OtherProjectsSunSanctum from './OtherProjectsSunSanctum'

const SunSanctum = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sun & Sanctum | Assetz | 2BHK | 3BHK Carbon Healing Homes</title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/eden-park" />
        <meta
          name="description"
          content="Assetz Sun & Sanctum is one of the 2 & 3BHK Carbon Healing omes in 4 acres of land."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <SunSanctumSlider />
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
                          <td>	PR/210928/004316</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>4 Acres</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>321 units</td>
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
                      About Assetz Sun & Sanctum
                    </h2>
                    <p>Begin a new chapter of your life in a home that promises everything and more. Located in a thriving neighborhood, Sun & Sanctum is for those who want to be in the thick of it all but still away from the hustle and bustle. </p>
                    <p>Assetz Sun & Sanctum apartments are one-of-a-kind. If you are looking to buy property in Bangalore, these carbon healing homes are sure to sweep you off your feet. Being one of the best builders in Bangalore, Assetz Property Group has built Sun and Sanctum in a thriving neighbourhood but allows the residents to escape from the hustle and bustle of the city. Assetz Sun and Sanctum is spread across a whopping 4-acre land with 69% open space. Each 2BHK and 3BHK is abundant with natural lighting and proper ventilation. Security is given the highest priority with 24-hour personnel and a security kiosk to make note of visitors.</p>
                    <p>These luxury apartments in Bangalore are equipped with multi-functional decks that can be personalized for your needs. The beautiful balcony in each apartment is perfect for taking some time away from your busy schedule and enjoying what nature has to offer. Assetz Sun and Sanctum has bedrooms filled with natural light through sliding doors and each bedroom comes with a wide closet, large windows and a spacious bathroom. The bathrooms are equipped with high-quality fittings for your comfort. The kitchen is huge with a service area and shelves for safe storage of utensils and other equipment. Sun & Sanctum is one of the top luxury apartments in Bangalore that is efficiently planned and executed, keeping in mind your comfort and experience at home.</p>
                    <p>What makes Assetz Property Group one of the best builders in Bangalore is their concern for the well-being of both the people and the environment. Assetz Sun and Sanctum apartments are built for mindfulness and consciousness. There are many environment-friendly facilities such as sewage treatment plants, water treatment plants, energy-efficient lighting, recycled water for landscape maintenance, rainwater harvesting, and more. So if you’re looking for a house in North Bangalore that is built to be eco-friendly, then this is the place for you.</p>
                    <p>From an amphitheatre, yoga space and play area outdoors, to a gym, creative room and multipurpose hall indoors, there’s a range of amenities to ensure that you stay fit, creative and energised in your own space! Built to be an ultra luxury yet environment conscious apartment in Bangalore, Assetz Sun and Sanctum is everything you would look for in a home. It is in an advantageous location, decked with amenities for all age groups and is built by one of the best builders in Bangalore. It is a lucrative investment that will surely be the key to your dream home.</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <SunSanctumMasterPlan />
            <Container>
            <Row>
                  <Col md={12} className="text-center">
                  <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Enquire Now
                    </Button>
                  </Col>
                </Row>
            </Container>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Sun & Sanctum - Amenities
                  </h2>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Swimming Pool</li>
                      <li>Indoor Gymanasium</li>
                      <li>Outdoor Yoga Area</li>
                      <li>Creative Room</li>
                      <li>Mult-Utility Court</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Pool Table</li>
                      <li>Fitness Studio</li>
                      <li>Kid's Play Area</li>
                      <li>Steam & Changing Room</li>
                      <li>Amphitheatre</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Indoor Badminton Court</li>
                      <li>Table Tennis</li>
                      <li>Multi-Puropose Hall</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                  <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Enquire Now
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <SunSanctumPrice />
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
      {/* <OtherProjectsSunSanctum /> */}
      {/* <About /> */}
      <FixedIcons />
      <SunSanctumModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  )
}

export default SunSanctum