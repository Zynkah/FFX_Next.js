import Layout from "../components/layout";
import Image from "next/image";

export default function TravelAgency() {
  return (
    <Layout>
      <h1>Rin's Travel Agencies</h1>
      <hr />
      <p>An Al Bhed named Rin owns these inns scattered thoughout Spira.</p>
      <h2>Mi'ihen Highroad Branch</h2>
      <Image
        src="/images/Miihen_Agency.webp"
        height={400}
        width={600}
        style={{
          margin: "auto",
        }}
        alt="Mi'ihen Agency"
      />
      <h2>Thunder Plains Branch</h2>
      <Image
        src="/images/Thunder_Plains_Agency.webp"
        height={400}
        width={600}
        style={{
          margin: "auto",
        }}
        alt="Thunder Plains Agency"
      />
      <h2>Lake Macalania Branch</h2>
      <Image
        src="/images/Lake_Macalania.webp"
        height={400}
        width={600}
        style={{
          margin: "auto",
        }}
        alt="Lake Macalania Agency"
      />
      <h2>Calm Lands Branch</h2>
      <Image
        src="/images/Calm_Lands_Agency.webp"
        height={400}
        width={600}
        style={{
          margin: "auto",
        }}
        alt="Calm Agency"
      />
    </Layout>
  );
}
