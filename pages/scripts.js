import Layout from "../components/layout";
import Image from "next/image";

export default function Scripts() {
  return (
    <Layout>
      <h1>Scripts in Spira</h1>
      <p>There are three different scripts found in Spira; Al Bhed, Spiran, and Yevon.</p>
      <hr />
      <h2>Spiran Script</h2>
      <p>A curvy script used all across Spira. Characters exist for each uppercase and lowercase letter.</p>
      <Image 
      src="/images/Spiran_Script.webp"
      height={400}
      width={515}
      style={{
        margin: "auto",
      }}
      alt="Spiran Script"
      />
      <hr />
      <h2>Al Bhed Script</h2>
      <p>The script used by the Al Bhed, distinctive for its combination of two to four fragments to make each character. Uppercase and lowercase variations are very similar across the characters.</p>
      <Image 
      src="/images/Al_Bhed_Script.webp"
      height={400}
      width={597}
      style={{
        margin: "auto",
      }}
      alt="Al Bhed Script"
      />
      <hr />
      <h2>Yevon Script</h2>
      <p>Characters resembling Sanskrit that are used predominantly in Yevon institutions. Some characters have their own individual meanings, such as 'fire' or 'Yevon'.</p>
      <Image 
      src="/images/Yevon_Script.webp"
      height={400}
      width={515}
      style={{
        margin: "auto",
      }}
      alt="Yevon Script"
      />
      <hr />
    </Layout>
  );
}
