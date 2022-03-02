import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Row,
  Col,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-1.png";
// import image1 from "../../images/slider/meridian/image-3.png";
// import image2 from "../../images/slider/eden-park/eden-park-1.png";
// import image3 from "../../images/slider/avalon-park/avalon-park-2.png";
// import image4 from "../../images/slider/aspen-greens/aspen-greens-3.png";
// import image5 from "../../images/slider/the-great-acres/the-great-acres-4.png";
import Modals from "./Modals";

const TopHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top" id="navbar">
      <div id="top-header" className="p-2 p-md-1 bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={4}
              className="d-none d-md-block text-light fw-bold align-self-center"
            >
              <i className="fa fa-map-marker-alt text-white"></i> Bangalore
            </Col>
            <Col md={4} xs={5} className="align-self-center">
              <div className="text-center">
                <Button
                  variant="success"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button text-light"
                >
                  <i className="fa fa-spinner fa-flip fa-download text-light"></i>{" "}
                  Brochure
                </Button>
              </div>
            </Col>
            <Col md={4} xs={7} className="align-self-center">
              <div className="text-center">
                <a
                  as={Link}
                  to="tel:+919036611010"
                  className="anchor p-0 btn btn-success fw-bold text-light m-1"
                >
                  <i className="fa fa-phone-volume"></i> +91-90366 11010
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm bg-white text-primary"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} className="img-fluid" alt="" />
          </Navbar.Brand>
          {/* <Nav.Link
            className="btn-sm btn-danger text-white d-block d-md-none px-3 border-0"
            as={Link} to ="tel:080959 99000 "
          >
            <i className="fa fa-phone-volume"></i> 80959 99000
          </Nav.Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto text-primary">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#overview">
                Overview
              </Nav.Link>
              <NavDropdown
                title="Assetz New Projects"
                id="collasible-nav-dropdown1"
                className="text-primary"
              >
                <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/sixty-three-east"
                >
                  Assetz 63<sup>0</sup> East
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/assetz-marq"
                >
                  Assetz Marq 3.0
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/atmos-aura"
                >
                  Assetz Atmos & Aura
                </NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/earth-essence"
                >
                  Assetz Earth & Essence
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/leave-lives"
                >
                  Assetz Leaves & Lives
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/soul-soil"
                >
                  Assetz Soul & Soil
                </NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/sun-sanctum"
                >
                  Assetz Sun & Sanctum
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="text-primary"
                  as={Link}
                  to="/projects/downtown"
                >
                  Assetz The Downtown Neighbourhood
                </NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown
                className="menu-area d-none"
                title="Assetz"
                id="collasible-nav-dropdown"
              >
                <Container>
                  <Row className="text-center">
                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/meridian-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Meridian Park
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/meridian-park"
                          >
                            <div className="">
                              <Image
                                className="img-fluid"
                                alt=""
                                src={image1}
                              />
                              <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                                New Launch
                              </span>
                              <p className="text-dark m-0 py-2 text-primary text-center">
                                Excl. 3 Bed Apartments
                              </p>
                            </div>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/eden-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Eden Park
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/eden-park"
                          >
                            <Image className="img-fluid" alt="" src={image2} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              New Launch
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              1BHK & 2BHK Bed Apartments
                            </p>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/avalon-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Avalon Park
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/avalon-park"
                          >
                            <Image className="img-fluid" alt="" src={image3} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              Sold Out
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              3BHK & 4BHK Apartments
                            </p>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/aspen-greens"
                        className="fs-5 fw-bold text-primary"
                      >
                        Aspen Greens
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/aspen-greens"
                          >
                            <Image className="img-fluid" alt="" src={image4} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              New Launch
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              4BHK Villas
                            </p>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link} to ="/projects/great-acres"
                        className="fs-5 fw-bold text-primary"
                      >
                        Great Acres
                        <a
                          className="text-decoration-none"
                          as={Link}
                          to="/projects/great-acres"
                        >
                          <div className="position-relative">
                            <Image className="img-fluid" alt="" src={image5} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              New Launch
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              Plots
                            </p>
                          </div>
                        </a>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown> */}

              <Nav.Link as={Link} to="#contact">
                Contact Us
              </Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link
                className="btn-sm btn-danger text-white"
                as={Link} to ="tel:080959 99000"
              >
                <i className="fa fa-phone-volume"></i> + 91 80959 99000
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default TopHeader;
