import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

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
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons |</Link>
      <Link href={`/locations/`}> Locations |</Link>
      <Link href={`/walkthrough/`}> Walkthrough </Link>
      <section className={utilStyles.headingMd}>
        <hr />
        <h1>Welcome To Spira</h1>
        <p>
          The world of Spira is caught in a cycle of death. Its people live in
          fear of the great menace known only as Sin. The people seek solace in
          the temples of Yevon. The Yevon faith teaches that the only way to
          temporarily defeating Sin is for the summoners to sacrifice their
          lives while performing the Final Summoning. To this end, summoners
          periodically set out on pilgrimages with the goal of returning peace
          to Spira. But even the Final Summoning cannot kill Sin - it only
          prevents Sin from reviving for a temporary amount of time. In those
          peaceful periods, known as Calms, the people receive a brief respite
          from Sin's menace.
          <br />
          Lady Yuna of Besaid Village is one such summoner, determined to bring
          about the next Calm. She meets Tidus, a boy cast into Spira from Dream
          Zanarkand. Faced with the unfamiliar world, the young man becomes one
          of Yuna's guardians and joins her on her journey. Their quest throws
          them into a series of shocking events, including the devastation of
          the anti-Sin ranks of the Crusaders, the revelation of Sin's true
          identity, and the betrayal of the temples. Despite this, the group
          overcomes the trials and forges its own story.
        </p>
        <hr />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
