import {
  get_characters_by_teamname,
  get_team_by_teamname,
} from "./blitzballData";
import Tables from "./tables";

export default function Beasts() {
  return (
    <>
      <Tables
        data={{
          team: get_team_by_teamname("Kilika Beasts"),
          characters: get_characters_by_teamname("Kilika Beasts"),
        }}
      />
    </>
  );
}
