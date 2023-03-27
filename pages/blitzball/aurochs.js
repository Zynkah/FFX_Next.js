import Layout from "../../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card } from "@nextui-org/react";

export default function Aurochs() {
  return (
    <Layout>
      <h1>Besaid Aurochs</h1>
      <h3>
        <b>Team Members</b>
      </h3>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Tidus_blitzball.webp"
                  height={400}
                  width={145}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Tidus"
                />
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Datto.webp"
                  height={400}
                  width={174}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Datto"
                />
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Letty.webp"
                  height={400}
                  width={121}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Letty"
                />
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Jassu.webp"
                  height={400}
                  width={183}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Jassu"
                />
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Botta.webp"
                  height={400}
                  width={151}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Botta"
                />
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Keepa.webp"
                  height={400}
                  width={150}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Keepa"
                />
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <b>Keepa</b>
                  <br />
                  Key Techniques :
                  <br />
                  Super Goalie, Volley Shoot, Anti-Wither Location Found :
                  <br />
                  Luca Stadium - Aurochs Locker Room
                </p>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
