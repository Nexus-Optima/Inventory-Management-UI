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
import {colors} from "../Constants/colors"
const ActionPlan = ({ actionPlanData }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

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
                    backgroundColor: colors.Grey,
                    tableLayout: "fixed",
                    width: "100%",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        style={{
                          fontWeight: "bold",
                          backgroundColor: colors.Light_Grey,
                          position: "sticky",
                          top: 0,
                          zIndex: 2,
                          fontSize: 20,
                        }}
                      >
                        Action Plan
                      </TableCell>
                    </TableRow>
                    <TableRow
                      style={{ position: "sticky", top: 56, zIndex: 1 }}
                    >
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "16.67%",
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
                          width: "16.67%",
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
                          width: "16.67%",
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
                          width: "16.67%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Action Item
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "16.67%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Priority
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          width: "16.67%",
                          backgroundColor: colors.Dark_Grey,
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        Additional Info
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {actionPlanData
                      .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                      .map((row, index) => (
                        <TableRow
                          key={index}
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? colors.Light_Grey : colors.Dark_Grey,
                          }}
                        >
                          <TableCell style={{ padding: "10px" }}>
                            {row["Item code"]}
                          </TableCell>
                          <TableCell style={{ padding: "10px" }}>
                            {row["Item name"]}
                          </TableCell>
                          <TableCell style={{ padding: "10px" }}>
                            {row["Current Stock Category"]}
                          </TableCell>
                          <TableCell style={{ padding: "10px" }}>
                            {row["Action Plan"]}
                          </TableCell>
                          <TableCell style={{ padding: "10px" }}>
                            <Tooltip
                              title={
                                <div>
                                  <div>
                                    Current Level: {row["Current Stock"]} Units
                                  </div>
                                  <div>
                                    Min Level: {row["Minimum days"]} Units
                                  </div>
                                  <div>
                                    Max Level: {row["Maximum days"]} Units
                                  </div>
                                </div>
                              }
                              placement="right"
                              classes={{ tooltip: "custom-tooltip" }}
                            >
                              <span>{row["Priority"]}</span>
                            </Tooltip>
                          </TableCell>
                          <TableCell style={{ padding: "10px" }}>
                            {row["Additional Info"]}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div>
                  Page {page} of{" "}
                  {Math.ceil(actionPlanData.length / rowsPerPage)}
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
                    page >= Math.ceil(actionPlanData.length / rowsPerPage)
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

export default ActionPlan;
