import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card, Text } from "@nextui-org/react";

export default function Aeons() {
  return (
    <Layout>
      <h1>Aeons</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons |</Link>
      <Link href={`/religion/`}> Back</Link>
      <hr />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Valefor.jpeg"
                  height={400}
                  width={513}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Valefor"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Valefor</h3>
                <Card.Divider />
                <Text>
                  An arieal aeon with great wings whose fayth statue is located in
                  Besaid Temple.
                </Text>
                <Link href={`../aeons/valefor/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Ifrit.jpg"
                  height={400}
                  width={413}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Ifrit"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Ifrit</h3>
                <Card.Divider />
                <Text>
                  A demon that holds dominion over fire, with a fayth statue
                  situated in Kilika Temple.
                </Text>
                <Link href={`../aeons/ifrit/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Ixion.jpg"
                  height={400}
                  width={482}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Ixion"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Ixion</h3>
                <Card.Divider />
                <Text>
                  A horned beast covered by lightning whose fayth statue stands
                  in Djose Temple.
                </Text>
                <Link href={`../aeons/ixion/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Shiva.jpg"
                  height={400}
                  width={378}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Shiva"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Shiva</h3>
                <Card.Divider />
                <Text>
                  The frozen queen of ice whose fayth statue is situated inside
                  Macalania Temple. 
                </Text>
                <Link href={`../aeons/shiva/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Bahamut.jpg"
                  height={400}
                  width={380}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Bahamut"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Bahamut</h3>
                <Card.Divider />
                <Text>
                  A four-winged sacred dragon beast with a fayth statue located in
                  Bevelle. 
                </Text>
                <Link href={`../aeons/bahamut/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Yojimbo.jpeg"
                  height={400}
                  width={457}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Yojimbo"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Yojimbo</h3>
                <Card.Divider />
                <Text>
                  A master swordsman whose fayth statue is situated in the
                  Cavern of the Stolen Fayth. The blade is his left hand,
                  Zanmato, can only be seen in the rare instance that he uses
                  the attack of the same name. Yojimbo is the secret aeon you
                  can acquire by visiting the Cavern of the Stolen Fayth beneath
                  the bridge at the northeast end of the Calm Lands. To acquire
                  Yojimbo, fight through the cave and defeat Yojimbo in battle.
                  Proceed to the Chamber of the Fayth and speak to Yojimbo to
                  negotiate a fee for his services. He will offer his lowest
                  initial asking price if you choose the option "To defeat the
                  most powerful of enemies". For your first bid, offer half of
                  his asking price plus 1 gil. So, if he asks for 250,000 offer
                  125,001 gil. After his next offer, raise your bid by 1 gil. By
                  the time her proposes 205,000, he will generally accept offers
                  below 200,000, though not much lower. If at any point you
                  offer him at least triple his asking price, he will give you
                  two teleport spheres in addition to his services. Yojimbo has
                  four unique attacks; Daigoro, Kozuka, Wakizashji, and Zanmato
                  yet has not selectable overdrive attacks. As a sword-for-hire,
                  he will attack enemies based on how much you pay him.
                  Yojimbo's attacks exceed 9999 HP damage once you activated
                  Auron's Masamune.
                </Text>
                <Link href={`../aeons/yojimbo/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Anima.jpeg"
                  height={400}
                  width={358}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Anima"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Anima</h3>
                <Card.Divider />
                <Text>
                  An aeon bound in heavy chains whose fayth statue can be found
                  in the temple of Yevon-Baaj. Its fayth is Seymour's mother,
                  and the plate around its neck is engraved with her image.
                  Anima is first seen as Seymour's chilling aeon, but the party
                  can acquire it by undertaking a quest. Return to Baaj Temple
                  from the airship, defeating Geosgaeno, and then enter the
                  underwater temple. Find the six hidden items in the Cloister
                  of Trials at each temple, and then approach each statue inside
                  Anima's shrine. This opens a doorway to the most devastating
                  aeon in the game. Anima's unique attack, Pain, conjures the
                  essence of misery and anguish, and unleashes it upon a single
                  enemy. The attack has a high chance of causing instant death.
                  Pain has a high recovery time. Her overdrive is Oblivion, the
                  most horrifying overdrive that inflicts multiple non-elemental
                  attacks on all enemies.
                </Text>
                <Link href={`../aeons/anima/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card isPressable isHoverable variant="bordered">
            <Accordion>
              <AccordionSummary>
                <Image
                  src="/images/Magus_Sisters.jpeg"
                  height={400}
                  width={419}
                  style={{
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                  alt="Magus Sisters"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Magus Sisters</h3>
                <Card.Divider />
                <Text>
                  Three sister aeons whose fayth statue is situated in Remiem
                  Temple. Each sister has a different insect motif -- a ladybug
                  for Cindy, the eldest; a mantis for the middle child, Sandy;
                  and a hornet for Mindy, the youngest. Each of their magic
                  circles reflects those characteristics. This trio made a
                  previous appearance in FF4. They can be yours to summon by
                  undertaking a side quest. Capture all of the enemies in the
                  Mt. Gagazet area, and return to the monster arena to get the
                  Blossom Crown. Acquire all the other aeons, including Yojimbo
                  and Anima, and return to Remiem Temple in the Calm Lands.
                  Challenge and defeat Belgemine's versions of your aeons. After
                  defeating her version of Bahamut, she will give you the Flower
                  Scepter. Continue to defeat Yojimbo and Anima. Then move to
                  the door in the back and unseal it with these two key items.
                  The Magus Sisters are like three separate aeons. As such, they
                  are a bit difficult to control. There are verbal requests that
                  must be made, and whether or not they grant Yuna's wishes
                  depends upon their level of morale. These sisters have 3
                  unique attacks; Camisade, Razzia and Passado. The sisters
                  might perform their unique attacks randomly when the "Do what
                  you will" choice is selected, or they might do it when Yuna
                  shouts "Go! Go!". Cindy's Camisade shoots blades of fire at an
                  enemy, while Sandy's Razzia launches her onto her target.
                  Little Mindy's Passado will rapidly fire a burst of fifteen
                  stingers at a single enemy. Their overdrive is Delta Attack.
                  When the Magus Sisters are all in Overdrive mode at the same
                  time, a new command, "Combine Powers!" appears. The sisters
                  will join forces and perform one of the most devastating
                  overdrives in the entire game.
                </Text>
                <Link href={`../aeons/magus_sisters/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
