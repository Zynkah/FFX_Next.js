import Layout from "../components/layout";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";

import utilStyles from "../styles/utils.module.css";

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

export default function Military() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Military
      </Typography>
      <Divider />
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
            <Tab label="Crusaders" {...a11yProps(0)} />
            <Tab label="Guardians" {...a11yProps(1)} />
            <Tab label="Warrior Monks" {...a11yProps(2)} />
            <Tab label="Crimson Squad" {...a11yProps(3)} />
            <Tab label="Chocobo Knights" {...a11yProps(4)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Image
            src="/images/WenKinoc.png"
            height={400}
            width={190}
            style={{
              margin: "auto",
            }}
            alt="Wen Kinoc Agency"
          />
          <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
            <Typography variant="h5">Crusaders</Typography>
          </Divider>
          <Typography variant="body">
            The Crusaders were formed as the Crimson Blades 800 years ago by
            Lord Mi'ihen. As the first volunteer-based organization dedicated to
            defending the people of Spira from Sin, the Crimson Blades grew
            quickly in number. The Maesters of Yevon began to fear their numbers
            and accused the Crimson Blades of rebellion. Lord Mi'ihen traveled
            to Bevelle to fight the claims, and won the Maesters' trust. He
            renamed the Crimson Blades the Crusaders, and the organization began
            to operate as members of the clergy of Yevon. The road Lord Mi'ihen
            traveled to Bevelle was renamed the Mi'ihen Highroad in reflection
            of his actions.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Image
            src="/images/Zaon.webp"
            height={400}
            width={219}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Zaon"
          />
          <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
            <Typography variant="h5">Guardians</Typography>
          </Divider>
          <Typography variant="body">
            Guardians are the only individuals allowed to accompany a summoner
            into a Chamber of the Fayth. If anyone else does so, the summoner
            may face sanctions as strong as excommunication from Yevon, even if
            they did so without the summoner's knowledge or consent.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Image
            src="/images/Warrior_Monk.webp"
            height={400}
            width={177}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Warrior Monk"
          />
          <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
            <Typography variant="h5">Warrior Monks</Typography>
          </Divider>
          <Typography variant="body">
            The history of the Warrior Monks date back at least 1,000 years
            prior to the events of Final Fantasy X. In the Machina War, the
            Warrior Monks were under the control of Bevelle and were used to
            fight Zanarkand. Many monks died during Sin's destruction of
            Zanarkand, and many Fallen Monks still dwell there as unsent.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Image
            src="/images/Crimson_Squad.webp"
            height={300}
            width={451}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Crimson Squad"
          />
          <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
            <Typography variant="h5">Crimson Squad</Typography>
          </Divider>
          <Typography variant="body">
            Maester Wen Kinoc assembled the Crimson Squad under the guise of
            fulfilling the society's demand for a stronger army, but the true
            reason was to privatize the Crusaders by inserting his hand-reared
            Crimson Squad members.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Image
            src="/images/Chocobo_Knights.webp"
            height={300}
            width={451}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Chocobo Knights"
          />
          <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
            <Typography variant="h5">Chocobo Knights</Typography>
          </Divider>
          <Typography variant="body">
            The Chocobo Knights of Spira are an elite group of mounted soldiers,
            consisting of the serious but kind Captain Lucil, cheerful Elma, and
            the uncomfortable and slightly incompetent Clasko. It is mentioned
            by an NPC that normally one must be a skilled chocobo rider or
            achieve combat merit to become a chocobo knight, and that Clasko was
            likely knighted because he is good at earning chocobos' trust. It is
            never stated directly that the knights are part of the Crusaders,
            but they do take part in Operation Mi'ihen and both Lucil and Elma
            are shown giving orders to Luzzu and Gatta.
          </Typography>
        </TabPanel>
      </Box>
    </Layout>
  );
}
