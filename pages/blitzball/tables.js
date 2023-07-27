import Layout from "../../components/layout";
import Image from "next/image";
import { Table, Button } from "@nextui-org/react";
import { Typography } from "@mui/material";

export default (props) => {
  const { team, characters } = props.data;
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px 0" }}>
        {characters[0].teamname}
      </Typography>
      <Typography variant="h6" component="h2">
        Team Members
      </Typography>
      <Table
        aria-label={team}
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
          {characters.map((character) => (
            <Table.Row key={character.key}>
              <Table.Cell>
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
              </Table.Cell>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.techniques}</Table.Cell>
              <Table.Cell>{character.location}</Table.Cell>
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
};
