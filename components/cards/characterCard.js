import React from "react";
import Image from "next/image";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Card, Button, Link } from "@nextui-org/react";

export default function CharacterCards(props) {
  const characters = props.data.character;

  return (
    <>
      <Grid container spacing={2}>
        {characters &&
          characters
            .filter((character) => character.role === "Main Characters")
            .map((character) => (
              <Grid key={character.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={character.image}
                        height={character.image_height}
                        width={character.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={character.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{character.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {character.description}
                      </Card.Body>
                      <Card.Divider />
                      <Card.Footer>
                        <Button
                          bordered
                          color="gradient"
                          borderWeight
                          size="xs"
                          auto
                          ghost
                          css={{ margin: "auto" }}
                        >
                          <Link href={character.link} className="buttonLink">
                            Learn More →
                          </Link>
                        </Button>
                      </Card.Footer>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
      </Grid>

      <Grid container spacing={2}>
        {characters &&
          characters
            .filter((character) => character.role === "Supporting Characters")
            .map((character) => (
              <Grid key={character.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={character.image}
                        height={character.image_height}
                        width={character.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={character.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{character.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {character.description}
                      </Card.Body>
                      <Card.Divider />
                      <Card.Footer>
                        <Button
                          bordered
                          color="gradient"
                          borderWeight
                          size="xs"
                          auto
                          ghost
                          css={{ margin: "auto" }}
                        >
                          <Link href={character.link} className="buttonLink">
                            Learn More →
                          </Link>
                        </Button>
                      </Card.Footer>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
      </Grid>
    </>
  );
}
