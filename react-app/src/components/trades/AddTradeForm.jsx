import React, { useState, useLayoutEffect } from "react";

import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { addTrade } from "../../services/TradeServices";
import "./AddTradeForm.css";

import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AddTradeForm = () => {
  const [bookId, setBookId] = useState(0);
  const [securityId, setSecurityId] = useState(0);
  const [counterpartyId, setCounterpartyId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [buySell, setBuySell] = useState("");
  const [tradeDate, setTradeDate] = useState("");
  const [settlementDate, setSettlementDate] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoadingSpinner(true);

    const trade = {
      book: { id: bookId },
      security: { id: securityId },
      counterParty: { id: counterpartyId },
      quantity: quantity,
      status: status,
      price: price,
      buySell: buySell,
      tradeDate: tradeDate,
      settlementDate: settlementDate,
    };

    addTrade(trade).then((res) => {
      console.log(res);
      window.location = "/trades";
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
            Add Trade Form
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="add-trade-form">
        <Form onSubmit={onFormSubmit} autoComplete="off">
          <div className="add-trade-form-container">
            <div className="add-trade-form-left">
              <Form.Group>
                <Form.Label className="add-trade-book-id">Book ID</Form.Label>
                <Form.Control
                  type="text"
                  name="bookId"
                  value={bookId}
                  placeholder="Book ID"
                  onChange={(e) => {
                    setBookId(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-trade-security-id">
                  Security ID
                </Form.Label>
                <Form.Control
                  type="text"
                  name="securityId"
                  value={securityId}
                  placeholder="Security ID"
                  onChange={(e) => {
                    setSecurityId(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-trade-counterparty-id">
                  Counterparty ID
                </Form.Label>
                <Form.Control
                  type="text"
                  name="counterpartyId"
                  value={counterpartyId}
                  placeholder="Counterparty ID"
                  onChange={(e) => {
                    setCounterpartyId(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-trade-trade-date">
                  Trade Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="tradeDate"
                  value={tradeDate}
                  placeholder="Trade Date"
                  onChange={(e) => {
                    setTradeDate(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-trade-settlement-date">
                  Settlement Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="settlementDate"
                  value={settlementDate}
                  placeholder="Settlement Date"
                  onChange={(e) => {
                    setSettlementDate(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
            </div>
            <div className="add-trade-form-right">
              <Form.Group>
                <Form.Label className="add-trade-quantity">Quantity</Form.Label>
                <Form.Control
                  type="text"
                  name="quantity"
                  value={quantity}
                  placeholder="Quantity"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-trade-status">Status</Form.Label>
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
              <Form.Group>
                <Form.Label className="add-trade-price">Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={price}
                  placeholder="Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  required
                  style={{ maxHeight: "30px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="add-trade-buy-sell">Buy/Sell</Form.Label>
                <Form.Control
                  type="text"
                  name="buySell"
                  value={buySell}
                  placeholder="Buy/Sell"
                  onChange={(e) => {
                    setBuySell(e.target.value);
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

export default AddTradeForm;
