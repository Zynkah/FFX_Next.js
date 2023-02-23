import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function Temples() {
  return (
    <Layout>
      <h1>Temples in Spira</h1>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Besaid_Island.jpg"
                  height={300}
                  width={477}
                  style={{
                    margin: "auto",
                  }}
                  alt="Besaid Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Besaid Temple</h3>
                <p>This temple is in the Besaid Village.</p>
                <Image
                  src="/images/Glyph_Besaid.jpg"
                  height={250}
                  width={252}
                  style={{
                    margin: "auto",
                  }}
                  alt="Besaid Glyph"
                />
                <p>
                  This temple has a Cloister of Trials you will have to
                  complete.
                </p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Valefor.jpeg"
                    height={250}
                    width={321}
                    style={{
                      margin: "auto",
                    }}
                    alt="Valefor"
                  />
                </Link>
                <p>
                  It houses the Aeon Valefor, which is the first Aeon Yuna
                  obtains.
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
                  src="/images/Kilika_Temple.jpg"
                  height={300}
                  width={381}
                  style={{
                    margin: "auto",
                  }}
                  alt="Kilika Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Kilika Temple</h3>
                <p>This temple is just right outside of the Kilika Village.</p>
                <Image
                  src="/images/Glyph_Kilika.webp"
                  height={250}
                  width={249}
                  style={{
                    margin: "auto",
                  }}
                  alt="Kilika Glyph"
                />
                <p>
                  This temple has a Cloister of Trials you will have to
                  complete.
                </p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Ifrit.jpg"
                    height={250}
                    width={258}
                    style={{
                      margin: "auto",
                    }}
                    alt="Ifrit"
                  />
                </Link>
                <p>This temple houses the Aeon Ifrit.</p>
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
                  height={300}
                  width={529}
                  style={{
                    margin: "auto",
                  }}
                  alt="Djose"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Djose Temple</h3>
                <p>This temple is found in the Thunder Plains.</p>
                <Image
                  src="/images/Glyph_Djose.webp"
                  height={300}
                  width={284}
                  style={{
                    margin: "auto",
                  }}
                  alt="Djose Glyph"
                />
                <p>
                  This temple has a Cloister of Trials you will have to
                  complete.
                </p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Ixion.jpg"
                    height={300}
                    width={351}
                    style={{
                      margin: "auto",
                    }}
                    alt="Ixion"
                  />
                </Link>
                <p>This temple houses the Aeon Ixion.</p>
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
                  src="/images/Macalania_Temple.jpg"
                  height={300}
                  width={328}
                  style={{
                    margin: "auto",
                  }}
                  alt="Macalania temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Macalania Temple</h3>
                <p>
                  After passing through the Macalania Woods you will reach the
                  temple.
                </p>
                <Image
                  className="cardImage"
                  src="/images/Glyph_Macalania.webp"
                  height={300}
                  width={272}
                  style={{
                    margin: "auto",
                  }}
                  alt="Macalania Glyph"
                />
                <p>You will need to complete a Cloister of Trials first.</p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Shiva.jpg"
                    height={300}
                    width={284}
                    style={{
                      margin: "auto",
                    }}
                    alt="Shiva"
                  />
                </Link>
                <p>This is where the Aeon Shiva is housed.</p>
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
                  src="/images/Bevelle_Temple.png"
                  height={300}
                  width={425}
                  style={{
                    margin: "auto",
                  }}
                  alt="Bevelle"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Bevelle Temple</h3>
                <p>Inside the city of Bevelle you will find this temple.</p>
                <Image
                  src="/images/Glyph_Bevelle.webp"
                  height={250}
                  width={303}
                  style={{
                    margin: "auto",
                  }}
                  alt="Bevelle Glyph"
                />
                <p>
                  This temple has a Cloister of Trials you will have to
                  complete.
                </p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Bahamut.jpg"
                    height={250}
                    width={237}
                    style={{
                      margin: "auto",
                    }}
                    alt="Bahamut"
                  />
                </Link>
                <p>This temple houses the Aeon Bahamut. </p>
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
                  src="/images/Remiem_Temple.png"
                  height={300}
                  width={533}
                  style={{
                    margin: "auto",
                  }}
                  alt="Remiem Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Remiem Temple</h3>
                <p>This temple is found in the Calm Lands.</p>
                <Image
                  src="/images/Glyph_Remiem_1.webp"
                  height={250}
                  width={333}
                  style={{
                    margin: "auto",
                  }}
                  alt="Cindy Glyph"
                />
                <p>Cindy</p>
                <Image
                  src="/images/Glyph_Remiem_2.webp"
                  height={250}
                  width={194}
                  style={{
                    margin: "auto",
                  }}
                  alt="Sandy Glyph"
                />
                <p>Sandy</p>
                <Image
                  src="/images/Glyph_Remiem_3.webp"
                  height={250}
                  width={240}
                  style={{
                    margin: "auto",
                  }}
                  alt="Mindy Glyph"
                />
                <p>Mindy</p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Magus_Sisters.jpeg"
                    height={300}
                    width={314}
                    style={{
                      margin: "auto",
                    }}
                    alt="Magus Sisters"
                  />
                </Link>
                <p>Aeon: Magus Sisters</p>
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
                  height={300}
                  width={409}
                  style={{
                    margin: "auto",
                  }}
                  alt="Baaj Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Baaj Temple</h3>
                <p>
                  Baaj Temple is a hidden location that can be found by using
                  the search command while looking at the world map on the
                  Airship.
                </p>
                <Image
                  src="/images/Glyph_Baaj.webp"
                  height={250}
                  width={360}
                  style={{
                    margin: "auto",
                  }}
                  alt="Bevelle Glyph"
                />
                <p>
                  In order to break the seal at the front of this room you will
                  need to activate the six statues located in this room.
                </p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Anima.jpeg"
                    height={300}
                    width={268}
                    style={{
                      margin: "auto",
                    }}
                    alt="Anima"
                  />
                </Link>
                <p>
                  Anima is the second of three option Aeons that you can obtain
                  within Final Fantasy X. Anima can be obtained by traveling to
                  Baaj Temple, one of the optional areas that you can explore
                  once you reach the end of the game. You need to travel to Baaj
                  Temple and unlock the Chamber of the Fayth at the back of the
                  temple in order to obtain Anima.
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
                  src="/images/Cavern_of_Stolen_Fayth.webp"
                  height={300}
                  width={412}
                  style={{
                    margin: "auto",
                  }}
                  alt="Stolen Fayth"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Cavern of the Stolen Fayth</h3>
                <p>
                  You will find this cave in the Calm lands before you enter the
                  path to Mt. Gagezet.
                </p>
                <Image
                  src="/images/Glyph_Cavern_of_the_Stolen_Fayth.webp"
                  height={300}
                  width={318}
                  style={{
                    margin: "auto",
                  }}
                  alt="Macalania Glyph"
                />
                <p>
                  You will have to clear your way through the cave and reach the
                  end where the teleportation pads are located.
                </p>
                <Link href={`/aeons/`}>
                  <Image
                    className="cardImage"
                    src="/images/Yojimbo.jpeg"
                    height={250}
                    width={258}
                    style={{
                      margin: "auto",
                    }}
                    alt="Yojimbo"
                  />
                  <p>To obtain Yojimbo you have to pay him.</p>
                </Link>
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
                  src="/images/Zanarkand_Dome.webp"
                  height={300}
                  width={253}
                  style={{
                    margin: "auto",
                  }}
                  alt="Zanarkand Dome"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Zanarkand Dome</h3>
                <p>location</p>
                <Image
                  src="/images/Glyph_Zanarkand_Dome.webp"
                  height={300}
                  width={297}
                  style={{
                    margin: "auto",
                  }}
                  alt="Zanarkand Dome Glyph"
                />
                <p>Glyph</p>
                <Image
                  src="/images/Lord_Zaon_Aeon.jpg"
                  height={250}
                  width={358}
                  style={{
                    margin: "auto",
                  }}
                  alt="Lord Zaon"
                />
                <p>Aeon: Lord Zaon (Power lost)</p>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
