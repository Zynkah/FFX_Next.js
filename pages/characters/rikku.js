import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table, Image } from "@nextui-org/react";

export default function Rikku() {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2">
            Rikku
          </Typography>
          <Typography variant="body1" component="p">
            Under her people's pretense of protecting summoners from killing
            themselves, Rikku unsuccessfully tries to kidnap Yuna. In time, she
            comes to respect Yuna's determination to complete the summoner's
            pilgrimage and joins her party as a guardian. She may seem to have a
            cheerful scatterbrained personality, but like the other Al Bhed,
            Rikku is rational and steadfast, determined to overcome any obstacle
            in her way. Rikku is a young Al Bhed girl with an upbeat and
            positive personality. She dismantles mechanical enemies with ease,
            and can steal items from enemies as well. When Rikku joins the party
            near the Moonflow, her technical expertise allows you to start
            customizing equipment by adding abilities to the open slots on
            weapons and armor.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/FullBodyRikku.webp"
            height={500}
            width={254}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Rikku Body"
          />
        </Grid>
        <Spacer y={3} />
        <Divider />
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Rikku in formation
          </Typography>
          <Typography variant="body1" component="p">
            Switch Rikku into battle whenever a mechanical enemy appears. Using
            her Steal command, Rikku can destroy machina by taking a vital item
            from it. Rikku's physical attack is weak at first, so it is for her
            to use items like Grenades and Smoke Bombs to attack enemies. Make
            sure you steal often when using Rikku, At first, she is the only
            character who can us Al Bhed Potions. These items restore 1000 HP to
            all characters and removes poison, silence, and petrification.
          </Typography>
        </Grid>
        <Spacer y={3} />
        <Divider />
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Rikku on the Sphere Grid
          </Typography>
          <Typography variant="body1" component="p">
            Although Rikku is not much of a fighter, she can learn the Mug
            ability which lets her steal and attack simultaneously. Mug enemies
            with a weapon that inflicts poison, zombie, or some other status
            ailments, and she quickly becomes a deadly fighter. Rikku also
            learns how to Bribe enemies, which is useful fo racquiring rare
            items in the Monster Arena.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Spacer y={3} />
          <Divider />
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Overdrive: Mix
          </Typography>
          <Typography variant="body1" component="p">
            Rikku's Overdrives are created by mixing any two items.
          </Typography>
          <Table
            aria-label="team table"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
            selectionMode="single"
            color="secondary"
            ghost
            lined
          >
            <Table.Header>
              <Table.Column align="center"> </Table.Column>
              <Table.Column align="center"> </Table.Column>
              <Table.Column align="center"> </Table.Column>
              <Table.Column align="center"> </Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Grenade</Table.Cell>
                <Table.Cell>Frag Grenade</Table.Cell>
                <Table.Cell>Pineapple</Table.Cell>
                <Table.Cell>Potato Masher</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cluster Bomb</Table.Cell>
                <Table.Cell>Tallboy</Table.Cell>
                <Table.Cell>Blaster Mine</Table.Cell>
                <Table.Cell>Hazardous Shell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Choas Grenade</Table.Cell>
                <Table.Cell>Heat Blaster</Table.Cell>
                <Table.Cell>Firestorm</Table.Cell>
                <Table.Cell>Burning Soul</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Brimstone</Table.Cell>
                <Table.Cell>Abaddon Flame</Table.Cell>
                <Table.Cell>Snow Flurry</Table.Cell>
                <Table.Cell>Icefall</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid>
      </Grid>
    </Layout>
  );
}
