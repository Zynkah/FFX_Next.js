import Layout from "../components/layout";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";

export default function TravelAgency() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Rin's Travel Agencies
      </Typography>
     
      <Typography variant="body">
        An Al Bhed named Rin owns these inns scattered thoughout Spira.
      </Typography>
      <Box sx={{ margin: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Mi'ihen Highroad Branch</Typography>
            <Image
              src="/images/Miihen_Agency.webp"
              height={400}
              width={710}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Mi'ihen Agency"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Thunder Plains Branch</Typography>
            <Image
              src="/images/Thunder_Plains_Agency.webp"
              height={400}
              width={710}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Thunder Plains Agency"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Lake Macalania Branch</Typography>
            <Image
              src="/images/Lake_Macalania.webp"
              height={400}
              width={533}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Lake Macalania Agency"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Calm Lands Branch</Typography>
            <Image
              src="/images/Calm_Lands_Agency.webp"
              height={400}
              width={710}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Calm Agency"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
