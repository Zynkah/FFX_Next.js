import React, { useState, useEffect } from "react";
import Tables from "../../components/tables";

export default function Psyches() {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const teamname = "Al Bhed Psyches";

        const response = await fetch(
          `/api/blitzballData?teamname=${encodeURIComponent(teamname)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTeam(data.team);
        setPlayers(data.players);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return <>{players && <Tables data={{ players }} />}</>;
}
