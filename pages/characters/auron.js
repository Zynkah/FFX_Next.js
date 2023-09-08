import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table, Image } from "@nextui-org/react";

export default function Auron() {
  return (
    <Layout>
 <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        <Grid item sx={12} md={6}>
          <Typography variant="h4" component="h2">
            Auron
          </Typography>
          <Typography variant="body1" component="p">
            Auron is know as the "legendary guardian", having guarded the high
            summoner Braska ten years ago when he defeated Sin. Despite his
            service on that pilgrimage, Auron could not prevent the tragedy that
            befell Braska and Jecht. He also lost his own life, becoming an
            "unsent" who lingered in the world of the living. Auron joins Yuna's
            party as one of her guardians, wagering on the possibility that the
            children of his old friends might discover the truth and tell their
            own story. The legendary guardian who accompanied High Summoner
            Braska on the pilgrimage to defeat Sin ten years ago. Auron guides
            Yuna and Tidus on their mission to vanquish Sin once more. He swings
            his gigantic sword with such power that even the toughest fiends are
            cut asunder.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/FullBodyAuron.webp"
            height={500}
            width={377}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Auron Body"
          />
        </Grid>
        <Spacer y={1} />
        <Divider />
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Auron in formation
          </Typography>
          <Typography variant="body1" component="p">
            Almost all of Auron's massive blades bear the Piercing ability, so
            you should bring Auron into battle when facing an enemy with a hard
            shell. Auron is ineffective at attacking nimble or aerial creatures,
            but his Break abilities reduce the attacking and defending power of
            most enemies.
          </Typography>
        </Grid>
        <Spacer y={2} />
        <Divider />
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Auron on the Sphere Grid
          </Typography>
          <Typography variant="body1" component="p">
            As Auron gains Sphere Levels, his HP and Strength will sky-rocket.
            Once he reaches the end of his section on the Sphere Grid, it's a
            good idea to move him to into Tidus' section. by doing so, you can
            increas his Agility so he can attack more often.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Overdrive: Bushido
          </Typography>
          <Typography variant="body1" component="p">
            Auron's Overdrives require the swift input of button combinations
            before time runs out. The quicker you can input the sequence, the
            more powerful Auron's attack becomes. Auron gains new Overdrives
            through the acquisition of recorded spheres that recount the journey
            of Auron's adventures with Braska. After defeating the Sperimorph at
            Lake Macalania, you can locate Jacht's and Braska's Spheres that are
            scattered across Spira. The status ailments are inflicted only when
            the command input is successful, although certain enemies can resist
            the ailments. If resisted, the damage inflicted is slightly
            increased to compensate.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Spacer y={2} />
          <Divider />

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
              <Table.Column align="center">Overdrive</Table.Column>
              <Table.Column align="center">Target</Table.Column>
              <Table.Column align="center">Status Ailment</Table.Column>
              <Table.Column align="center">Spheres Required</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Dragon Fang</Table.Cell>
                <Table.Cell>All Enemy</Table.Cell>
                <Table.Cell>Delay</Table.Cell>
                <Table.Cell>Default</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Shooting Star</Table.Cell>
                <Table.Cell>One Enemy</Table.Cell>
                <Table.Cell>Eject</Table.Cell>
                <Table.Cell>1 Sphere</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Banishing Blade</Table.Cell>
                <Table.Cell>One Enemy</Table.Cell>
                <Table.Cell>
                  Power Break, Armor Break, Magic Break, and Mental Break
                </Table.Cell>
                <Table.Cell>3 Spheres</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Tornado</Table.Cell>
                <Table.Cell>All Enemies</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell>All 10 Spheres</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid>
        <Spacer y={2} />
        <Divider />
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Sphere Locations
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
              <Table.Column align="center">Sphere</Table.Column>
              <Table.Column align="center">Location</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Jecht Sphere 1</Table.Cell>
                <Table.Cell>
                  Spherimorph boss fight, Macalania Forest
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jecht Sphere 2</Table.Cell>
                <Table.Cell>
                  Besaid Village, to the right of the temple enterance
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jecht Sphere 3</Table.Cell>
                <Table.Cell>
                  S.S. Liki, on the bridge (board at Besaid)
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jecht Sphere 4</Table.Cell>
                <Table.Cell>Luca Stadium, Basement A</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jecht Sphere 5</Table.Cell>
                <Table.Cell>Mi'ihen Highroad, Oldroad, South</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Auron's Sphere</Table.Cell>
                <Table.Cell>Mushroom Rock Road, Precipice</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jecht Sphere 6</Table.Cell>
                <Table.Cell>Moonflow, South Warf</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jecht Sphere 7</Table.Cell>
                <Table.Cell>Thunder Plains, South</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jecht Sphere 8</Table.Cell>
                <Table.Cell>Macalania Woods, South</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Braska's Sphere</Table.Cell>
                <Table.Cell>Mountain Trail, Mt. Gagazet.</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid>
      </Grid>
    </Layout>
  );
}