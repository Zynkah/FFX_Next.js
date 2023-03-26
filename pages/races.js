import Layout from "../components/layout";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function Races() {
  return (
    <Layout>
      <h1>Races & Creatures</h1>
      <hr />
      <h2>Humaniods</h2>
      <Grid container spacing={2}>
        <Grid item>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Humans.jpeg"
                  height={400}
                  width={500}
                  style={{
                    margin: "auto",
                  }}
                  alt="Human"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Humans</h3>
                <p>
                  The majority of the population on Spira. They are capable of
                  bearing children with the Al Bhed and the Guado. They have a
                  variety of appearances, southern humans tend to have a nice
                  tan and the northern humans are quiet pale. The hair colors
                  can be anywhere from black, blond, red and more. Most humans
                  follow Yevons teachings and refuse to use any machina at all.
                  They have 3 different blitzball teams: Besaid Aurochs, Kilika
                  Beasts and the Luca Goers.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Al_Bhed.jpg"
                  height={300}
                  width={490}
                  style={{
                    margin: "auto",
                  }}
                  alt="Al Bhed"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Al Bhed</h3>
                <p>
                  A tribe of technologists. Making up 10% of the Spiran
                  population. They have a unique language and, unlike other
                  races in Spira, they use machina. Spira's main religion,
                  Yevon, see the Al Bhed as heretics and they are widely
                  ostracized. Many Al Bhed likewise, oppose the pilgrimage
                  tradition the Yevon temples uphold as core dogma. The Al Bhed
                  have blond hair and green eyes with spiral-shaped pupils. They
                  dress in distinctive colorful bodysuits and commonly wear
                  goggles and masks. Despite being a marginalized group, the Al
                  Bhed have a team in the blitzball league and excel at the
                  sport. Around 1000 years ago, the Al Bhed society lived on
                  Bikanel Island, whose most explored region is known as the
                  Sanubia Desert. Sin destroyed their city, and the citizens
                  scattered around Spira, often detested by the other races of
                  the world. Cid, Rikku's father and Yuna's uncle, resettled the
                  Al Bhed on Bikanel Island and built a new city called Home.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Guado.jpg"
                  height={300}
                  width={700}
                  style={{
                    margin: "auto",
                  }}
                  alt="Guado"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Guado</h3>
                <p>
                  A humanoid race with wooden and elvish appearance, with long
                  limbs, oversized hands with claw-like nails, prominent veins
                  on their face and hair resembling flora. They live amongst the
                  trees and are the protectors of Spira's afterlife, the
                  Farplane, and the Macalania Woods. The Guado's capital city is
                  Guadosalam, from witin they guard the entrance to the
                  Farplane. Due to their role of overseeing and protecting the
                  Farplane in Guadosalam, they are astute in determining unsent
                  from regular people by their scent. Their high speed makes the
                  Guado Glories and effective blitzball team. Unlike other races
                  in Spira, Guado do not seem to leave behind bodies when dead,
                  in the case of Guado Guardian. Guado have a religious culture,
                  which causes them to come across as arrogant. Their role as
                  guardians of the Farplane have led to them looking down upon
                  other races. The Guado were converted to the Yevon religion
                  under their leader, Jyscal Guado, who was later appointed a
                  Maester of Yevon. Despite their strict religious culture, they
                  are generous and welcoming to guests.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Ronso.webp"
                  height={300}
                  width={475}
                  style={{
                    margin: "auto",
                  }}
                  alt="Ronso"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Ronso</h3>
                <p>
                  The Ronso is a race of muscular, anthropomorphic feline
                  humanoids from the world of Spira. They stand above two meters
                  in height, the males are considerably larger and more muscular
                  then the females. They have hands with claws and paws for
                  feet. They are covered in blue fur with patches of white with
                  fangs, a cats nose, golden eyes and a tail. They tie back
                  their main in braids and ponytails. They are formidable
                  warriors, known for their strong sense of honor and loyalty,
                  as well as their pride and quickness to anger. The Ronso live
                  at the base of Mt. Gagazet and guard the sacred mountain.
                  Hardly anything is known about their culture, other than that
                  they view the mountain a sacred location and trekking up
                  Gagazet is viewed as a spiritual journey for a Ronso seeking
                  guidance. The Ronso take pride in protecting the mountain and
                  compete with each other to chose who is worthy of being
                  guardian of the sacred mountain. Kelk Ronso is the tribe
                  leader and their representative in Bevelle as a Maester of
                  Yevon. The Ronso have a blitzball team called the Ronso Fangs.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>

      <h2>Demi-Humans</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Aeons.jpg"
                  height={400}
                  width={400}
                  style={{
                    margin: "auto",
                  }}
                  alt="Aeons"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Fayths & Aeons</h3>
                <p>
                  The Fayth are humans who willingly had their souls sealed in
                  statues in a state of dreaming in Spira. A ritual that removes
                  their souls from their still living bodies are sealed into
                  stone tablets. This technique of creating Fayth's was used in
                  Zanarkand. Their powers allow a summoner to coalesce the power
                  of pyreflies to create physical forms of the Fayth's dream,
                  called Aeons, or other magical phenomena. Aeons are the
                  physical realization of the Fayth's dreams. The fayth's aeon
                  form is the physical embodiment of the fayth itself. Aeons
                  usually embody the fayth's strongest emotion, for example
                  Anima's pain and sorrow. The Fayth communicate with summoners
                  who pray to them within the Chambers of the Fayth, and
                  establish a mental link between the Fayth and the summoner.
                  Using this link, the fayth gives their dream a physical form:
                  an Aeon. Aeons are powerful creatures only a summoner can use
                  in battle. Most aeons resemble their respective fayth, so it
                  can be assumes the aeon takes on aspects of the person whose
                  soul is sealed inside the fayth statue. Many summoner can
                  communicate with any one fayth to establish a mental link with
                  them, enabling them to then summon the fayth's aeon, but only
                  one summoner can call on a particular fayth's power at any one
                  time. This is why during the aeon duels two of the same aeon
                  cannot battle one another, Dark Aeons are an exception to this
                  rule.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Hypello.png"
                  height={400}
                  width={317}
                  style={{
                    margin: "auto",
                  }}
                  alt="Hypello"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Hypello</h3>
                <p>
                  A race of amphibian humanoid creatures. The Hypello have a
                  speech impediment, often lisping any words with an 'S', for
                  example shay instead of say and yesh in place for yes and some
                  words are just gibberish as well as ending most of their
                  sentences with a questioning tone. The Hypello are responsible
                  for managing the shoopuf service across the Moonflow, which is
                  their home. Though the Hypello are excellent swimmers, they
                  have no desire for competition, there for they have no
                  blitzball team.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/pelupelu.jpeg"
                  height={400}
                  width={192}
                  style={{
                    margin: "auto",
                  }}
                  alt="Pelupelu"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Pelupelu</h3>
                <p>
                  A race in Spira that appear to be as tall as a human child.
                  They speak very fast and wear a bird-like mask. Tobli is the
                  most notable Pelupelu in the Final Fantasy X series as he
                  appears in Final Fantasy X-2, playing a small role in the
                  Moonflow area.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Borra.webp"
                  height={400}
                  width={400}
                  style={{
                    margin: "auto",
                  }}
                  alt="Borra"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Yevon Music Brigade</h3>
                <p>
                  They are spirits of Macalania Woods. There are three known
                  types: Avian - Borra, Bayra, Frog - Daraya, Donga and Mouse -
                  Pukara, Pukatak. The musician's existence coincides with that
                  of the woods. They may have an affinity for music as the
                  spirits met belong to Borra's band. They have an ear for
                  prophecy as witnessed on their talks to Yuna about the fading
                  woods and mention of the state of the Farplane. The Mouse
                  musician always speaks in rhymes.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>

      <h2>Creatures</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Chocobo.webp"
                  height={400}
                  width={311}
                  style={{
                    margin: "auto",
                  }}
                  alt="Chocobo"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Chocobos</h3>
                <p>
                  Due to the ban of machina, chocobo-powered machines were in
                  wide demand until the coming of the Eternal Calm. Chocobos are
                  most commonly seen on the Mi'ihen Highroad. Chocobos
                  demonstrate a skill in jumping, allowing them to reach high
                  ledges and combined leaping and flapping of their wings to
                  gain extra height. Chocobos are also used as transportation,
                  either being ridden themselves or pulling chariots. They are
                  raced for fun in the Calm lands.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Shoopuf.jpeg"
                  height={400}
                  width={577}
                  style={{
                    margin: "auto",
                  }}
                  alt="Shoopuf"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Shoopufs</h3>
                <p>
                  A species of large elephantine animals. They are used as pack
                  animals by the Hypello to transport customers across the
                  Moonflow. They are gentle creatures who do not mind being
                  ridden by the other species in Spira.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Sin.webp"
                  height={400}
                  width={553}
                  style={{
                    margin: "auto",
                  }}
                  alt="Shoopuf"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Sin</h3>
                <p>
                Sin is a gargantuan whale-like beast that threatens the world of Spira. It was named by the people of Spira who believed the beast came into being as punishment for their ancestors relying on machina and becoming a hedonistic society. By following the teachings of Yevon, the people of Spira believe one day they will atone for their crimes and Sin will vanish.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
