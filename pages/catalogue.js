import Layout from "../components/layout";
import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Catalogue() {
  return (
    <Layout>
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
              <Link href={`/weapons/`}>Weapons</Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Layout>
  );
}
