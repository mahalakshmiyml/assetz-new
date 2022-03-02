import React, { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import LeaveLivesModal from "./LeaveLivesModal";

const LeaveLivesPrice = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md={12} xs={12}>
          <div className="">
            <h2 className="text-primary text-center py-3 fs-3">Assetz Leaves & Lives - Pricing</h2>
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
                  <td>4 BHK</td>
                  <td>2332 - 2829</td>
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
                  <td>4 BHK </td>
                  <td>4332 -2866</td>
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

      <LeaveLivesModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default LeaveLivesPrice;
