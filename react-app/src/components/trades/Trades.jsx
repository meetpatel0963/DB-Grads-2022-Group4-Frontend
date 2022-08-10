import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./Trades.css";

import { CgAddR } from "react-icons/cg";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { getAllTrades } from "../../services/TradeServices";
import { getTradesByBookId } from "../../services/BookServices";

const columns = [
  { id: "id", label: "ID", minWidth: 10 },
  { id: "quantity", label: "Quantity", minWidth: 10 },
  { id: "status", label: "Status", minWidth: 10 },
  { id: "price", label: "Price", minWidth: 10 },
  { id: "buySell", label: "Buy/Sell", minWidth: 10 },
  { id: "tradeDate", label: "Trade Date", minWidth: 40 },
  { id: "settlementDate", label: "Settlement Date", minWidth: 40 },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export const Trades = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const { bookId } = useParams();

  useLayoutEffect(() => {
    if (bookId !== null && bookId !== undefined) {
      getTradesByBookId(bookId).then((res) => {
        setRows(res.data);
      });
    } else {
      getAllTrades().then((res) => {
        setRows(res.data);
      });
    }
  }, []);

  return (
    <div className="trades">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            style={{
              fontFamily: "sans-serif",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Trades
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to={"/trades/add"}>
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
                  console.log(row);
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
                                : column.id.endsWith("Date")
                                ? value.substring(0, 10)
                                : value}
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                variant="outlined"
                                style={{
                                  maxWidth: "80px",
                                  maxHeight: "30px",
                                  fontFamily: "sans-serif",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                <Link
                                  to={`/trades/details/${row.id}`}
                                  className="trades-details-action-button"
                                >
                                  Details
                                </Link>
                              </Button>
                              <Button
                                variant="outlined"
                                style={{
                                  maxWidth: "80px",
                                  maxHeight: "30px",
                                  fontFamily: "sans-serif",
                                  fontSize: "14px",
                                  textTransform: "none",
                                  marginLeft: "10px",
                                }}
                              >
                                <Link
                                  to={`/securities/details/${row.security.id}`}
                                  className="trades-action-button"
                                >
                                  Security
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
