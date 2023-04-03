import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Divider } from "@nextui-org/react";

export default function Military() {
  return (
    <Layout>
      <h1>Military</h1>
      <hr />
      <Grid container spacing={2} marginTop={5}>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/WenKinoc.png"
            height={400}
            width={190}
            style={{
              margin: "auto",
            }}
            alt="Wen Kinoc Agency"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <br />
          <br />
          <Divider>
            <h2>Crusaders</h2>
          </Divider>
          <br />
          <br />
          <p>
            The Crusaders were formed as the Crimson Blades 800 years ago by
            Lord Mi'ihen. As the first volunteer-based organization dedicated to
            defending the people of Spira from Sin, the Crimson Blades grew
            quickly in number. The Maesters of Yevon began to fear their numbers
            and accused the Crimson Blades of rebellion. Lord Mi'ihen traveled
            to Bevelle to fight the claims, and won the Maesters' trust. He
            renamed the Crimson Blades the Crusaders, and the organization began
            to operate as members of the clergy of Yevon. The road Lord Mi'ihen
            traveled to Bevelle was renamed the Mi'ihen Highroad in reflection
            of his actions.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/Zaon.webp"
            height={400}
            width={219}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Zaon"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <br />
          <br />
          <Divider>
            <h2>Guardians</h2>
          </Divider>
          <br />
          <br />
          <p>
            Guardians are the only individuals allowed to accompany a summoner
            into a Chamber of the Fayth. If anyone else does so, the summoner
            may face sanctions as strong as excommunication from Yevon, even if
            they did so without the summoner's knowledge or consent.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/Warrior_Monk.webp"
            height={400}
            width={177}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Warrior Monk"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <br />
          <br />
          <Divider>
            <h2>Warrior Monks</h2>
          </Divider>
          <br />
          <br />
          <p>
            The history of the Warrior Monks date back at least 1,000 years
            prior to the events of Final Fantasy X. In the Machina War, the
            Warrior Monks were under the control of Bevelle and were used to
            fight Zanarkand. Many monks died during Sin's destruction of
            Zanarkand, and many Fallen Monks still dwell there as unsent.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/Crimson_Squad.webp"
            height={300}
            width={451}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Crimson Squad"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <br />
          <br />
          <Divider>
            <h2>Crimson Squad</h2>
          </Divider>
          <br />
          <br />
          <p>
            Maester Wen Kinoc assembled the Crimson Squad under the guise of
            fulfilling the society's demand for a stronger army, but the true
            reason was to privatize the Crusaders by inserting his hand-reared
            Crimson Squad members.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/images/Chocobo_Knights.webp"
            height={300}
            width={451}
            style={{
              margin: "auto",
              borderRadius: "5px",
            }}
            alt="Chocobo Knights"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <br />
          <br />
          <Divider>
            <h2>Chocobo Knights</h2>
          </Divider>
          <br />
          <br />
          <p>
            The Chocobo Knights of Spira are an elite group of mounted soldiers,
            consisting of the serious but kind Captain Lucil, cheerful Elma, and
            the uncomfortable and slightly incompetent Clasko. It is mentioned
            by an NPC that normally one must be a skilled chocobo rider or
            achieve combat merit to become a chocobo knight, and that Clasko was
            likely knighted because he is good at earning chocobos' trust. It is
            never stated directly that the knights are part of the Crusaders,
            but they do take part in Operation Mi'ihen and both Lucil and Elma
            are shown giving orders to Luzzu and Gatta.
          </p>
        </Grid>
      </Grid>
    </Layout>
  );
}
