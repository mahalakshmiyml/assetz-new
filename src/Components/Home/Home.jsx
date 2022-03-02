import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import About from "../Includes/AboutDeveloper";
// import Amenities from "../Includes/Amenities";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import MainSlider from "../Includes/MainSlider";
// import MasterPlan from "../Includes/MasterPlan";
import Modals from "../Includes/Modals";
// import Pricing from "../Includes/Pricing";
import Projects from "../Includes/Projects";
import VirtualTour from "../Includes/VirtualTour";
import { Helmet } from "react-helmet";
import Info from "../Includes/Info";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Assetz | Bangalore</title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/" />
        <meta
          name="description"
          content="The Prestige City or Prestige Smart City is a futuristic residential project by the Prestige Group off Sarjapur Road in Bangalore."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>

      <MainSlider />
      <Container fluid className="ps-0 pe-0 ps-md-4 pe-md-4 bg-light">
        <Row className="ms-0 me-0">
          <Col md={9}>
            <div id="overview">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <div className="p-2">
                      <h1 className="text-center text-primary py-2 pt-md-5 fs-2">
                        {" "}
                        Assetz Homes
                      </h1>
                      <p className="py-3 py-md-2">
                      The Assetz blogs keep you updated on the latest in the industry, along with useful tips and pointers.
                      </p>
                      <p>Founded in 2006, Assetz Property Group is a one of the top real estate property developers in Bangalore.They are front-runner among multinational developers in India with over 10 million square feet under development. Assetz, headquartered in Singapore, is a multi-faceted real estate development and asset management company with four business verticals: Commercial, Residential, Warehousing and Fund Management.</p>
                      <p>'Better Design' underpinned by meticulous research is deeply ingrained in the Assetz narrative, and evident in all their properties in Bangalore. This principle is reflected in every facet of construction - from the master plan, development startegy, architecture, location, property management; down to every hinge, tile and square inch.</p>
                      <p>Asstez established itself as one of the leading names amongst the builders and developers in bangalore. They have built two world-class IT tech parks in Bangalore: Vrindavan Tech Village( now Embassy Tech Village)- India's firt Platinum LEED certified IT SEZ, and Global Technology Park. And, its residential portfolio includes 10 projects in prominent locations across Bangalore. The Assetz Fund Management vertical is a leading performer in the real estate fund management industry generating high alpha returns for its investors compared to its peers.</p>
                      <p>Assetz is a preferred partner pf private equity funds completing more than 13 private equity investments, and delivering nine exits to date. A stellar track record has earned Assetz a reputation for professionlism and for challenging conventions through innovation. The company is on an upward growth trajectory and is one of the fastest growing real estate developers in the country.</p>
                      <div className="text-center">
                        <Button
                          variant="primary"
                          onClick={handleShow}
                          className="my-3"
                        >
                          Contact Us For More Details
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <Projects />

            {/* <MasterPlan /> */}

            {/* <Pricing /> */}

            {/* <Amenities /> */}

            <Info />

            <VirtualTour />
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      {/* <About /> */}

      

      <FixedIcons />
      <Modals
        show={show}
        handleClose={handleClose}
        title="Contact Us For More Details"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default Home;
