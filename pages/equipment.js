import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Tab, Tabs, Typography, Box } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import EquipmentCards from "../components/cards/equipmentCards";

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

export default function Equipment() {
  const [tidus, setTidus] = useState(null);
  const [yuna, setYuna] = useState(null);
  const [wakka, setWakka] = useState(null);
  const [lulu, setLulu] = useState(null);
  const [kimahri, setKimahri] = useState(null);
  const [auron, setAuron] = useState(null);
  const [rikku, setRikku] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchEquipment(role, setEquipment) {
      try {
        const response = await fetch(
          `/api/equipmentData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch equipment data");
        }

        const data = await response.json();
        setEquipment(data);
      } catch (error) {
        console.error("Errors fetching data:", error);
      }
    }
    fetchEquipment("Tidus Equipment", setTidus);
    fetchEquipment("Yuna Equipment", setYuna);
    fetchEquipment("Wakka Equipment", setWakka);
    fetchEquipment("Lulu Equipment", setLulu);
    fetchEquipment("Kimahri Equipment", setKimahri);
    fetchEquipment("Auron Equipment", setAuron);
    fetchEquipment("Rikku Equipment", setRikku);
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Weapons & Armors
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
            <Tab label="Tidus" {...a11yProps(0)} />
            <Tab label="Yuna" {...a11yProps(1)} />
            <Tab label="Wakka" {...a11yProps(2)} />
            <Tab label="Lulu" {...a11yProps(3)} />
            <Tab label="Kimahri" {...a11yProps(4)} />
            <Tab label="Auron" {...a11yProps(5)} />
            <Tab label="Rikku" {...a11yProps(6)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {tidus && <EquipmentCards data={tidus} />}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {yuna && <EquipmentCards data={yuna} />}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {wakka && <EquipmentCards data={wakka} />}
        </TabPanel>

        <TabPanel value={value} index={3}>
          {lulu && <EquipmentCards data={lulu} />}
        </TabPanel>

        <TabPanel value={value} index={4}>
          {kimahri && <EquipmentCards data={kimahri} />}
        </TabPanel>

        <TabPanel value={value} index={5}>
          {auron && <EquipmentCards data={auron} />}
        </TabPanel>

        <TabPanel value={value} index={6}>
          {rikku && <EquipmentCards data={rikku} />}
        </TabPanel>
      </Box>
    </Layout>
  );
}
