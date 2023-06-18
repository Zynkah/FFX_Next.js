import Layout from "../components/layout";
import Image from "next/image";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";
import { Card, Divider } from "@nextui-org/react";
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

export default function Locations() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Locations
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
            <Tab label="Temples" href={`/temples/`} />
            <Tab label="Agencies" href={`/agencies/`} />
          </Tabs>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Image
            src="/images/Spira.jpg"
            height={400}
            width={600}
            style={{
              margin: "auto",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
            alt="Spira"
          />
          <Typography variant="body">
            The world of Spira consists of islands floating around a massive
            continent that stretches to the north and south. The world seems to
            be blessed with a warm, pleasant climate. Dream Zanarkand, a realm
            introduced at the start of the story, cannot be visited by living
            beings.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Dream_Zanarkand.jpg"
                      height={400}
                      width={554}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Dream Zanarkand"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Dream Zanarkand</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The mechanical metropolis in which Tidus grew up. This
                      city is actually a dream summoned by Yu Yevon, who sought
                      to reproduce Zanarkand and its people as they existed a
                      thousand years ago. In early development the city was
                      called Registan.
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
                      src="/images/Yevon-Baaj.jpg"
                      height={400}
                      width={532}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Yevon-Baaj"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">
                      Submerged Ruins - Temple of Yevon-Baaj
                    </Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The ruins of a Yevon temple destroyed by Sin decades
                      earlier, Seymour lived here as a youth in the care of his
                      mother, and in this temple's Chamber of the Fayth the
                      youth Guado installed a statue representing Anima's Fayth.
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
                      src="/images/Salvage_Ship.jpg"
                      height={400}
                      width={710}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Salvage Ship"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Salvage Ship</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A ship that belongs to the Al Bhed. It is used to go
                      diving in ruins for machina. Brother is the leader of the
                      ship. You visit this ship just once in the game, and you
                      go on a salvage hunt with Rikku and her crew.
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
                      src="/images/Besaid_Island.jpg"
                      height={400}
                      width={596}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Besaid Island"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Besaid Island</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      An island on the southern tip of Spira. It is a place
                      abundant with nature. Its mountain regions are overgrown
                      and with thick vegetation, broken up by a number of
                      free-flowing waterfalls. Yuna and Wakka grew up in the
                      elevated settlement of Besaid Island.
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
                      src="/images/S.S._Liki.webp"
                      height={400}
                      width={711}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="S.S. Liki"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">S.S. Liki</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The ship that ferries people between the islands of Besaid
                      and Kilika. It is powered by chocobos and sails.
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
                      src="/images/Kilika_Island.webp"
                      height={400}
                      width={579}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Kilika Island"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Kilika Island</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      An island to the northwest of Besaid Island. Its residents
                      reside in Kilika Port, a community built in the shallows.
                      Lying just beyond the forest, Kilika Temple is well known
                      as a spot where players can pray for a victory in
                      blitzball.
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
                      src="/images/S.S._Winno.webp"
                      height={400}
                      width={537}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="S.S. Winno"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">S.S. Winno</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The ship that ferries people between the island of Kilika
                      and the city of Luca. This is where you perform the Jecht
                      Shot for the first time. There is also a mini game that
                      unlocks after you complete the Cloister of Trials at the
                      Djose Temple. Return there and talk the woman at the top
                      of the stairs, she will ask you how many seagulls are
                      flying around. Tell her there are 11 total and she will
                      gift you with the Ace Wizard weapon.
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
                      src="/images/Luca.jpg"
                      height={400}
                      width={712}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Lucca"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Luca</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The second largest city in Spira, it is famed for its
                      massive blitzball stadium and a theater that plays movies
                      and music. Luca has its own unique character, and teams of
                      all races and cultures come to participate in its
                      blitzball tournaments.
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
                      src="/images/Mi'ihen.jpg"
                      height={400}
                      width={578}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Mi'ihen Highroad"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Mi'ihen Highroad</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A highway famously walked by the hero Mi'ihen eight
                      hundred years in the past. The Hero was the founder of the
                      Crusaders and he has a statue on the Highroad. Part of the
                      road was destroyed by Sin five hundred years ago, but a
                      new road was built in its place. Along this highway,
                      travelers can rent chocobos and find lodging at the
                      Agency.
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
                      src="/images/Mushroom_Rock.jpg"
                      height={400}
                      width={574}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Mushroom Rock"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Mushroom Rock Road</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A highway connected to the northern tip of the Mi'ihen
                      Highroad. The surrounding rockface resembles a pile of
                      mushrooms; hence the name. The highway eventually forks,
                      with one path leading to the highlands and the other to
                      the Djose Highroad.
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
                      src="/images/Djose.jpg"
                      height={400}
                      width={704}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Djose"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Djose</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A region located to the south of central Spira. The Djose
                      Highroad is know for the wind-eroded cliffs running
                      through the coastlines. Many people visit the Djose Temple
                      while traveling the highway, praying for a safe return.
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
                      src="/images/Moonflow.png"
                      height={400}
                      width={533}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Moonflow"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Moonflow</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A large river that crosses the continent from north to
                      south, filled with sunken ruins from a vanished era of
                      technological civilization. When the purple moonlilies
                      along the riverbank are in full bloom, they attract
                      countless pyreflies during the night hours. The Hypello
                      people ride domestic creatures known as shoopufs, ferrying
                      passengers from one side of the river to the other.
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
                      src="/images/Guadosalam.jpg"
                      height={400}
                      width={711}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Guadosalam"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Guadosalam</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The city of the demihuman Guado people. Seymour's mansion
                      is here, as is a mystical area replete with pyreflies that
                      is known as the Farplane. Specters of the deceased appear
                      in the Farplane when summoned by the living, resulting in
                      many visitors who come to reunite with their loved ones.
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
                      src="/images/Farplane.webp"
                      height={400}
                      width={639}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Farplane"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Farplane</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      An underworld, it is a gathering place for the dead.
                      Spirits enter the Farplane either after they have been
                      sent by one like a summoner or a sender, or after they
                      have accepted their death. Those not sent to the Farplane
                      may remain on the mortal plane as the unsent or fiends,
                      both types able to send themselves by fulfilling a purpose
                      failed to do in life.
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
                      src="/images/Thunder_Plains.jpg"
                      height={400}
                      width={300}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Thunder Plains"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Thunder Plains</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A dangerous wasteland where rain and lightning are
                      constantly released from the dark clouds that blanket the
                      sky. In the past, travelers often lost their lives to
                      lightning strikes while crossing the Thunder Plains, until
                      an Al Bhed named Bilghen installed lightning rods that
                      greatly increased the odds of safe passage.
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
                      src="/images/Macalania.jpg"
                      height={400}
                      width={285}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Macalania"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Macalania</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A shimmering forest can be found in the region, as well as
                      a lake frozen over by the fayth in the local temple. The
                      Macalania Woods connect to Bevelle and the Calm Lands, and
                      the spheres in the middle of the forest gushes water dense
                      with pyreflies, the raw material used in spheres.
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
                      src="/images/Bikanel_lsland.webp"
                      height={400}
                      width={606}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Bikanel Island"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Bikanel Island</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A large island to the west of the main continent, largely
                      covered in desert. Due to a lack of visitors, the Al Bhed
                      that had been persecuted by the temples of Yevon were able
                      to establish the city of Home in secret. One corner of the
                      island is home to Cactuars.
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
                      src="/images/Home.jpg"
                      height={400}
                      width={522}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Home"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Home</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      It is the home of the Al Bhed clan located on Bikanel
                      Island. It is an underground fortress hidden amid the
                      Bikanel desert. It was built under Cid's direction to be
                      the home of the Al Bhed, whom a lot fo the rest of Spira
                      despise for not following the teachings of Yevon. This is
                      where the Al Bhed house the kidnapped summoners they hold
                      to save them from their fate.
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
                      src="/images/Bevelle.webp"
                      height={400}
                      width={569}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Bevelle"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Bevelle</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The largest city in all of Spira, Bevelle is the cradle of
                      Yevon's teachings, and the head temple of Yevon sits
                      proudly in the middle of the city. The city's defenses are
                      strict. No on can enter without passing over the
                      Highbridge.
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
                      src="/images/Calm_Lands.jpg"
                      height={400}
                      width={597}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Calm Lands"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Calm Lands</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The plain where high summoners across multiple generations
                      challenged Sin in order to bring about the temporary peace
                      of Calm. To the east is a monster training facility for
                      Crusaders established by the hero Mi'ihen, while the north
                      lies the Cavern of the Stolen Fayth.
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
                      src="/images/Mt_Gagazet.jpg"
                      height={400}
                      width={524}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Mt Gagazet"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Mt. Gagazet</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A sacred mountain in the north of Spira, protected by the
                      Ronso tribe. Harsh blizzards sweep the snowy mountain
                      trial, sapping the strength of anyone brave enough to walk
                      its path. Figures of the fayth, used to summon Dream
                      Zanarkand, line the summit cliffs.
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
                      src="/images/Zanarkand_Ruins.png"
                      height={400}
                      width={572}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Zanarkand Ruins"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Zanarkand Ruins</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The relics of a city destroyed a thousand years ago,
                      located in the northernmost tip of the continent. The
                      fayth of the Final Summoning rests here, offering the
                      ability to defeat Sin. Hopeful summoners treat the ruins
                      as their final destination on their pilgrimage.
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
                      src="/images/Inside_Sin.jpg"
                      height={400}
                      width={521}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Inside Sin"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Inside Sin</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A mysterious space overflowing with pyreflies that unfolds
                      within Sin's massive body. The existence of realms
                      resembling Dream Zanarkand and a blitzball stadium are
                      reflections of Jecht's memories influencing Sin.
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
                      src="/images/Omega_Ruins.jpg"
                      height={400}
                      width={712}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Omega Ruins"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Omega Ruins</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      An optional dungeon located within a small group of
                      islands to the east of Spira's main continent. You can
                      access this area through the monster arena. Rather
                      maze-like, like inside Sin, this place must be mapped by
                      the player. Navigating the dark passages you encounter
                      Master Tonberry and Great Malboro, some of the toughest
                      fiends in Spira. You face off two bosses at the end, Omega
                      and Ultima.
                    </Card.Body>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
