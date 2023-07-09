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

export default function Shiva() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Shiva
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
              Shiva is an feminine humanoind ice elemental aeon. Her fayth is a
              Macalanian preistess named Silvia. She was turned into a fayth
              statue and kept in the temple erected on top of a perpetually
              frozen lake. The mantle in the full-body image is cast off in game
              when she is summoned, fluttering safely into Yuna's outstretched
              hands. There are parts made of ice attached to her right arm. This
              is semitransparent and handled the same way as the ice on her
              chest. Diamond Dust sparkles from the edges of her cape and her
              tail accessory. Diamond Dust is a phenomenon that occurs during
              severe cold when water particles freeze in the air, causing them
              to sparkle and shine.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Shiva.jpg"
              height={300}
              width={284}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Shiva"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/Shiva_Artwork.webp"
              height={300}
              width={234}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Shiva"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              The queen of ice is a gorgeous sight to behold and an agile
              attacker. Shiva has the highest initial Agility and Evasion of all
              the aeons. She can heal herself with ice magic and will absorb ice
              spells cast upon her. Her unique attack is Heavenly Strike,
              creating a giant block of ice and drops it on an enemy. The attack
              slightly delays the target's next turn in addition to inflicting
              non-elemental damage and the status ailment Threaten.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Her overdrive is Diamond Dust, freezing all enemies in layers of
              ice, and then destroys everything with a leisurely snap of her
              fingers. All of Shiva's attack can inflict more than 9999 HP
              damage after you've activated Lulu's legendary weapon, the Onion
              Knight. After Sin is defeated, Shiva's fayth is released, which
              thaws the frozen lake and submerges the temple underwater.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/fayth_shiva.webp"
              height={300}
              width={284}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Shiva"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
