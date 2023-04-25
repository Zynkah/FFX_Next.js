import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
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

export default function Technology() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <h1>Technology in Spira</h1>
      <hr />
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
            <Tab label="Machina" {...a11yProps(0)} />
            <Tab label="Movie Spheres" {...a11yProps(1)} />
            <Tab label="Gil" {...a11yProps(2)} />
            <Tab label="Fire Arms" {...a11yProps(3)} />
            <Tab label="Vehicles" {...a11yProps(4)} />
            <Tab label="Hand Held" {...a11yProps(5)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Divider>
                <h2>Machina</h2>
              </Divider>
              <p>
                Machina was invented over 3000 years ago and became powerful
                enough to surpass magic. According to the Final Fantasy X
                Scenario Ultimania, the first development in Spira was brought
                about by the power of magic. The use of magic depended on
                individual factors and those who could use magic naturally had
                an advantage, while those who couldn't were discriminated
                against. Thus the age of the magic civilizations was an age of
                inequality. When machina was invented it was revolutionary and
                did away with the inequalities and spread throughout Spira.
                Machina developed quickly, and things once thought impossible
                became an aspect of everyday life. The endless supply of
                electricity made "cities that never slept" a reality. Machina
                was supposed to be an alternative for those who couldn't use
                magic, but when it surpassed it new problems arose. Some nations
                possessed outstanding machina technology, while others didn't,
                and a new age of inequality began.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <br />
              <br />
              <Image
                src="/images/Machina_Cannon.webp"
                height={400}
                width={563}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Machina Cannon"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Divider>
                <h2>Movie Spheres</h2>
              </Divider>
              <p>
                Pyreflies can crystallize into spheres by reacting to people's
                feelings and memories and binding them with images and audio.
                Spheres make use of these properties of pyreflies to make
                recordings. The raw material for spheres is water that contains
                a high concentration of pyreflies, gathered from specific
                locations, such as the Macalania springs. In modern Spira, a
                sphere camera is a common item to use when recording a sphere,
                however some spheres have a built-in mechanism for filming,
                notably when Yuna records her final message to her friends at
                the Mi'ihen Highroad. During the Eternal Calm, movie spheres
                became an important part of the lives of many Spirans. Sphere
                hunting becomes a popular pastime and groups like the Youth
                League and New Yevon seek spheres documenting Spira's history.
                Freelance groups, such as the Gullwings and the Leblanc
                Syndicate, locate spheres for pleasure or profit.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <br />
              <br />
              <Image
                src="/images/sphere.webp"
                height={400}
                width={500}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Movie Sphere"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Divider>
                <h2>Gil</h2>
              </Divider>
              <p>
                Gil (ギル, Giru?), also translated as GP, Gold, and G, is the
                currency in all Final Fantasy games. It is acquired throughout
                each game and used for making various purchases and occasionally
                used via some abilities, such as Gil Toss. In Final Fantasy X,
                gil coins come in several colors (and presumably metals), and
                each bears an image on one side and the value of the coin on the
                other. In Final Fantasy VI and Final Fantasy VII, gil takes the
                form of silver coins with holes through the middle, or gold
                coins with holes in Final Fantasy V. In Final Fantasy XII,
                Penelo can briefly be seen holding a pair of coins presumed to
                be gil, one silver and one gold, with unclear detailed markings
                on them. This suggests that gil is loosely based on the Japanese
                yen (円) or ancient Chinese coins, with the Final Fantasy X gil
                coins appearing very similar to yen coins. The yen, along with
                other Chinese and Japanese currencies, such as the mon, have
                holes in some of the coins, a trait dating back to feudal times
                when coins were carried on string.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <br />
              <br />
              <Image
                src="/images/Gil.webp"
                height={400}
                width={302}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Gil"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Divider>
                <h2>Fire Arms</h2>
              </Divider>
              <p>
                Fire arms are used by many different people in the world of
                Spira. Mostly seen used by members of the military. Since hand
                guns and fire arms are used by the military they are not
                considered as machina. It is not considered blasphemous to use
                them. In battle you will face many enemies using these weapons.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <br />
              <br />
              <Image
                src="/images/Handguns.webp"
                height={400}
                width={280}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Handguns"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Divider>
                <h2>Vehicles</h2>
              </Divider>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Fahrenheit.webp"
                height={400}
                width={607}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Fahrenheit"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Barge_Al_Bhed.webp"
                height={400}
                width={596}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Barge Al Bhed"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Liki_Ship.webp"
                height={400}
                width={637}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Liki Ship"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Snow_Sled.webp"
                height={400}
                width={556}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Snow Sled"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Divider>
                <h2>Hand Held Items</h2>
              </Divider>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Apparatus.webp"
                height={400}
                width={580}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Apparatus"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Camcorder.webp"
                height={400}
                width={433}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Camcorder"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Megaphone.webp"
                height={400}
                width={595}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Megaphone"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Binoculars.webp"
                height={400}
                width={462}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Binoculars"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Layout>
  );
}
