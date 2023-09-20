import Layout from "../../components/layout";
import ReligionTabs from "../../components/religion_tabs";
import Image from "next/image";
import { Grid, Typography, Box } from "@mui/material";
import * as React from "react";

export default function Anima() {
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Anima
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ReligionTabs />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Its fayth is Seymour's mother, and the plate around its neck is
              engraved with her image. Anima is first seen as Seymour's chilling
              aeon, but the party can acquire it by undertaking a quest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Anima.jpeg"
              height={300}
              width={268}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Anima Profile"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/Anima_Artwork.webp"
              height={300}
              width={162}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Anima Body"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Return to Baaj Temple from the airship, defeating Geosgaeno, and
              then enter the underwater temple. Find the six hidden items in the
              Cloister of Trials at each temple, and then approach each statue
              inside Anima's shrine. This opens a doorway to the most
              devastating aeon in the game.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} marginTop={5}>
            <Typography var="body1" component="p">
              Anima's unique attack, Pain, conjures the essence of misery and
              anguish, and unleashes it upon a single enemy. The attack has a
              high chance of causing instant death. Pain has a high recovery
              time. Her overdrive is Oblivion, the most horrifying overdrive
              that inflicts multiple non-elemental attacks on all enemies.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/Fayth_Anima.webp"
              height={300}
              width={330}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Anima Fayth"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
