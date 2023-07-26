import Layout from "../../components/layout";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Table, Button } from "@nextui-org/react";

export default function Aurochs() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Al Bhed Psyches
      </Typography>
      <Typography variant="h6" component="h2">
        Team Members
      </Typography>
      <Table
        aria-label="Psyches Team Members table"
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
            <Table.Cell>Eigaar</Table.Cell>
            <Table.Cell>Venom Tackls, Spin Ball, Volley Shot 3</Table.Cell>
            <Table.Cell>Airship - Corridor</Table.Cell>
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
            <Table.Cell>Blappa</Table.Cell>
            <Table.Cell>Elite Defense, Drain Tackle, Nap Shot</Table.Cell>
            <Table.Cell>Airship - Corridor</Table.Cell>
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
            <Table.Cell>Berrik</Table.Cell>
            <Table.Cell>
              Venom Tackle, Wither Tackle 2, Elite Defense
            </Table.Cell>
            <Table.Cell>Airship - Corridor</Table.Cell>
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
            <Table.Cell>Judda</Table.Cell>
            <Table.Cell>Anti-Nap, Wither Tackle, Anti-Wither</Table.Cell>
            <Table.Cell>Airship - Corridor</Table.Cell>
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
            <Table.Cell>Lakkam</Table.Cell>
            <Table.Cell>Venom Tackle, Nap Pass, Tackle Slip</Table.Cell>
            <Table.Cell>Airship - Corridor</Table.Cell>
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
            <Table.Cell>Nimrook</Table.Cell>
            <Table.Cell>Vemon Tackle, Venom Tackle 2, Anti-Drain</Table.Cell>
            <Table.Cell>Airship - Corridor</Table.Cell>
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
