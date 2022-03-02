import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import MasterPlan from "../../images/atmos-aura/master-plan/master-plan.png"
// import Location from "../../images/atmos-aura/location.png"

const AtmosAuraLocation = () => {
  const images = [
      { id: 1, imgName: MasterPlan, alt: "", tag: "Master Plan" },];
  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
            <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      MasterPlan
                    </h2>
              {images.map((item) => (
                <Col md={12} xs={6} sm={6} key={item.id}>
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

export default AtmosAuraLocation;
