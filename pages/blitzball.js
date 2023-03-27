import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card } from "@nextui-org/react";

export default function Blitzball() {
  return (
    <Layout>
      <h1>Blitzball</h1>
      <hr />
      <Image
        src="/images/Blitzball_Logo.jpg"
        height={400}
        width={438}
        style={{
          margin: "auto",
          borderRadius: "5px",
        }}
        alt="Blitzball Logo"
      />
      <p>
        Blitzball is the traditional sporting event in Spira. Living in the
        shadow of Sin, residents need something to take their minds off their
        problems. The sport is just as popular today as it was a thousand years
        ago in Zanarkand.
      </p>
      <hr />
      <h2>Teams</h2>
      <hr />

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
                <h2>Besaid Aurochs</h2>
                <Card.Divider />
                <p>
                  The Aurochs hail from the seaside village of Besaid, and at
                  the beginning of Final Fantasy X, are under Wakka's captaincy.
                  They are the only team in Spira to have never passed the first
                  round of the Luca blitz tournament. When Tidus joins in
                  exchange for passage, their success rate soars. The player has
                  control over the Besaid Aurochs following the events in Luca.
                </p>
                <Link href={`../blitzball/aurochs/`}>Team Statistics</Link>
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
                <h2>Luca Goers</h2>
                <Card.Divider />
                <p>
                  At the opening of Final Fantasy X, the Luca Goers reign as the
                  Spira champions. They are captained by the confident and brash
                  forward, Bickson. As they represent the city with the only
                  blitz stadium, they are regarded as the most beloved team in
                  Spira. The team members can be found in and around Luca
                  stadium, if the player wishes to add them to their team.
                </p>
                <Link href={`../blitzball/goers/`}>Team Statistics</Link>
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
                <h2>Kilika Beasts</h2>
                <Card.Divider />
                <p>
                  The Kilika Beasts hail from the small seaside town of Kilika.
                  High Summoner Ohalland used to play for the team before he
                  became a summoner. The Kilika Beasts' team members are found
                  throughout Kilika from the port to the temple.
                </p>
                <Link href={`../blitzball/beasts/`}>Team Statistics</Link>
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
                <h2>Al Bhed Psyches</h2>
                <Card.Divider />
                <p>
                  The Al Bhed Psyches represent the Al Bhed race. During the
                  Luca tournament of Final Fantasy X, they attempt to rig their
                  opening match against the Besaid Aurochs by kidnapping Yuna.
                  Their goalie, Nimrook, is the best goalie in the game. The Al
                  Bhed Psyches are later found on the Fahrenheit, and are
                  available when the player has access to the airship, which is
                  right before entering Bevelle, and permanently after the
                  player has finished the events in Zanarkand.
                </p>
                <Link href={`../blitzball/psyches/`}>Team Statistics</Link>
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
                <h2>Ronso Fangs</h2>
                <Card.Divider />
                <p>
                  The Ronso Fangs represent the Ronso race. Due to their
                  physicality, they rely on power and endurance while lacking in
                  speed. The Ronso Fangs members are found at the Luca Docks.
                </p>
                <Link href={`../blitzball/fangs/`}>Team Statistics</Link>
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
                <h2>Guado Glories</h2>
                <Card.Divider />
                <p>
                  The Guado Glories represent the Guado race, and hail from
                  Guadosalam. Their players contrast the Ronso Fangs with high
                  speed at the expense of HP, Attack, and Endurance. The Guado
                  Glories team can be found in Guadosalam.
                </p>
                <Link href={`../blitzball/glories/`}>Team Statistics</Link>
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
                <h2>Zanarkand Duggles</h2>
                <Card.Divider />
                <p>
                  The Zanarkand Duggles are another team competing in the Jecht
                  Memorial Cup, featuring black and red outfits. Little is known
                  about the team other than that they "play dirty".
                </p>
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
                <h2>Zanarkand Abes</h2>
                <Card.Divider />
                <p>
                  The Zanarkand Abes are Tidus's team in Dream Zanarkand, where
                  he is the star player. They have yellow and black outfits. His
                  father, Jecht, also played for the Abes, a shadow Tidus
                  struggles to step out of. They are only available to play
                  against in Final Fantasy X-2.
                </p>
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
                <h3>Yocun Nomads (Unused Team)</h3>
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
                <h3>Bevelle Bells (Unused Team)</h3>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <h2>Recruiting and Scouting</h2>
              </AccordionSummary>
              <AccordionDetails>
              <Card.Divider />
                <p>
                  There are many players scattered throughout Spira who you can
                  scout and add to your team.
                </p>
                <h3>Free Agents</h3>
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
    </Layout>
  );
}
