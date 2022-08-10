import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import {
  getSecurityById,
  updateSecurity,
  deleteSecurity,
} from "../../services/SecurityServices";
import { SECURITY_KEYS } from "../../constants/const";

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./SecurityDetails.css";

export const SecurityDetails = () => {
  const [update, setUpdate] = useState(false);
  const [security, setSecurity] = useState({});
  const { securityId } = useParams();
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useLayoutEffect(() => {
    getSecurityById(securityId).then((res) => {
      setSecurity(res.data);
    });
  }, []);

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleDelete = () => {
    deleteSecurity(security.id).then((res) => {
      console.log(res);
      window.location = "/securities";
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoadingSpinner(true);

    updateSecurity(security).then((res) => {
      console.log(res);
      setLoadingSpinner(false);
      setUpdate(false);
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
            Security Details
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="securities-details">
        <div>
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Security ID: {security.id}
                  </Typography>
                  <div
                    style={{
                      width: "160px",
                      textAlign: "right",
                      marginTop: "-3px",
                    }}
                  >
                    <Button onClick={handleUpdate}>
                      <BiEdit size={25} />
                    </Button>
                    <Button onClick={handleDelete}>
                      <MdDelete size={25} />
                    </Button>
                  </div>
                </div>
                <Typography variant="body2" color="text.secondary">
                  {Object.keys(security).map((key, index) => {
                    return (
                      <p
                        key={index}
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {SECURITY_KEYS[key]} {": "}
                        {security[key] instanceof Object
                          ? security[key].id
                          : key.endsWith("Date")
                          ? security[key].substring(0, 10)
                          : security[key]}
                      </p>
                    );
                  })}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {update ? (
          <div className="security-details-update-form">
            <Form onSubmit={onFormSubmit} autoComplete="off">
              <div className="security-details-update-container">
                <div className="security-details-update-left">
                  <Form.Group>
                    <Form.Label className="security-details-isin">
                      ISIN
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="isin"
                      value={security.isin}
                      placeholder="ISIN"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="security-details-cusip">
                      CUSIP
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="cusip"
                      value={security.cusip}
                      placeholder="CUSIP"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="security-details-issuer">
                      Issuer
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="issuer"
                      value={security.issuer}
                      placeholder="Issuer"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="security-details-maturity-date">
                      Maturity Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="maturityDate"
                      value={security.maturityDate}
                      placeholder="Maturity Date"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                </div>
                <div className="security-details-update-right">
                  <Form.Group>
                    <Form.Label className="security-details-coupon">
                      Coupon
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="coupon"
                      value={security.coupon}
                      placeholder="Coupon"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="security-details-type">
                      Type
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="type"
                      value={security.type}
                      placeholder="Type"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="security-details-face-value">
                      Coupon
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="faceValue"
                      value={security.faceValue}
                      placeholder="Face Value"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="security-details-status">
                      Status
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="status"
                      value={security.status}
                      placeholder="Status"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setSecurity({ ...security, [name]: value });
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
                {loadingSpinner ? null : (
                  <FontAwesomeIcon icon={faPaperPlane} />
                )}
              </Button>
            </Form>
          </div>
        ) : null}
      </div>
    </div>
  );
};
