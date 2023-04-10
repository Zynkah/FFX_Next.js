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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Scripts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <h1>Maesters</h1>
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
            <Tab label="Maesters" href={`/maesters/`} />
            <Tab label="Summoners" href={`/summoners/`} />
            <Tab label="Aeons" href={`/aeons/`} />
          </Tabs>
        </Box>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} marginTop={10}>
            <Image
              src="/images/Mika.webp"
              height={350}
              width={350}
              style={{
                margin: "auto",
              }}
              alt="Grand Maester Mika"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/WenKinoc.png"
              height={400}
              width={190}
              style={{
                margin: "auto",
              }}
              alt="Wen Kinoc"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/Kelk.webp"
              height={400}
              width={241}
              style={{
                margin: "auto",
              }}
              alt="Kelk"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/Jyscal.webp"
              height={400}
              width={250}
              style={{
                margin: "auto",
              }}
              alt="Jyscal"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/Seymour.jpg"
              height={400}
              width={322}
              style={{
                margin: "auto",
              }}
              alt="Wen Kinoc"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
