import Layout from "../components/layout";
import Image from "next/image";
import { Grid, Tabs, Tab, Typography, Box } from "@mui/material";
import { Divider, Container } from "@nextui-org/react";
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

export default function Scripts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} marginY={10}>
              <Container style={{ marginBottom: "35px" }}>
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">Spiran Script</Typography>
                </Divider>
              </Container>
              <Image
                src="/images/Sphere-Broadcast-Billboard.webp"
                height={200}
                width={231}
                style={{
                  margin: "auto",
                  marginTop: "50px",
                  marginBottom: "30px",
                  borderRadius: "5px",
                }}
                alt="sphere broadcast billboard"
              />
              <Typography variant="body">
                A curvy script used all across Spira. Characters exist for each
                uppercase and lowercase letter. This language can be found in
                many locations. On signs, Blitzball team logos, all over the
                Luca Stadium, and more.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} marginY={10}>
              <Image
                src="/images/Spiran_Script.webp"
                height={400}
                width={515}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Spiran Script"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} marginY={10}>
              <Container style={{ marginBottom: "35px" }}>
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">Al Bhed Script</Typography>
                </Divider>
              </Container>
              <Image
                src="/images/Al-Bhed-Primer-Artwork.webp"
                height={200}
                width={296}
                style={{
                  margin: "auto",
                  marginTop: "50px",
                  marginBottom: "30px",
                  borderRadius: "5px",
                }}
                alt="Al Bhed Primer"
              />
              <Typography variant="body">
                The script used by the Al Bhed, distinctive for its combination
                of two to four fragments to make each character. Uppercase and
                lowercase variations are very similar across the characters.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} marginY={10}>
              <Image
                src="/images/Al_Bhed_Script.webp"
                height={400}
                width={597}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Al Bhed Script"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} marginY={10}>
              <Container style={{ marginBottom: "35px" }}>
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">Yevon Script</Typography>
                </Divider>
              </Container>
              <Image
                src="/images/Kilika-temple-artwork-ffx.webp"
                height={200}
                width={251}
                style={{
                  margin: "auto",
                  marginTop: "50px",
                  marginBottom: "30px",
                  borderRadius: "5px",
                }}
                alt="inside Kilika temple"
              />
              <Typography variant="body">
                Characters resembling Sanskrit that are used predominantly in
                Yevon institutions. Some characters have their own individual
                meanings, such as 'fire' or 'Yevon'.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} marginY={10}>
              <Image
                src="/images/Yevon_Script.webp"
                height={400}
                width={515}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Yevon Script"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Layout>
  );
}
