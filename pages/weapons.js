import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Weapons() {
  return (
    <Layout>
      <h1>Weapons & Armor</h1>
      <hr />
      <Grid container spacing={1} marginTop={5}>
        <Grid item xs={12}>
          <h2>Tidus</h2>
          <hr width={300} />
          <p>Tidus wields a sword with a shield as his weapon and armor.</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/TidusSwords.webp"
            height={400}
            width={324}
            style={{
              margin: "auto",
            }}
            alt="Tidus Swords"
          />
        </Grid>
        <Grid item xs={12} md={2} marginTop={5}>
          <Image
            src="/images/Brotherhood.webp"
            height={300}
            width={241}
            style={{
              margin: "auto",
            }}
            alt="Brotherhood"
          />
        </Grid>
        <Grid item xs={12} md={2} marginTop={5}>
          <Image
            src="/images/Caladbolg.webp"
            height={300}
            width={115}
            style={{
              margin: "auto",
            }}
            alt="Caldabolg"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/TidusShields.webp"
            height={400}
            width={302}
            style={{
              margin: "auto",
            }}
            alt="Tidus Shields"
          />
        </Grid>


        <Grid item xs={12}>
          <h2>Yuna</h2>
          <hr width={300} />
          <p>Yuna heals with a rod and is embued by a ring.</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/YunasRods.webp"
            height={400}
            width={218}
            style={{
              margin: "auto",
            }}
            alt="Yuna's Rods"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/YunasRings.webp"
            height={400}
            width={563}
            style={{
              margin: "auto",
            }}
            alt="Yuna's Rings"
          />
        </Grid>

        <Grid item xs={12}>
          <h2>Wakka</h2>
          <hr width={300} />
          <p>Wakka beats down his enemies using a Blitzball.</p>
        </Grid>

        <Grid item xs={12}>
          <Image
            src="/images/WakkasBalls.webp"
            height={400}
            width={612}
            style={{
              margin: "auto",
            }}
            alt="Wakka's Balls"
          />
        </Grid>

        <Grid item xs={12}>
          <h2>Lulu</h2>
          <hr width={300} />
          <p>
            Lulu uses her magic through her plushes as weapons with a bangle as
            her armor.
          </p>
        </Grid>

        <Grid item xs={12} md={3}>
          <Image
            src="/images/Doll-Cactuar.webp"
            height={300}
            width={234}
            style={{
              margin: "auto",
            }}
            alt="Doll Cactuar"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Image
            src="/images/Doll-Moogle.webp"
            height={300}
            width={164}
            style={{
              margin: "auto",
            }}
            alt="Doll-Moogle"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/LulusBangles.webp"
            height={400}
            width={703}
            style={{
              margin: "auto",
            }}
            alt="Lulu's Bangles"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Image
            src="/images/Doll-CaitSith.webp"
            height={300}
            width={243}
            style={{
              margin: "auto",
            }}
            alt="Doll CaitSith"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Image
            src="/images/Doll-Moomba.webp"
            height={300}
            width={206}
            style={{
              margin: "auto",
            }}
            alt="Doll-Moomba"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Image
            src="/images/Doll-Pupu.webp"
            height={300}
            width={184}
            style={{
              margin: "auto",
            }}
            alt="Doll-Pupu"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Image
            src="/images/Doll-OnionKnight.webp"
            height={300}
            width={262}
            style={{
              margin: "auto",
            }}
            alt="Doll-OnionKnight"
          />
        </Grid>



        <Grid item xs={12}>
          <h2>Kimarhi</h2>
          <hr width={300} />
          <p>Kimarhi slashes enemies with his lance and has armlets as armor.</p>
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            src="/images/KimahrisLances.webp"
            height={400}
            width={210}
            style={{
              margin: "auto",
            }}
            alt="Kimahri's Lances"
          />
        </Grid>
        <Grid item xs={12} md={4} marginTop={5}>
          <Image
            src="/images/Spirit_Lance.webp"
            height={300}
            width={130}
            style={{
              margin: "auto",
            }}
            alt="Spirit Lance"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/images/KimahrisArmlets.webp"
            height={400}
            width={227}
            style={{
              margin: "auto",
            }}
            alt="Kimahri's Armlets"
          />
        </Grid>

        <Grid item xs={12}>
          <h2>Auron</h2>
          <hr width={300} />
          <p>Auron pierces through his enemies with a katana and protects himeself with bracers.</p>
        </Grid>

        <Grid item xs={12}>
          <Image
            src="/images/AuronsKatanas.webp"
            height={400}
            width={642}
            style={{
              margin: "auto",
            }}
            alt="Auron's Katanas"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/Masamune.webp"
            height={400}
            width={268}
            style={{
              margin: "auto",
            }}
            alt="Masamune"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/AuronsBracers.webp"
            height={400}
            width={273}
            style={{
              margin: "auto",
            }}
            alt="Auron's Bracers"
          />
        </Grid>

        <Grid item xs={12}>
          <h2>Rikku</h2>
          <hr width={300} />
          <p>Rikku mugs her enemies with her claws and guards with targes.</p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Image
            src="/images/RikkusClaws.webp"
            height={400}
            width={463}
            style={{
              margin: "auto",
            }}
            alt="Rikku's Claws"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/RikkuTarges.webp"
            height={400}
            width={408}
            style={{
              margin: "auto",
            }}
            alt="Rikku Targes"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
