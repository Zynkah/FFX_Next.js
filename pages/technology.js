import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import TechnologyCards from "../components/cards/technologyCards";

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

export default function Technology() {
  const [machina, setMachina] = useState(null);
  const [movieSphere, setMovieSphere] = useState(null);
  const [gil, setGil] = useState(null);
  const [fireArms, setFireArms] = useState(null);
  const [vehicle, setVehicles] = useState(null);
  const [handHeldItems, setHandHeldItems] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchMachina() {
      try {
        const role = "Machina";

        const response = await fetch(
          `/api/technologyData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tech item data");
        }

        const data = await response.json();
        setMachina(data.technology);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchMovieSphere() {
      try {
        const role = "Movie Sphere";

        const response = await fetch(
          `/api/technologyData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tech item data");
        }

        const data = await response.json();
        setMovieSphere(data.technology);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchGil() {
      try {
        const role = "Gil";

        const response = await fetch(
          `/api/technologyData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tech item data");
        }

        const data = await response.json();
        setGil(data.technology);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchFireArms() {
      try {
        const role = "Fire Arms";

        const response = await fetch(
          `/api/technologyData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tech item data");
        }

        const data = await response.json();
        setFireArms(data.technology);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchVehicles() {
      try {
        const role = "Vehicles";

        const response = await fetch(
          `/api/technologyData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tech item data");
        }

        const data = await response.json();
        setVehicles(data.technology);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchHandHeldItem() {
      try {
        const role = "Hand Held Items";

        const response = await fetch(
          `/api/technologyData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tech item data");
        }

        const data = await response.json();
        setHandHeldItems(data.technology);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchHandHeldItem();
    fetchVehicles();
    fetchFireArms();
    fetchGil();
    fetchMachina();
    fetchMovieSphere();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Technology in Spira
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
            <Tab label="Machina" {...a11yProps(0)} />
            <Tab label="Movie Spheres" {...a11yProps(1)} />
            <Tab label="Gil" {...a11yProps(2)} />
            <Tab label="Fire Arms" {...a11yProps(3)} />
            <Tab label="Vehicles" {...a11yProps(4)} />
            <Tab label="Hand Held" {...a11yProps(5)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {machina && <TechnologyCards data={machina} />}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {movieSphere && <TechnologyCards data={movieSphere} />}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {gil && <TechnologyCards data={gil} />}
        </TabPanel>

        <TabPanel value={value} index={3}>
          {fireArms && <TechnologyCards data={fireArms} />}
        </TabPanel>

        <TabPanel value={value} index={4}>
          {vehicle && <TechnologyCards data={vehicle} />}
        </TabPanel>

        <TabPanel value={value} index={5}>
          {handHeldItems && <TechnologyCards data={handHeldItems} />}
        </TabPanel>
      </Box>
    </Layout>
  );
}
