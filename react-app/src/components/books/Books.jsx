import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Books = () => {
  return (
    <div className="books">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontFamily: "sans-serif" }}>
            Books
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
