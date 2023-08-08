import Layout from "./layout";
import Image from "next/image";
import { Table, Button } from "@nextui-org/react";
import { Typography } from "@mui/material";

export default function Tables(props) {
  const { players } = props.data;
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px 0" }}>
        {players[0].teamname}
      </Typography>
      <Typography variant="h6" component="h2">
        Team Members
      </Typography>
      <Table
        aria-label="team table"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="single"
        color="secondary"
        ghost
        lined
      >
        <Table.Header>
          <Table.Column align="center">Photo</Table.Column>
          <Table.Column align="center">Name</Table.Column>
          <Table.Column align="center">Key Techniques</Table.Column>
          <Table.Column align="center">Location Found</Table.Column>
          <Table.Column align="center">View Stats</Table.Column>
        </Table.Header>
        <Table.Body>
          {players.map((player) => (
            <Table.Row key={player.key}>
              <Table.Cell>
                <Image
                  src={player.image}
                  height={player.image_height}
                  width={player.image_width}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt={player.name}
                />
              </Table.Cell>
              <Table.Cell>{player.name}</Table.Cell>
              <Table.Cell>{player.techniques}</Table.Cell>
              <Table.Cell>{player.location}</Table.Cell>
              <Table.Cell>
                <Button
                  size="xs"
                  color="secondary"
                  ghost
                  css={{ margin: "auto" }}
                >
                  Stats
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Layout>
  );
}
