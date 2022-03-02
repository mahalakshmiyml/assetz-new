
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/leaves-lives/floor-plan/3bhk-type-c.png";
import Image2 from "../../images/leaves-lives/floor-plan/3bhk-type-f.png";
import Image3 from "../../images/leaves-lives/floor-plan/4bhk-type-a.png";
import Image4 from "../../images/leaves-lives/floor-plan/4bhk-type-b.png";
import Image5 from "../../images/leaves-lives/floor-plan/4bhk-type-d.png";
import Image6 from "../../images/leaves-lives/floor-plan/4bhk-type-e.png";

const LeaveLivesFloorplan = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "3BHK Type C" },
    { id: 2, imgName: Image2, alt: "", tag: "3bhk Type F" },
    { id: 3, imgName: Image3, alt: "", tag: "4BHK Type A" },
    { id: 4, imgName: Image4, alt: "", tag: "4BHK Type B" },
    { id: 5, imgName: Image5, alt: "", tag: "4BHK Type D" },
    { id: 6, imgName: Image6, alt: "", tag: "4BHK Type E" },
  ];

  return (
    <div>
      <Container>
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

export default LeaveLivesFloorplan;
