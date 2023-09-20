import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid } from "@mui/material";
import Bio from "../../components/characterPage/Bio";
import Formation from "../../components/characterPage/Formation";
import SphereGrid from "../../components/characterPage/SphereGrid";
import Overdrive from "../../components/characterPage/Overdrive";

export default function Yuna() {
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
    fetchCharacter("Yuna", setBio);
    fetchCharacter("Yuna", setFormation);
    fetchCharacter("Yuna", setSphereGrid);
    fetchCharacter("Yuna", setOverdrive);
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
      </Grid>
    </Layout>
  );
}
