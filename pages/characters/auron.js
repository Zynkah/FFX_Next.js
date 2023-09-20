import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Typography, Grid } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";
import Bio from "../../components/characterPage/Bio";
import Formation from "../../components/characterPage/Formation";
import SphereGrid from "../../components/characterPage/SphereGrid";
import Overdrive from "../../components/characterPage/Overdrive";

export default function Auron() {
  const [bio, setBio] = useState(null);
  const [formation, setFormation] = useState(null);
  const [sphereGrid, setSphereGrid] = useState(null);
  const [overdrive, setOverdrive] = useState(null);

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
    fetchCharacter("Auron", setBio);
    fetchCharacter("Auron", setFormation);
    fetchCharacter("Auron", setSphereGrid);
    fetchCharacter("Auron", setOverdrive);
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
          {overdrive && <Overdrive data={overdrive} />}
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
