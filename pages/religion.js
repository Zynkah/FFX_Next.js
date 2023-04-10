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
      <h1>Religion</h1>
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
          <Grid item xs={12} sm={6} md={6} lg={4} marginTop={13}>
            <Image
              src="/images/Child_Seymour.webp"
              height={400}
              width={357}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Child Seymour with Anima"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={8} marginTop={10}>
            Religion is an important part of life for many of the peoples of
            Spira, with a large majority of the population describing themselves
            as "Yevonites". Though by the end of Final Fantasy X some people had
            begun to question them, nevertheless the teachings of Yevon were
            millennium-old and heavily influential. The Yevonite clergy taught
            that Sin was a divine punishment set upon the people for their pride
            in the use of machines. As a result, the temples forbade the use of
            modern technology, and promoted a culture of atonement for past sins
            in the hopes of appeasing Sin. While the Yevon church forbids most
            machina including weapons, their capital Bevelle retains machina to
            ensure its dominance. The Al Bhed are seen as dangerous to the Yevon
            clergy because they use machina and pose a threat to the church's
            uncontested control of Spira. The church retains its power by role
            in using the Final Summoning which results in the sacrifice of the
            summoner and her guardian to prevent its secrets from being
            divulged. Though Yevon set up Operation Mi'ihen to instill further
            loyalty to the teachings by making the Crusaders use machina that
            would never win against Sin.
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
