import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";
import Bio from "../../components/characterPage/Bio";

export default function Tidus() {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    async function fetchBio() {
      try {
        const name = "Tidus";

        const response = await fetch(
          `/api/characterPageData?name=${encodeURIComponent(name)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBio(data.character);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBio();
  }, []);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        {bio && <Bio data={bio} />}
        <Grid item xs={12}>
          <Spacer y={1} />
          <Divider />
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Tidus in formation
          </Typography>
          <Typography variant="body1" component="p">
            Bring Tidus into the party whenever an enemy is too agile for other
            characters to hit. He can eliminate swift, four-legged creatures
            iwth ease. As his strength and agility improve, he will become able
            to eliminate aerial enemies as well.
          </Typography>
        </Grid>
        <Spacer y={2} />
        <Divider />

        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Tidus on the Sphere Grid
          </Typography>
          <Typography variant="body1" component="p">
            As Tidus advances from his starting point, he can learn many support
            spells such as Haste and Slow. Tidus' main benefit to the party is
            his ability to increase the frequency fo the party's turns and
            reduce those of the enemy through abilities like Hastega, Slowga,
            Buster, and Quick Attack. After you complete Tidus' section of the
            Sphere Grid, he can proceed into Yuna's. Teaching Curaga, Dispel,
            and Reflect to Tidus is a good idea, but his low Magic attribute
            makes him a weak healer.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Overdrive: Swordplay
          </Typography>
          <Typography variant="body1" component="p">
            Tidus executes devastating sword attacks against one or all enemies
            through his Overdives. After choosing an Overdive technique, watch
            the meter carefully and press 'X' when the cursor is in the middle
            of the bar. The strength of Tidus' Overdive attack depends upon how
            much time remains on the timer. The more Tidus uses his Overdrive,
            the more techniques he will learn.
          </Typography>
        </Grid>
        <Spacer y={2} />
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
              <Table.Column align="center">Overdrive</Table.Column>
              <Table.Column align="center">Target</Table.Column>
              <Table.Column align="center">
                Attempts Required to Learn
              </Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Spiral Cut</Table.Cell>
                <Table.Cell>One Enemy</Table.Cell>
                <Table.Cell>Default</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Slice & Dice</Table.Cell>
                <Table.Cell>Random</Table.Cell>
                <Table.Cell>Perform 10 successful Overdives</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Energy Rain</Table.Cell>
                <Table.Cell>All Enemies</Table.Cell>
                <Table.Cell>Perform 30 successful Overdives</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Blitz Ace</Table.Cell>
                <Table.Cell>All Enemies</Table.Cell>
                <Table.Cell>Perform 80 successful Overdives</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid>
      </Grid>
    </Layout>
  );
}
