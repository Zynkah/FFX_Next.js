import { Typography } from "@mui/material";

export default function Overdrive(props) {
  const character = props.data.character;

  return (
    <>
      {character &&
        character
          .filter((character) => character.name)
          .map((character) => (
            <>
              <Typography variant="h5" sx={{ marginTop: "1rem" }}>
                Overdrive: {character.name}
              </Typography>
              <Typography variant="body1" component="p">
                {character.overdrive}
              </Typography>
            </>
          ))}
    </>
  );
}
