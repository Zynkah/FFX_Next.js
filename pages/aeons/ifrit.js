import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Ifrit() {
  return (
    <Layout>
      <h1>Ifrit</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons</Link>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Ifrit is a humannoid, demonic-looking beast fire elemental aeon. He
            has reddish brown complexion with fire red hair. He is bulky and
            hunch backed. According to the writing on its statue illustration,
            Ifrit's fayth was a twenty-five year old young man named Edmundo.
            Edmundo was a former Crusader whose statue resides in the Kilika
            Temple. The symbol for Ifrit and Kilika is annotated with the kanji
            for flame (炎 honoo). You have to complete a Cloister of Trials in
            the Kilika Temple to obtain Ifrit for your party.
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Ifrit.jpg"
            height={300}
            width={309}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Ifrit"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            src="/images/Ifrit-2.webp"
            height={300}
            width={314}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Ifrit"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Ifrit has incredibly high strength in exchange for low defense and
            magic defense. He also has lower HP but can self heal by casting
            fire upon himself and will absorb any fire attacks casted upon him.
            His unique attack is Meteor Strike, a non-elemental attack that is
            hurled at one enemy, but has a longer recovery time that his regular
            attack. The firey rock he throws will be aimed at a single target.
            This is a useful long-range attack. It also penetrates protect
            spells despite being a physical attack. Ifrit is also protected
            against instant death and all negative status effect, except for
            Curse and Eject.
          </p>
        </Grid>

        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Ifrit has armor equiped, even though it is not mentioned in game.
            This armor has Sensor, Break HP Limit, Break MP Limit and Fire
            Eater. Ifrit's Overdrive is Hellfire, this attack encases its foes
            in a swirling ball of fiery vengeance and detonates it for massive
            damage to all enemies. All of Ifrit's attacks can reach the 9999
            damage limit when you activate Wakka's legendary weapon, World
            Champion. Ifrit will also gain Break Damage Limit after obtaining
            World Champion.
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/fayth_ifrit.webp"
            height={300}
            width={285}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Ifrit"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
