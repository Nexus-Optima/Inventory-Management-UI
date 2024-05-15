import React from "react";
import { Grid, Button,Box } from "@mui/material";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import pic from "../abc_image.png";

const Sidebar = ({ clickedIcon, setClickedIcon }) => {
  return (
    <Grid
      item
      xs={2}
      style={{
        position: "fixed",
        top: "1vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1% 0",
      }}
    >
      <img
        src={pic}
        alt="pic"
        style={{
          padding: '0 2% 15%',
          width: '200px', // Adjust width as needed
          height: '90px', // Adjust height as needed
        }}
      />

      <Box style={{ paddingLeft: "2vw", paddingBottom: "8vh" }}>
        <Button
          onClick={() => setClickedIcon("summary")}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "1.2vw",
            width: "60%",
            textTransform: "none",
            fontSize: "1.2vw",
            color: "black",
            backgroundColor: "transparent",
            border: clickedIcon === "summary" ? "0.2vw solid black" : "none",
          }}
        >
          <SummarizeIcon
            sx={{
              fontSize: "3vw",
            }}
          />
          Summary
        </Button>
        <Button
          onClick={() => setClickedIcon("action_plan")}
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "60%",
            textTransform: "none",
            fontSize: "1.2vw",
            backgroundColor: "transparent",
            border:
              clickedIcon === "action_plan" ? "0.2vw solid black" : "none",
          }}
        >
          <ContentPasteSearchIcon
            sx={{
              fontSize: "3vw",
            }}
          />
          Action Plan
        </Button>
        <Button
          onClick={() => setClickedIcon("current_levels")}
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "60%",
            textTransform: "none",
            fontSize: "1.2vw",
            backgroundColor: "transparent",
            border:
              clickedIcon === "current_levels" ? "0.2vw solid black" : "none",
          }}
        >
          <ContentPasteSearchIcon
            sx={{
              fontSize: "3vw",
            }}
          />
          Current Levels
        </Button>
      </Box>
      <Box sx={{ paddingLeft: "2vw", paddingTop: "8vh" }}>
        <Button
          onClick={() => setClickedIcon("help")}
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "1.2vw 0",
            width: "60%",
            textTransform: "none",
            fontSize: "1.2vw",
            backgroundColor: "transparent",
            border: clickedIcon === "help" ? "0.2vw solid black" : "none",
          }}
        >
          <HelpOutlineIcon
            sx={{
              fontSize: "3vw",
            }}
          />
          Help
        </Button>
      </Box>
    </Grid>
  );
};

export default Sidebar;
