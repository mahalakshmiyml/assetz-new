import React from "react";
import {
  
  Button,
  Card,
  Col,
  Container,
  Row,
  
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import image1 from "../../images/63-east/slider/image-2.png"
import image2 from "../../images/slider/avalon-park/avalon-park-1.png"
import image3 from "../../images/atmos-aura/slider/image-4.png"
import image4 from "../../images/earth-essence/slider/image-1.png"
import image5 from "../../images/leaves-lives/slider/image-6.png"
import image6 from "../../images/soul-soil/slider/image-3.png"
import image7 from "../../images/sun-sanctum/slider/image-4.png"
import image8 from "../../images/slider/eden-park/eden-park-1.png"


const Projects = () => {
  const projects = [{ 
    id: 1, 
    title: "Assetz 63 East",
    description: "2 & 3BHK Appartments",
    imageurl: image1,
    link: "/projects/sixty-three-east",

},
{ id: 2, 
    title: "Assetz Marq 3.0",
    description: "3 & 4BHK Appartments",
    imageurl: image2,
    link: "/projects/assetz-marq",
},
{ id: 3, 
    title: "Assetz Atmos & Aura",
    description: "244 Luxury Plots",
    imageurl: image3,
    link: "/projects/atmos-aura",
},
{ id: 4, 
    title: "Assetz Earth & Essence",
    description: "Rowhouses & Plots",
    imageurl: image4,
    link: "/projects/earth-essence",
},
{ id: 5, 
    title: "Assetz Leaves & Lives",
    description: "4BHK RowHouses",
    imageurl: image5,
    link: "/projects/leave-lives",
},

{ id: 6, 
  title: "Assetz Soul & Soil",
  description: "3 & 4BHK Apartments",
  imageurl: image6,
  link: "/projects/soul-soil",
},
{ id: 7, 
  title: "Assetz Sun & Sanctum",
  description: "2 & 3BHK Apartments",
  imageurl: image7,
  link: "/projects/sun-sanctum",
},
{ id: 8, 
  title: "Assetz The Downtown Neighbourhood",
  description: "3 & 4BHK Apartments",
  imageurl: image8,
  link: "/projects/downtown",
},


];
  return (
    <div className="bg-light py-3 py-md-5" id="projects">
      <Container fluid className="ps-0 pe-0">
        <Row className="justify-content-center g-3">
            <h2 className="py-3 text-primary text-center fs-3">Assetz Projects</h2> 
          {projects.map((project) => (
            <Col md={6} key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageurl} className="position-relative" />
                  {/* <h6 className="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2 pill-custom">{project.status}</h6> */}
                <Card.Body className="text-center">
                  <h2 className="fs-4">{project.title}</h2>
                  <h3 className="fs-5">{project.description}</h3>
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

export default Projects;
