import React, { useState, useEffect } from "react";
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
  const [priorityPercentages, setPriorityPercentages] = useState({
    High: 0,
    Medium: 0,
    Low: 0,
  });
  const [stockPercentages, setStockPercentages] = useState({
    Overstock: 0,
    Critical: 0,
    "To order": 0,
    "To indent": 0,
    Understock: 0,
  });
  const [materialList, setMaterialList] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [priorityColors, setPriorityColors] = useState({
    High: "#D3D3D3",
    Medium: "#D3D3D3",
    Low: "#D3D3D3",
  });
  const [stockColors, setStockColors] = useState({
    Overstock: "#D3D3D3",
    Critical: "#D3D3D3",
    "To order": "#D3D3D3",
    "To indent": "#D3D3D3",
    Understock: "#D3D3D3",
  });
  const [actionPlanData, setActionPlanData] = useState([]);
  const [currentLevelsData, setCurrentLevelsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL}?client_name=Abhilaksh Misra`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItemsData(data);
        calculatePriorityPercentages(data);
        calculateStockPercentages(data);
        setActionPlanData(data);
        setCurrentLevelsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const calculatePriorityPercentages = (data) => {
    const totalItems = data.length;
    const priorityCounts = data.reduce((counts, item) => {
      counts[item.Priority] = (counts[item.Priority] || 0) + 1;
      return counts;
    }, {});

    const percentages = {};
    for (const priority in priorityCounts) {
      percentages[priority] = (
        (priorityCounts[priority] / totalItems) *
        100
      ).toFixed(2);
    }

    setPriorityPercentages(percentages);
  };

  const calculateStockPercentages = (data) => {
    const totalItems = data.length;
    const stockCounts = data.reduce((counts, item) => {
      counts[item["Current Stock Category"]] =
        (counts[item["Current Stock Category"]] || 0) + 1;
      return counts;
    }, {});

    const percentages = {};
    for (const category in stockCounts) {
      percentages[category] = (
        (stockCounts[category] / totalItems) *
        100
      ).toFixed(2);
    }

    setStockPercentages(percentages);
  };

  const handlePriorityClick = (priority) => {
    const filteredItems = itemsData.filter(
      (item) => item.Priority === priority
    );
    const materialNames = filteredItems.map((item) => item["Item name"]);
    setMaterialList(materialNames);

    const priorityColorMap = {
      High: { backgroundColor: "#FAC898" },
      Medium: { backgroundColor: "#E97451" },
      Low: { backgroundColor: "#FFE5B4" },
    };

    setPriorityColors((prevColors) => {
      const updatedColors = {};
      for (const key in prevColors) {
        updatedColors[key] = priorityColorMap[key]
          ? priorityColorMap[key].backgroundColor
          : "#D3D3D3";
      }
      return updatedColors;
    });
  };

  const handleStockCategoryClick = (category) => {
    const filteredItems = itemsData.filter(
      (item) => item["Current Stock Category"] === category
    );
    const materialNames = filteredItems.map((item) => item["Item name"]);
    setMaterialList(materialNames);

    const categoryColorMap = {
      Overstock: { backgroundColor: "#FAC898" },
      Critical: { backgroundColor: "#FFE5B4" },
      "To order": { backgroundColor: "#E97451" },
      "To indent": { backgroundColor: "#FAC898" },
      Understock: { backgroundColor: "#FFE5B4" },
    };

    setStockColors((prevColors) => {
      const updatedColors = {};
      for (const key in prevColors) {
        updatedColors[key] = categoryColorMap[key]
          ? categoryColorMap[key].backgroundColor
          : "#D3D3D3";
      }
      return updatedColors;
    });
  };

  const renderContent = () => {
    switch (clickedIcon) {
      case "action_plan":
        return <ActionPlan actionPlanData={actionPlanData} />;
      case "current_levels":
        return <CurrentLevels currentLevelsData={currentLevelsData} />;
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
                            <TableCell style={{ fontWeight: "bold" }}>
                              Current Stock Category
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <Box
                          sx={{
                            padding: 3,
                          }}
                        >
                          <TableBody>
                            <TableRow>
                              {Object.entries(stockPercentages).map(
                                ([category, percentage]) => (
                                  <TableCell
                                    key={category}
                                    style={{
                                      border: "2px solid black",
                                      width: `${percentage}%`,
                                      backgroundColor: stockColors[category],
                                      fontWeight: "bold",
                                    }}
                                    onClick={() =>
                                      handleStockCategoryClick(category)
                                    }
                                  >
                                    <div style={{ width: "100%" }}>
                                      {category} ({percentage}%)
                                    </div>
                                  </TableCell>
                                )
                              )}
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
                            <TableCell style={{ fontWeight: "bold" }}>
                              Priority
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <Box
                          sx={{
                            padding: 3,
                          }}
                        >
                          <TableBody>
                            <TableRow>
                              {Object.entries(priorityPercentages).map(
                                ([priority, percentage]) => (
                                  <TableCell
                                    key={priority}
                                    style={{
                                      border: "2px solid black",
                                      width: `${percentage}%`,
                                      backgroundColor: priorityColors[priority],
                                      fontWeight: "bold",
                                    }}
                                    onClick={() =>
                                      handlePriorityClick(priority)
                                    }
                                  >
                                    {priority} ({percentage}%)
                                  </TableCell>
                                )
                              )}
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
                            {materialList.map((material, index) => (
                              <TableRow key={index}>
                                <TableCell
                                  style={{
                                    width: "40%",
                                    backgroundColor: "#D3D3D3",
                                    textAlign: "center",
                                  }}
                                >
                                  {material}
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
