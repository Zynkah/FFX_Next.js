import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import ScriptCards from "../components/cards/scriptCards";

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

export default function Scripts() {
  const [spiranScript, setSpiranScript] = useState(null);
  const [alBhedSpcript, setAlBhedSpcript] = useState(null);
  const [yevonScript, setYevonScript] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchSpiranScript() {
      try {
        const role = "Spiran Scripts";

        const response = await fetch(
          `/api/scriptData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch script data");
        }

        const data = await response.json();
        setSpiranScript(data.script);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchAlBhedSpcript() {
      try {
        const role = "Al Bhed Scripts";

        const response = await fetch(
          `/api/scriptData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch script data");
        }

        const data = await response.json();
        setAlBhedSpcript(data.script);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchYevonScript() {
      try {
        const role = "Yevon Scripts";

        const response = await fetch(
          `/api/scriptData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch script data");
        }

        const data = await response.json();
        setYevonScript(data.script);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchSpiranScript();
    fetchAlBhedSpcript();
    fetchYevonScript();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Scripts
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
            <Tab label="Spiran Script" {...a11yProps(0)} />
            <Tab label="Al Bhed Script" {...a11yProps(1)} />
            <Tab label="Yevon Script" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {spiranScript && <ScriptCards data={spiranScript} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {alBhedSpcript && <ScriptCards data={alBhedSpcript} />}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {yevonScript && <ScriptCards data={yevonScript} />}
        </TabPanel>
      </Box>
    </Layout>
  );
}
