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
import { Card, Button } from "@nextui-org/react";

export default function TempleCards(props) {
  const temples = props.data;

  return (
    <>
      <Grid container spacing={2}>
        {temples &&
          temples
            .filter((temple) => temple.role === "Temple")
            .map((temple) => (
              <Grid key={temple.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={temple.image}
                        height={temple.image_height}
                        width={temple.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={temple.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{temple.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {temple.description}
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
                            <Link href={temple.link} className="buttonLink">
                              {temple.aeon} Info →
                            </Link>
                          </Button>
                        </Card.Footer>
                        <Card.Divider />
                      </Card.Body>
                      <Box />
                      <Image
                        src={temple.glyph_image}
                        height={temple.glyph_image_height}
                        width={temple.glyph_image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={temple.glyph_name}
                      />
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
      </Grid>
    </>
  );
}
