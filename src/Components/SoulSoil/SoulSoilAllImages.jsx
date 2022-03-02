import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import MasterPlan from "../../images/soul-soil/floor-plan/master-plan.png"
import Image1 from "../../images/soul-soil/floor-plan/1bhk.png";
import Image2 from "../../images/soul-soil/floor-plan/3bhk-ground-floor.png";
import Image3 from "../../images/soul-soil/floor-plan/3bhk-second-floor.png";
import Image4 from "../../images/soul-soil/floor-plan/3bk-first-floor.png";
import Image5 from "../../images/soul-soil/floor-plan/4bhk-first-floor.png";
import Image6 from "../../images/soul-soil/floor-plan/4bhk-ground.png";
import Image7 from "../../images/soul-soil/floor-plan/4bhk-second-floor.png";


const SoulSoilAllImages = () => {
  const images = [
    { id: 1, imgName: MasterPlan, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image1, alt: "", tag: "Type A1 - 634Sq.ft" },
    { id: 3, imgName: Image2, alt: "", tag: "Type A2 - 642Sq.ft" },
    { id: 4, imgName: Image3, alt: "", tag: "Type A3 - 643Sq.ft" },
    { id: 5, imgName: Image4, alt: "", tag: "Type A4 - 649Sq.ft" },
    { id: 6, imgName: Image5, alt: "", tag: "Type A5 - 666Sq.ft" },
    { id: 7, imgName: Image6, alt: "", tag: "Type A3 - 643Sq.ft" },
    { id: 8, imgName: Image7, alt: "", tag: "Type B1 - 944Sq.ft" },
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

export default SoulSoilAllImages;
