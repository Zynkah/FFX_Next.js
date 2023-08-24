import { useState, useEffect } from "react";
import RaceCards from "../components/cards/racesCards";
import Layout from "../components/layout";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import * as React from "react";
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

export default function Races() {
  const [humanoids, setHumanoids] = useState(null);
  const [demiHumans, setDemiHumans] = useState(null);
  const [creatures, setCreatures] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchRaces(role, setRace) {
      try {
        const response = await fetch(
          `/api/raceData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch creatures data");
        }

        const data = await response.json();
        setRace(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchRaces("Humanoids", setHumanoids);
    fetchRaces("Demi-Humanoids", setDemiHumans);
    fetchRaces("Creatures", setCreatures);
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Races & Creatures
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Humaniods" {...a11yProps(0)} />
            <Tab label="Demi-Humans" {...a11yProps(1)} />
            <Tab label="Creatures" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {humanoids && <RaceCards data={humanoids} />}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {demiHumans && <RaceCards data={demiHumans} />}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {creatures && <RaceCards data={creatures} />}
        </TabPanel>
      </Box>
    </Layout>
  );
}
