import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";
import Bio from "../../components/characterPage/Bio";
import Formation from "../../components/characterPage/Formation";
import SphereGrid from "../../components/characterPage/SphereGrid";

export default function Kimahri() {
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
    fetchCharacter("Kimahri", setBio);
    fetchCharacter("Kimahri", setFormation);
    fetchCharacter("Kimahri", setSphereGrid);
  }, []);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
        {bio && <Bio data={bio} />}
        {formation && <Formation data={formation} />}
        <Grid item sx={12} md={6}>
          {sphereGrid && <SphereGrid data={sphereGrid} />}
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
