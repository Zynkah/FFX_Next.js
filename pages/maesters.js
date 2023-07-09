import Layout from "../components/layout";
import ReligionTabs from "../components/religion_tabs";
import Image from "next/image";
import { Grid, Typography, Box } from "@mui/material";
import * as React from "react";

export default function Maester() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Maesters
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ReligionTabs />
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} marginTop={10}>
            <Image
              src="/images/Mika.webp"
              height={350}
              width={350}
              style={{
                margin: "auto",
              }}
              alt="Grand Maester Mika"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/WenKinoc.png"
              height={400}
              width={190}
              style={{
                margin: "auto",
              }}
              alt="Wen Kinoc"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/Kelk.webp"
              height={400}
              width={241}
              style={{
                margin: "auto",
              }}
              alt="Kelk"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/Jyscal.webp"
              height={400}
              width={250}
              style={{
                margin: "auto",
              }}
              alt="Jyscal"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={10}>
            <Image
              src="/images/Seymour.jpg"
              height={400}
              width={322}
              style={{
                margin: "auto",
              }}
              alt="Wen Kinoc"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
