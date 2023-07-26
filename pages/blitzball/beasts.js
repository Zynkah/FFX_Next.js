import Layout from "../../components/layout";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Table, Button } from "@nextui-org/react";

export default function Aurochs() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Kilika Beasts
      </Typography>
      <Typography variant="h6" component="h2">
        Team Members
      </Typography>
      <Table
        aria-label="Beast Team Members table"
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
            <Table.Cell>Larbeight</Table.Cell>
            <Table.Cell>Wither Shot, Anit-Nap, Tackle Slip 2</Table.Cell>
            <Table.Cell>Kilika Port - Docks</Table.Cell>
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
            <Table.Cell>Isken</Table.Cell>
            <Table.Cell>Wither Pass, Wither Tackle, Wither Tackle 2</Table.Cell>
            <Table.Cell>Kilika Port - House</Table.Cell>
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
            <Table.Cell>Vuroja</Table.Cell>
            <Table.Cell>Wither Tackle, Nap Pass, Anti-Nap</Table.Cell>
            <Table.Cell>Kilika Port - Docks</Table.Cell>
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
            <Table.Cell>Kulukan</Table.Cell>
            <Table.Cell>Drain Tackle, Nap Pass, Venom Tackle 3</Table.Cell>
            <Table.Cell>Kilika Port - Tavern</Table.Cell>
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
            <Table.Cell>Deim</Table.Cell>
            <Table.Cell>Venom Tackle, Wither Pass, Pile Wither</Table.Cell>
            <Table.Cell>Kilika Tempe - Great Hall</Table.Cell>
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
            <Table.Cell>Nizarut</Table.Cell>
            <Table.Cell>Venom Shot, Anti-Wither, Anti-Nap</Table.Cell>
            <Table.Cell>Kilika Tempe - Great Hall</Table.Cell>
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
