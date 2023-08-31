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

export default function LocationCards(props) {
  const locations = props.data;

  return (
    <>
      <Grid container spacing={2}>
        {locations &&
          locations
            .filter((location) => location.role === "Location")
            .map((location) => (
              <Grid key={location.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={location.image}
                        height={location.image_height}
                        width={location.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={location.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{location.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {location.description}
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
