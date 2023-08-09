import { useState, useEffect } from "react";
import Layout from "../components/layout";
import ReligionTabs from "../components/religion_tabs";
import { Typography, Box } from "@mui/material";
import * as React from "react";
import AeonCards from "../components/cards/aeonCards";

export default function Aeons() {
  const [aeons, setAeons] = useState(null);

  useEffect(() => {
    async function fetchAeons() {
      try {
        const role = "Aeon";

        const response = await fetch(
          `/api/aeonsData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setAeons(data.aeon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchAeons();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Aeons
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ReligionTabs />
        <Box sx={{ margin: "20px" }} />
        {aeons && <AeonCards data={aeons} />}
      </Box>
    </Layout>
  );
}
