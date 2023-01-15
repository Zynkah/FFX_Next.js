import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome To Spira</p>
        <p>
          Slowly I will turn this sample page into my FFX fan page. Stay tuned!
          <br />
          Read <Link href="/posts/first-post">this page!</Link>
        </p>
      </section>
    </Layout>
  );
}
