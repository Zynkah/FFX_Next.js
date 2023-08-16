import { useState, useEffect } from "react";
import Layout from "../components/layout";
import ReligionTabs from "../components/religion_tabs";
import { Typography, Box } from "@mui/material";
import * as React from "react";
import MaesterCards from "../components/cards/maesterCards";

export default function Maester() {
  const [maester, setMaester] = useState(null);

  useEffect(() => {
    async function fetchMaesters() {
      try {
        const role = "Maester";

        const response = await fetch(
          `/api/maesterData?role=${encodeURIComponent(role)}`
        );
        console.log(response);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setMaester(data.maester);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchMaesters();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Maesters
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ReligionTabs />
        {maester && <MaesterCards data={maester} />}
      </Box>
    </Layout>
  );
}
