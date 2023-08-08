import Image from "next/image";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Card, Button } from "@nextui-org/react";
import * as React from "react";

export default function AeonCards() {
  const aeons = props.data;
  return (
    <>
      <Grid container spacing={2}>
        {aeons &&
          aeons
            .filter((aeon) => aeon.role === "aeon")
            .map((aeon) => (
              <Grid key={aeon.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={aeon.image}
                        height={aeon.imgae_height}
                        width={aeon.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={aeon.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{aeon.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {aeon.description}
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
                          <Link
                            href={aeon.link}
                            className="buttonLink"
                          >
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
