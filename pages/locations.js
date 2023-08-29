import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { Card, Divider } from "@nextui-org/react";
import * as React from "react";
import PropTypes from "prop-types";
import LocationCards from "../components/cards/locationCards";

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

export default function Locations() {
  const [locations, setLocations] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchLocations() {
      try {
        const role = "Location";

        const response = await fetch(
          `/api/locationData?role=${encodeURIComponent(role)}`
        );
        console.log(response);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setLocations(data.location);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchLocations();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Locations
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
            textColor="none"
            indicatorColor="none"
          >
            <Tab label="Temples" href={`/temples/`} />
            <Tab label="Agencies" href={`/agencies/`} />
          </Tabs>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Image
            src="/images/Spira.jpg"
            height={400}
            width={600}
            style={{
              margin: "auto",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
            alt="Spira"
          />
          <Typography variant="body">
            The world of Spira consists of islands floating around a massive
            continent that stretches to the north and south. The world seems to
            be blessed with a warm, pleasant climate. Dream Zanarkand, a realm
            introduced at the start of the story, cannot be visited by living
            beings.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ marginTop: "20px" }}>
          {locations && <LocationCards data={locations} />}
        </Box>
      </Box>
    </Layout>
  );
}
