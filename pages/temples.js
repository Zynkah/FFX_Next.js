import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { Card, Divider } from "@nextui-org/react";

export default function Temples() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Temples in Spira
      </Typography>
      <Typography variant="body">
        Temples of Yevon are found throughout Spira. At the heart of each temple
        lies a Chamber of the Fayth, a room that contains a fayth—a statue that
        houses a willingly-given human soul. Through the soul bonding to a
        summoner mighty creatures called aeons may be made manifest.
      </Typography>
      <Divider />
      <Box sx={{ margin: "20px" }} />
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
                <Typography variant="h6">Besaid Temple</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                  This temple is in the Besaid Village. It has a Cloister of
                  Trials you will have to complete. It houses the Aeon Valefor,
                  which is the first Aeon Yuna obtains.
                  <Link href={`/aeons/valefor/`}>Valefor Info →</Link>
                </Card.Body>
                <Box />
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
                <Typography variant="h6">Kilika Temple</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                  This temple is just right outside of the Kilika Village. It
                  has a Cloister of Trials you will have to complete. This
                  temple houses the Aeon Ifrit.
                  <Link href={`/aeons/ifrit`}>Ifrit Info →</Link>
                </Card.Body>
                <Box />
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
                <Typography variant="h6">Djose Temple</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                  This temple is found in the Thunder Plains. It has a Cloister
                  of Trials you will have to complete. This temple houses the
                  Aeon Ixion.
                  <Link href={`/aeons/ixion`}>Ixion Info →</Link>
                </Card.Body>
                <Box />
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
                <Typography variant="h6">Macalania Temple</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                  After passing through the Macalania Woods you will reach the
                  temple. You will need to complete a Cloister of Trials first.
                  This is where the Aeon Shiva is housed.
                  <Link href={`/aeons/shiva`}>Shiva Info →</Link>
                </Card.Body>
                <Box />
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
                <Typography variant="h6">Bevelle Temple</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                  Inside the city of Bevelle you will find this temple. This
                  temple has a Cloister of Trials you will have to complete.
                  This temple houses the Aeon Bahamut.
                  <Link href={`/aeons/bahamut`}>Bahamut Info →</Link>
                </Card.Body>
                <Box />
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
                <Typography variant="h6">Cavern of the Stolen Fayth</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                  You will find this cave in the Calm lands before you enter the
                  path to Mt. Gagezet. You will have to clear your way through
                  the cave and reach the end where the teleportation pads are
                  located. Yojimbo is the first optional aeon. To obtain Yojimbo
                  you have to pay him.
                  <Link href={`/aeons/yojimbo`}>Yojimbo Info →</Link>
                </Card.Body>
                <Box />
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
                <Typography variant="h6">Baaj Temple</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                  Baaj Temple is a hidden location that can be found by using
                  the search command while looking at the world map on the
                  Airship. Anima can be obtained by traveling to Baaj Temple,
                  one of the optional areas that you can explore once you reach
                  the end of the game. You need to travel to Baaj Temple and
                  unlock the Chamber of the Fayth at the back of the temple in
                  order to obtain Anima. In order to break the seal at the front
                  of this room you will need to activate the six statues located
                  in this room. Anima is the second of three option Aeons that
                  you can obtain within Final Fantasy X.
                  <Link href={`/aeons/anima`}>Anima Info →</Link>
                </Card.Body>
                <Box />
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
                <Typography variant="h6">Zanarkand Dome</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>
                Aeon: Lord Zaon (Power lost)
                </Card.Body>
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
                <Typography variant="h6">Remiem Temple</Typography>
                <Card.Divider />
                <Card.Body css={{ textAlign: "center" }}>This temple is found in the Calm Lands.</Card.Body>
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
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
