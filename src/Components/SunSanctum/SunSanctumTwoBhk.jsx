
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/sun-sanctum/floor-paln/3bhk-2t.png";
import Image2 from "../../images/sun-sanctum/floor-paln/3bhk-3t.png";
import Image3 from "../../images/sun-sanctum/floor-paln/3bhk-3t-unit-1.png";
import Image4 from "../../images/sun-sanctum/floor-paln/3bhk-3t-unit-d1.png";

const SunSanctumTwoBhk = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "3BHK - 2T" },
    { id: 2, imgName: Image2, alt: "", tag: "3BHK - 3T" },
    { id: 3, imgName: Image3, alt: "", tag: "3BHK - 3T Unit 1" },
    { id: 4, imgName: Image4, alt: "", tag: "3BHK - 3T Unit D1" },
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

export default SunSanctumTwoBhk;
