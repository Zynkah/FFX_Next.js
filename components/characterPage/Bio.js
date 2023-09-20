import { Typography, Grid } from "@mui/material";
import { Image } from "@nextui-org/react";

export default function Bio(props) {
  const character = props.data.character;

  return (
    <>
      {character &&
        character
          .filter((character) => character.name)
          .map((character) => (
            <>
              <Grid key={character.key} item xs={12} md={6}>
                <Typography variant="h4" component="h2">
                  {character.name}
                </Typography>
                <Typography variant="body1" component="p">
                  {character.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={character.image}
                  height={character.image_height}
                  width={character.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={character.name}
                />
              </Grid>
            </>
          ))}
    </>
  );
}
