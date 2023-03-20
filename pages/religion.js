import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Scripts() {
  return (
    <Layout>
      <h1>Religion</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons |</Link>
      <Link href={`/culture/`}> Culture</Link>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} marginTop={13}>
          <Image
            src="/images/Child_Seymour.webp"
            height={400}
            width={357}
            style={{
              margin: "auto",
            }}
            alt="Child Seymour with Anima"
          />
        </Grid>
        <Grid item xs={12} md={6} marginTop={10}>
          Religion is an important part of life for many of the peoples of
          Spira, with a large majority of the population describing themselves
          as "Yevonites". Though by the end of Final Fantasy X some people had
          begun to question them, nevertheless the teachings of Yevon were
          millennium-old and heavily influential. The Yevonite clergy taught
          that Sin was a divine punishment set upon the people for their pride
          in the use of machines. As a result, the temples forbade the use of
          modern technology, and promoted a culture of atonement for past sins
          in the hopes of appeasing Sin. While the Yevon church forbids most
          machina including weapons, their capital Bevelle retains machina to
          ensure its dominance. The Al Bhed are seen as dangerous to the Yevon
          clergy because they use machina and pose a threat to the church's
          uncontested control of Spira. The church retains its power by role in
          using the Final Summoning which results in the sacrifice of the
          summoner and her guardian to prevent its secrets from being divulged.
          Though Yevon set up Operation Mi'ihen to instill further loyalty to
          the teachings by making the Crusaders use machina that would never win
          against Sin.
        </Grid>
      </Grid>
    </Layout>
  );
}
