import { Typography } from "@mui/material";

export default function SphereGrid(props) {
  const character = props.data.character;
  return (
    <>
      {character &&
        character
          .filter((character) => character.name)
          .map((character) => (
            <>
              <Typography variant="h5" sx={{ marginTop: "1rem" }}>
                {character.name} on the Sphere Grid
              </Typography>
              <Typography variant="body1" component="p">
                {character.sphere_grid}
              </Typography>
            </>
          ))}
    </>
  );
}
