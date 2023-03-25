import * as React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { Divider } from "@mui/material";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href={`/characters/`}>Characters |</Link>
      <Link href={`/culture/`}> Culture |</Link>
      <Link href={`/locations/`}> Locations |</Link>
      <Link href={`/walkthrough/`}> Walkthrough </Link>
      <section className={utilStyles.headingMd}>
        <hr />
        <h1>Welcome To Spira</h1>
        <br />
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} marginBottom={10}>
            <p>
              The world of Spira is caught in a cycle of death. Its people live
              in fear of the great menace known only as Sin. The people seek
              solace in the temples of Yevon. The Yevon faith teaches that the
              only way to temporarily defeating Sin is for the summoners to
              sacrifice their lives while performing the Final Summoning. To
              this end, summoners periodically set out on pilgrimages with the
              goal of returning peace to Spira. But even the Final Summoning
              cannot kill Sin - it only prevents Sin from reviving for a
              temporary amount of time. In those peaceful periods, known as
              Calms, the people receive a brief respite from Sin's menace.
            </p>
          </Grid>
          <Grid item xs={12} md={6} marginBottom={10}>
          <Image
              src="/images/Zanarkand_Ruins.png"
              height={400}
              width={572}
              style={{
                margin: "auto",
              }}
              alt="Valefor"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Tidus_Yuna.webp"
              height={400}
              width={292}
              style={{
                margin: "auto",
              }}
              alt="Tidus & Yuna"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <p>
              Lady Yuna of Besaid Village is one such summoner, determined to
              bring about the next Calm. She meets Tidus, a boy cast into Spira
              from Dream Zanarkand. Faced with the unfamiliar world, the young
              man becomes one of Yuna's guardians and joins her on her journey.
              Their quest throws them into a series of shocking events,
              including the devastation of the anti-Sin ranks of the Crusaders,
              the revelation of Sin's true identity, and the betrayal of the
              temples. The two are faced with several challenges and have many hard decisions to make. Despite this, the group overcomes the trials and forges its own story. Thankfully, their friends are there to guide them on their journey.
            </p>
          </Grid>
        </Grid>
        <br />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Divider><h2 className={utilStyles.headingLg}>Blog</h2></Divider>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
