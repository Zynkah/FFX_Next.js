import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { Box, Typography } from "@mui/material";
import TeamCards from "../components/cards/teamCards";

export default function Blitzball() {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const role = "Team";

        const response = await fetch(
          `/api/teamData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTeams(data.team);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTeams();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Blitzball
      </Typography>

      <Box sx={{ margin: "20px" }}>
        <Image
          src="/images/Blitzball_Logo.jpg"
          height={400}
          width={438}
          style={{
            margin: "auto",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
          alt="Blitzball Logo"
        />
        <Typography variant="body">
          Blitzball is the traditional sporting event in Spira. Living in the
          shadow of Sin, residents need something to take their minds off their
          problems. The sport is just as popular today as it was a thousand
          years ago in Zanarkand.
        </Typography>
      </Box>
      <Typography variant="h4">Teams</Typography>
      <Divider />
      <Box sx={{ margin: "20px" }}>{teams && <TeamCards data={teams} />}</Box>
    </Layout>
  );
}
