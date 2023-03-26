import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Magus_Sisters() {
  return (
    <Layout>
      <h1>Magus Sisters</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons</Link>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Layout>
  );
}
