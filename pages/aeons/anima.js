import Layout from "../../components/layout";
import Image from "next/image";
import { Grid, Typography, Box, Tab, Tabs } from "@mui/material";
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

export default function Anima() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Anima
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
            <Tab label="Maesters" href={`/maesters/`} />
            <Tab label="Summoners" href={`/summoners/`} />
            <Tab label="Aeons" href={`/aeons/`} />
          </Tabs>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Its fayth is Seymour's mother, and the plate around its neck is
              engraved with her image. Anima is first seen as Seymour's chilling
              aeon, but the party can acquire it by undertaking a quest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Anima.jpeg"
              height={300}
              width={268}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Anima Profile"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/Anima_Artwork.webp"
              height={300}
              width={162}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Anima Body"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Return to Baaj Temple from the airship, defeating Geosgaeno, and
              then enter the underwater temple. Find the six hidden items in the
              Cloister of Trials at each temple, and then approach each statue
              inside Anima's shrine. This opens a doorway to the most
              devastating aeon in the game.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} marginTop={5}>
            <Typography var="body1" component="p">
              Anima's unique attack, Pain, conjures the essence of misery and
              anguish, and unleashes it upon a single enemy. The attack has a
              high chance of causing instant death. Pain has a high recovery
              time. Her overdrive is Oblivion, the most horrifying overdrive
              that inflicts multiple non-elemental attacks on all enemies.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/Fayth_Anima.webp"
              height={300}
              width={330}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Anima Fayth"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
