import Layout from "../../components/layout";
import Image from "next/image";
import { Table } from "@nextui-org/react";
import { Typography } from "@mui/material";

export default function Aurochs() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Luca Goers
      </Typography>
      <Typography variant="h6" component="h2">
        Team Members
      </Typography>
      <Table
        aria-label="Example static collection table"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="single"
      >
        <Table.Header>
          <Table.Column align="center">Photo</Table.Column>
          <Table.Column align="center">Name</Table.Column>
          <Table.Column align="center">Key Techniques</Table.Column>
          <Table.Column align="center">Location Found</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell></Table.Cell>
            <Table.Cell>Bickson</Table.Cell>
            <Table.Cell>Wither Shot, Nap Pass, Anti-Nap</Table.Cell>
            <Table.Cell>Luca Harbor - Number 3 Dock</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell></Table.Cell>
            <Table.Cell>Abus</Table.Cell>
            <Table.Cell>Grip Gloves, Venom Tackle 2, Venom Shot 3</Table.Cell>
            <Table.Cell>Luca Harbor - Number 3 Dock</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell></Table.Cell>
            <Table.Cell>Graav</Table.Cell>
            <Table.Cell>Venom Pass, Tackle Slip, Drain Tackle 2</Table.Cell>
            <Table.Cell>Luca Harbor - Number 3 Dock</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell></Table.Cell>
            <Table.Cell>Doram</Table.Cell>
            <Table.Cell>Wither Tackle, Nap Tackle, Volley Shot</Table.Cell>
            <Table.Cell>Luca Harbor - Number 3 Dock</Table.Cell>
          </Table.Row>
          <Table.Row key="5">
            <Table.Cell></Table.Cell>
            <Table.Cell>Balgerda</Table.Cell>
            <Table.Cell>Nap Tackle, Anti-Wither, Drain Tackle</Table.Cell>
            <Table.Cell>Luca Harbor - Number 3 Dock</Table.Cell>
          </Table.Row>
          <Table.Row key="6">
            <Table.Cell></Table.Cell>
            <Table.Cell>Raudy</Table.Cell>
            <Table.Cell>Grip Gloves, Gamble, Tackle Slip 2</Table.Cell>
            <Table.Cell>Luca Harbor - Number 3 Dock</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Layout>
  );
}
