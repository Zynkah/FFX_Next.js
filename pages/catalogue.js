import Layout from "../components/layout";
import Link from "next/link";
import { Grid, Typography } from "@mui/material";
import { Container, Divider } from "@nextui-org/react";

export default function Catalogue({ aeons }) {
  return (
    <Layout>
      <Container css={{ marginTop: "50px", marginBottom: "50px" }}>
        <Divider>
          <Typography variant="h5" component="h2">
            Page Links
          </Typography>
        </Divider>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ul>
            <li>
              <Link href={`/aeons/`}>Aeons</Link>
            </li>
            <li>
              <Link href={`/blitzball/`}>Blitzball</Link>
            </li>
            <li>
              <Link href={`/characters/`}>Characters</Link>
            </li>
            <li>
              <Link href={`/culture/`}>Culture</Link>
            </li>
            <li>
              <Link href={`/locations/`}>Locations</Link>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} md={4}>
          <ul>
            <li>
              <Link href={`/maesters/`}>Maesters</Link>
            </li>
            <li>
              <Link href={`/military/`}>Military</Link>
            </li>
            <li>
              <Link href={`/races/`}>Races & Creatures </Link>
            </li>
            <li>
              <Link href={`/religion/`}>Religion</Link>
            </li>
            <li>
              <Link href={`/scripts/`}>Scripts</Link>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} md={4}>
          <ul>
            <li>
              {" "}
              <Link href={`/summoners/`}>Summoners</Link>
            </li>
            <li>
              <Link href={`/technology/`}>Technology</Link>
            </li>
            <li>
              <Link href={`/temples/`}>Temples</Link>
            </li>
            <li>
              <Link href={`/agencies/`}>Travel Agencies</Link>
            </li>
            <li>
              <Link href={`/walkthrough/`}>Walkthrough</Link>
            </li>
            <li>
              <Link href={`/equipment/`}>Equipment</Link>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Container css={{ marginTop: "50px", marginBottom: "50px" }}>
        <Divider>
          <Typography variant="h5" component="h2">
            Creator Links
          </Typography>
        </Divider>
      </Container>
      <Link href="https://www.paypal.com/donate/?business=C5B9D466CUT6N&no_recurring=0&item_name=If+you+want+to+support+my+website+I+would+really+appreciate+it%21+I+do+this+all+on+my+own+for+free%2C+thank+you%21&currency_code=USD">
        Donate |
      </Link>
      <Link href="https://zynkah-merch-2.creator-spring.com/"> Merch |</Link>
      <Link href="https://github.com/Zynkah?tab=repositories"> GitHub |</Link>
      <Link href="https://www.linkedin.com/in/zena-creps/"> LinkedIn</Link>
    </Layout>
  );
}
