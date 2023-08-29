import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@mui/material";
import AgencyCards from "../components/cards/agencyCards";

export default function TravelAgency() {
  const [agencies, setAgencies] = useState(null);

  useEffect(() => {
    async function fetchAgencies() {
      try {
        const role = "Agency";

        const response = await fetch(
          `/api/agencyData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setAgencies(data.agency);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchAgencies();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Rin's Travel Agencies
      </Typography>

      <Typography variant="body">
        An Al Bhed named Rin owns these inns scattered thoughout Spira.
      </Typography>
      <Box sx={{ margin: "20px" }}>
        {agencies && <AgencyCards data={agencies} />}
      </Box>
    </Layout>
  );
}
