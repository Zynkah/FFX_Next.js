import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Yojimbo() {
  return (
    <Layout>
      <h1>Yojimbo</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons</Link>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Yojimbo.jpeg"
            height={300}
            width={343}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Yojimbo Profile"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            The blade is his left hand, Zanmato, can only be seen in the rare
            instance that he uses the attack of the same name. Yojimbo is the
            secret aeon you can acquire by visiting the Cavern of the Stolen
            Fayth beneath the bridge at the northeast end of the Calm Lands. To
            acquire Yojimbo, fight through the cave and defeat Yojimbo in
            battle.
          </p>
        </Grid>

        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Proceed to the Chamber of the Fayth and speak to Yojimbo to
            negotiate a fee for his services. He will offer his lowest initial
            asking price if you choose the option "To defeat the most powerful
            of enemies". For your first bid, offer half of his asking price plus
            1 gil. So, if he asks for 250,000 offer 125,001 gil. After his next
            offer, raise your bid by 1 gil. By the time her proposes 205,000, he
            will generally accept offers below 200,000, though not much lower.
            If at any point you offer him at least triple his asking price, he
            will give you two teleport spheres in addition to his services.
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Yojimbo-artwork.webp"
            height={300}
            width={322}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Yojimbo Body"
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Image
            src="/images/Fayth_Yojimbo.webp"
            height={300}
            width={322}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Yojimbo Fayth"
          />
        </Grid>
        <Grid item xs={12} md={8} marginTop={5}>
          <p>
            Yojimbo has four unique attacks; Daigoro, Kozuka, Wakizashji, and
            Zanmato yet has not selectable overdrive attacks. As a
            sword-for-hire, he will attack enemies based on how much you pay
            him. Yojimbo's attacks exceed 9999 HP damage once you activated
            Auron's Masamune.
          </p>
        </Grid>
      </Grid>
    </Layout>
  );
}
