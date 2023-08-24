import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { Divider, Container } from "@nextui-org/react";
import * as React from "react";

export default function ScriptCards(props) {
  const scripts = props.data.script;

  return (
    <>
      <Grid container spacing={2}>
        {scripts &&
          scripts
            .filter((script) => script.role === "Spiran Scripts")
            .map((script) => (
              <>
                <Grid key={script.key} item xs={12} md={6} marginY={10}>
                  <Container style={{ marginBottom: "35px" }}>
                    <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                      <Typography variant="h5">{script.name}</Typography>
                    </Divider>
                  </Container>
                  <Image
                    src={script.image}
                    height={script.image_height}
                    width={script.image_width}
                    style={{
                      margin: "auto",
                      marginTop: "50px",
                      marginBottom: "30px",
                      borderRadius: "5px",
                    }}
                    alt={script.image_name}
                  />
                  <Typography variant="body">{script.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6} marginY={10}>
                  <Image
                    src={script.script_image}
                    height={script.script_image_height}
                    width={script.script_image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt={script.scritp_image_name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
      <Grid container spacing={2}>
        {scripts &&
          scripts
            .filter((script) => script.role === "Al Bhed Scripts")
            .map((script) => (
              <>
                <Grid key={script.key} item xs={12} md={6} marginY={10}>
                  <Container style={{ marginBottom: "35px" }}>
                    <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                      <Typography variant="h5">{script.name}</Typography>
                    </Divider>
                  </Container>
                  <Image
                    src={script.image}
                    height={script.image_height}
                    width={script.image_width}
                    style={{
                      margin: "auto",
                      marginTop: "50px",
                      marginBottom: "30px",
                      borderRadius: "5px",
                    }}
                    alt={script.image_name}
                  />
                  <Typography variant="body">{script.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6} marginY={10}>
                  <Image
                    src={script.script_image}
                    height={script.script_image_height}
                    width={script.script_image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt={script.scritp_image_name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
      <Grid container spacing={2}>
        {scripts &&
          scripts
            .filter((script) => script.role === "Yevon Scripts")
            .map((script) => (
              <>
                <Grid key={script.key} item xs={12} md={6} marginY={10}>
                  <Container style={{ marginBottom: "35px" }}>
                    <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                      <Typography variant="h5">{script.name}</Typography>
                    </Divider>
                  </Container>
                  <Image
                    src={script.image}
                    height={script.image_height}
                    width={script.image_width}
                    style={{
                      margin: "auto",
                      marginTop: "50px",
                      marginBottom: "30px",
                      borderRadius: "5px",
                    }}
                    alt={script.image_name}
                  />
                  <Typography variant="body">{script.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6} marginY={10}>
                  <Image
                    src={script.script_image}
                    height={script.script_image_height}
                    width={script.script_image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt={script.scritp_image_name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
    </>
  );
}
