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
  Typography,
  Button,
} from "@mui/material";
import Header from "../Utils/Header";
import Sidebar from "../Utils/Sidebar";
import ActionPlan from "./ActionPlan";
import CurrentLevels from "./CurrentLevels";
import { colors } from "../Constants/colors";

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
  const [actionPlanData, setActionPlanData] = useState([]);
  const [currentLevelsData, setCurrentLevelsData] = useState([]);
  const [error, setError] = useState(null);
  const [unauthorized, setUnauthorized] = useState(null);
  const [priorityColors, setPriorityColors] = useState({});
  const [stockColors, setStockColors] = useState({});
  const [clickedPriority, setClickedPriority] = useState(null);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [priorityCounts, setPriorityCounts] = useState({});
  const [stockCounts, setStockCounts] = useState({});
  const [mainDomain, setMainDomain] = useState(null);

  useEffect(() => {
    const mainDomain = `${process.env.REACT_APP_MAIN_DOMAIN}`;
    setMainDomain(mainDomain);
    if (document.referrer.startsWith(mainDomain)) {
      const fetchData = async () => {
        try {
          const params = new URLSearchParams(window.location.search);
          const username = params.get("username");
          const response = await fetch(
            `${process.env.REACT_APP_URL}?client_name=${username}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log(data);
          const priorityCounts = data.reduce((counts, item) => {
            counts[item.Priority] = (counts[item.Priority] || 0) + 1;
            return counts;
          }, {});

          const stockCounts = data.reduce((counts, item) => {
            counts[item["Current Stock Category"]] =
              (counts[item["Current Stock Category"]] || 0) + 1;
            return counts;
          }, {});

          setItemsData(data);
          setPriorityPercentages(
            calculatePercentages(priorityCounts, data.length)
          );
          setStockPercentages(calculatePercentages(stockCounts, data.length));
          setPriorityCounts(priorityCounts);
          setStockCounts(stockCounts);
          setCurrentLevelsData(data);
          setActionPlanData(data);
        } catch (error) {
          setError("Error fetching data. Please try again later.");
        }
      };

      fetchData();
    } else {
      setUnauthorized("Unauthorized - Access denied.");
    }
  }, []);

  const calculatePercentages = (counts, totalItems) => {
    const percentages = {};
    for (const key in counts) {
      percentages[key] = ((counts[key] / totalItems) * 100).toFixed(2);
    }
    return percentages;
  };

  const handlePriorityClick = (priority) => {
    const filteredItems = itemsData.filter(
      (item) => item.Priority === priority
    );
    const materialNames = filteredItems.map((item) => item["Item name"]);
    setMaterialList(materialNames);
    setClickedPriority(priority);
    setClickedCategory(null);

    const newPriorityColors = {};
    for (const key in priorityPercentages) {
      newPriorityColors[key] = key === priority ? "black" : colors.Grey;
    }
    setPriorityColors(newPriorityColors);
  };

  const handleStockCategoryClick = (category) => {
    const filteredItems = itemsData.filter(
      (item) => item["Current Stock Category"] === category
    );
    const materialNames = filteredItems.map((item) => item["Item name"]);
    setMaterialList(materialNames);
    setClickedCategory(category);
    setClickedPriority(null);

    const newStockColors = {};
    for (const key in stockPercentages) {
      newStockColors[key] = key === category ? "black" : colors.Grey;
    }
    setStockColors(newStockColors);
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
                    {/* Current Stock Table */}
                    <TableContainer
                      style={{ marginBottom: "3%", marginTop: "5%" }}
                    >
                      <Table
                        style={{
                          backgroundColor: colors.Light_Grey,
                          width: "100%",
                          tableLayout: "auto",
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ fontWeight: "bold", fontSize: 20 }}
                            >
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
                            {Array.from(
                              {
                                length: Math.ceil(
                                  Object.entries(stockPercentages).length / 3
                                ),
                              },
                              (_, rowIndex) => (
                                <TableRow key={rowIndex}>
                                  {Object.entries(stockPercentages)
                                    .slice(rowIndex * 3, (rowIndex + 1) * 3)
                                    .map(([category, percentage]) => {
                                      return (
                                        <TableCell
                                          key={category}
                                          style={{
                                            border: "2px solid black",
                                            backgroundColor:
                                              category === clickedCategory
                                                ? stockColors[category]
                                                : colors.Dark_Grey,
                                            color:
                                              category === clickedCategory
                                                ? "white"
                                                : "black",
                                            fontWeight: "bold",
                                            width: `${percentage}%`,
                                            textAlign: "center",
                                          }}
                                          onClick={() =>
                                            handleStockCategoryClick(category)
                                          }
                                        >
                                          {category} ({stockCounts[category]})
                                        </TableCell>
                                      );
                                    })}
                                </TableRow>
                              )
                            )}
                          </TableBody>
                        </Box>
                      </Table>
                    </TableContainer>

                    {/* Priority Table */}
                    <TableContainer style={{ marginBottom: "20px" }}>
                      <Table
                        style={{
                          backgroundColor: colors.Light_Grey,
                          tableLayout: "fixed",
                          width: "100%",
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ fontWeight: "bold", fontSize: 20 }}
                            >
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
                                      backgroundColor:
                                        priority === clickedPriority
                                          ? priorityColors[priority]
                                          : colors.Dark_Grey,
                                      color:
                                        priority === clickedPriority
                                          ? "white"
                                          : "black",
                                      fontWeight: "bold",
                                    }}
                                    onClick={() =>
                                      handlePriorityClick(priority)
                                    }
                                  >
                                    {priority} ({priorityCounts[priority]})
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
                    {/* Material List */}
                    <TableContainer style={{ marginBottom: "20px" }}>
                      <Table
                        style={{
                          backgroundColor: colors.Light_Grey,
                          tableLayout: "fixed",
                          width: "100%",
                          marginTop: "30px",
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                width: "33.33%",
                                fontSize: 20,
                              }}
                            >
                              Material List
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <Box
                            sx={{
                              paddingLeft: 1.5,
                              paddingTop: 1.5,
                              paddingBottom: 1.5,
                            }}
                          >
                            <TableRow>
                              <TableCell
                                style={{
                                  fontWeight: "bold",
                                  width: "33.33%",
                                  backgroundColor: colors.Dark_Grey,
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
                                    backgroundColor: colors.Dark_Grey,
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
      {unauthorized ? (
        <>
          <Typography variant="h5" color="error" style={{ paddingTop: "5%" }}>
            {unauthorized}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: "2%",
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => (window.location.href = mainDomain)}
          >
            Go back to dashboard
          </Button>
        </>
      ) : (
        <>
          <Header />
          <Grid container>
            <Sidebar
              clickedIcon={clickedIcon}
              setClickedIcon={setClickedIcon}
            />
            {error ? (
              <Typography
                variant="h5"
                color="error"
                style={{ paddingLeft: "35%", paddingTop: "5%" }}
              >
                {error}
              </Typography>
            ) : (
              renderContent()
            )}
          </Grid>
        </>
      )}
    </div>
  );
};

export default Summary;
