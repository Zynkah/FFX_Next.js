import * as React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { Divider, Container, Typography } from "@mui/material";

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
      <section className={utilStyles.headingMd}>
        <hr />
        <Typography variant="h3" sx={{ margin: "20px" }} className={utilStyles.title}>
          Welcome To Spira
        </Typography>
        <Image
          src="/images/Sin3.webp"
          height={320}
          width={701}
          style={{
            margin: "auto",
            marginBottom: "20px",
            borderRadius: "5px",
          }}
          alt="Sin"
        />
        <Typography variant="body" sx={{ margin: "30px" }} className={utilStyles.body}>
          The world of Spira is caught in a cycle of death. Its people live in
          fear of the great menace known only as Sin. The people seek solace in
          the temples of Yevon. The Yevon faith teaches that the only way to
          temporarily defeating Sin is for the summoners to sacrifice their
          lives while performing the Final Summoning. To this end, summoners
          periodically set out on pilgrimages with the goal of returning peace
          to Spira. But even the Final Summoning cannot kill Sin - it only
          prevents Sin from reviving for a temporary amount of time. In those
          peaceful periods, known as Calms, the people receive a brief respite
          from Sin's menace. Lady Yuna of Besaid Village is one such summoner,
          determined to bring about the next Calm. She meets Tidus, a boy cast
          into Spira from Dream Zanarkand. Faced with the unfamiliar world, the
          young man becomes one of Yuna's guardians and joins her on her
          journey. Their quest throws them into a series of shocking events,
          including the devastation of the anti-Sin ranks of the Crusaders, the
          revelation of Sin's true identity, and the betrayal of the temples.
          The two are faced with several challenges and have many hard decisions
          to make. Despite this, the group overcomes the trials and forges its
          own story. Thankfully, their friends are there to guide them on their
          journey.
        </Typography>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Divider>
          <h2 className={utilStyles.headingLg}>Blog</h2>
        </Divider>
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
