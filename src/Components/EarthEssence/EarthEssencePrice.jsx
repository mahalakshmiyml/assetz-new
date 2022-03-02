import React, { useState } from "react";
import { Button, Col,  Row, Table } from "react-bootstrap";
import EarthEssenceModal from "./EarthEssenceModal";

const EarthEssencePrice = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="pricing">
      <Row className="justify-content-center">
        <Col md={12} xs={12}>
          <div className="">
            <h2 className="text-primary text-center py-3 fs-3">Earth & Essence - Pricing</h2>
            <Table
                responsive="sm"
                className="align-middle text-center border-transparent"
                striped
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    3 BHK
                    </td>
                    <td>3027</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Breakup
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    4 BHK
                    </td>
                    <td>3358</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Breakup
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    5 BHK
                    </td>
                    <td>4120</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                       Price Breakup
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      40 X 60
                    </td>
                    <td>2403</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Breakup
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>
                    52*60
                    </td>
                    <td>3110</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Breakup
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    60*80
                    </td>
                    <td>4806</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Breakup
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Large Size Plots
                    </td>
                    <td>2715 - 4510</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Breakup
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </div>
        </Col>
      </Row>

      <EarthEssenceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default EarthEssencePrice;
