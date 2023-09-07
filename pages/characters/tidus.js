import Layout from "../../components/layout";
import { Typography } from "@mui/material";
import { Spacer, Divider, Table } from "@nextui-org/react";


export default function Tidus() {
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Tidus
      </Typography>
      <Typography variant="body1" component="p">
        A popular blitzball player from the metropolis of Zanarkand. During a
        match, Tidus is attacked by the monstrous fiend known as Sin. Thrown
        into the unfamiliar world of Spira, he joins the summoner Yuna on her
        journey. Tidas is a cheerful young teenager, the star blitzball player
        of the Zanarkand Abes. He has long resented his father, a renowned
        blitzball player who disappeared during Tidus's youth. Shortly after his
        father's disappearance, Tidus's mother died of heart break, she deeply
        loved Jecht and just completely gave up on everything after he was gone,
        even neglecting her own son. This made Tidus hate his father even more,
        blaming him for his mothers death. Auron was Tiuds's guardian after
        this, watching him from afar. Tidus's quick moves allow him to attack
        even the swiftest of foes with ease.
      </Typography>
      <Spacer y={3} />
      <Divider />
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Tidus in formation
      </Typography>
      <Typography variant="body1" component="p">
        Bring Tidus into the party whenever an enemy is too agile for other
        characters to hit. He can eliminate swift, four-legged creatures iwth
        ease. As his strength and agility improve, he will become able to
        eliminate aerial enemies as well.
      </Typography>
      <Spacer y={3} />
      <Divider />
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Tidus on the Sphere Grid
      </Typography>
      <Typography variant="body1" component="p">
        As Tidus advances from his starting point, he can learn many support
        spells such as Haste and Slow. Tidus' main benefit to the party is his
        ability to increase the frequency fo the party's turns and reduce those
        of the enemy through abilities like Hastega, Slowga, Buster, and Quick
        Attack. After you complete Tidus' section of the Sphere Grid, he can
        proceed into Yuna's. Teaching Curaga, Dispel, and Reflect to Tidus is a
        good idea, but his low Magic attribute makes him a weak healer.
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
          <Table.Column align="center">Target</Table.Column>
          <Table.Column align="center">Attempts Required to Learn</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Spiral Cut</Table.Cell>
            <Table.Cell>One Enemy</Table.Cell>
            <Table.Cell>Default</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Slice & Dice</Table.Cell>
            <Table.Cell>Random</Table.Cell>
            <Table.Cell>Perform 10 successful Overdives</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Energy Rain</Table.Cell>
            <Table.Cell>All Enemies</Table.Cell>
            <Table.Cell>Perform 30 successful Overdives</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Blitz Ace</Table.Cell>
            <Table.Cell>All Enemies</Table.Cell>
            <Table.Cell>Perform 80 successful Overdives</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Typography variant="body1" component="p">
        Overdrive: Swordplay
        <br />
        Tidus executes devastating sword attacks against one or all enemies through his Overdives. After choosing an Overdive technique, watch the meter carefully and press 'X' when the cursor is in the middle of the bar. The strength of Tidus' Overdive attack depends upon how much time remains on the timer. The more Tidus uses his Overdrive, the more techniques he will learn.
      </Typography>
    </Layout>
  );
}                                     
