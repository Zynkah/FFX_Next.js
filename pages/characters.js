import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card } from "@nextui-org/react";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
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

export default function Characters() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography
        variant="h3"
        sx={{ margin: "20px" }}
        className={utilStyles.title}
      >
        Characters
      </Typography>
      <hr />
      <br />
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
            <Tab label="Main Characters" {...a11yProps(0)} />
            <Tab label="Supporting Chartacters" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Tidus.jpg"
                      height={400}
                      width={363}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Tidus"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Tidus</h3>
                    <Card.Divider />
                    <p>
                      The optimistic crybaby who gives hope to a world gripped
                      in the spiral of death. The son of Jecht, a blitzball
                      legend, Tidus rebelled against his father from an early
                      age.
                    </p>
                    <Link href={`../characters/tidus/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Yuna.jpg"
                      height={400}
                      width={363}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Yuna"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Yuna</h3>
                    <Card.Divider />
                    <p>
                      The summoner possessing endless kindness, willing to
                      sacrifice herself to save the world. Daughter of High
                      Summoner Braska.
                    </p>
                    <Link href={`../characters/yuna/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Auron.jpg"
                      height={400}
                      width={345}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Auron"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Auron</h3>
                    <Card.Divider />
                    <p>
                      The legendary guardian who guides a young man to fulfill a
                      promise to a friend. A man tasked with watching over Tidus
                      in Dream Zanarkand who created the opportunity for Tidus
                      to venture to Spira.
                    </p>
                    <Link href={`../characters/auron/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Kimahri.jpg"
                      height={400}
                      width={408}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Kimahri"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Kimahri</h3>
                    <Card.Divider />
                    <p>
                      The hornless Ronso youth dedicating his life to Yuna. A
                      Ronso who serves as Yuna's first guardian.
                    </p>
                    <Link href={`../characters/kimahri/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Wakka.jpg"
                      height={400}
                      width={290}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Wakka"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Wakka</h3>
                    <Card.Divider />
                    <p>
                      A good-natured older-brother type who has dedicated his
                      youth to blitzball. The young coach and most valuable
                      player of Besaid Village's blitzball team, the Besaid
                      Aurochs.
                    </p>
                    <Link href={`../characters/wakka/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Lulu.jpg"
                      height={400}
                      width={313}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Lulu"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Lulu</h3>
                    <Card.Divider />
                    <p>
                      The severe yet sweet Black Mage who aids her comrades with
                      a wealth of knowledge. A female Black Mage acting as
                      Yuna's guardian who watches over her like a big sister.
                    </p>
                    <Link href={`../characters/lulu/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Rikku.jpg"
                      height={400}
                      width={265}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Rikku"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Rikku</h3>
                    <Card.Divider />
                    <p>
                      A hearty and hard-working Al Bhed lass, constantly
                      thinking about what she can accomplish. Daughter to the
                      chief of the Al Bhed, a tribe of people persecuted for
                      opposing the teachings of Yevon, Rikku is also Yuna's
                      cousin on her mother's side.
                    </p>
                    <Link href={`../characters/rikku/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Seymour.webp"
                      height={400}
                      width={400}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Seymour"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Seymour</h3>
                    <Card.Divider />
                    <p>
                      Seymour is the son of Jyscal, who became leader of the
                      Guado, and a human woman.
                    </p>
                    <Link href={`../characters/seymour/`}>Read More</Link>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Layout>
  );
}
