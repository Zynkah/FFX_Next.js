import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Image } from "@nextui-org/react";

export default function Yuna() {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2">
            Yuna
          </Typography>
          <Typography variant="body1" component="p">
            When her father left for his pilgrimage she was left behind in the
            city she was born, Bevelle. After her father's success she first
            felt great pride, but then realized he would never return,
            sacrificing his own life to bring on the temporary calm. She was
            only 7 years old when all this happened. Shortly after a young Ronso
            named Kimahri came to become her guardian and brought her to a small
            village called Besaid. There she met Wakka and Lulu, who looked
            after her as their own little sister. When she turned 17 she decided
            to follow in her father's footsteps and entered the temple in Besaid
            to gain her first aeon, Valefor. A summoner who is following in the
            footsteps of her father, the revered high summoner Braska. Yuna's
            tender nature balances her fierce resolve. Like her father before
            her, Yuna seeks the power of the final summoning to defeat Sin. At
            first Yuna is ready to trade her life to bring about a temporary
            calm, but her pilgrimage leads her to discover how the teachings of
            Yevon deceive those they are meant to guide, as well as the true
            nature of the Final Summoning. Armed with this information, she
            resolves to live and reject the endless spiral of death. Yuna is the
            daughter of the high summoner who defeated Sin to bring about the
            "Calm", a time of peace. Yuna embarks on a pilgrimage to obtain the
            final aeon and defeat Sin. To complete her quest, Yuna has enlisted
            the aid of her most trusted friends as her guardians.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/Yuna_Summoner.jpg"
            alt="Yuna"
            width={281}
            height={500}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Spacer y={2} />
          <Divider />
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Yuna in formation
          </Typography>
          <Typography variant="body1" component="p">
            Since Yuna already knows the Cure spell and will learn many more
            protective and restorative spells as she travels across the Sphere
            Grid, bring her into the action whenever other party members need
            healing or status ailment cured. Her physical are ineffective, but
            by summoning aeons Yuna can cause more damage to enemies than any
            other character.
          </Typography>
        </Grid>

        <Spacer y={1} />
        <Divider />
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Yuna on the Sphere Grid
          </Typography>
          <Typography variant="body1" component="p">
            Yuna will quickly learn usefull skills like NulFrost and NulBlaze,
            which negate the next corresponding elemental attack on the party.
            Eventually, she will become the backbone of the party by learning
            spell such as Shell and Protect, which are effective at decreasing
            damage due to characters from magic and physical attacks.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Overdrive
          </Typography>
          <Typography variant="body1" component="p">
            Overdrive: Grand Summoning
            <br />
            Yuna's overdrive is Grand Summon. Any aeon so summoned will appear
            with a full Overdive gauge. After the aeon uses its Overdrive
            attack, its guage will revert to its previous condition. Thus, the
            previous gauge isn't wasted.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
