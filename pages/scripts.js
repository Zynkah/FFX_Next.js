import Layout from "../components/layout";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Scripts() {
  return (
    <Layout>
      <h1>Scripts & Religion</h1>
      <hr />
      <h2>Scripts</h2>
      <hr width={500} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} marginY={10}>
          <Image
            src="/images/Spiran_Script.webp"
            height={400}
            width={515}
            style={{
              margin: "auto",
            }}
            alt="Spiran Script"
          />
        </Grid>
        <Grid item xs={12} md={6} marginY={10}>
          <h2>Spiran Script</h2>
          <hr width={300} />
          <Image
            src="/images/Sphere-Broadcast-Billboard.webp"
            height={200}
            width={231}
            style={{
              margin: "auto",
            }}
            alt="sphere broadcast billboard"
          />
          <p>
            A curvy script used all across Spira. Characters exist for each
            uppercase and lowercase letter. This language can be found in many
            locations. On signs, Blitzball team logos, all over the Luca
            Stadium, and more.
          </p>
        </Grid>

        <Grid item xs={12} md={6} marginBottom={10}>
          <h2>Al Bhed Script</h2>
          <hr width={300} />
          <Image
            src="/images/Al-Bhed-Primer-Artwork.webp"
            height={200}
            width={296}
            style={{
              margin: "auto",
            }}
            alt="Al Bhed Primer"
          />
          <p>
            The script used by the Al Bhed, distinctive for its combination of
            two to four fragments to make each character. Uppercase and
            lowercase variations are very similar across the characters.
          </p>
        </Grid>
        <Grid item xs={12} md={6} marginBottom={10}>
          <Image
            src="/images/Al_Bhed_Script.webp"
            height={400}
            width={597}
            style={{
              margin: "auto",
            }}
            alt="Al Bhed Script"
          />
        </Grid>

        <Grid item xs={12} md={6} marginBottom={10}>
          <Image
            src="/images/Yevon_Script.webp"
            height={400}
            width={515}
            style={{
              margin: "auto",
            }}
            alt="Yevon Script"
          />
        </Grid>
        <Grid item xs={12} md={6} marginBottom={10}>
          <h2>Yevon Script</h2>
          <hr width={300} />
          <Image
            src="/images/Kilika-temple-artwork-ffx.webp"
            height={200}
            width={251}
            style={{
              margin: "auto",
            }}
            alt="inside Kilika temple"
          />
          <p>
            Characters resembling Sanskrit that are used predominantly in Yevon
            institutions. Some characters have their own individual meanings,
            such as 'fire' or 'Yevon'.
          </p>
        </Grid>
      </Grid>

      <h2>Religion</h2>
      <hr width={500} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} marginTop={10}>
          <Image
            src="/images/Mika.webp"
            height={400}
            width={400}
            style={{
              margin: "auto",
            }}
            alt="Grand Maester Mika"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
