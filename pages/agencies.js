import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import utilStyles from "../styles/utils.module.css";

export default function TravelAgency() {
  return (
    <Layout>
      <Typography
        variant="h3"
        sx={{ margin: "20px" }}
        className={utilStyles.title}
      >
        Rin's Travel Agencies
      </Typography>
      <hr />
      <p>An Al Bhed named Rin owns these inns scattered thoughout Spira.</p>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h2>Mi'ihen Highroad Branch</h2>
          <Image
            src="/images/Miihen_Agency.webp"
            height={400}
            width={710}
            style={{
              margin: "auto",
            }}
            alt="Mi'ihen Agency"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Thunder Plains Branch</h2>
          <Image
            src="/images/Thunder_Plains_Agency.webp"
            height={400}
            width={710}
            style={{
              margin: "auto",
            }}
            alt="Thunder Plains Agency"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Lake Macalania Branch</h2>
          <Image
            src="/images/Lake_Macalania.webp"
            height={400}
            width={533}
            style={{
              margin: "auto",
            }}
            alt="Lake Macalania Agency"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Calm Lands Branch</h2>
          <Image
            src="/images/Calm_Lands_Agency.webp"
            height={400}
            width={710}
            style={{
              margin: "auto",
            }}
            alt="Calm Agency"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
