import React, { useState, useLayoutEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./Books.css";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { getBooksByUserId } from "./../../services/BookServices";

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export const Books = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useLayoutEffect(() => {
    getBooksByUserId(1).then((res) => {
      setRows(res.data);
    });
  }, []);

  return (
    <div className="books">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            style={{
              fontFamily: "sans-serif",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Books
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
                                  to={`/trades/${row.id}`}
                                  className="books-action-button"
                                >
                                  Trades
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
