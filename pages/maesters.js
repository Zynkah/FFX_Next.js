import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Scripts() {
  return (
    <Layout>
      <h1>Maesters</h1>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/aeons/`}> Aeons</Link>
      <hr />
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
