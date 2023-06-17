import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Card } from "@nextui-org/react";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Summoners() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <h1>Summoners</h1>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="basic tabs"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Maesters" href={`/maesters/`} />
            <Tab label="Summoners" href={`/summoners/`} value={value}/>
            <Tab label="Aeons" href={`/aeons/`} />
          </Tabs>
        </Box>
        <hr />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Yunalesca.webp"
                    height={400}
                    width={236}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Yunalesca"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Lady Yunalesca</h3>
                  <Card.Divider />
                  <p>
                    A legendary heroine who devised the Final Summoning
                    thousands of years prior to the events of the story. In the
                    present era, she resides in Zanarkand as an unsent. As the
                    daughter of the ancient summoner Yevon, Yunalesca learns
                    that Sin cannot be destroyed as long as her father Yu
                    Yevon's shade remains as its core. Using this knowledge, she
                    bestows the Final Summoning upon worthy summoners.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Gandof.webp"
                    height={400}
                    width={167}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Gandof"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Gandof</h3>
                  <Card.Divider />
                  <p>
                    Spira's first high summoner, he defeated Sin through the
                    Final Summoning four hundred years ago. Famed for sealing
                    the evil Qactuars in stones across the Thunder Plains.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Ohalland.webp"
                    height={400}
                    width={185}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Ohalland"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Ohalland</h3>
                  <Card.Divider />
                  <p>
                    A high summoner from Kilika Island who defeated Sin 230
                    years ago. A vaunted blitzball player for the Kilika Beasts
                    who took on a godlike status within the sport.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Yocun.webp"
                    height={400}
                    width={219}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Yocun"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Yocun</h3>
                  <Card.Divider />
                  <p>
                    A high summoner who defeated Sin one hundred years ago and
                    brought about a Calm. Originally a member of the Crusaders,
                    she trained continuously in the valley of the Calm Lands.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Braska.webp"
                    height={400}
                    width={320}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Braska"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Lord Braska</h3>
                  <Card.Divider />
                  <p>
                    Yuna's late father and the fourth high summoner of Spira. A
                    former priest who became a summoner after Sin killed his
                    wife, an Al Bhed. Ten years before the events of the story,
                    Braska embarked on a pilgrimage with Jecht and Auron to
                    defeat that generation's Sin through the Final Summoning. He
                    lost his life in the process, leaving deep scars on the
                    daughter he left behind.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Yuna_Summoner.jpg"
                    height={400}
                    width={225}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Yuna"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Yuna</h3>
                  <Card.Divider />
                  <p>
                    A summoner who is following in the footsteps of her father,
                    the late high summoner Braska. At 17 years old, she embarks
                    on her pilgrimage to obtain the Final Summoning to defeat
                    Sin. On her journey, she finds out the tradition of the
                    pilgrimage is a scam and the Final Summoning does not stop
                    Sin, it just resets the cycle, so she strays from the
                    teachings of Yevon to find her own way to beat Sin. She is
                    branded a traitor to Yevon but still continues her journey
                    and defeats Sin for good at the end.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Yu_Yevon.jpg"
                    height={400}
                    width={326}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Yu Yevon"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Yu Yevon</h3>
                  <Card.Divider />
                  <p>
                    The leader of ancient Zanarkand. He is lady Yunalesca's
                    father and the creator of Sin. One thousand years ago
                    Zanarkand and Bevelle were at war. Although Zanarkand had
                    powerful summoners, Bevelle had a strong military power that
                    used mechanical technology to build weapons making them
                    superior in battle. In an attempt to save his people from
                    Zanarkands inevitable demise, he creates dream-like memory
                    and his people are put into a slumber within this dream.
                    After this is set in motion, he is incapable to stopping
                    what he is doing and creates Sin to protect his Dream
                    Zanarkand. Sin's ultimate goal is to destroy all machina and
                    all large settlements to stall technological evolution, to
                    avoid its demise once more.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Lenne.jpeg"
                    height={400}
                    width={175}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Lenne"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Lenne</h3>
                  <Card.Divider />
                  <p>
                    Summoner who lived back in the time of the ancient war
                    before Sin was created. She was a pop-star summoner that was
                    drafted in the war, her lover Shuyin infiltrated Bevelle to
                    end the war with their doomsday weapon in an attempt to save
                    her. Lenne followed him and died trying to stop him. They
                    were caught by Bevelle's security forces and they unleashed
                    a barrage of bullets upon them.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Seymour.jpg"
                    height={400}
                    width={322}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Seymour"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Seymour</h3>
                  <Card.Divider />
                  <p>
                    A capable individual who became a maester of Yevon's
                    teachings at a young age, Seymour faced persecution all his
                    life due to his mixed heritage as the child of a human
                    mother and a Guado chieftain. This caused him to hate Spira
                    and its people. Before the start of the story, he secretly
                    murders his father Jyscal, succeeding him as a maester of
                    Yevon and the leader of the Guado. Well aware that the Final
                    Aeon must become the next Sin, he wants to exploit Yuna to
                    become Sin itself so he can destroy Spira.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Isaaru.jpeg"
                    height={400}
                    width={294}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Isaaru"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Isaaru</h3>
                  <Card.Divider />
                  <p>
                    A serious and well-mannered summoner with a cool appearance.
                    He idolized Braska from a young age and is friendly towards
                    his daughter Yuna. Nevertheless, he is forced to fight he on
                    the order of the temples.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Dona.webp"
                    height={400}
                    width={170}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Dona"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Dona</h3>
                  <Card.Divider />
                  <p>
                    A sexy summoner who views Yuna as her rival. She is proud of
                    the bond between her and Barthello, her lover and guardian.
                    Though she lacks honesty and affects an air of
                    self-importance, Dona is actually a sweet girl at her core.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Belgemine.webp"
                    height={400}
                    width={252}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Belgemine"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Belgemine</h3>
                  <Card.Divider />
                  <p>
                    A wandering summoner. Having been a summoner far longer than
                    Yuna, she challenges her to multiple battles across the land
                    to better train her aeons. In truth she is an unsent who
                    remains on Spira to train up-and-coming summoners.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Ginnem.jpeg"
                    height={400}
                    width={314}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Ginnem"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Ginnem</h3>
                  <Card.Divider />
                  <p>
                    The first summoner to take on Lulu as a guardian. Two years
                    ago she set out on a pilgrimage for the Final Summoning but
                    used up all her strength communing with the fayth of the
                    aeon Yojimbo. She remains on Spira as an unsent, dwelling in
                    the cavern of that fayth, in the Calm Lands.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/images/Zuke.webp"
                    height={400}
                    width={203}
                    style={{
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                    alt="Zuke"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Zuke</h3>
                  <Card.Divider />
                  <p>
                    The second summoner who accepted Lulu as his guardian. He
                    failed in his pilgrimage half a year ago in the Calm Lands.
                    He wishes only for Lulu's happiness and risks warning her
                    when her party is pursued by Yevon.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card isPressable isHoverable variant="bordered">
              <Accordion>
                <AccordionSummary>
                  <h3>O'aka's Little Sister</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <Card.Divider />
                  <p>
                    She is not named and only very briefly mentioned in the
                    story. All that is known is that she was younger than 22
                    when she passed.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
