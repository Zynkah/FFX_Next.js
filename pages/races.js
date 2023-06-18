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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Races() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography variant="h3" sx={{ margin: "20px" }}>
        Races & Creatures
      </Typography>
      <Divider />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Humaniods" {...a11yProps(0)} />
            <Tab label="Demi-Humans" {...a11yProps(1)} />
            <Tab label="Creatures" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography variant="h4" sx={{ margin: "20px" }}>
            Humaniods
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Humans.jpeg"
                      height={400}
                      width={500}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Human"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Humans</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The majority of the population on Spira. They are capable
                      of bearing children with the Al Bhed and the Guado. They
                      have a variety of appearances, southern humans tend to
                      have a nice tan and the northern humans are quiet pale.
                      The hair colors can be anywhere from black, blond, red and
                      more. Most humans follow Yevons teachings and refuse to
                      use any machina at all. They have 3 different blitzball
                      teams: Besaid Aurochs, Kilika Beasts and the Luca Goers.
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
                      src="/images/Ronso.webp"
                      height={400}
                      width={590}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Ronso"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Ronso</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The Ronso is a race of muscular, anthropomorphic feline
                      humanoids from the world of Spira. They stand above two
                      meters in height, the males are considerably larger and
                      more muscular then the females. They have hands with claws
                      and paws for feet. They are covered in blue fur with
                      patches of white with fangs, a cats nose, golden eyes and
                      a tail. They tie back their main in braids and ponytails.
                      They are formidable warriors, known for their strong sense
                      of honor and loyalty, as well as their pride and quickness
                      to anger. The Ronso live at the base of Mt. Gagazet and
                      guard the sacred mountain. Hardly anything is known about
                      their culture, other than that they view the mountain a
                      sacred location and trekking up Gagazet is viewed as a
                      spiritual journey for a Ronso seeking guidance. The Ronso
                      take pride in protecting the mountain and compete with
                      each other to chose who is worthy of being guardian of the
                      sacred mountain. Kelk Ronso is the tribe leader and their
                      representative in Bevelle as a Maester of Yevon. The Ronso
                      have a blitzball team called the Ronso Fangs.
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
                      src="/images/Al_Bhed.jpg"
                      height={300}
                      width={490}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Al Bhed"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Al Bhed</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A tribe of technologists. Making up 10% of the Spiran
                      population. They have a unique language and, unlike other
                      races in Spira, they use machina. Spira's main religion,
                      Yevon, see the Al Bhed as heretics and they are widely
                      ostracized. Many Al Bhed likewise, oppose the pilgrimage
                      tradition the Yevon temples uphold as core dogma. The Al
                      Bhed have blond hair and green eyes with spiral-shaped
                      pupils. They dress in distinctive colorful bodysuits and
                      commonly wear goggles and masks. Despite being a
                      marginalized group, the Al Bhed have a team in the
                      blitzball league and excel at the sport. Around 1000 years
                      ago, the Al Bhed society lived on Bikanel Island, whose
                      most explored region is known as the Sanubia Desert. Sin
                      destroyed their city, and the citizens scattered around
                      Spira, often detested by the other races of the world.
                      Cid, Rikku's father and Yuna's uncle, resettled the Al
                      Bhed on Bikanel Island and built a new city called Home.
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
                      src="/images/Guado.jpg"
                      height={300}
                      width={700}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Guado"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Guado</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A humanoid race with wooden and elvish appearance, with
                      long limbs, oversized hands with claw-like nails,
                      prominent veins on their face and hair resembling flora.
                      They live amongst the trees and are the protectors of
                      Spira's afterlife, the Farplane, and the Macalania Woods.
                      The Guado's capital city is Guadosalam, from witin they
                      guard the entrance to the Farplane. Due to their role of
                      overseeing and protecting the Farplane in Guadosalam, they
                      are astute in determining unsent from regular people by
                      their scent. Their high speed makes the Guado Glories and
                      effective blitzball team. Unlike other races in Spira,
                      Guado do not seem to leave behind bodies when dead, in the
                      case of Guado Guardian. Guado have a religious culture,
                      which causes them to come across as arrogant. Their role
                      as guardians of the Farplane have led to them looking down
                      upon other races. The Guado were converted to the Yevon
                      religion under their leader, Jyscal Guado, who was later
                      appointed a Maester of Yevon. Despite their strict
                      religious culture, they are generous and welcoming to
                      guests.
                    </Card.Body>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h4" sx={{ margin: "20px" }}>
            Demi-Humans
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Aeons.jpg"
                      height={400}
                      width={400}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Aeons"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Fayths & Aeons</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      The Fayth are humans who willingly had their souls sealed
                      in statues in a state of dreaming in Spira. A ritual that
                      removes their souls from their still living bodies are
                      sealed into stone tablets. This technique of creating
                      Fayth's was used in Zanarkand. Their powers allow a
                      summoner to coalesce the power of pyreflies to create
                      physical forms of the Fayth's dream, called Aeons, or
                      other magical phenomena. Aeons are the physical
                      realization of the Fayth's dreams. The fayth's aeon form
                      is the physical embodiment of the fayth itself. Aeons
                      usually embody the fayth's strongest emotion, for example
                      Anima's pain and sorrow. The Fayth communicate with
                      summoners who pray to them within the Chambers of the
                      Fayth, and establish a mental link between the Fayth and
                      the summoner. Using this link, the fayth gives their dream
                      a physical form: an Aeon. Aeons are powerful creatures
                      only a summoner can use in battle. Most aeons resemble
                      their respective fayth, so it can be assumes the aeon
                      takes on aspects of the person whose soul is sealed inside
                      the fayth statue. Many summoner can communicate with any
                      one fayth to establish a mental link with them, enabling
                      them to then summon the fayth's aeon, but only one
                      summoner can call on a particular fayth's power at any one
                      time. This is why during the aeon duels two of the same
                      aeon cannot battle one another, Dark Aeons are an
                      exception to this rule.
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
                      src="/images/Hypello.png"
                      height={400}
                      width={317}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Hypello"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Hypello</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A race of amphibian humanoid creatures. The Hypello have a
                      speech impediment, often lisping any words with an 'S',
                      for example shay instead of say and yesh in place for yes
                      and some words are just gibberish as well as ending most
                      of their sentences with a questioning tone. The Hypello
                      are responsible for managing the shoopuf service across
                      the Moonflow, which is their home. Though the Hypello are
                      excellent swimmers, they have no desire for competition,
                      there for they have no blitzball team.
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
                      src="/images/pelupelu.jpeg"
                      height={400}
                      width={192}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Pelupelu"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Pelupelu</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A race in Spira that appear to be as tall as a human
                      child. They speak very fast and wear a bird-like mask.
                      Tobli is the most notable Pelupelu in the Final Fantasy X
                      series as he appears in Final Fantasy X-2, playing a small
                      role in the Moonflow area.
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
                      src="/images/Borra.webp"
                      height={400}
                      width={400}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Borra"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Yevon Music Brigade</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      They are spirits of Macalania Woods. There are three known
                      types: Avian - Borra, Bayra, Frog - Daraya, Donga and
                      Mouse - Pukara, Pukatak. The musician's existence
                      coincides with that of the woods. They may have an
                      affinity for music as the spirits met belong to Borra's
                      band. They have an ear for prophecy as witnessed on their
                      talks to Yuna about the fading woods and mention of the
                      state of the Farplane. The Mouse musician always speaks in
                      rhymes.
                    </Card.Body>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h4" sx={{ margin: "20px" }}>
            Creatures
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card isPressable isHoverable variant="bordered">
                <Accordion>
                  <AccordionSummary>
                    <Image
                      src="/images/Chocobo.webp"
                      height={400}
                      width={311}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Chocobo"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Chocobos</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      Due to the ban of machina, chocobo-powered machines were
                      in wide demand until the coming of the Eternal Calm.
                      Chocobos are most commonly seen on the Mi'ihen Highroad.
                      Chocobos demonstrate a skill in jumping, allowing them to
                      reach high ledges and combined leaping and flapping of
                      their wings to gain extra height. Chocobos are also used
                      as transportation, either being ridden themselves or
                      pulling chariots. They are raced for fun in the Calm
                      lands.
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
                      src="/images/Shoopuf.jpeg"
                      height={400}
                      width={577}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Shoopuf"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Shoopufs</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      A species of large elephantine animals. They are used as
                      pack animals by the Hypello to transport customers across
                      the Moonflow. They are gentle creatures who do not mind
                      being ridden by the other species in Spira.
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
                      src="/images/Sin.webp"
                      height={400}
                      width={553}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Shoopuf"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6">Sin</Typography>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: "center" }}>
                      Sin is a gargantuan whale-like beast that threatens the
                      world of Spira. It was named by the people of Spira who
                      believed the beast came into being as punishment for their
                      ancestors relying on machina and becoming a hedonistic
                      society. By following the teachings of Yevon, the people
                      of Spira believe one day they will atone for their crimes
                      and Sin will vanish.
                    </Card.Body>
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
