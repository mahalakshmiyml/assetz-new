import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import image1 from "../../images/slider/meridian/image-1.png"
import image2 from "../../images/slider/eden-park/eden-park-2.png"
import image4 from "../../images/slider/aspen-greens/aspen-greens-2.png"
import image5 from "../../images/slider/the-great-acres/the-great-acres-1.png"


const OtherProjectsSixtyThreeEast = () => {
  const projects = [{ 
    id: 1, 
    title: "Prestige city - Meridian Park",
    description: "3 Bed Appartments",
    imageurl: image1,
    link: "/projects/meridian-park",
    status:"New Launch"

},
{ id: 2, 
    title: "Prestige city - Eden Park",
    description: "1/2 Bed Appartments",
    imageurl: image2,
    link: "/projects/eden-park",
    status:"New Launch"
},
{ id: 4, 
    title: "Prestige city - Aspen Greens",
    description: "4BHK Villas ",
    imageurl: image4,
    link: "/projects/aspen-greens",
    status:"New Launch"
},
{ id: 5, 
    title: "Prestige city - The Great Acres",
    description: "Plots",
    imageurl: image5,
    link: "/projects/great-acres",
    status:"New Launch"
},


];
  return (
    <div className="bg-light py-3 py-md-5" id="projects">
      <Container fluid>
        <Row className="justify-content-center g-3">
            <h2 className="py-3 text-primary text-center fs-3">Assetz Projects</h2> 
          {projects.map((project) => (
            <Col md={3} key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageurl} className="position-relative" />
                  <h6 className="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2 pill-custom">{project.status}</h6>
                <Card.Body className="text-center">
                  <h3 className="fs-5">{project.title}</h3>
                  <h4 className="fs-6">{project.description}</h4>
                  <div className="text-center">
                  <Button
                    variant="primary"
                    as={Link}
                    to={project.link}
                    className=""
                  >
                    Read More
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OtherProjectsSixtyThreeEast;
