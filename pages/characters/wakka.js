import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";
import Bio from "../../components/characterPage/Bio";
import Formation from "../../components/characterPage/Formation";
import SphereGrid from "../../components/characterPage/SphereGrid";

export default function Wakka() {
  const [bio, setBio] = useState(null);
  const [formation, setFormation] = useState(null);
  const [sphereGrid, setSphereGrid] = useState(null);

  useEffect(() => {
    async function fetchCharacter(name, setCharacter) {
      try {
        const response = await fetch(
          `/api/characterPageData?name=${encodeURIComponent(name)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCharacter("Wakka", setBio);
    fetchCharacter("Wakka", setFormation);
    fetchCharacter("Wakka", setSphereGrid);
  }, []);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        {bio && <Bio data={bio} />}
        {formation && <Formation data={formation} />}

        <Grid item xs={12}>
          {sphereGrid && <SphereGrid data={sphereGrid} />}
        </Grid>
        <Spacer y={3} />
        <Divider />

        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Overdrive: Slots
          </Typography>
          <Typography variant="body1" component="p">
            Wakka starts off with Elemental Reels adn acquires his other
            Overdives by winning blitzball games in both Leagues and
            Tournaments. Whenever you use Wakka's Elemental Reels Overdive, slot
            wheels start spinning. If you match all three wheels, then Wakka
            performs a double-elemental attack against a single, randomly-chosen
            enemy. If no wheels match up, Wakka perfomrs a physical attack
            against on randomly-chosen enemy. A similar concept is employed in
            his other Overdives.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
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
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Elemental Reels</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Attack Reels</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Status Reels</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Aurochs Reels</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid>
      </Grid>
    </Layout>
  );
}
