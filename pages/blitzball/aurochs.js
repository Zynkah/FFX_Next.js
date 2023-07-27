import {
  get_characters_by_teamname,
  get_team_by_teamname,
} from "./blitzballData";
import Tables from "./tables";

export default function Aurochs() {
  return (
    <>
      <Tables
        data={{
          team: get_team_by_teamname("Besaid Aurochs"),
          characters: get_characters_by_teamname("Besaid Aurochs"),
        }}
      />
    </>
  );
}
