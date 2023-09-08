import Layout from "../../components/layout";
import { Typography } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";

export default function Wakka() {
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Wakka
      </Typography>
      <Typography variant="body1" component="p">
        Tidus reminds Wakka of his late brother Chappu, and Wakka invites him to
        join the team. Wakka has looked after Yuna since she was seven years
        old. Once she becomes a summoner, he joins her pilgrimage as on of her
        guardians. Wakka is a devout follower of the teachings of Yevon, and he
        particularly hates the Al Bhed for opposing those teachings. But he
        changes his prejudices after learning more about them and about the
        truth behind Yevon's teachings. Although he's the captain of the Besaid
        Aurochs blitzball team, Wakka plans to retire from the sport after this
        year's tournament so that he can devote himself entirely as Yuna's
        guardian. His deadly blitzball is especially useful for shooting down
        aerial enemies.
      </Typography>
      <Spacer y={3} />
      <Divider />
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Wakka in formation
      </Typography>
      <Typography variant="body1" component="p">
        Bring in Wakka any time you encounter flying creatures. Wakka is the
        only character who can hit them with great accuracy without casting
        spells. With his ability to inflict status ailments early in the game,
        use Wakka against stronger enemies to blind, silence, or put them to
        sleep.
      </Typography>
      <Spacer y={3} />
      <Divider />
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Wakka on the Sphere Grid
      </Typography>
      <Typography variant="body1" component="p">
        Wakka's definitely one of the better attackers, but his Defense and
        Magic Defense develop more slowly. Wakka will acquire skills that
        inflict darkness, silence or sleep on enemies, as well as black magic
        spells that drain the HP and MP from enemies. Upon reaching the end of
        his portion of the Sphere Grid, you can continue to develop his
        Strength, Defense, and Magic Defense in Auron's section of the Sphere
        Grid.
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
            <Table.Cell>Elemental Reels</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Attack Reels</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Status Reels</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Aurochs Reels</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Typography variant="body1" component="p">
        Overdrive: Slots
        <br />
        Wakka starts off with Elemental Reels adn acquires his other Overdives
        by winning blitzball games in both Leagues and Tournaments. Whenever you
        use Wakka's Elemental Reels Overdive, slot wheels start spinning. If you
        match all three wheels, then Wakka performs a double-elemental attack
        against a single, randomly-chosen enemy. If no wheels match up, Wakka
        perfomrs a physical attack against on randomly-chosen enemy. A similar
        concept is employed in his other Overdives.
      </Typography>
    </Layout>
  );
}
