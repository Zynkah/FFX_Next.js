import { useEffect, useState } from "react";
import Layout from "../components/layout";
import ReligionTabs from "../components/religion_tabs";
import { Typography, Box } from "@mui/material";
import SummonerCards from "../components/cards/summonerCards";
import * as React from "react";

export default function Summoners() {
  const [summoners, setSummoners] = useState(null);

  useEffect(() => {
    async function fetchSummoners() {
      try {
        const role = "Summoner";

        const response = await fetch(
          `/api/summonerData?role=${encodeURIComponent(role)}`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setSummoners(data.summoner);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchSummoners();
  }, []);
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Summoners
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ReligionTabs />
        <Box sx={{ marginTop: "20px" }}>
          {summoners && <SummonerCards data={summoners} />}
        </Box>
      </Box>
    </Layout>
  );
}
