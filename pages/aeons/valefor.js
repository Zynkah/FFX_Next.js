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

export default function Valefor() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Valefor
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
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Valefor.jpeg"
            height={300}
            width={385}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Valefor"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <Typography variant="body1" component="p">
            An avian aeon with great dragon-like wings. Her fayth statue is
            located in Besaid Temple and is a teenage girl. She is a
            non-elemental aerial aeon, her symbol from the Yevon Script is the
            kanji for nothing (無 mu), but nothingness may also be associated
            with the element of air. Mu is a Zen Buddhist concept expressing
            negation of the self, selflessness, innocence and the purity of
            soul. These are traits a summoner must achieve to succeed in
            defeating Sin, since self sacrifice to the Eternal Calm is required.
            She is Yuna's first aeon.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <Typography variant="body1" component="p">
            This aerial aeon easily dodges many attacks from the ground.
            Valefor's regular attack is a quick, snatching motion, which is
            enhanced by the aeon's high accuracy. Unlike other aeons, Valeforis
            unique in not having the Piercing auto-ability, and also has a
            slightly lower attack power. The unique attack is Sonic Wings, and
            attack that sends a shockwave at one enemy, inflicting damage and
            delaying the enemy's next turn. Because of the delay effect and
            short recovery time, you can often hit enemies repeatedly with Sonic
            Wings.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/ValeforArt.webp"
            height={300}
            width={407}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Valefor"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/fayth_valefor.webp"
            height={300}
            width={400}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Valefor"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <Typography variant="body1" component="p">
            The Overdrive attack is Energy Ray which fires a super-charged beam
            that explodes underneath all the foes and causes non-elemental
            damage. There is a second secret overdrive for Valefor as well. You
            obtain this all you have to do is return to Besaid and speak to a
            little girl with a dog standing next to the temple. You will receive
            an item that gives Valefor the Overdrive energy blast. If the little
            girl is not in by the temple then look for her in the item shop.
            Energy blast inflicts greater damage at the cost of higher recovery
            time. Once Yuna activates her ultimate weapon, Nirvana, all of
            Valefor's attacks can break the 9999 damage limit.
          </Typography>
        </Grid>
      </Grid>
      </Box>
    </Layout>
  );
}
