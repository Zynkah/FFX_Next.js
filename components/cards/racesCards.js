import Image from "next/image";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Card } from "@nextui-org/react";
import * as React from "react";

export default function RaceCards(props) {
  const races = props.data.race;

  return (
    <>
      <Grid container spacing={2}>
        {races &&
          races
            .filter((race) => race.role === "Humanoids")
            .map((race) => (
              <Grid key={race.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={race.image}
                        height={race.image_height}
                        width={race.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={race.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{race.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {race.description}
                      </Card.Body>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
      </Grid>

      <Grid container spacing={2}>
        {races &&
          races
            .filter((race) => race.role === "Demi-Humanoids")
            .map((race) => (
              <Grid key={race.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={race.image}
                        height={race.image_height}
                        width={race.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={race.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{race.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {race.description}
                      </Card.Body>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
      </Grid>

      <Grid container spacing={2}>
        {races &&
          races
            .filter((race) => race.role === "Creatures")
            .map((race) => (
              <Grid key={race.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={race.image}
                        height={race.image_height}
                        width={race.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={race.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{race.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {race.description}
                      </Card.Body>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
      </Grid>
    </>
  );
}
