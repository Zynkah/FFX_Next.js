import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Divider } from "@nextui-org/react";
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

export default function Weapons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <h1>Weapons & Armor</h1>
      <hr />
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
            <Tab label="Tidus" {...a11yProps(0)} />
            <Tab label="Yuna" {...a11yProps(1)} />
            <Tab label="Wakka" {...a11yProps(2)} />
            <Tab label="Lulu" {...a11yProps(3)} />
            <Tab label="Kimahri" {...a11yProps(4)} />
            <Tab label="Auron" {...a11yProps(5)} />
            <Tab label="Rikku" {...a11yProps(6)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Divider>
            <h2>Tidus</h2>
          </Divider>
          <br />
          <br />
          <p>Tidus wields a sword with a shield as his weapon and armor.</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/TidusSwords.webp"
                height={400}
                width={324}
                style={{
                  margin: "auto",
                }}
                alt="Tidus Swords"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/TidusShields.webp"
                height={400}
                width={302}
                style={{
                  margin: "auto",
                }}
                alt="Tidus Shields"
              />
              <br />
              <br />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Divider>
            <h2>Yuna</h2>
          </Divider>
          <br />
          <br />
          <p>Yuna heals with a rod and is embued by a ring.</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/YunasRods.webp"
                height={400}
                width={218}
                style={{
                  margin: "auto",
                }}
                alt="Yuna's Rods"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/YunasRings.webp"
                height={400}
                width={563}
                style={{
                  margin: "auto",
                }}
                alt="Yuna's Rings"
              />
              <br />
              <br />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Divider>
            <h2>Wakka</h2>
          </Divider>
          <br />
          <br />
          <p>Wakka beats down his enemies using a Blitzball.</p>
          <Grid item xs={12}>
            <Image
              src="/images/WakkasBalls.webp"
              height={400}
              width={612}
              style={{
                margin: "auto",
              }}
              alt="Wakka's Balls"
            />
            <br />
            <br />
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Divider>
            <h2>Lulu</h2>
          </Divider>
          <br />
          <br />
          <p>
            Lulu uses her magic through her plushes as weapons with a bangle as
            her armor.
          </p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Image
                src="/images/Doll-Cactuar.webp"
                height={300}
                width={234}
                style={{
                  margin: "auto",
                }}
                alt="Doll Cactuar"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Image
                src="/images/Doll-Moogle.webp"
                height={300}
                width={164}
                style={{
                  margin: "auto",
                }}
                alt="Doll-Moogle"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/LulusBangles.webp"
                height={400}
                width={703}
                style={{
                  margin: "auto",
                }}
                alt="Lulu's Bangles"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Image
                src="/images/Doll-CaitSith.webp"
                height={300}
                width={243}
                style={{
                  margin: "auto",
                }}
                alt="Doll CaitSith"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Image
                src="/images/Doll-Moomba.webp"
                height={300}
                width={206}
                style={{
                  margin: "auto",
                }}
                alt="Doll-Moomba"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Image
                src="/images/Doll-Pupu.webp"
                height={300}
                width={184}
                style={{
                  margin: "auto",
                }}
                alt="Doll-Pupu"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Image
                src="/images/Doll-OnionKnight.webp"
                height={300}
                width={262}
                style={{
                  margin: "auto",
                }}
                alt="Doll-OnionKnight"
              />
              <br />
              <br />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Divider>
            <h2>Kimahri</h2>
          </Divider>
          <br />
          <br />
          <p>
            Kimarhi slashes enemies with his lance and has armlets as armor.
          </p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image
                src="/images/KimahrisLances.webp"
                height={400}
                width={210}
                style={{
                  margin: "auto",
                }}
                alt="Kimahri's Lances"
              />
            </Grid>
            <Grid item xs={12} md={4} marginTop={5}>
              <Image
                src="/images/Spirit_Lance.webp"
                height={300}
                width={130}
                style={{
                  margin: "auto",
                }}
                alt="Spirit Lance"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/images/KimahrisArmlets.webp"
                height={400}
                width={227}
                style={{
                  margin: "auto",
                }}
                alt="Kimahri's Armlets"
              />
              <br />
              <br />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Divider>
            <h2>Auron</h2>
          </Divider>
          <br />
          <br />
          <p>
            Auron pierces through his enemies with a katana and protects
            himeself with bracers.
          </p>
          <Grid container spacing={2}>
            <br />
            <br />
            <Grid item xs={12}>
              <Image
                src="/images/AuronsKatanas.webp"
                height={400}
                width={642}
                style={{
                  margin: "auto",
                }}
                alt="Auron's Katanas"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/Masamune.webp"
                height={400}
                width={268}
                style={{
                  margin: "auto",
                }}
                alt="Masamune"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/AuronsBracers.webp"
                height={400}
                width={273}
                style={{
                  margin: "auto",
                }}
                alt="Auron's Bracers"
              />
              <br />
              <br />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={6}>
          <Divider>
            <h2>Rikku</h2>
          </Divider>
          <br />
          <br />
          <p>Rikku mugs her enemies with her claws and guards with targes.</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/RikkusClaws.webp"
                height={400}
                width={463}
                style={{
                  margin: "auto",
                }}
                alt="Rikku's Claws"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/RikkuTarges.webp"
                height={400}
                width={408}
                style={{
                  margin: "auto",
                }}
                alt="Rikku Targes"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Layout>
  );
}
