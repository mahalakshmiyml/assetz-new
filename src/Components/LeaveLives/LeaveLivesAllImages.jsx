import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/leaves-lives/floor-plan/master-plan.png";
import Image2 from "../../images/leaves-lives/location.png";
import Image3 from "../../images/leaves-lives/floor-plan/3bhk-type-c.png";
import Image4 from "../../images/leaves-lives/floor-plan/3bhk-type-f.png";
import Image5 from "../../images/leaves-lives/floor-plan/4bhk-type-a.png";
import Image6 from "../../images/leaves-lives/floor-plan/4bhk-type-b.png";
import Image7 from "../../images/leaves-lives/floor-plan/4bhk-type-d.png";
import Image8 from "../../images/leaves-lives/floor-plan/4bhk-type-e.png";

const LeaveLivesAllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Location" },
    { id: 3, imgName: Image3, alt: "", tag: "3BHK Type C" },
    { id: 4, imgName: Image4, alt: "", tag: "3BHK Type F" },
    { id: 5, imgName: Image5, alt: "", tag: "4BHK Type A" },
    { id: 6, imgName: Image6, alt: "", tag: "4BHK Type B" },
    { id: 7, imgName: Image7, alt: "", tag: "4BHK Type D" },
    { id: 8, imgName: Image8, alt: "", tag: "4BHK Type E" },
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

export default LeaveLivesAllImages;
