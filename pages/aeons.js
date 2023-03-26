import Layout from "../components/layout";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

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
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Valefor.jpeg"
                  height={400}
                  width={513}
                  style={{
                    margin: "auto",
                  }}
                  alt="Valefor"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Valefor</h3>
                <p>
                  An aeon with great wings whose fayth statue is located in
                  Besaid Temple.
                </p>
                <Link href={`../aeons/valefor/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Ifrit.jpg"
                  height={400}
                  width={413}
                  style={{
                    margin: "auto",
                  }}
                  alt="Ifrit"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Ifrit</h3>
                <p>
                  A demon that holds dominion over fire, with a fayth statue
                  situated in Kilika Temple.
                </p>
                <Link href={`../aeons/ifrit/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Ixion.jpg"
                  height={400}
                  width={482}
                  style={{
                    margin: "auto",
                  }}
                  alt="Ixion"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Ixion</h3>
                <p>
                  A horned beast covered by lightning whose fayth statue stands
                  in Djose Temple.
                </p>
                <Link href={`../aeons/ixion/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Shiva.jpg"
                  height={400}
                  width={378}
                  style={{
                    margin: "auto",
                  }}
                  alt="Shiva"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Shiva</h3>
                <p>
                  The frozen queen of ice whose fayth statue is situated inside
                  Macalania Temple. The mantle in the full-body image is cast
                  off in game when she is summoned, fluttering safely into
                  Yuna's outstretched hands. There are parts made of ice
                  attached to her right arm. This is semitransparent and handled
                  the same way as the ice on her chest. Diamond Dust sparkles
                  from the edges of her cape and her tail accessory. Diamond
                  Dust is a phenomenon that occurs during severe cold when water
                  particles freeze in the air, causing them to sparkle and
                  shine. The queen of ice is a gorgeous sight to behold and an
                  agile attacker. Her unique attack is Heavenly Strike, creating
                  a giant block of ice and drops it on an enemy. The attack
                  slightly delays the target's next turn in addition to
                  inflicting non-elemental damage and the status ailment
                  threaten. Her overdrive is Diamond Dust, freezing all enemies
                  in layers of ice, and then destroys everything with a
                  leisurely snap of her fingers. All of Shiva's attack can
                  inflict more than 9999 HP damage after you've activated Lulu's
                  legendary weapon, the Onion Knight.
                </p>
                <Link href={`../aeons/shiva/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Bahamut.jpg"
                  height={400}
                  width={380}
                  style={{
                    margin: "auto",
                  }}
                  alt="Bahamut"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Bahamut</h3>
                <p>
                  A four-winged sacred beast with a fayth statue located in
                  Bevelle. Unlike the other aeons, the king of dragons is
                  heralded by multiple magic circles that appear in the heavens
                  whenever he is summoned into being. Bahamut possesses the
                  auto-ability Break Damage Barrier. This enables its attacks to
                  exceed 9999 HP damage right from the start. Bahamut has high
                  strength, defense and magic attributes. Bahamut's regular
                  attack causes more damage than any other aeon's. Bahamut can
                  also cast the highest elemental black magic spells. His unique
                  attack is Impulse where he charges up four balls of dark magic
                  and hurls them, damaging all enemies. Impulse is especially
                  useful when fighting multiple opponents. His overdrive is Mega
                  Flare, a classic attack for this character. Bahamut anchors
                  itself and fires a destructive breath attack that annihilates
                  anything in its path. Bahamut's overdrive consistently deals
                  over 9999 HP damage to all enemies, and it will continue to
                  grow stronger.
                </p>
                <Link href={`../aeons/bahamut/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Yojimbo.jpeg"
                  height={400}
                  width={457}
                  style={{
                    margin: "auto",
                  }}
                  alt="Yojimbo"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Yojimbo</h3>
                <p>
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
                </p>
                <Link href={`../aeons/yojimbo/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Anima.jpeg"
                  height={400}
                  width={358}
                  style={{
                    margin: "auto",
                  }}
                  alt="Anima"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Anima</h3>
                <p>
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
                </p>
                <Link href={`../aeons/anima/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Accordion>
              <AccordionSummary>
                <Image
                  className="cardImage"
                  src="/images/Magus_Sisters.jpeg"
                  height={400}
                  width={419}
                  style={{
                    margin: "auto",
                  }}
                  alt="Magus Sisters"
                />
              </AccordionSummary>
              <AccordionDetails>
                <h3>Magus Sisters</h3>
                <p>
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
                </p>
                <Link href={`../aeons/magus_sisters/`}>Read More</Link>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
