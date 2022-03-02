import React, { useState } from "react";
import { Button, Col,  Row, Table } from "react-bootstrap";
import SoulSoilModal from "./SoulSoilModal";

const SoulSoilPrice = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md={10} xs={12}>
          <div className="">
            <h2 className="text-primary text-center py-3 fs-3">Soul & Soil Pricing</h2>
            <Table
              responsive="sm"
              className="align-middle text-center border-transparent"
              striped
              bordered
              hover
            >
              <thead>
                <tr>
                  <th>BHK</th>
                  <th>Area (Sq.ft)</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 BHK + 2T</td>
                  <td>1348 - 1457</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Breakup
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3 BHK + 3T </td>
                  <td>1559 -1616</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Breakup
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3 BHK + 3T (Large)</td>
                  <td>1900</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Breakup
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4 BHK (3B 3T + Studio)</td>
                  <td>2200 </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Breakup
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      <SoulSoilModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default SoulSoilPrice;
