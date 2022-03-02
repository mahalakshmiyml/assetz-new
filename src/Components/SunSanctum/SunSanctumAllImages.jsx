import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import MasterPlan from "../../images/sun-sanctum/floor-paln/master-plan.png"
import Image1 from "../../images/sun-sanctum/floor-paln/2bhk-unit-d2.png";
import Image2 from "../../images/sun-sanctum/floor-paln/2bhk-unit-m1.png";
import Image3 from "../../images/sun-sanctum/floor-paln/3bhk-2t.png";
import Image4 from "../../images/sun-sanctum/floor-paln/3bhk-3t.png";
import Image5 from "../../images/sun-sanctum/floor-paln/3bhk-3t-unit-1.png";
import Image6 from "../../images/sun-sanctum/floor-paln/3bhk-3t-unit-d1.png";

const SunSanctumAllImages = () => {
  const images = [
    { id: 1, imgName: MasterPlan, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image1, alt: "", tag: "2BHK - Unit D2" },
    { id: 3, imgName: Image2, alt: "", tag: "2BHK - Utnit M1" },
    { id: 4, imgName: Image3, alt: "", tag: "3BHK - 2T" },
    { id: 5, imgName: Image4, alt: "", tag: "3BHK - 3T" },
    { id: 6, imgName: Image5, alt: "", tag: "3BHK - 3T Unit 1" },
    { id: 7, imgName: Image6, alt: "", tag: "3BHK - 3T Unit D1" },
  ];

  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={4} xs={6} sm={6} key={item.id}>
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

export default SunSanctumAllImages;
