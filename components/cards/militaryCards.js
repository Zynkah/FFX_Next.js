import Image from "next/image";
import { Divider } from "@nextui-org/react";
import * as React from "react";
import { Typography } from "@mui/material";

export default function MilitaryCards(props) {
  const military = props.data.military;
  console.log(military);

  return (
    <>
      <div key={military.key}>
        {military &&
          military
            .filter((military) => military.role === "Crusaders")
            .map((military) => (
              <>
                <Image
                  src={military.image}
                  height={military.image_height}
                  width={military.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={military.name}
                />
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">{military.name}</Typography>
                </Divider>
                <Typography variant="body">{military.description}</Typography>
              </>
            ))}
      </div>
      <div key={military.key}>
        {military &&
          military
            .filter((military) => military.role === "Guardians")
            .map((military) => (
              <>
                <Image
                  src={military.image}
                  height={military.image_height}
                  width={military.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={military.name}
                />
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">{military.name}</Typography>
                </Divider>
                <Typography variant="body">{military.description}</Typography>
              </>
            ))}
      </div>
      <div key={military.key}>
        {military &&
          military
            .filter((military) => military.role === "Warrior Monks")
            .map((military) => (
              <>
                <Image
                  src={military.image}
                  height={military.image_height}
                  width={military.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={military.name}
                />
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">{military.name}</Typography>
                </Divider>
                <Typography variant="body">{military.description}</Typography>
              </>
            ))}
      </div>
      <div key={military.key}>
        {military &&
          military
            .filter((military) => military.role === "Crimson Squad")
            .map((military) => (
              <>
                <Image
                  src={military.image}
                  height={military.image_height}
                  width={military.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={military.name}
                />
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">{military.name}</Typography>
                </Divider>
                <Typography variant="body">{military.description}</Typography>
              </>
            ))}
      </div>
      <div key={military.key}>
        {military &&
          military
            .filter((military) => military.role === "Chocobo Knights")
            .map((military) => (
              <>
                <Image
                  src={military.image}
                  height={military.image_height}
                  width={military.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={military.name}
                />
                <Divider css={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Typography variant="h5">{military.name}</Typography>
                </Divider>
                <Typography variant="body">{military.description}</Typography>
              </>
            ))}
      </div>
    </>
  );
}
