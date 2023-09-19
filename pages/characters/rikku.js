import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";
import Bio from "../../components/characterPage/Bio";
import Formation from "../../components/characterPage/Formation";
import SphereGrid from "../../components/characterPage/SphereGrid";

export default function Rikku() {
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
    fetchCharacter("Rikku", setBio);
    fetchCharacter("Rikku", setFormation);
    fetchCharacter("Rikku", setSphereGrid);
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
        <Grid item xs={12}>
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
