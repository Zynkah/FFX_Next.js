import Layout from "../../components/layout";
import Image from "next/image";
import { Table } from "@nextui-org/react";
import { Typography } from "@mui/material";

export default function Aurochs() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Besaid Aurochs
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
            <Table.Cell>
              <Image
                src="/images/Tidus_blitzball.webp"
                height={200}
                width={72}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Tidus"
              />
            </Table.Cell>
            <Table.Cell>Tidus</Table.Cell>
            <Table.Cell>Venom Tackle, Drain Tackle, Anti-Venom 2</Table.Cell>
            <Table.Cell>N/A</Table.Cell>
          </Table.Row>

          <Table.Row key="2">
            <Table.Cell>
              <Image
                src="/images/Datto.webp"
                height={200}
                width={87}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Tidus"
              />
            </Table.Cell>
            <Table.Cell>Datto</Table.Cell>
            <Table.Cell>Wither Shot, Anti-Venom, Wither Shot 2</Table.Cell>
            <Table.Cell>Luca Stadium - Aurochs Locker Room</Table.Cell>
          </Table.Row>

          <Table.Row key="3">
            <Table.Cell>
              <Image
                src="/images/Letty.webp"
                height={200}
                width={60}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Letty"
              />
            </Table.Cell>
            <Table.Cell>Letty</Table.Cell>
            <Table.Cell>Wither Tackle, Nap Pass, Venom Pass 3</Table.Cell>
            <Table.Cell>Luca Stadium - Aurochs Locker Room</Table.Cell>
          </Table.Row>

          <Table.Row key="4">
            <Table.Cell>
              <Image
                src="/images/Jassu.webp"
                height={200}
                width={91}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Jassu"
              />
            </Table.Cell>
            <Table.Cell>Jassu</Table.Cell>
            <Table.Cell>
              Wither Tackle, Wither Tackle 2, Nap Tackle 2
            </Table.Cell>
            <Table.Cell>Luca Stadium - Aurochs Locker Room</Table.Cell>
          </Table.Row>

          <Table.Row key="5">
            <Table.Cell>
              <Image
                src="/images/Botta.webp"
                height={200}
                width={75}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Botta"
              />
            </Table.Cell>
            <Table.Cell>Botta</Table.Cell>
            <Table.Cell>Venom Shot, Venom Pass 2, Nap Tackle</Table.Cell>
            <Table.Cell>Luca Stadium - Aurochs Locker Room</Table.Cell>
          </Table.Row>

          <Table.Row key="6">
            <Table.Cell>
              <Image
                src="/images/Keepa.webp"
                height={200}
                width={75}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Keepa"
              />
            </Table.Cell>
            <Table.Cell>Keepa</Table.Cell>
            <Table.Cell>Super Goalie, Volley Shoot, Anti-Wither</Table.Cell>
            <Table.Cell>Luca Stadium - Aurochs Locker Room</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Layout>
  );
}
