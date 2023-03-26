import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Bahamut() {
  return (
    <Layout>
      <h1>Bahamut</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons</Link>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Bahamut.jpg"
            height={300}
            width={309}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Bahamut Profile"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Bahamut is a large, black dragon with enormous red wings. He can
            stand or move in either two legs or four. Unlike the other aeons,
            the king of dragons is heralded by multiple magic circles that
            appear in the heavens whenever he is summoned into being. His fayth
            is a young boy who guides Tidus throughout Spira. This boy revealed
            the truth about Tidus and his hometowns's origin. He also informed
            Tidus that he was brought to Spira to defeat Sin for good, and end
            the cycle of death. Only Tidus and Yuna can see the boy. The symbol
            for Bahamut and Bevelle is annotated with the kanji for light (光
            hikari). You will obtain Bahamut after completing the Cloister of
            Trials in Bevelle Temple.
          </p>
        </Grid>

        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Bahamut possesses the auto-ability Break Damage Barrier. This
            enables its attacks to exceed 9999 HP damage right from the start.
            Bahamut has high strength, defense and magic attributes. Bahamut's
            regular attack causes more damage than any other aeon's. Bahamut can
            also cast the highest elemental black magic spells. His unique
            attack is Impulse where he charges up four balls of dark magic and
            hurls them, damaging all enemies. Impulse is especially useful when
            fighting multiple opponents.
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Bahamut_Artwork.webp"
            height={300}
            width={387}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Bahamut Body"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            src="/images/fayth_Bahamut.webp"
            height={300}
            width={477}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Bahamut Fayth"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Bahamut is the most powerful of the aeons. His overdrive is Mega
            Flare, a classic attack for this character. Bahamut anchors itself
            and fires a destructive breath attack that annihilates anything in
            its path. Bahamut's overdrive consistently deals over 9999 HP damage
            to all enemies, and it will continue to grow stronger. He is capable of exceeding the 9999 damage limit from the start.
          </p>
        </Grid>
      </Grid>
    </Layout>
  );
}
