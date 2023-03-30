import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card } from "@nextui-org/react";

export default function Temples() {
  return (
    <Layout>
      <h1>Temples in Spira</h1>
      <hr />
      <p>
        Temples of Yevon are found throughout Spira. At the heart of each temple
        lies a Chamber of the Fayth, a room that contains a fayth—a statue that
        houses a willingly-given human soul. Through the soul bonding to a
        summoner mighty creatures called aeons may be made manifest.
      </p>
      <hr />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Besaid_Island.jpg"
                  height={300}
                  width={477}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Besaid Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Besaid Temple</h3>
                <Card.Divider />
                <p>This temple is in the Besaid Village.</p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <p>
                      It houses the Aeon Valefor, which is the first Aeon Yuna
                      obtains.
                    </p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Valefor.jpeg"
                        height={250}
                        width={321}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Valefor"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Besaid.jpg"
                      height={250}
                      width={252}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Besaid Glyph"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>
                      This temple has a Cloister of Trials you will have to
                      complete.
                    </p>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Kilika_Temple.jpg"
                  height={300}
                  width={381}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Kilika Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Kilika Temple</h3>
                <Card.Divider />
                <p>This temple is just right outside of the Kilika Village.</p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <p>This temple houses the Aeon Ifrit.</p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Ifrit.jpg"
                        height={250}
                        width={258}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Ifrit"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Kilika.webp"
                      height={250}
                      width={249}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Kilika Glyph"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>
                      This temple has a Cloister of Trials you will have to
                      complete.
                    </p>
                  </Grid>
                </Grid>
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
                  height={300}
                  width={529}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Djose"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Djose Temple</h3>
                <Card.Divider />
                <p>This temple is found in the Thunder Plains.</p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <p>This temple houses the Aeon Ixion.</p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Ixion.jpg"
                        height={300}
                        width={361}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Ixion"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Djose.webp"
                      height={300}
                      width={284}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Djose Glyph"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>
                      This temple has a Cloister of Trials you will have to
                      complete.
                    </p>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Macalania_Temple.jpg"
                  height={300}
                  width={328}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Macalania temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Macalania Temple</h3>
                <Card.Divider />
                <p>
                  After passing through the Macalania Woods you will reach the
                  temple.
                </p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <p>This is where the Aeon Shiva is housed.</p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Shiva.jpg"
                        height={300}
                        width={284}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Shiva"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Macalania.webp"
                      height={300}
                      width={272}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Macalania Glyph"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>You will need to complete a Cloister of Trials first.</p>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Bevelle_Temple.png"
                  height={300}
                  width={425}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Bevelle"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Bevelle Temple</h3>
                <Card.Divider />
                <p>Inside the city of Bevelle you will find this temple.</p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Bahamut.jpg"
                        height={250}
                        width={237}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Bahamut"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>This temple houses the Aeon Bahamut.</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>
                      This temple has a Cloister of Trials you will have to
                      complete.
                    </p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Bevelle.webp"
                      height={250}
                      width={303}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Bevelle Glyph"
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Cavern_of_Stolen_Fayth.webp"
                  height={300}
                  width={412}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Stolen Fayth"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Cavern of the Stolen Fayth</h3>
                <Card.Divider />
                <p>
                  You will find this cave in the Calm lands before you enter the
                  path to Mt. Gagezet.
                </p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Yojimbo.jpeg"
                        height={250}
                        width={258}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Yojimbo"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>
                      Yojimbo is the first optional aeon. To obtain Yojimbo you
                      have to pay him.
                    </p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>
                      You will have to clear your way through the cave and reach
                      the end where the teleportation pads are located.
                    </p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Cavern_of_the_Stolen_Fayth.webp"
                      height={250}
                      width={265}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Macalania Glyph"
                    />
                  </Grid>
                </Grid>
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
                  height={300}
                  width={409}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Baaj Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Baaj Temple</h3>
                <Card.Divider />
                <p>
                  Baaj Temple is a hidden location that can be found by using
                  the search command while looking at the world map on the
                  Airship.
                </p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <p>
                      Anima is the second of three option Aeons that you can
                      obtain within Final Fantasy X.
                    </p>
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Anima.jpeg"
                        height={300}
                        width={268}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Anima"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <p>
                      Anima can be obtained by traveling to Baaj Temple, one of
                      the optional areas that you can explore once you reach the
                      end of the game. You need to travel to Baaj Temple and
                      unlock the Chamber of the Fayth at the back of the temple
                      in order to obtain Anima.
                    </p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Baaj.webp"
                      height={250}
                      width={360}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Bevelle Glyph"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>
                      In order to break the seal at the front of this room you
                      will need to activate the six statues located in this
                      room.
                    </p>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Zanarkand_Dome.webp"
                  height={300}
                  width={253}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Zanarkand Dome"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Zanarkand Dome</h3>
                <Card.Divider />
                <p>location</p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <p>Aeon: Lord Zaon (Power lost)</p>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Lord_Zaon_Aeon.jpg"
                      height={250}
                      width={358}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Lord Zaon"
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Image
                      src="/images/Glyph_Zanarkand_Dome.webp"
                      height={300}
                      width={297}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Zanarkand Dome Glyph"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <p>Glyph</p>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Remiem_Temple.png"
                  height={300}
                  width={533}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Remiem Temple"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Remiem Temple</h3>
                <Card.Divider />
                <p>This temple is found in the Calm Lands.</p>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <p>Aeon: Magus Sisters</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Image
                      src="/images/MagusSisters_Full.webp"
                      height={300}
                      width={320}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Magus Sisters"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Link href={`/aeons/`}>
                      <Image
                        className="cardImage"
                        src="/images/Magus_Sisters.jpeg"
                        height={300}
                        width={314}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt="Magus Sisters"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Image
                      src="/images/Magus-Sisters-Flowers.webp"
                      height={300}
                      width={275}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Magus Sisters"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Image
                      src="/images/Glyph_Remiem_1.webp"
                      height={250}
                      width={333}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Cindy Glyph"
                    />
                    <p>Cindy</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Image
                      src="/images/Glyph_Remiem_2.webp"
                      height={250}
                      width={194}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Sandy Glyph"
                    />
                    <p>Sandy</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Image
                      src="/images/Glyph_Remiem_3.webp"
                      height={250}
                      width={240}
                      style={{
                        margin: "auto",
                        borderRadius: "5px",
                      }}
                      alt="Mindy Glyph"
                    />
                    <p>Mindy</p>
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
