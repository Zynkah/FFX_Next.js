import Layout from "../../components/layout";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Table, Button } from "@nextui-org/react";

export default function Aurochs() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Guado Glories
      </Typography>
      <Typography variant="h6" component="h2">
        Team Members
      </Typography>
      <Table
        aria-label="Glories Team Members table"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="single"
        color="secondary"
        bordered
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
          <Table.Row key="1">
            <Table.Cell></Table.Cell>
            <Table.Cell>Giera Guado</Table.Cell>
            <Table.Cell>Venom Shot, Nap Shot, Pile Venom</Table.Cell>
            <Table.Cell>Guadosalam</Table.Cell>
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
          <Table.Row key="2">
            <Table.Cell></Table.Cell>
            <Table.Cell>Zazi Guado</Table.Cell>
            <Table.Cell>Anti-Venom, Wither Shot 2, Anti-Venom 2</Table.Cell>
            <Table.Cell>Guadosalam - House</Table.Cell>
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
          <Table.Row key="3">
            <Table.Cell></Table.Cell>
            <Table.Cell>Navara Guado</Table.Cell>
            <Table.Cell>Drain Tackle, Super Goalie, Nap Tackle 2</Table.Cell>
            <Table.Cell>Guadosalam</Table.Cell>
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
          <Table.Row key="4">
            <Table.Cell></Table.Cell>
            <Table.Cell>Auda Guado</Table.Cell>
            <Table.Cell>Anit-Venom, Anti-Nap, Anti-Wither</Table.Cell>
            <Table.Cell>Guadosalam</Table.Cell>
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
          <Table.Row key="5">
            <Table.Cell></Table.Cell>
            <Table.Cell>Pah Guado</Table.Cell>
            <Table.Cell>Drain Tackle, Venom Tackle 2, Gamble</Table.Cell>
            <Table.Cell>Guadosalam - House</Table.Cell>
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
          <Table.Row key="6">
            <Table.Cell></Table.Cell>
            <Table.Cell>Noy Guado</Table.Cell>
            <Table.Cell>Anti-Nap, Wither Pass 2, Elite Defense</Table.Cell>
            <Table.Cell>Guadosalam - Inn</Table.Cell>
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
        </Table.Body>
      </Table>
    </Layout>
  );
}
