import Layout from "../components/layout";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function Blitzball() {
  return (
    <Layout>
      <h1>Blitzball</h1>
      <Image
        src="/images/Blitzball_Logo.jpg"
        height={400}
        width={422}
        style={{
          margin: "auto",
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
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Besaid_Aurochs.jpg"
                  height={400}
                  width={383}
                  style={{
                    margin: "auto",
                  }}
                  alt="Besaid Aurochs"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Besaid Aurochs</h3>
                <p>
                  <b>Tidus</b>
                  <br />
                  Key Techniques :
                  <br />
                  Venom Tackle, Drain Tackle, Anti-Venom 2
                  <br />
                  Location Found :
                  <br />
                  N/A
                </p>
                <p>
                  <b>Datto</b>
                  <br />
                  Key Techniques :
                  <br />
                  Wither Shot, Anti-Venom, Wither Shot 2
                  <br />
                  Location Found :
                  <br />
                  Luca Stadium - Aurochs Locker Room
                </p>
                <p>
                  <b>Letty</b>
                  <br />
                  Key Techniques :
                  <br />
                  Wither Tackle, Nap Pass, Venom Pass 3
                  <br />
                  Location Found :
                  <br />
                  Luca Stadium - Aurochs Locker Room
                </p>
                <p>
                  <b>Jassu</b>
                  <br />
                  Key Techniques :
                  <br />
                  Wither Tackle, Wither Tackle 2, Nap Tackle 2
                  <br />
                  Location Found :
                  <br />
                  Luca Stadium - Aurochs Locker Room
                </p>
                <p>
                  <b>Botta</b>
                  <br />
                  Key Techniques :
                  <br />
                  Venom Shot, Venom Pass 2, Nap Tackle
                  <br />
                  Location Found :
                  <br />
                  Luca Stadium - Aurochs Locker Room
                </p>
                <p>
                  <b>Keepa</b>
                  <br />
                  Key Techniques :
                  <br />
                  Super Goalie, Volley Shoot, Anti-Wither
                </p>
                Location Found :
                <br />
                Luca Stadium - Aurochs Locker Room
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
                  src="/images/Luca_Goers.jpg"
                  height={400}
                  width={589}
                  style={{
                    margin: "auto",
                  }}
                  alt="Luca Goers"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Luca Goers</h3>
                <ul>
                  <li>Bickson</li>
                  <li>Abus</li>
                  <li>Graav</li>
                  <li>Doram</li>
                  <li>Balgerda</li>
                  <li>Raudy</li>
                </ul>
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
                  src="/images/Kilika_Beasts.jpg"
                  height={400}
                  width={431}
                  style={{
                    margin: "auto",
                  }}
                  alt="Kilika Beasts"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Kilika Beasts</h3>
                <ul>
                  <li>Larbeight</li>
                  <li>Isken</li>
                  <li>Vuroja</li>
                  <li>Kulukan</li>
                  <li>Deim</li>
                  <li>Nizarut</li>
                </ul>
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
                  src="/images/Al_Bhed_Psyches.jpg"
                  height={400}
                  width={592}
                  style={{
                    margin: "auto",
                  }}
                  alt="Al Bhed Psyches"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Al Bhed Psyches</h3>
                <ul>
                  <li>Eigaar</li>
                  <li>Blappa</li>
                  <li>Berrik</li>
                  <li>Judda</li>
                  <li>Lakkam</li>
                  <li>Nimrook</li>
                </ul>
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
                  src="/images/Ronso_Fangs.jpg"
                  height={400}
                  width={795}
                  style={{
                    margin: "auto",
                  }}
                  alt="Ronso Fangs"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Ronso Fangs</h3>
                <ul>
                  <li>Basik Ronso</li>
                  <li>Argai Ronso</li>
                  <li>Gazna Ronso</li>
                  <li>Nuvy Ronso</li>
                  <li>Irga Ronso</li>
                  <li>Zamzi Ronso</li>
                </ul>
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
                  src="/images/Guado_Glories.jpg"
                  height={400}
                  width={409}
                  style={{
                    margin: "auto",
                  }}
                  alt="Guado Glories"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Guado Glories</h3>
                <ul>
                  <li>Giera Guado</li>
                  <li>Zazi Guado</li>
                  <li>Navara Guado</li>
                  <li>Auda Guado</li>
                  <li>Pah Guado</li>
                  <li>Noy Guado</li>
                </ul>
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
                  src="/images/Zanarkand_Duggles.jpg"
                  height={400}
                  width={851}
                  style={{
                    margin: "auto",
                  }}
                  alt="Zanarkand Duggles"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Zanarkand Duggles</h3>
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
                  src="/images/Zanarkand_Abes.jpg"
                  height={400}
                  width={435}
                  style={{
                    margin: "auto",
                  }}
                  alt="Zanarkand Abes"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Zanarkand Abes</h3>
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
                  src="/images/Yocun_Nomads.jpg"
                  height={400}
                  width={396}
                  style={{
                    margin: "auto",
                  }}
                  alt="Yocun Nomads"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Yocun Nomads (Unused Team)</h3>
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
                  src="/images/Bevelle_Bells.jpg"
                  height={400}
                  width={344}
                  style={{
                    margin: "auto",
                  }}
                  alt="Bevelle Bells"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Bevelle Bells (Unused Team)</h3>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <h2>Recruiting and Scouting</h2>
                <p>
                  There are many players scattered throughout Spira who you can
                  scout and add to your team.
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <h3>Free Agents</h3>
                <ul>
                  <li>Brother</li>
                  <li>Wedge</li>
                  <li>Kiyuri</li>
                  <li>Kyou</li>
                  <li>Zalitz</li>
                  <li>Shaami</li>
                  <li>Shuu</li>
                  <li>Jumal</li>
                  <li>Svanda</li>
                  <li>Zev Ronso</li>
                  <li>Tatts</li>
                  <li>Durren</li>
                  <li>Nedus</li>
                  <li>Naida</li>
                  <li>Biggs</li>
                  <li>Vilucha</li>
                  <li>Mifurey</li>
                  <li>Miyu</li>
                  <li>Mep</li>
                  <li>Yuma Guado</li>
                  <li>Linna</li>
                  <li>Rin</li>
                  <li>Ropp</li>
                  <li>Wakka</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
