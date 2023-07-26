import Layout from "../../components/layout";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Table, Button } from "@nextui-org/react";

export default function Aurochs() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Ronso Fangs
      </Typography>
      <Typography variant="h6" component="h2">
        Team Members
      </Typography>
      <Table
        aria-label="Fang Team Members table"
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
            <Table.Cell>Basik Ronso</Table.Cell>
            <Table.Cell>Nap Shot, Venom Tackle, Invisible Shot</Table.Cell>
            <Table.Cell>Luca Harbor - Number 4 Dock</Table.Cell>
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
            <Table.Cell>Argai Ronso</Table.Cell>
            <Table.Cell>Wither Tackle, Venom Pass 2, Anti-Drain</Table.Cell>
            <Table.Cell>Luca Harbor - Number 4 Dock</Table.Cell>
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
            <Table.Cell>Gazna Ronso</Table.Cell>
            <Table.Cell>Venom Pass, Drain Tackle, Volley Shot 2</Table.Cell>
            <Table.Cell>Luca Harbor - Number 4 Dock</Table.Cell>
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
            <Table.Cell>Nuvy Ronso</Table.Cell>
            <Table.Cell>Venom Tackle, Volleyh Shot, Tackle Slip</Table.Cell>
            <Table.Cell>Luca Harbor - Number 4 Dock</Table.Cell>
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
            <Table.Cell>Irga Ronso</Table.Cell>
            <Table.Cell>Pile Wither, Wither Tackle 3Super Goalie</Table.Cell>
            <Table.Cell>Luca Harbor - Number 4 Dock</Table.Cell>
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
            <Table.Cell>Zamzi Ronso</Table.Cell>
            <Table.Cell>Spin Ball, Super Goalie, Invisible Shot</Table.Cell>
            <Table.Cell>Luca Harbor - Number 4 Dock</Table.Cell>
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
