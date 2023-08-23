import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { Divider, Container } from "@mui/material";
import * as React from "react";

export default function TechnologyCards(props) {
  const technology = props.data;

  return (
    <>
      <Grid container spacing={2}>
        {technology &&
          technology
            .filter((tech) => tech.role === "Machina")
            .map((tech) => (
              <>
                <Grid key={tech.key} item xs={12} md={6}>
                <Container style={{ marginBottom: "35px" }}>
                  <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Typography variant="h5">{tech.name}</Typography>
                  </Divider>
                  </Container>
                  <Typography variant="body">{tech.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src={tech.image}
                    height={tech.image_height}
                    width={tech.image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                      marginTop: "40px",
                    }}
                    alt={tech.name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
      <Grid container spacing={2}>
        {technology &&
          technology
            .filter((tech) => tech.role === "Movie Sphere")
            .map((tech) => (
              <>
                <Grid key={tech.key} item xs={12} md={6}>
                  <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Typography variant="h5">{tech.name}</Typography>
                  </Divider>
                  <Typography variant="body">{tech.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src={tech.image}
                    height={tech.image_height}
                    width={tech.image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                      marginTop: "40px",
                    }}
                    alt={tech.name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
      <Grid container spacing={2}>
        {technology &&
          technology
            .filter((tech) => tech.role === "Gil")
            .map((tech) => (
              <>
                <Grid key={tech.key} item xs={12} md={6}>
                  <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Typography variant="h5">{tech.name}</Typography>
                  </Divider>
                  <Typography variant="body">{tech.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src={tech.image}
                    height={tech.image_height}
                    width={tech.image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                      marginTop: "40px",
                    }}
                    alt={tech.name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
      <Grid container spacing={2}>
        {technology &&
          technology
            .filter((tech) => tech.role === "Fire Arms")
            .map((tech) => (
              <>
                <Grid key={tech.key} item xs={12} md={6}>
                  <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Typography variant="h5">{tech.name}</Typography>
                  </Divider>
                  <Typography variant="body">{tech.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src={tech.image}
                    height={tech.image_height}
                    width={tech.image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                      marginTop: "40px",
                    }}
                    alt={tech.name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
      <Grid container spacing={2}>
        {technology &&
          technology
            .filter((tech) => tech.role === "Vehicle")
            .map((tech) => (
              <>

                <Grid key={tech.key} item xs={12} md={6}>

                  <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>

                    <Typography variant="h5">{tech.name}</Typography>
                  </Divider>

                  <Typography variant="body">{tech.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src={tech.image}
                    height={tech.image_height}
                    width={tech.image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                      marginTop: "40px",
                    }}
                    alt={tech.name}
                  />
                </Grid>
              </>
            ))}

      </Grid>
      <Grid container spacing={2}>
        {technology &&
          technology
            .filter((tech) => tech.role === "Hand Held Items")
            .map((tech) => (
              <>
                <Grid key={tech.key} item xs={12} md={6}>
                  <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Typography variant="h5">{tech.name}</Typography>
                  </Divider>
                  <Typography variant="body">{tech.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src={tech.image}
                    height={tech.image_height}
                    width={tech.image_width}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                      marginTop: "40px",
                    }}
                    alt={tech.name}
                  />
                </Grid>
              </>
            ))}
      </Grid>
    </>
  );
}
