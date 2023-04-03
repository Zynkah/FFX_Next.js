import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Anima() {
  return (
    <Layout>
      <h1>Anima</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons</Link>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Its fayth is Seymour's mother, and the plate around its neck is
            engraved with her image. Anima is first seen as Seymour's chilling
            aeon, but the party can acquire it by undertaking a quest.
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Anima.jpeg"
            height={300}
            width={309}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Anima Profile"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            src="/images/Anima_Artwork.webp"
            height={300}
            width={162}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Anima Body"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Return to Baaj Temple from the airship, defeating Geosgaeno, and
            then enter the underwater temple. Find the six hidden items in the
            Cloister of Trials at each temple, and then approach each statue
            inside Anima's shrine. This opens a doorway to the most devastating
            aeon in the game.
          </p>
        </Grid>

        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Anima's unique attack, Pain, conjures the essence of misery and
            anguish, and unleashes it upon a single enemy. The attack has a high
            chance of causing instant death. Pain has a high recovery time. Her
            overdrive is Oblivion, the most horrifying overdrive that inflicts
            multiple non-elemental attacks on all enemies.
          </p>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Fayth_Anima.webp"
            height={300}
            width={330}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Bahamut Fayth"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
