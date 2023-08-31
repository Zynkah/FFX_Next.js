import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Typography, Box } from "@mui/material";
import { Divider } from "@nextui-org/react";
import TempleCards from "../components/cards/templeCards";

export default function Temples() {
  const [temples, setTemples] = useState(null);

  useEffect(() => {
    async function fetchTemples() {
      try {
        const role = "Temple";

        const response = await fetch(
          `/api/templeData?role=${encodeURIComponent(role)}`
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setTemples(data.temple);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTemples();
  }, []);

  return (
    <Layout>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h4">Temples in Spira</Typography>
        <Typography variant="body" component="p">
          Temples of Yevon are found throughout Spira. At the heart of each
          temple lies a Chamber of the Fayth, a room that contains a fayth — a
          statue that houses a willingly-given human soul. Through the soul
          bonding to a summoner mighty creatures called aeons may be made
          manifest.
        </Typography>
      </Box>
      <Divider />

      <Box sx={{ margin: "20px" }}>
        {temples && <TempleCards data={temples} />}
      </Box>
    </Layout>
  );
}
