import Image from "next/image";
import Link from "next/link";
import { Card, Button } from "@nextui-org/react";
import {
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Grid,
} from "@mui/material";

export default function TeamCards(props) {
  const teams = props.data;

  return (
    <>
      <Grid container spacing={2}>
        {teams &&
          teams
            .filter((team) => team.role === "Team")
            .map((team) => (
              <Grid key={team.key} item xs={12} md={6}>
                <Card isPressable isHoverable variant="bordered">
                  <Accordion>
                    <AccordionSummary>
                      <Image
                        src={team.image}
                        height={team.image_height}
                        width={team.image_width}
                        style={{
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                        alt={team.name}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h6">{team.name}</Typography>
                      <Card.Divider />
                      <Card.Body css={{ textAlign: "center" }}>
                        {team.description}
                      </Card.Body>
                      <Button
                        bordered
                        color="gradient"
                        borderWeight
                        size="xs"
                        auto
                        ghost
                        css={{ margin: "auto" }}
                      >
                        <Link href={team.link} className="buttonLink">
                          Team Statistics →
                        </Link>
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
      </Grid>
    </>
  );
}
