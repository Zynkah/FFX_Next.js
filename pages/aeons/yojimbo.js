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

export default function Yojimbo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Yojimbo
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
              src="/images/Yojimbo.jpeg"
              height={300}
              width={343}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Yojimbo Profile"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              The blade is his left hand, Zanmato, can only be seen in the rare
              instance that he uses the attack of the same name. Yojimbo is the
              secret aeon you can acquire by visiting the Cavern of the Stolen
              Fayth beneath the bridge at the northeast end of the Calm Lands.
              To acquire Yojimbo, fight through the cave and defeat Yojimbo in
              battle.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Proceed to the Chamber of the Fayth and speak to Yojimbo to
              negotiate a fee for his services. He will offer his lowest initial
              asking price if you choose the option "To defeat the most powerful
              of enemies". For your first bid, offer half of his asking price
              plus 1 gil. So, if he asks for 250,000 offer 125,001 gil. After
              his next offer, raise your bid by 1 gil. By the time her proposes
              205,000, he will generally accept offers below 200,000, though not
              much lower. If at any point you offer him at least triple his
              asking price, he will give you two teleport spheres in addition to
              his services.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Yojimbo-artwork.webp"
              height={300}
              width={322}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Yojimbo Body"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/Fayth_Yojimbo.webp"
              height={300}
              width={322}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Yojimbo Fayth"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Yojimbo has four unique attacks; Daigoro, Kozuka, Wakizashji, and
              Zanmato yet has not selectable overdrive attacks. As a
              sword-for-hire, he will attack enemies based on how much you pay
              him. Yojimbo's attacks exceed 9999 HP damage once you activated
              Auron's Masamune.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
