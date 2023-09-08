import Layout from "../../components/layout";
import { Typography } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";

export default function Lulu() {
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Lulu
      </Typography>
      <Typography variant="body1" component="p">
        She and Wakka are childhood friends, and she was once engaged to marry
        Wakka's brother, Chappu. Lulu has acted as a summoner's guardian twice
        before, giving her extensive knowledge of the pilgrimage experience. But
        each prior pilgrimage ended in failure and the death of the summoner,
        leaving deep scars in Lulu's heart. Though she is harsh on herself and
        others, Lulu is kind at heart and hides a secret weakness. She even has
        a cute side, using her collection of stuffed animals as weapons. Lulu's
        experience and wisdom are valuable assets to the party. She treats Yuna
        as though she were her younger sister. Although she may seem insensitive
        at times, there are depths to her emotions that only her closest friends
        can understand.
      </Typography>
      <Spacer y={3} />
      <Divider />
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Lulu in formation
      </Typography>
      <Typography variant="body1" component="p">
        Bring in Lulu wheneve an enemy is strong against physical attacks or
        weak against a specific element. Her spellcasting enables her to attack
        from long range, and she can elimate aerial enemies as well. However,
        her weak physical defense and low HP make her vulnerable to physical
        attack.
      </Typography>
      <Spacer y={3} />
      <Divider />
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Lulu on the Sphere Grid
      </Typography>
      <Typography variant="body1" component="p">
        As Lulu's Magic attribute rises, her spells increase in power. When she
        reaches the end of her portion of the Sphere Grid, it's a good idea to
        learn spells like Drain, Osmose and Ultima. You can also mover her over
        to Yuna's section of the grid, so that she can learn white magic and
        continue to increase her Magic Attributes.
      </Typography>
      <Spacer y={3} />
      <Divider />
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Overdrive
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
          <Table.Column align="center">Overdrive</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Fire</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Thunder</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Water</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Blizzard</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Fira</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Thundera</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Watera</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Blizzara</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Firaga</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Thundaga</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Waterga</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Blizzarga</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bio</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Demi</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Death</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Drain</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Osmose</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Flare</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ultima</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Typography variant="body1" component="p">
        Overdrive: Fury
        <br />
        When Lulu hits Overdive, she can cast any black magic spell she knows
        multiple times whitout spending MP. Select the Fury command, and then
        choose a spell. Start rotating the right analog stick clockwise in full
        rotations as rapidly as possible. Depending on the spell you've chosen,
        the spell will cast on time for each several times you rotate the stick.
        Lulu's Overdive is available even when she's silenced, and isn't affect
        by any Shell or Reflect effects on enemies. Targets are randomly chosen.
      </Typography>
    </Layout>
  );
}
