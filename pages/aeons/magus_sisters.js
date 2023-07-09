import Layout from "../../components/layout";
import Link from "next/link";
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

export default function Magus_Sisters() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Magus Sisters
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
              Each sister has a different insect motif -- a ladybug for Cindy,
              the eldest; a mantis for the middle child, Sandy; and a hornet for
              Mindy, the youngest. Each of their magic circles reflects those
              characteristics. This trio made a previous appearance in FF4.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Magus_Sisters.jpeg"
              height={300}
              width={314}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Magus Sisters Profile"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/MagusSisters_Full.webp"
              height={300}
              width={320}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Magus Sisters Body"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              They can be yours to summon by undertaking a side quest. Capture
              all of the enemies in the Mt. Gagazet area, and return to the
              monster arena to get the Blossom Crown. Acquire all the other
              aeons, including Yojimbo and Anima, and return to Remiem Temple in
              the Calm Lands. Challenge and defeat Belgemine's versions of your
              aeons. After defeating her version of Bahamut, she will give you
              the Flower Scepter. Continue to defeat Yojimbo and Anima. Then
              move to the door in the back and unseal it with these two key
              items. The Magus Sisters are like three separate aeons. As such,
              they are a bit difficult to control. There are verbal requests
              that must be made, and whether or not they grant Yuna's wishes
              depends upon their level of morale. These sisters have 3 unique
              attacks; Camisade, Razzia and Passado.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              The sisters might perform their unique attacks randomly when the
              "Do what you will" choice is selected, or they might do it when
              Yuna shouts "Go! Go!". Cindy's Camisade shoots blades of fire at
              an enemy, while Sandy's Razzia launches her onto her target.
              Little Mindy's Passado will rapidly fire a burst of fifteen
              stingers at a single enemy. Their overdrive is Delta Attack. When
              the Magus Sisters are all in Overdrive mode at the same time, a
              new command, "Combine Powers!" appears. The sisters will join
              forces and perform one of the most devastating overdrives in the
              entire game.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/MagusSisters_fayth.webp"
              height={300}
              width={264}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Magus Sisters Fayth"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
