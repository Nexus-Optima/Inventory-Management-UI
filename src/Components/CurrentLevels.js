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

const CurrentLevels = () => (
  <Container
    maxWidth={false}
    style={{ marginLeft: "130px", paddingRight: "20px" }}
  >
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={0}>
          <Grid item xs={11} style={{ padding: "5% 0 0 5%" }}>
            <TableContainer
              style={{
                marginBottom: "20px",
                marginTop: "30px",
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
                    <TableCell colSpan={8} style={{ fontWeight: "bold",backgroundColor:"#F0F0F0" }}>
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
                  {[
                    {
                      materialCode: "RM0023",
                      materialName: "Vinyl Acetate",
                      minimumStock: "32 Units",
                      reIndentStock: "36 Units",
                      reorderStock: "40 Units",
                      maximumStock: "44 Units",
                      currentStock: "20 Units",
                      currentStockLevel: "Understock",
                    },
                    {
                      materialCode: "RM0023",
                      materialName: "Vinyl Acetate",
                      minimumStock: "32 Units",
                      reIndentStock: "36 Units",
                      reorderStock: "40 Units",
                      maximumStock: "44 Units",
                      currentStock: "20 Units",
                      currentStockLevel: "Understock",
                    },
                    {
                      materialCode: "RM0023",
                      materialName: "Vinyl Acetate",
                      minimumStock: "32 Units",
                      reIndentStock: "36 Units",
                      reorderStock: "40 Units",
                      maximumStock: "44 Units",
                      currentStock: "20 Units",
                      currentStockLevel: "Understock",
                    },
                    {
                      materialCode: "RM0023",
                      materialName: "Vinyl Acetate",
                      minimumStock: "32 Units",
                      reIndentStock: "36 Units",
                      reorderStock: "40 Units",
                      maximumStock: "44 Units",
                      currentStock: "20 Units",
                      currentStockLevel: "Understock",
                    },
                    {
                      materialCode: "RM0023",
                      materialName: "Vinyl Acetate",
                      minimumStock: "32 Units",
                      reIndentStock: "36 Units",
                      reorderStock: "40 Units",
                      maximumStock: "44 Units",
                      currentStock: "20 Units",
                      currentStockLevel: "Understock",
                    },
                  ].map((row, index) => (
                    <TableRow
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#F0F0F0" : "#D3D3D3",
                      }}
                    >
                      <TableCell style={{ padding: "10px" }}>
                        {row.materialCode}
                      </TableCell>
                      <TableCell style={{ padding: "10px" }}>
                        {row.materialName}
                      </TableCell>
                      <TableCell style={{ padding: "10px" }}>
                        {row.minimumStock}
                      </TableCell>
                      <TableCell style={{ padding: "10px" }}>
                        {row.reIndentStock}
                      </TableCell>
                      <TableCell style={{ padding: "10px" }}>
                        {row.reorderStock}
                      </TableCell>
                      <TableCell style={{ padding: "10px" }}>
                        {row.maximumStock}
                      </TableCell>
                      <TableCell style={{ padding: "10px" }}>
                        {row.currentStock}
                      </TableCell>
                      <TableCell style={{ padding: "10px" }}>
                        {row.currentStockLevel}
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
