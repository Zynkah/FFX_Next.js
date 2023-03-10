import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function Locations() {
  return (
    <Layout>
      <h1>Locations</h1>
      <Link href={`/temples/`}> Temples |</Link>
      <Link href={`/stadiums/`}> Stadiums</Link>
      <hr />
      <Image
        src="/images/Spira.jpg"
        height={400}
        width={600}
        style={{
          margin: "auto",
        }}
        alt="Spira"
      />
      <p>
        The world of Spira consists of islands floating around a massive
        continent that stretches to the north and south. The world seems to be
        blessed with a warm, pleasant climate. Dream Zanarkand, a realm
        introduced at the start of the story, cannot be visited by living
        beings.
      </p>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Dream_Zanarkand.jpg"
                  height={400}
                  width={554}
                  style={{
                    margin: "auto",
                  }}
                  alt="Dream Zanarkand"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Dream Zanarkand</h3>
                <p>
                  The mechanical metropolis in which Tidus grew up. This city is
                  actually a dream summoned by Yu Yevon, who sought to reproduce
                  Zanarkand and its people as they existed a thousand years ago.
                  In early development the city was called Registan.
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
                  src="/images/Yevon-Baaj.jpg"
                  height={400}
                  width={532}
                  style={{
                    margin: "auto",
                  }}
                  alt="Yevon-Baaj"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Submerged Ruins - Temple of Yevon-Baaj</h3>
                <p>
                  The ruins of a Yevon temple destroyed by Sin decades earlier,
                  Seymour lived here as a youth in the care of his mother, and
                  in this temple's Chamber of the Fayth the youth Guado
                  installed a statue representing Anima's Fayth.
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
                  src="/images/Salvage_Ship.jpg"
                  height={400}
                  width={710}
                  style={{
                    margin: "auto",
                  }}
                  alt="Salvage Ship"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Salvage Ship</h3>
                <p>
                  A ship that belongs to the Al Bhed. It is used to go diving in
                  ruins for machina. Brother is the leader of the ship. You
                  visit this ship just once in the game, and you go on a salvage
                  hunt with Rikku and her crew.
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
                  src="/images/Besaid_Island.jpg"
                  height={400}
                  width={596}
                  style={{
                    margin: "auto",
                  }}
                  alt="Besaid Island"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Besaid Island</h3>
                <p>
                  An island on the southern tip of Spira. It is a place abundant
                  with nature. Its mountain regions are overgrown and with thick
                  vegetation, broken up by a number of free-flowing waterfalls.
                  Yuna and Wakka grew up in the elevated settlement of Besaid
                  Island.
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
                  src="/images/S.S._Liki.webp"
                  height={400}
                  width={711}
                  style={{
                    margin: "auto",
                  }}
                  alt="S.S. Liki"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>S.S. Liki</h3>
                <p>
                  The ship that ferries people between the islands of Besaid and
                  Kilika. It is powered by chocobos and sails.
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
                  src="/images/Kilika_Island.webp"
                  height={400}
                  width={579}
                  style={{
                    margin: "auto",
                  }}
                  alt="Kilika Island"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Kilika Island </h3>
                <p>
                  An island to the northwest of Besaid Island. Its residents
                  reside in Kilika Port, a community built in the shallows.
                  Lying just beyond the forest, Kilika Temple is well known as a
                  spot where players can pray for a victory in blitzball.
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
                  src="/images/S.S._Winno.webp"
                  height={400}
                  width={537}
                  style={{
                    margin: "auto",
                  }}
                  alt="S.S. Winno"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>S.S. Winno</h3>
                <p>
                  The ship that ferries people between the island of Kilika and
                  the city of Luca. This is where you perform the Jecht Shot for
                  the first time. There is also a mini game that unlocks after
                  you complete the Cloister of Trials at the Djose Temple.
                  Return there and talk the woman at the top of the stairs, she
                  will ask you how many seagulls are flying around. Tell her
                  there are 11 total and she will gift you with the Ace Wizard
                  weapon.
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
                  src="/images/Luca.jpg"
                  height={400}
                  width={712}
                  style={{
                    margin: "auto",
                  }}
                  alt="Lucca"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Luca</h3>
                <p>
                  The second largest city in Spira, it is famed for its massive
                  blitzball stadium and a theater that plays movies and music.
                  Luca has its own unique character, and teams of all races and
                  cultures come to participate in its blitzball tournaments.
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
                  src="/images/Mi'ihen.jpg"
                  height={400}
                  width={578}
                  style={{
                    margin: "auto",
                  }}
                  alt="Mi'ihen Highroad"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Mi'ihen Highroad</h3>
                <p>
                  A highway famously walked by the hero Mi'ihen eight hundred
                  years in the past. The Hero was the founder of the Crusaders
                  and he has a statue on the Highroad. Part of the road was
                  destroyed by Sin five hundred years ago, but a new road was
                  built in its place. Along this highway, travelers can rent
                  chocobos and find lodging at the Agency.
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
                  src="/images/Mushroom_Rock.jpg"
                  height={400}
                  width={574}
                  style={{
                    margin: "auto",
                  }}
                  alt="Mushroom Rock"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Mushroom Rock Road</h3>
                <p>
                  A highway connected to the northern tip of the Mi'ihen
                  Highroad. The surrounding rockface resembles a pile of
                  mushrooms; hence the name. The highway eventually forks, with
                  one path leading to the highlands and the other to the Djose
                  Highroad.
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
                  src="/images/Djose.jpg"
                  height={400}
                  width={704}
                  style={{
                    margin: "auto",
                  }}
                  alt="Djose"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Djose</h3>
                <p>
                  A region located to the south of central Spira. The Djose
                  Highroad is know for the wind-eroded cliffs running through
                  the coastlines. Many people visit the Djose Temple while
                  traveling the highway, praying for a safe return.
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
                  src="/images/Moonflow.png"
                  height={400}
                  width={533}
                  style={{
                    margin: "auto",
                  }}
                  alt="Moonflow"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Moonflow</h3>
                <p>
                  A large river that crosses the continent from north to south,
                  filled with sunken ruins from a vanished era of technological
                  civilization. When the purple moonlilies along the riverbank
                  are in full bloom, they attract countless pyreflies during the
                  night hours. The Hypello people ride domestic creatures known
                  as shoopufs, ferrying passengers from one side of the river to
                  the other.
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
                  src="/images/Guadosalam.jpg"
                  height={400}
                  width={711}
                  style={{
                    margin: "auto",
                  }}
                  alt="Guadosalam"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Guadosalam</h3>
                <p>
                  The city of the demihuman Guado people. Seymour's mansion is
                  here, as is a mystical area replete with pyreflies that is
                  known as the Farplane. Specters of the deceased appear in the
                  Farplane when summoned by the living, resulting in many
                  visitors who come to reunite with their loved ones.
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
                  src="/images/Farplane.webp"
                  height={400}
                  width={639}
                  style={{
                    margin: "auto",
                  }}
                  alt="Farplane"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Farplane</h3>
                <p>
                  An underworld, it is a gathering place for the dead. Spirits
                  enter the Farplane either after they have been sent by one
                  like a summoner or a sender, or after they have accepted their
                  death. Those not sent to the Farplane may remain on the mortal
                  plane as the unsent or fiends, both types able to send
                  themselves by fulfilling a purpose failed to do in life.
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
                  src="/images/Thunder_Plains.jpg"
                  height={400}
                  width={300}
                  style={{
                    margin: "auto",
                  }}
                  alt="Thunder Plains"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Thunder Plains</h3>
                <p>
                  A dangerous wasteland where rain and lightning are constantly
                  released from the dark clouds that blanket the sky. In the
                  past, travelers often lost their lives to lightning strikes
                  while crossing the Thunder Plains, until an Al Bhed named
                  Bilghen installed lightning rods that greatly increased the
                  odds of safe passage.
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
                  src="/images/Macalania.jpg"
                  height={400}
                  width={285}
                  style={{
                    margin: "auto",
                  }}
                  alt="Macalania"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Macalania</h3>
                <p>
                  A shimmering forest can be found in the region, as well as a
                  lake frozen over by the fayth in the local temple. The
                  Macalania Woods connect to Bevelle and the Calm Lands, and the
                  spheres in the middle of the forest gushes water dense with
                  pyreflies, the raw material used in spheres.
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
                  src="/images/Bikanel_lsland.webp"
                  height={400}
                  width={606}
                  style={{
                    margin: "auto",
                  }}
                  alt="Bikanel Island"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Bikanel Island</h3>
                <p>
                  A large island to the west of the main continent, largely
                  covered in desert. Due to a lack of visitors, the Al Bhed that
                  had been persecuted by the temples of Yevon were able to
                  establish the city of Home in secret. One corner of the island
                  is home to Cactuars.
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
                  src="/images/Home.jpg"
                  height={400}
                  width={522}
                  style={{
                    margin: "auto",
                  }}
                  alt="Home"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Home</h3>
                <p>
                  It is the home of the Al Bhed clan located on Bikanel Island.
                  It is an underground fortress hidden amid the Bikanel desert.
                  It was built under Cid's direction to be the home of the Al
                  Bhed, whom a lot fo the rest of Spira despise for not
                  following the teachings of Yevon. This is where the Al Bhed
                  house the kidnapped summoners they hold to save them from
                  their fate.
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
                  src="/images/Bevelle.webp"
                  height={400}
                  width={569}
                  style={{
                    margin: "auto",
                  }}
                  alt="Bevelle"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Bevelle</h3>
                <p>
                  The largest city in all of Spira, Bevelle is the cradle of
                  Yevon's teachings, and the head temple of Yevon sits proudly
                  in the middle of the city. The city's defenses are strict. No
                  on can enter without passing over the Highbridge.
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
                  src="/images/Calm_Lands.jpg"
                  height={400}
                  width={597}
                  style={{
                    margin: "auto",
                  }}
                  alt="Calm Lands"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Calm Lands</h3>
                <p>
                  The plain where high summoners across multiple generations
                  challenged Sin in order to bring about the temporary peace of
                  Calm. To the east is a monster training facility for Crusaders
                  established by the hero Mi'ihen, while the north lies the
                  Cavern of the Stolen Fayth.
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
                  src="/images/Mt_Gagazet.jpg"
                  height={400}
                  width={524}
                  style={{
                    margin: "auto",
                  }}
                  alt="Mt Gagazet"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Mt. Gagazet</h3>
                <p>
                  A sacred mountain in the north of Spira, protected by the
                  Ronso tribe. Harsh blizzards sweep the snowy mountain trial,
                  sapping the strength of anyone brave enough to walk its path.
                  Figures of the fayth, used to summon Dream Zanarkand, line the
                  summit cliffs.
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
                  src="/images/Zanarkand_Ruins.png"
                  height={400}
                  width={572}
                  style={{
                    margin: "auto",
                  }}
                  alt="Zanarkand Ruins"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Zanarkand Ruins</h3>
                <p>
                  The relics of a city destroyed a thousand years ago, located
                  in the northernmost tip of the continent. The fayth of the
                  Final Summoning rests here, offering the ability to defeat
                  Sin. Hopeful summoners treat the ruins as their final
                  destination on their pilgrimage.
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
                  src="/images/Inside_Sin.jpg"
                  height={400}
                  width={521}
                  style={{
                    margin: "auto",
                  }}
                  alt="Inside Sin"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Inside Sin</h3>
                <p>
                  A mysterious space overflowing with pyreflies that unfolds
                  within Sin's massive body. The existence of realms resembling
                  Dream Zanarkand and a blitzball stadium are reflections of
                  Jecht's memories influencing Sin.
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
                  src="/images/Omega_Ruins.jpg"
                  height={400}
                  width={712}
                  style={{
                    margin: "auto",
                  }}
                  alt="Omega Ruins"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Omega Ruins</h3>
                <p>
                  An optional dungeon located within a small group of islands to
                  the east of Spira's main continent. You can access this area
                  through the monster arena. Rather maze-like, like inside Sin,
                  this place must be mapped by the player. Navigating the dark
                  passages you encounter Master Tonberry and Great Malboro, some
                  of the toughest fiends in Spira. You face off two bosses at
                  the end, Omega and Ultima.
                </p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
