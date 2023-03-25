import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Culture() {
  return (
    <Layout>
      <h1>Life in Spira</h1>
      <Link href={`/races/`}> Races & Creatures |</Link>
      <Link href={`/scripts/`}> Scripts  |</Link>
      <Link href={`/religion/`}> Religion |</Link>
      <Link href={`/military/`}> Military |</Link>
      <Link href={`/technology/`}> Technology |</Link>
      <Link href={`/blitzball/`}> Blitzball </Link>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={4} marginTop={5}>
          <Image
            src="/images/Dream_Zanarkand_Culture.jpg"
            height={400}
            width={388}
            style={{
              margin: "auto",
              borderRadius: '5px',
            }}
            alt="Dream Zanarkand Culture"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={8} marginTop={15}>
          <p>
            <b>Spira</b> has a variety of different races and languages
            thoughout its lands. Each region has its own people, with their own
            culture.
            <b> Blitzball</b> is a shared sport most regions have, and brings
            them together. The fear of <b>Sin</b> and its destruction is another
            thing they have in common. Although they may have differnt ways to
            achieve the
            <b> Calm</b>, they all yearn for peace in the end.
          </p>
        </Grid>
      </Grid>
    </Layout>
  );
}
