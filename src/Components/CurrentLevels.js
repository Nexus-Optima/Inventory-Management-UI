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

const CurrentLevels = ({ currentLevelsData }) => (
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
              <Table
                style={{
                  backgroundColor: "#D3D3D3",
                  tableLayout: "fixed",
                  width: "100%",
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      style={{ fontWeight: "bold", backgroundColor: "#F0F0F0" }}
                    >
                      Current Levels
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Material Code
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Material Name
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Minimum Stock
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Re-indent Stock
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Reorder Stock
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Maximum Stock
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Current Stock
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", width: "16.67%" }}>
                      Current Stock Level
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentLevelsData.map((row, index) => (
                    <TableRow
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#F0F0F0" : "#D3D3D3",
                      }}
                    >
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Item code"]}
                      </TableCell>
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Item name"]}
                      </TableCell>
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Minimum days"]}
                      </TableCell>
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Re indent days"]}
                      </TableCell>
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Re order days"]}
                      </TableCell>
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Maximum days"]}
                      </TableCell>
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Current Stock"]}
                      </TableCell>
                      <TableCell style={{ padding: "1.5vw" }}>
                        {row["Daily consumption"]}
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

export default CurrentLevels;
