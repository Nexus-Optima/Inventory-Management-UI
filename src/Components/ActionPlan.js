import React from "react";
import {
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ActionPlan = ({ actionPlanData }) => (
  <Container maxWidth={false} style={{ marginLeft: "10%", paddingRight: "2%" }}>
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={0}>
          <Grid item xs={11} style={{ padding: "5% 0 0 5%" }}>
            <TableContainer
              style={{
                marginBottom: "2%",
                marginTop: "3%",
                overflowX: "auto",
              }}
            >
              <Table style={{ tableLayout: "fixed", width: "100%" }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      style={{
                        fontWeight: "bold",
                        textAlign: "left",
                        backgroundColor: "#F0F0F0",
                      }}
                    >
                      Action Plan
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        width: "16.67%",
                        backgroundColor: "#D3D3D3",
                      }}
                    >
                      Material Code
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        width: "16.67%",
                        backgroundColor: "#D3D3D3",
                      }}
                    >
                      Material Name
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        width: "16.67%",
                        backgroundColor: "#D3D3D3",
                      }}
                    >
                      Current Stock
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        width: "16.67%",
                        backgroundColor: "#D3D3D3",
                      }}
                    >
                      Action Item
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        width: "16.67%",
                        backgroundColor: "#D3D3D3",
                      }}
                    >
                      Priority
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        width: "16.67%",
                        backgroundColor: "#D3D3D3",
                      }}
                    >
                      Additional Info
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {actionPlanData.map((row, index) => (
                    <TableRow
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#F0F0F0" : "#D3D3D3",
                      }}
                    >
                      <TableCell style={{ padding: "10" }}>
                        {row["Item code"]}
                      </TableCell>
                      <TableCell style={{ padding: "10" }}>
                        {row["Item name"]}
                      </TableCell>
                      <TableCell style={{ padding: "10" }}>
                        {row["Current Stock"]}
                      </TableCell>
                      <TableCell style={{ padding: "10" }}>
                        {row["Action Plan"]}
                      </TableCell>
                      <TableCell style={{ padding: "10" }}>
                        {row["Priority"]}
                      </TableCell>
                      <TableCell style={{ padding: "10" }}>
                        {row["Additional Info"]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default ActionPlan;
