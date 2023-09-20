import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";
import Bio from "../../components/characterPage/Bio";
import Formation from "../../components/characterPage/Formation";
import SphereGrid from "../../components/characterPage/SphereGrid";
import Overdrive from "../../components/characterPage/Overdrive";

export default function Tidus() {
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
    fetchCharacter("Tidus", setBio);
    fetchCharacter("Tidus", setFormation);
    fetchCharacter("Tidus", setSphereGrid);
    fetchCharacter("Tidus", setOverdrive);
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
