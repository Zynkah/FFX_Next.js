import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Technology() {
  return (
    <Layout>
      <h1>Technology in Spira</h1>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h2>Machina</h2>
        </Grid>
        <Grid item xs={12} md={6}><Image
            src="/images/Machina_Cannon.webp"
            height={400}
            width={563}
            style={{
              margin: "auto",
            }}
            alt="Machina Cannon"
          /></Grid>
        <Grid item xs={12} md={6}>
          <h2>Spheres</h2>
        </Grid>
        <Grid item xs={12} md={6}><Image
            src="/images/sphere.webp"
            height={400}
            width={500}
            style={{
              margin: "auto",
            }}
            alt="Movie Sphere"
          /></Grid>
        <Grid item xs={12} md={12}>
          <h2>Vehicles</h2>
        </Grid>
        <Grid item xs={12} md={6}><Image
            src="/images/Fahrenheit.webp"
            height={400}
            width={607}
            style={{
              margin: "auto",
            }}
            alt="Fahrenheit"
          /></Grid>
        <Grid item xs={12} md={6}><Image
            src="/images/Barge_Al_Bhed.webp"
            height={400}
            width={596}
            style={{
              margin: "auto",
            }}
            alt="Barge Al Bhed"
          /></Grid>
        <Grid item xs={12} md={6}><Image
            src="/images/Liki_Ship.webp"
            height={400}
            width={637}
            style={{
              margin: "auto",
            }}
            alt="Liki Ship"
          /></Grid>
        <Grid item xs={12} md={6}><Image
            src="/images/Snow_Sled.webp"
            height={400}
            width={556}
            style={{
              margin: "auto",
            }}
            alt="Snow Sled"
          /></Grid>
      </Grid>
    </Layout>
  );
}
