import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card, Text } from "@nextui-org/react";

export default function Characters() {
  return (
    <Layout>
      <h1>Characters</h1>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Tidus.jpg"
                  height={400}
                  width={363}
                  style={{
                    margin: "auto",
                  }}
                  alt="Tidus"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Tidus</h3>
                <Card.Divider />
                <Text>
                  The optimistic crybaby who gives hope to a world gripped in
                  the spiral of death. A popular blitzball player from the
                  metropolis of Zanarkand. The son of Jecht, a blitzball legend,
                  Tidus rebelled against his father from an early age. During a
                  match, Tidus is attacked by the monstrous fiend known as Sin.
                  Thrown into the unfamiliar world of Spira, he joins the
                  summoner Yuna on her journey. Tidas is a cheerful young
                  teenager, the star blitzball player of the Zanarkand Abes. He
                  has long resented his father, a renowned blitzball player who
                  disappeared during Tidus's youth. Shortly after his father's
                  disappearance, Tidus's mother died of heart break, she deeply
                  loved Jecht and just completely gave up on everything after he
                  was gone, even neglecting her own son. This made Tidus hate
                  his father even more, blaming him for his mothers death. Auron
                  was Tiuds's guardian after this, watching him from afar.
                  Tidus's quick moves allow him to attack even the swiftest of
                  foes with ease.
                </Text>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Yuna.jpg"
                  height={400}
                  width={363}
                  style={{
                    margin: "auto",
                  }}
                  alt="Yuna"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Yuna</h3>
                <Card.Divider />
                <Text>
                  The summoner possessing endless kindness, willing to sacrifice
                  herself to save the world. Daughter of High Summoner Braska.
                  When her father left for his pilgrimage she was left behind in
                  the city she was born, Bevelle. After her father's success she
                  first felt great pride, but then realized he would never
                  return, sacrificing his own life to bring on the temporary
                  calm. She was only 7 years old when all this happened. Shortly
                  after a young Ronso named Kimahri came to become her guardian
                  and brought her to a small village called Besaid. There she
                  met Wakka and Lulu, who looked after her as their own little
                  sister. When she turned 17 she decided to follow in her
                  father's footsteps and entered the temple in Besaid to gain
                  her first aeon, Valefor. A summoner who is following in the
                  footsteps of her father, the revered high summoner Braska.
                  Yuna's tender nature balances her fierce resolve. Like her
                  father before her, Yuna seeks the power of the final summoning
                  to defeat Sin. At first Yuna is ready to trade her life to
                  bring about a temporary calm, but her pilgrimage leads her to
                  discover how the teachings of Yevon deceive those they are
                  meant to guide, as well as the true nature of the Final
                  Summoning. Armed with this information, she resolves to live
                  and reject the endless spiral of death. Yuna is the daughter
                  of the high summoner who defeated Sin to bring about the
                  "Calm", a time of peace. Yuna embarks on a pilgrimage to
                  obtain the final aeon and defeat Sin. To complete her quest,
                  Yuna has enlisted the aid of her most trusted friends as her
                  guardians.
                </Text>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Auron.jpg"
                  height={400}
                  width={345}
                  style={{
                    margin: "auto",
                  }}
                  alt="Auron"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Auron</h3>
                <Card.Divider />
                <Text>
                  The legendary guardian who guides a young man to fulfill a
                  promise to a friend. A man tasked with watching over Tidus in
                  Dream Zanarkand who created the opportunity for Tidus to
                  venture to Spira. Auron is know as the "legendary guardian",
                  having guarded the high summoner Braska ten years ago when he
                  defeated Sin. Despite his service on that pilgrimage, Auron
                  could not prevent the tragedy that befell Braska and Jecht. He
                  also lost his own life, becoming an "unsent" who lingered in
                  the world of the living. Auron joins Yuna's party as one of
                  her guardians, wagering on the possibility that the children
                  of his old friends might discover the truth and tell their own
                  story. The legendary guardian who accompanied High Summoner
                  Braska on the pilgrimage to defeat Sin ten years ago. Auron
                  guides Yuna and Tidus on their mission to vanquish Sin once
                  more. He swings his gigantic sword with such power that even
                  the toughest fiends are cut asunder.
                </Text>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Kimahri.jpg"
                  height={400}
                  width={408}
                  style={{
                    margin: "auto",
                  }}
                  alt="Kimahri"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Kimahri</h3>
                <Card.Divider />
                <Text>
                  The hornless Ronso youth dedicating his life to Yuna. A Ronso
                  who serves as Yuna's first guardian. His taciturn nature and
                  leonine appearance makes him hard to approach, but in truth
                  Kimahri is thoughtful and affectionate. After the death of the
                  high summoner Braska, he brought the young Yuna to Besaid
                  Village and watched over her for the next ten years. His horn,
                  the pride of a Ronso, was broken by his rival Biran and the
                  resulting shame forced Kimahri to flee his hometown of
                  Gagazet. Despite this, he overcomes his trauma to protect Yuna
                  on her pilgrimage. A young warrior of the Ronso tribe, Kimahri
                  watched over Yuna during her early years. He is devoted to
                  Yuna and serves her loyally as a guardian. Kimahri can learn
                  the special attacks of enemies with his Lancet ability.
                </Text>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Wakka.jpg"
                  height={400}
                  width={290}
                  style={{
                    margin: "auto",
                  }}
                  alt="Wakka"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Wakka</h3>
                <Card.Divider />
                <Text>
                  A good-natured older-brother type who has dedicated his youth
                  to blitzball. The young coach and most valuable player of
                  Besaid Village's blitzball team, the Besaid Aurochs. Tidus
                  reminds Wakka of his late brother Chappu, and Wakka invites
                  him to join the team. Wakka has looked after Yuna since she
                  was seven years old. Once she becomes a summoner, he joins her
                  pilgrimage as on of her guardians. Wakka is a devout follower
                  of the teachings of Yevon, and he particularly hates the Al
                  Bhed for opposing those teachings. But he changes his
                  prejudices after learning more about them and about the truth
                  behind Yevon's teachings. Although he's the captain of the
                  Besaid Aurochs blitzball team, Wakka plans to retire from the
                  sport after this year's tournament so that he can devote
                  himself entirely as Yuna's guardian. His deadly blitzball is
                  especially useful for shooting down aerial enemies.
                </Text>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Lulu.jpg"
                  height={400}
                  width={313}
                  style={{
                    margin: "auto",
                  }}
                  alt="Lulu"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Lulu</h3>
                <Card.Divider />
                <Text>
                  The severe yet sweet Black Mage who aids her comrades with a
                  wealth of knowledge. A female Black Mage acting as Yuna's
                  guardian who watches over her like a big sister. She and Wakka
                  are childhood friends, and she was once engaged to marry
                  Wakka's brother, Chappu. Lulu has acted as a summoner's
                  guardian twice before, giving her extensive knowledge of the
                  pilgrimage experience. But each prior pilgrimage ended in
                  failure and the death of the summoner, leaving deep scars in
                  Lulu's heart. Though she is harsh on herself and others, Lulu
                  is kind at heart and hides a secret weakness. She even has a
                  cute side, using her collection of stuffed animals as weapons.
                  Lulu's experience and wisdom are valuable assets to the party.
                  She treats Yuna as though she were her younger sister.
                  Although she may seem insensitive at times, there are depths
                  to her emotions that only her closest friends can understand.
                </Text>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Rikku.jpg"
                  height={400}
                  width={265}
                  style={{
                    margin: "auto",
                  }}
                  alt="Rikku"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Rikku</h3>
                <Card.Divider />
                <Text>
                  A hearty and hard-working Al Bhed lass, constantly thinking
                  about what she can accomplish. Daughter to the chief of the Al
                  Bhed, a tribe of people persecuted for opposing the teachings
                  of Yevon, Rikku is also Yuna's cousin on her mother's side.
                  Under her people's pretense of protecting summoners from
                  killing themselves, Rikku unsuccessfully tries to kidnap Yuna.
                  In time, she comes to respect Yuna's determination to complete
                  the summoner's pilgrimage and joins her party as a guardian.
                  She may seem to have a cheerful scatterbrained personality,
                  but like the other Al Bhed, Rikku is rational and steadfast,
                  determined to overcome any obstacle in her way. Rikku is a
                  young Al Bhed girl with an upbeat and positive personality.
                  She dismantles mechanical enemies with ease, and can steal
                  items from enemies as well. When Rikku joins the party near
                  the Moonflow, her technical expertise allows you to start
                  customizing equipment by adding abilities to the open slots on
                  weapons and armor.
                </Text>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
