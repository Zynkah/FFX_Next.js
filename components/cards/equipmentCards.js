import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { Divider, Spacer } from "@nextui-org/react";
import * as React from "react";

export default function EquipmentCards(props) {
  const equipment = props && props.data.equipment;

  return (
    props && (
      <>
        <Divider>
          <Typography variant="h5">{equipment[0].name}</Typography>
        </Divider>
        <Spacer />
        <Typography variant="body2">{equipment[0].description}</Typography>
        <Spacer css={{ marginBottom: 40}}/>
        <Grid container spacing={2}>
          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Tidus Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}

          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Yuna Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}

          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Wakka Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}

          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Yuna Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}

          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Lulu Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}

          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Kimahri Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}

          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Auron Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}

          {equipment &&
            equipment
              .filter((equipment) => equipment.role === "Rikku Equipment")
              .map((equipment) => (
                <>
                  <Grid item key={equipment.key} xs={12} md={6}>
                    <Image
                      src={equipment.weapon_image}
                      height={equipment.weapon_image_height}
                      width={equipment.weapon_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.weapon_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Image
                      src={equipment.armor_image}
                      height={equipment.armor_image_height}
                      width={equipment.armor_image_width}
                      style={{
                        margin: "auto",
                      }}
                      alt={equipment.armor_name}
                    />
                  </Grid>
                </>
              ))}
        </Grid>
      </>
    )
  );
}
