import { useState, useEffect } from "react";
import Layout from "../components/layout";
import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import MilitaryCards from "../components/cards/militaryCards";

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

export default function Military() {
  const [crusaders, setCrusaders] = useState(null);
  const [guardians, setGuardians] = useState(null);
  const [warriorMonks, setWarriorMonks] = useState(null);
  const [crimsonSquad, setCrimsonSquad] = useState(null);
  const [chocoboKnights, setChocoboKnights] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchMilitary(role, setMilitary) {
      try {
        const response = await fetch(
          `/api/militaryData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch military branch data");
        }

        const data = await response.json();
        setMilitary(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchMilitary("Crusaders", setCrusaders);
    fetchMilitary("Guardians", setGuardians);
    fetchMilitary("Warrior Monks", setWarriorMonks);
    fetchMilitary("Crimson Squad", setCrimsonSquad);
    fetchMilitary("Chocobo Knights", setChocoboKnights);
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Military
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: "20px",
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
            <Tab label="Crusaders" {...a11yProps(0)} />
            <Tab label="Guardians" {...a11yProps(1)} />
            <Tab label="Warrior Monks" {...a11yProps(2)} />
            <Tab label="Crimson Squad" {...a11yProps(3)} />
            <Tab label="Chocobo Knights" {...a11yProps(4)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {crusaders && <MilitaryCards data={crusaders} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {guardians && <MilitaryCards data={guardians} />}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {warriorMonks && <MilitaryCards data={warriorMonks} />}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {crimsonSquad && <MilitaryCards data={crimsonSquad} />}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {chocoboKnights && <MilitaryCards data={chocoboKnights} />}
        </TabPanel>
      </Box>
    </Layout>
  );
}
