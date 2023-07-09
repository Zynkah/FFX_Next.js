import Layout from "../components/layout";
import ReligionTabs from "../components/religion_tabs";
import Image from "next/image";
import { Grid, Typography, Box } from "@mui/material";
import * as React from "react";

export default function Religion() {
  return (
    <Layout>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Religion
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ReligionTabs />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4} marginTop={13}>
            <Image
              src="/images/Child_Seymour.webp"
              height={400}
              width={357}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Child Seymour with Anima"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={8} marginTop={10}>
            <Typography variant="body">
              Religion is an important part of life for many of the peoples of
              Spira, with a large majority of the population describing
              themselves as "Yevonites". Though by the end of Final Fantasy X
              some people had begun to question them, nevertheless the teachings
              of Yevon were millennium-old and heavily influential. The Yevonite
              clergy taught that Sin was a divine punishment set upon the people
              for their pride in the use of machines. As a result, the temples
              forbade the use of modern technology, and promoted a culture of
              atonement for past sins in the hopes of appeasing Sin. While the
              Yevon church forbids most machina including weapons, their capital
              Bevelle retains machina to ensure its dominance. The Al Bhed are
              seen as dangerous to the Yevon clergy because they use machina and
              pose a threat to the church's uncontested control of Spira. The
              church retains its power by role in using the Final Summoning
              which results in the sacrifice of the summoner and her guardian to
              prevent its secrets from being divulged. Though Yevon set up
              Operation Mi'ihen to instill further loyalty to the teachings by
              making the Crusaders use machina that would never win against Sin.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
