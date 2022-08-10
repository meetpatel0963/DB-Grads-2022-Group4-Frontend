import React, { useState, useLayoutEffect } from "react";

import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { addSecurity } from "../../services/SecurityServices";
import "./AddSecurityForm.css";

import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AddSecurityForm = () => {
  const [isin, setIsin] = useState(0);
  const [cusip, setCusip] = useState(0);
  const [issuer, setIssuer] = useState("");
  const [maturityDate, setMaturityDate] = useState("");
  const [coupon, setCoupon] = useState(0);
  const [type, setType] = useState("");
  const [faceValue, setFaceValue] = useState(0);
  const [status, setStatus] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoadingSpinner(true);

    const security = {
      isin: isin,
      cusip: cusip,
      issuer: issuer,
      maturityDate: maturityDate,
      cuopon: coupon,
      type: type,
      faceValue: faceValue,
      status: status,
    };

    addSecurity(security).then((res) => {
      console.log(res);
      window.location = "/securities";
    });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            style={{
              fontFamily: "sans-serif",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Add Security Form
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="add-security-form">
        <Form onSubmit={onFormSubmit} autoComplete="off">
          <div className="add-secuirty-form-container">
            <div className="add-security-form-left">
              <Form.Group>
                <Form.Label className="add-security-isin">ISIN</Form.Label>
                <Form.Control
                  type="text"
                  name="isin"
                  value={isin}
                  placeholder="ISIN"
                  onChange={(e) => {
                    setIsin(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-security-cusip">CUSIP</Form.Label>
                <Form.Control
                  type="text"
                  name="cusip"
                  value={cusip}
                  placeholder="CUSIP"
                  onChange={(e) => {
                    setCusip(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-security-issuer">Issuer</Form.Label>
                <Form.Control
                  type="text"
                  name="issuer"
                  value={issuer}
                  placeholder="Issuer"
                  onChange={(e) => {
                    setIssuer(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-security-maturity-date">
                  Maturity Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="maturityDate"
                  value={maturityDate}
                  placeholder="Maturity Date"
                  onChange={(e) => {
                    setMaturityDate(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
            </div>
            <div className="add-security-form-right">
              <Form.Group>
                <Form.Label className="add-security-coupon">Coupon</Form.Label>
                <Form.Control
                  type="text"
                  name="coupon"
                  value={coupon}
                  placeholder="Coupon"
                  onChange={(e) => {
                    setCoupon(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-security-type">Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={type}
                  placeholder="Type"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-security-face-value">
                  Face Value
                </Form.Label>
                <Form.Control
                  type="text"
                  name="faceValue"
                  value={faceValue}
                  placeholder="Face Value"
                  onChange={(e) => {
                    setFaceValue(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-security-status">Status</Form.Label>
                <Form.Control
                  type="text"
                  name="status"
                  value={status}
                  placeholder="Status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              maxWidth: "100px",
              maxHeight: "30px",
              marginTop: "20px",
            }}
          >
            {loadingSpinner ? (
              <CircularProgress size={"23px"} style={{ color: "white" }} />
            ) : (
              "Submit"
            )}
            &nbsp;
            {loadingSpinner ? null : <FontAwesomeIcon icon={faPaperPlane} />}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddSecurityForm;
