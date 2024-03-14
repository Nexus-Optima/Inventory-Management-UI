import React, { useState } from "react";
import {
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import Header from "../Utils/Header";
import Sidebar from "../Utils/Sidebar";
import ActionPlan from "./ActionPlan";
import CurrentLevels from "./CurrentLevels";

const Summary = () => {
  const [clickedIcon, setClickedIcon] = useState("summary");

  const renderContent = () => {
    switch (clickedIcon) {
      case "action_plan":
        return <ActionPlan />;
      case "current_levels":
        return <CurrentLevels />;
      default:
        return (
          <Container
            maxWidth={false}
            style={{ marginLeft: "10%", paddingRight: "2%" }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={0}>
                  <Grid item xs={6} style={{ padding: "5% 0 0 2%" }}>
                    <TableContainer
                      style={{ marginBottom: "3%", marginTop: "5%" }}
                    >
                      <Table
                        style={{
                          backgroundColor: "#F0F0F0",
                          tableLayout: "fixed",
                          width: "100%",
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ fontWeight: "bold", width: "33.33%" }}
                            >
                              Current Stock Category
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <Box sx={{ padding: 2 }}>
                          <TableBody>
                            <TableRow>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "3rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                Overstock
                              </TableCell>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "3rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                Critical
                              </TableCell>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "3rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                To be Ordered
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "2rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                To be Indented
                              </TableCell>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "2rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                Understock
                              </TableCell>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "2rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                Understock
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Box>
                      </Table>
                    </TableContainer>

                    <TableContainer style={{ marginBottom: "20px" }}>
                      <Table
                        style={{
                          backgroundColor: "#F0F0F0",
                          tableLayout: "fixed",
                          width: "100%",
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ fontWeight: "bold", width: "33.33%" }}
                            >
                              Priority
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <Box
                          sx={{
                            paddingBottom: 1,
                            paddingLeft: 6,
                            paddingTop: 1,
                          }}
                        >
                          <TableBody>
                            <TableRow>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "3rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                High
                              </TableCell>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "3rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                Medium
                              </TableCell>
                              <TableCell
                                style={{
                                  border: "2px solid black",
                                  width: "33.33%",
                                  padding: "3rem",
                                  backgroundColor: "#D3D3D3",
                                }}
                              >
                                Low
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Box>
                      </Table>
                    </TableContainer>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    style={{
                      padding: "5% 2% 10% 10%",
                      overflowY: "hidden",
                      maxHeight: "97vh",
                    }}
                  >
                    <TableContainer style={{ marginBottom: "20px" }}>
                      <Table
                        style={{
                          backgroundColor: "#F0F0F0",
                          tableLayout: "fixed",
                          width: "100%",
                          marginTop: "30px",
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ fontWeight: "bold", width: "33.33%" }}
                            >
                              Material List
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <Box sx={{ paddingLeft: 1.5, paddingTop: 1 }}>
                            <TableRow>
                              <TableCell
                                style={{
                                  fontWeight: "bold",
                                  width: "33.33%",
                                  backgroundColor: "#D3D3D3",
                                  textAlign: "center",
                                }}
                              >
                                Material Name
                              </TableCell>
                            </TableRow>
                            {[...Array(8)].map((_, index) => (
                              <TableRow key={index}>
                                <TableCell
                                  style={{
                                    width: "40%",
                                    backgroundColor: "#D3D3D3",
                                    textAlign: "center",
                                  }}
                                >
                                  Butyl Acrylate
                                </TableCell>
                              </TableRow>
                            ))}
                          </Box>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        );
    }
  };

  return (
    <div style={{ overflowX: "hidden", height: "100vh" }}>
      <Header />
      <Grid container>
        <Sidebar clickedIcon={clickedIcon} setClickedIcon={setClickedIcon} />
        {renderContent()}
      </Grid>
    </div>
  );
};

export default Summary;
