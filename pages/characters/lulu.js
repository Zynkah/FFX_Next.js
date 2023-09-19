import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";
import Bio from "../../components/characterPage/Bio";
import Formation from "../../components/characterPage/Formation";
import SphereGrid from "../../components/characterPage/SphereGrid";

export default function Lulu() {
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
    fetchCharacter("Lulu", setBio);
    fetchCharacter("Lulu", setFormation);
    fetchCharacter("Lulu", setSphereGrid);
  }, []);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        {bio && <Bio data={bio} />}
        {formation && <Formation data={formation} />}
        <Grid item xs={12} md={6}>
          {sphereGrid && <SphereGrid data={sphereGrid} />}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ marginTop: "1rem" }}>
            Overdrive: Fury
          </Typography>
          <Typography variant="body1" component="p">
            When Lulu hits Overdive, she can cast any black magic spell she
            knows multiple times whitout spending MP. Select the Fury command,
            and then choose a spell. Start rotating the right analog stick
            clockwise in full rotations as rapidly as possible. Depending on the
            spell you've chosen, the spell will cast on time for each several
            times you rotate the stick. Lulu's Overdive is available even when
            she's silenced, and isn't affect by any Shell or Reflect effects on
            enemies. Targets are randomly chosen.
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
              <Table.Column align="center"></Table.Column>
              <Table.Column align="center">Overdrive</Table.Column>
              <Table.Column align="center"></Table.Column>
              <Table.Column align="center"></Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Fire</Table.Cell>
                <Table.Cell>Fira</Table.Cell>
                <Table.Cell>Firaga</Table.Cell>
                <Table.Cell>Bio</Table.Cell>
                <Table.Cell>Osmose</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Thunder</Table.Cell>
                <Table.Cell>Thundera</Table.Cell>
                <Table.Cell>Thundaga</Table.Cell>
                <Table.Cell>Demi</Table.Cell>
                <Table.Cell>Flare</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Water</Table.Cell>
                <Table.Cell>Watera</Table.Cell>
                <Table.Cell>Waterga</Table.Cell>
                <Table.Cell>Death</Table.Cell>
                <Table.Cell>Ultima</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Blizzard</Table.Cell>
                <Table.Cell>Blizzara</Table.Cell>
                <Table.Cell>Blizzarga</Table.Cell>
                <Table.Cell>Drain</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid>
      </Grid>
    </Layout>
  );
}
