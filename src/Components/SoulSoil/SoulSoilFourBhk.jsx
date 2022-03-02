
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/soul-soil/floor-plan/4bhk-first-floor.png";
import Image2 from "../../images/soul-soil/floor-plan/4bhk-ground.png";
import Image3 from "../../images/soul-soil/floor-plan/4bhk-second-floor.png";

const SoulSoilFourBhk = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "4 BHK - 1st Floor" },
    { id: 2, imgName: Image2, alt: "", tag: "4 BHK - Ground Floor" },
    { id: 3, imgName: Image3, alt: "", tag: "4 BHK - 2nd Floor" },
  ];

  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {ThreeBHKImages.map((item) => (
                <Col md={3} key={item.id}>
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

export default SoulSoilFourBhk;
