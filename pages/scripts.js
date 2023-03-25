import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Scripts() {
  return (
    <Layout>
      <h1>Scripts</h1>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} marginY={10}>
          <h2>Spiran Script</h2>
          <hr width={300} />
          <Image
            src="/images/Sphere-Broadcast-Billboard.webp"
            height={200}
            width={231}
            style={{
              margin: "auto",
              borderRadius: '5px',
            }}
            alt="sphere broadcast billboard"
          />
          <br />
          <p>
            A curvy script used all across Spira. Characters exist for each
            uppercase and lowercase letter. This language can be found in many
            locations. On signs, Blitzball team logos, all over the Luca
            Stadium, and more.
          </p>
        </Grid>
        <Grid item xs={12} md={6} marginY={10}>
          <Image
            src="/images/Spiran_Script.webp"
            height={400}
            width={515}
            style={{
              margin: "auto",
              borderRadius: '5px',
            }}
            alt="Spiran Script"
          />
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
              borderRadius: '5px',
            }}
            alt="Al Bhed Primer"
          />
          <br />
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
              borderRadius: '5px',
            }}
            alt="Al Bhed Script"
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
              borderRadius: '5px',
            }}
            alt="inside Kilika temple"
          />
          <br />
          <p>
            Characters resembling Sanskrit that are used predominantly in Yevon
            institutions. Some characters have their own individual meanings,
            such as 'fire' or 'Yevon'.
          </p>
        </Grid>
        <Grid item xs={12} md={6} marginBottom={10}>
          <Image
            src="/images/Yevon_Script.webp"
            height={400}
            width={515}
            style={{
              margin: "auto",
              borderRadius: '5px',
            }}
            alt="Yevon Script"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
