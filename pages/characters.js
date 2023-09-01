import React, { useState, useEffect } from "react";
import CharacterCards from "../components/cards/characterCard";
import Layout from "../components/layout";
import { Typography, Box, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Characters() {
  const [mainCharacters, setMainCharacters] = useState(null);
  const [supportingCharacters, setSupportingCharacters] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchCharacter(role, setCharacter) {
      try {
        const response = await fetch(
          `/api/characterData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch characters data");
        }

        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching characters data:", error);
      }
    }

    fetchCharacter("Main Characters", setMainCharacters);
    fetchCharacter("Supporting Characters", setSupportingCharacters);
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Characters
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="basic tabs"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Main Characters" {...a11yProps(0)} />
            <Tab label="Supporting Characters" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {mainCharacters && <CharacterCards data={mainCharacters} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {supportingCharacters && (
            <CharacterCards data={supportingCharacters} />
          )}
        </TabPanel>
      </Box>
    </Layout>
  );
}
