import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function Culture() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <h1>Life in Spira</h1>
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
            <Tab label="Races & Culture" href={`/races/`} />
            <Tab label="Scripts" href={`/scripts/`} />
            <Tab label="Religion" href={`/religion/`} />
            <Tab label="Military" href={`/military/`} />
            <Tab label="Technology" href={`/technology/`} />
            <Tab label="Blitzball" href={`/blitzball/`} />
          </Tabs>
        </Box>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4} marginTop={5}>
            <Image
              src="/images/Dream_Zanarkand_Culture.jpg"
              height={400}
              width={388}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Dream Zanarkand Culture"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={8} marginTop={15}>
            <p>
              <b>Spira</b> has a variety of different races and languages
              thoughout its lands. Each region has its own people, with their
              own culture.
              <b> Blitzball</b> is a shared sport most regions have, and brings
              them together. The fear of <b>Sin</b> and its destruction is
              another thing they have in common. Although they may have differnt
              ways to achieve the
              <b> Calm</b>, they all yearn for peace in the end.
            </p>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
