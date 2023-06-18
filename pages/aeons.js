import Layout from "../components/layout";
import Image from "next/image";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { Card } from "@nextui-org/react";
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

export default function Aeons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Aeons
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
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Maesters" href={`/maesters/`} />
            <Tab label="Summoners" href={`/summoners/`} />
            <Tab label="Aeons" href={`/aeons/`} value={0} />
          </Tabs>
        </Box>

        <Box sx={{ margin: "20px" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Valefor.jpeg"
                    height={400}
                    width={513}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Valefor"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Valefor</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    An arieal aeon with great wings whose fayth statue is
                    located in Besaid Temple.
                  </Card.Body>
                  <Link href={`../aeons/valefor/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Ifrit.jpg"
                    height={400}
                    width={413}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Ifrit"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Ifrit</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    A demon that holds dominion over fire, with a fayth statue
                    situated in Kilika Temple.
                  </Card.Body>
                  <Link href={`../aeons/ifrit/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Ixion.jpg"
                    height={400}
                    width={482}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Ixion"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Ixion</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    A horned beast covered by lightning whose fayth statue
                    stands in Djose Temple.
                  </Card.Body>
                  <Link href={`../aeons/ixion/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Shiva.jpg"
                    height={400}
                    width={378}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Shiva"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Shiva</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The frozen queen of ice whose fayth statue is situated
                    inside Macalania Temple.
                  </Card.Body>
                  <Link href={`../aeons/shiva/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Bahamut.jpg"
                    height={400}
                    width={380}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Bahamut"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Bahamut</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    A four-winged sacred dragon beast with a fayth statue
                    located in Bevelle.
                  </Card.Body>
                  <Link href={`../aeons/bahamut/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Yojimbo.jpeg"
                    height={400}
                    width={457}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Yojimbo"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Yojimbo</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    A master swordsman whose fayth statue is situated in the
                    Cavern of the Stolen Fayth.
                  </Card.Body>
                  <Link href={`../aeons/yojimbo/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Anima.jpeg"
                    height={400}
                    width={358}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Anima"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Anima</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    An aeon bound in heavy chains whose fayth statue can be
                    found in the temple of Yevon-Baaj.
                  </Card.Body>
                  <Link href={`../aeons/anima/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Magus_Sisters.jpeg"
                    height={400}
                    width={419}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Magus Sisters"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Magus Sisters</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    Three sister aeons whose fayth statue is situated in Remiem
                    Temple.
                  </Card.Body>
                  <Link href={`../aeons/magus_sisters/`}>Read More</Link>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
