import React, { useState, useEffect } from "react";
import Tables from "../../components/tables";

const Goers = () => {
  const [team, setTeam] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const teamname = "Luca Goers";

        const response = await fetch(
          `/api/blitzballData?teamname=${encodeURIComponent(teamname)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTeam(data.team);
        setCharacters(data.characters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return <>{characters && <Tables data={{ characters }} />}</>;
};

export default Goers;
