import React, { useState } from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  IconButton,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "../styles.css";
import {colors} from "../Constants/colors";

const CurrentLevels = ({ currentLevelsData }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <Container
      maxWidth={false}
      style={{ marginLeft: "10%", paddingRight: "2%" }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={11} style={{ padding: "5% 0 0 5%" }}>
              <TableContainer
                style={{
                  marginBottom: "2%",
                  marginTop: "3%",
                  maxHeight: "70vh",
                  overflowY: "auto",
                }}
              >
                <Table
                  style={{
                    backgroundColor: colors.Dark_Grey,
                    tableLayout: "fixed",
                    width: "100%",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        colSpan={8}
                        style={{
                          fontWeight: "bold",
                          backgroundColor: colors.Light_Grey,
                          position: "sticky",
                          top: 0,
                          zIndex: 2,
                          fontSize: 20,
                        }}
                      >
                        Current Levels
                      </TableCell>
                    </TableRow>
                    <TableRow
                      style={{ position: "sticky", top: 56, zIndex: 1 }}
                    >
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Material Code
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Material Name
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Minimum Stock
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Re-indent Stock
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Reorder Stock
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Maximum Stock
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Current Stock
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "12.5%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Current Stock Level
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentLevelsData
                      .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                      .map((row, index) => (
                        <TableRow
                          key={index}
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? colors.Light_Grey : colors.Dark_Grey,
                          }}
                        >
                          <TableCell style={{ padding: "1.5vw" }}>
                            {row["Item code"]}
                          </TableCell>
                          <TableCell style={{ padding: "1.5vw" }}>
                            {row["Item name"]}
                          </TableCell>
                          <TableCell style={{ padding: "1.5vw" }}>
                            {row["Minimum days"]} Units
                          </TableCell>
                          <TableCell style={{ padding: "1.5vw" }}>
                            {row["Re indent days"]} Units
                          </TableCell>
                          <TableCell style={{ padding: "1.5vw" }}>
                            {row["Re order days"]} Units
                          </TableCell>
                          <TableCell style={{ padding: "1.5vw" }}>
                            {row["Maximum days"]} Units
                          </TableCell>
                          <TableCell style={{ padding: "1.5vw" }}>
                            {row["Current Stock"]} Units
                          </TableCell>
                          <TableCell style={{ padding: "1.5vw" }}>
                            <Tooltip
                              title={
                                <div>
                                  <div>Lead Days: {row["Lead days"]} Units</div>
                                  <div>
                                    Processing Days: {row["Processing days"]}{" "}
                                    Units
                                  </div>
                                  <div>
                                    Daily Consumption:{" "}
                                    {row["Daily consumption"]} Units
                                  </div>
                                </div>
                              }
                              placement="right"
                              classes={{ tooltip: "custom-tooltip" }}
                            >
                              <span>{row["Current Stock Category"]}</span>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div>
                  Page {page} of{" "}
                  {Math.ceil(currentLevelsData.length / rowsPerPage)}
                </div>
                <IconButton
                  disabled={page === 1}
                  onClick={() => handleChangePage(page - 1)}
                  style={{ position: "absolute", left: "15%" }}
                >
                  <ArrowBack />
                </IconButton>
                <IconButton
                  disabled={
                    page >= Math.ceil(currentLevelsData.length / rowsPerPage)
                  }
                  onClick={() => handleChangePage(page + 1)}
                  style={{ position: "absolute", right: "8.5%" }}
                >
                  <ArrowForward />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CurrentLevels;
