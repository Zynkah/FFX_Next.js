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

export default function SummonerCards(props) {
  const summoners = props.data;
  return (
    <>
      <Grid container spacing={2}>
        {summoners &&
          summoners
            .filter((summoner) => summoner.role === "Summoner")
            .map((summoner) => (
              <Grid key={summoner.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      {summoner.image ? (
                        <Image
                          src={summoner.image || ""}
                          height={summoner.image_height}
                          width={summoner.image_width}
                          style={{
                            margin: "auto",
                            borderRadius: "5px",
                          }}
                          alt={summoner.name}
                        />
                      ) : (
                        <Typography variant="h6">{summoner.name}</Typography>
                      )}
                    </AccordionSummary>
                    <AccordionDetails>
                      {summoner.image && (
                        <Typography variant="h6">{summoner.name}</Typography>
                      )}
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {summoner.description}
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
