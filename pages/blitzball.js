import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import { Card, Divider, Button } from "@nextui-org/react";
import {
  Box,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Grid,
} from "@mui/material";

export default function Blitzball() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Blitzball
      </Typography>

      <Box sx={{ margin: "20px" }}>
        <Image
          src="/images/Blitzball_Logo.jpg"
          height={400}
          width={438}
          style={{
            margin: "auto",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
          alt="Blitzball Logo"
        />
        <Typography variant="body">
          Blitzball is the traditional sporting event in Spira. Living in the
          shadow of Sin, residents need something to take their minds off their
          problems. The sport is just as popular today as it was a thousand
          years ago in Zanarkand.
        </Typography>
      </Box>
      <Typography variant="h4">Teams</Typography>
      <Divider />
      <Box sx={{ margin: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Besaid_Aurochs.jpg"
                    height={400}
                    width={402}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Besaid Aurochs"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Besaid Aurochs</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The Aurochs hail from the seaside village of Besaid, and at
                    the beginning of Final Fantasy X, are under Wakka's
                    captaincy. They are the only team in Spira to have never
                    passed the first round of the Luca blitz tournament. When
                    Tidus joins in exchange for passage, their success rate
                    soars. The player has control over the Besaid Aurochs
                    following the events in Luca.
                  </Card.Body>
                  <Button
                      bordered
                      color="gradient"
                      borderWeight
                      size="xs"
                      auto
                      ghost
                      css={{ margin: "auto" }}
                    >
                    <Link href={`../blitzball/aurochs/`} className="buttonLink">
                      Team Statistics
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Luca_Goers.jpg"
                    height={400}
                    width={645}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Luca Goers"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Luca Goers</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    At the opening of Final Fantasy X, the Luca Goers reign as
                    the Spira champions. They are captained by the confident and
                    brash forward, Bickson. As they represent the city with the
                    only blitz stadium, they are regarded as the most beloved
                    team in Spira. The team members can be found in and around
                    Luca stadium, if the player wishes to add them to their
                    team.
                  </Card.Body>
                  <Button
                      bordered
                      color="gradient"
                      borderWeight
                      size="xs"
                      auto
                      ghost
                      css={{ margin: "auto" }}
                    >
                    <Link href={`../blitzball/goers/`} className="buttonLink">
                      Team Statistics
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Kilika_Beasts.jpg"
                    height={400}
                    width={504}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Kilika Beasts"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Kilika Beasts</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The Kilika Beasts hail from the small seaside town of
                    Kilika. High Summoner Ohalland used to play for the team
                    before he became a summoner. The Kilika Beasts' team members
                    are found throughout Kilika from the port to the temple.
                  </Card.Body>
                  <Button
                      bordered
                      color="gradient"
                      borderWeight
                      size="xs"
                      auto
                      ghost
                      css={{ margin: "auto" }}
                    >
                    <Link href={`../blitzball/beasts/`} className="buttonLink">
                      Team Statistics
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Al_Bhed_Psyches.jpg"
                    height={400}
                    width={675}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Al Bhed Psyches"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Al Bhed Psyches</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The Al Bhed Psyches represent the Al Bhed race. During the
                    Luca tournament of Final Fantasy X, they attempt to rig
                    their opening match against the Besaid Aurochs by kidnapping
                    Yuna. Their goalie, Nimrook, is the best goalie in the game.
                    The Al Bhed Psyches are later found on the Fahrenheit, and
                    are available when the player has access to the airship,
                    which is right before entering Bevelle, and permanently
                    after the player has finished the events in Zanarkand.
                  </Card.Body>
                  <Button
                      bordered
                      color="gradient"
                      borderWeight
                      size="xs"
                      auto
                      ghost
                      css={{ margin: "auto" }}
                    >
                    <Link href={`../blitzball/psyches/`} className="buttonLink">
                      Team Statistics
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Ronso_Fangs.jpg"
                    height={400}
                    width={805}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Ronso Fangs"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Ronso Fangs</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The Ronso Fangs represent the Ronso race. Due to their
                    physicality, they rely on power and endurance while lacking
                    in speed. The Ronso Fangs members are found at the Luca
                    Docks.
                  </Card.Body>
                  <Button
                      bordered
                      color="gradient"
                      borderWeight
                      size="xs"
                      auto
                      ghost
                      css={{ margin: "auto" }}
                    >
                    <Link href={`../blitzball/fangs/`} className="buttonLink">
                      Team Statistics
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Guado_Glories.jpg"
                    height={400}
                    width={446}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Guado Glories"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Guado Glories</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The Guado Glories represent the Guado race, and hail from
                    Guadosalam. Their players contrast the Ronso Fangs with high
                    speed at the expense of HP, Attack, and Endurance. The Guado
                    Glories team can be found in Guadosalam.
                  </Card.Body>
                  <Button
                      bordered
                      color="gradient"
                      borderWeight
                      size="xs"
                      auto
                      ghost
                      css={{ margin: "auto" }}
                    >
                    <Link href={`../blitzball/glories/`} className="buttonLink">
                      Team Statistics
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Zanarkand_Duggles.jpg"
                    height={400}
                    width={851}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Zanarkand Duggles"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Zanarkand Duggles</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The Zanarkand Duggles are another team competing in the
                    Jecht Memorial Cup, featuring black and red outfits. Little
                    is known about the team other than that they "play dirty".
                  </Card.Body>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Zanarkand_Abes.jpg"
                    height={400}
                    width={423}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Zanarkand Abes"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Zanarkand Abes</Typography>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    The Zanarkand Abes are Tidus's team in Dream Zanarkand,
                    where he is the star player. They have yellow and black
                    outfits. His father, Jecht, also played for the Abes, a
                    shadow Tidus struggles to step out of. They are only
                    available to play against in Final Fantasy X-2.
                  </Card.Body>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Yocun_Nomads.jpg"
                    height={400}
                    width={396}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Yocun Nomads"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">
                    Yocun Nomads (Unused Team)
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Bevelle_Bells.jpg"
                    height={400}
                    width={344}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Bevelle Bells"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">
                    Bevelle Bells (Unused Team)
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Card.Header css={{ fontSize: "1.5rem" }}>
                    Recruiting and Scouting
                  </Card.Header>
                </AccordionSummary>
                <AccordionDetails>
                  <Card.Divider />
                  <Card.Body css={{ textAlign: "center" }}>
                    There are many players scattered throughout Spira who you
                    can scout and add to your team.
                  </Card.Body>
                  <Divider css={{ margin: "30px" }}>
                    <Typography variant="h6">Free Agents</Typography>
                  </Divider>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <ul>
                        <li>Brother</li>
                        <li>Wedge</li>
                        <li>Kiyuri</li>
                        <li>Kyou</li>
                        <li>Zalitz</li>
                        <li>Shaami</li>
                        <li>Shuu</li>
                        <li>Jumal</li>
                      </ul>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <ul>
                        <li>Svanda</li>
                        <li>Zev Ronso</li>
                        <li>Tatts</li>
                        <li>Durren</li>
                        <li>Nedus</li>
                        <li>Naida</li>
                        <li>Biggs</li>
                        <li>Vilucha</li>
                      </ul>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <ul>
                        <li>Mifurey</li>
                        <li>Miyu</li>
                        <li>Mep</li>
                        <li>Yuma Guado</li>
                        <li>Linna</li>
                        <li>Rin</li>
                        <li>Ropp</li>
                        <li>Wakka</li>
                      </ul>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
