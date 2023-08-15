import Image from "next/image";
import { Grid } from "@mui/material";
import * as React from "react";

export default function MaesterCards(props) {
  const maesters = props.data;
  return (
    <>
      <Grid container spacing={2}>
        {maesters &&
          maesters
            .filter((maester) => maester.role === "Maester")
            .map((maester) => (
              <Grid key={maester.key} item xs={12} md={12} marginTop={10}>
                <Image
                  src={maester.image}
                  height={maester.image_height}
                  width={maester.image_width}
                  style={{
                    margin: "auto",
                  }}
                  alt="Grand Maester Mika"
                />
              </Grid>
            ))}
      </Grid>
    </>
  );
}
