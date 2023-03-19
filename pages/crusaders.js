import Layout from "../components/layout";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Crusaders() {
  return (
    <Layout>
      <h1>Crusaders</h1>
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
        alt="Calm Lands Agency"
      />
      </Grid>
        <Grid item xs={12} md={6}>
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
      </Grid>
    </Layout>
  );
}
