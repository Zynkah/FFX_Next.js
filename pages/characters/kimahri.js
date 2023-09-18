import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table, Image } from "@nextui-org/react";

export default function Kimahri() {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2">
            Kimahri
          </Typography>
          <Typography variant="body1" component="p">
            His taciturn nature and leonine appearance makes him hard to
            approach, but in truth Kimahri is thoughtful and affectionate. After
            the death of the high summoner Braska, he brought the young Yuna to
            Besaid Village and watched over her for the next ten years. His
            horn, the pride of a Ronso, was broken by his rival Biran and the
            resulting shame forced Kimahri to flee his hometown of Gagazet.
            Despite this, he overcomes his trauma to protect Yuna on her
            pilgrimage. A young warrior of the Ronso tribe, Kimahri watched over
            Yuna during her early years. He is devoted to Yuna and serves her
            loyally as a guardian. Kimahri can learn the special attacks of
            enemies with his Lancet ability.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/FullBodyKimahri.webp"
            height={500}
            width={361}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Kimahri Body"
          />
        </Grid>
        <Spacer y={2} />
        <Divider />
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Kimahri in formation
          </Typography>
          <Typography variant="body1" component="p">
            Kimahri is versatile character. The fact that he begins in the
            center of the Sphere Grid is an advantage, because you can then
            choose any direction to further Kimahri's development on the Sphere
            Grid. It all depends on how you choose to develop Kimahri.
          </Typography>
        </Grid>
        <Spacer y={3} />
        <Divider />
        <Grid item sx={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Kimahri on the Sphere Grid
          </Typography>
          <Typography variant="body1" component="p">
            Kimahri has a small area on the Sphere Grid. Soon, the player must
            choose a path of another character for Kimahri to emulate and unlock
            it using a Lv. 1 Key Sphere. If you want Kimahri to hit harder,
            follow Wakka's path. To make Kimahri a theif, follow Rikku's path.
            If you want Kimahri to become more agile and learn Haste, follow
            Tidus' path. Lastly, if you want Kimahri to cast magic, follow
            Yuna's Lulu's path. Pick a path of your liking and follow it.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Overdrive: Ronso Rage
          </Typography>
          <Typography variant="body1" component="p">
            Except for Jump, Kimahri learns enemy skills by using the Lancet
            ability. Once you see a monster using one of the abilities, bring
            Kimarhi and use Lancet. Kimahri's Overdive guage will instantly fill
            up whenever he learns a new technique.
          </Typography>
        </Grid>
        <Spacer y={3} />
        <Divider />
        <Grid item xs={12}>
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
              <Table.Column align="center"></Table.Column>
              <Table.Column align="center">Overdrive</Table.Column>
              <Table.Column align="center"></Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Jump</Table.Cell>
                <Table.Cell>Fire Breath</Table.Cell>
                <Table.Cell>Seed Cannon</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Self-Destruct</Table.Cell>
                <Table.Cell>Thrust Kick</Table.Cell>
                <Table.Cell>Stone Breath</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Aqua Breath</Table.Cell>
                <Table.Cell>Doom</Table.Cell>
                <Table.Cell>White Wind</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bad Breath</Table.Cell>
                <Table.Cell>Mighty Guard</Table.Cell>
                <Table.Cell>Nova</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid>
      </Grid>
    </Layout>
  );
}
