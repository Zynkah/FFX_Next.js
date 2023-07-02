import Layout from "../components/layout";
import Link from "next/link";
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
import { Card, Button } from "@nextui-org/react";
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
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Characters
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
                    <Typography variant="h6">Tidus</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The optimistic crybaby who gives hope to a world gripped
                      in the spiral of death. The son of Jecht, a blitzball
                      legend, Tidus rebelled against his father from an early
                      age.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/tidus/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
                    <Typography variant="h6">Yuna</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The summoner possessing endless kindness, willing to
                      sacrifice herself to save the world. Daughter of High
                      Summoner Braska.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/yuna/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
                    <Typography variant="h6">Auron</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The legendary guardian who guides a young man to fulfill a
                      promise to a friend. A man tasked with watching over Tidus
                      in Dream Zanarkand who created the opportunity for Tidus
                      to venture to Spira.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/auron/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
                    <Typography variant="h6">Kimahri</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The hornless Ronso youth dedicating his life to Yuna. A
                      Ronso who serves as Yuna's first guardian.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/kimahri/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
                    <Typography variant="h6">Wakka</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A good-natured older-brother type who has dedicated his
                      youth to blitzball. The young coach and most valuable
                      player of Besaid Village's blitzball team, the Besaid
                      Aurochs.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/wakka/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
                    <Typography variant="h6">Lulu</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The severe yet sweet Black Mage who aids her comrades with
                      a wealth of knowledge. A female Black Mage acting as
                      Yuna's guardian who watches over her like a big sister.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/lulu/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
                    <Typography variant="h6">Rikku</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A hearty and hard-working Al Bhed lass, constantly
                      thinking about what she can accomplish. Daughter to the
                      chief of the Al Bhed, a tribe of people persecuted for
                      opposing the teachings of Yevon, Rikku is also Yuna's
                      cousin on her mother's side.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/rikku/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
                    <Typography variant="h6">Seymour</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      Seymour is the son of Jyscal, who became leader of the
                      Guado, and a human woman.
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link
                          href={`../characters/seymour/`}
                          className="buttonLink"
                        >
                          Learn More →
                        </Link>
                      </Button>
                    </Card.Footer>
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
