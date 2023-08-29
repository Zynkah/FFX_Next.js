import Image from "next/image";
import { Typography, Grid } from "@mui/material";

export default function AgencyCards(props) {
  const agencies = props.data;
  return (
    <>
      <Grid container spacing={2}>
        {agencies &&
          agencies
            .filter((agency) => agency.role === "Agency")
            .map((agency) => (
              <Grid key={agency.key} item xs={12} md={6}>
                <Typography variant="h6">{agency.name}</Typography>
                <Image
                  src={agency.image}
                  height={agency.image_height}
                  width={agency.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={agency.name}
                />
              </Grid>
            ))}
      </Grid>
    </>
  );
}
