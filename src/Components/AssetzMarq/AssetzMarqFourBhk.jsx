
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/floor-plans/floor-plan-1.png";
import Image2 from "../../images/floor-plans/floor-plan-2.png";
import Image3 from "../../images/floor-plans/floor-plan-3.png";
import Image4 from "../../images/floor-plans/floor-plan-4.png";

const AssetzMarqFourBhk = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "Floor Plan - 1" },
    { id: 2, imgName: Image2, alt: "", tag: "Floor Plan - 2" },
    { id: 3, imgName: Image3, alt: "", tag: "Floor Plan - 3" },
    { id: 4, imgName: Image4, alt: "", tag: "Floor Plan - 4" },
  ];

  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {ThreeBHKImages.map((item) => (
                <Col md={3} xs={6} sm={6} key={item.id}>
                  <div className="m-1 text-center border border-dark p-1 rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <h6 className="text-center"> {item.tag} </h6>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default AssetzMarqFourBhk;
