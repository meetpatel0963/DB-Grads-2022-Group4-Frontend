import React, { useState, useLayoutEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./Securities.css";

import { CgAddR } from "react-icons/cg";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { getAllSecurities } from "../../services/SecurityServices";

const columns = [
  { id: "id", label: "ID", minWidth: 10 },
  { id: "isin", label: "ISIN", minWidth: 20 },
  { id: "cusip", label: "CUSIP", minWidth: 20 },
  { id: "issuer", label: "Issuer", minWidth: 20 },
  { id: "maturityDate", label: "Maturity Date", minWidth: 40 },
  { id: "coupon", label: "Coupon", minWidth: 10 },
  { id: "type", label: "Type", minWidth: 10 },
  { id: "faceValue", label: "Face Value", minWidth: 10 },
  { id: "status", label: "Status", minWidth: 10 },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export const Securities = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useLayoutEffect(() => {
    getAllSecurities().then((res) => {
      console.log(res.data);
      setRows(res.data);
    });
  }, []);

  return (
    <div className="securities">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            style={{
              fontFamily: "sans-serif",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Securities
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to={"/securities/add"}>
              <Button>
                <CgAddR size={30} />
              </Button>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <TableContainer sx={{ maxHeight: 420, minHeight: 420 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      fontSize: "14px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      style={{ height: 5 }}
                    >
                      {columns.map((column) => {
                        if (column.id !== "action") {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                fontSize: "14px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                variant="outlined"
                                style={{
                                  maxWidth: "30px",
                                  maxHeight: "30px",
                                  fontFamily: "sans-serif",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                <Link
                                  to={`/securities/details/${row.id}`}
                                  className="securities-action-button"
                                >
                                  Details
                                </Link>
                              </Button>
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
