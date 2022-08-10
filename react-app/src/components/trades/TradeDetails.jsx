import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import "./TradeDetails.css";

import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { getTradeById, updateTrade } from "../../services/TradeServices";
import { TRADE_KEYS } from "../../constants/const";

export const TradeDetails = () => {
  const [update, setUpdate] = useState(false);
  const [trade, setTrade] = useState({});
  const { tradeId } = useParams();
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useLayoutEffect(() => {
    getTradeById(tradeId).then((res) => {
      setTrade(res.data);
    });
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoadingSpinner(true);

    updateTrade(trade).then((res) => {
      console.log(res);
      setLoadingSpinner(false);
      setUpdate(false);
    });
  };

  const handleUpdate = () => {
    setUpdate(true);
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
            Trade Details
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="trades-details">
        <div>
          <Card sx={{ maxWidth: 345 }}>
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
                    Trade ID: {trade.id}
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
                  </div>
                </div>
                <Typography variant="body2" color="text.secondary">
                  {Object.keys(trade).map((key, index) => {
                    return (
                      <p
                        key={index}
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {TRADE_KEYS[key]} {": "}
                        {trade[key] instanceof Object
                          ? trade[key].id
                          : key.endsWith("Date")
                          ? trade[key].substring(0, 10)
                          : trade[key]}
                      </p>
                    );
                  })}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {update ? (
          <div className="trade-details-update-form">
            <Form onSubmit={onFormSubmit} autoComplete="off">
              <div className="trade-details-update-container">
                <div className="trade-details-update-left">
                  <Form.Group>
                    <Form.Label className="trade-details-quantity">
                      Quantity
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="quantity"
                      value={trade.quantity}
                      placeholder="Quantity"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setTrade({ ...trade, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="trade-details-status">
                      Status
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="status"
                      value={trade.status}
                      placeholder="Status"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setTrade({ ...trade, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="trade-details-price">
                      Price
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={trade.price}
                      placeholder="Price"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setTrade({ ...trade, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="trade-details-buySell">
                      Buy/Sell
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="buySell"
                      value={trade.buySell}
                      placeholder="Buy/Sell"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setTrade({ ...trade, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                </div>
                <div className="trade-details-update-right">
                  <Form.Group>
                    <Form.Label className="trade-details-trade-date">
                      Trade Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="tradeDate"
                      value={trade.tradeDate}
                      placeholder="Trade Date"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setTrade({ ...trade, [name]: value });
                      }}
                      required
                      style={{ maxHeight: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="trade-details-settlement-date">
                      Settlement Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="settlementDate"
                      value={trade.settlementDate}
                      placeholder="Settlement Date"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setTrade({ ...trade, [name]: value });
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
