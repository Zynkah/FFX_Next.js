import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Scripts() {
  return (
    <Layout>
      <h1>Maesters</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons |</Link>
      <Link href={`/religion/`}> Back</Link>
      <hr />
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
    </Layout>
  );
}
