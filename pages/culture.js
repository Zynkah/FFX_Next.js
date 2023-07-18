import Layout from "../components/layout";
import Image from "next/image";
import { Grid, Tabs, Tab, Box, Typography } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import { Divider } from "@nextui-org/react";

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
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Life in Spira
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
            <Tab label="Races" href={`/races/`} />
            <Tab label="Scripts" href={`/scripts/`} />
            <Tab label="Religion" href={`/religion/`} />
            <Tab label="Military" href={`/military/`} />
            <Tab label="Technology" href={`/technology/`} />
            <Tab label="Blitzball" href={`/blitzball/`} />
          </Tabs>
        </Box>
        <Divider />
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
            <Typography variant="body">
              <b>Spira</b> has a variety of different races and languages
              thoughout its lands. Each region has its own people, with their
              own culture.
              <b> Blitzball</b> is a shared sport most regions have, and brings
              them together. The fear of <b>Sin</b> and its destruction is
              another thing they have in common. Although they may have differnt
              ways to achieve the
              <b> Calm</b>, they all yearn for peace in the end.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
