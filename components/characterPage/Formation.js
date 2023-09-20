import { Typography, Grid } from "@mui/material";
import { Spacer, Divider } from "@nextui-org/react";

export default function Formation(props) {
  const character = props.data.character;

  return (
    <>
      {character &&
        character
          .filter((character) => character.name)
          .map((character) => (
            <>
              <Spacer y={1} />
              <Divider />

              <Grid key={character.key} item xs={12}>
                <Typography variant="h5" sx={{ marginTop: "1rem" }}>
                  {character.name} in formation
                </Typography>
                <Typography variant="body1" component="p">
                  {character.formation}
                </Typography>
              </Grid>

              <Spacer y={2} />
              <Divider />
            </>
          ))}
    </>
  );
}
