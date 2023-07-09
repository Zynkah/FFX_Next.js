import Layout from "../components/layout";
import ReligionTabs from "../components/religion_tabs";
import Image from "next/image";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { Card, Button } from "@nextui-org/react";
import * as React from "react";

export default function Aeons() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Aeons
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ReligionTabs />
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
                      <Link href={`../aeons/valefor/`} className="buttonLink">
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
                      <Link href={`../aeons/ifrit/`} className="buttonLink">
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
                      <Link href={`../aeons/ixion/`} className="buttonLink">
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
                      <Link href={`../aeons/shiva/`} className="buttonLink">
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
                      <Link href={`../aeons/bahamut/`} className="buttonLink">
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
                      <Link href={`../aeons/yojimbo/`} className="buttonLink">
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
                      <Link href={`../aeons/anima/`} className="buttonLink">
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
                        href={`../aeons/magus_sisters/`}
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
      </Box>
    </Layout>
  );
}
