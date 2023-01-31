import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Temples() {
  return (
    <Layout>
      <h1>Temples in Spira</h1>
      <hr /> 
      <h3>Besaid Temple</h3>
      <Image 
      src="/images/Besaid_Island.jpg"
      height={300}
      width={477}
      style={{
        margin: "auto",
      }}
      alt="Besaid Temple"
      /> 
      <p>This temple is in the Besaid Village. It houses the Aeon Valefor, which is the first Aeon Yuna obtains.</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Valefor.jpeg"
      height={300}
      width={385}
      style={{
        margin: "auto",
      }}
      alt="Valefor"
      /></Link>
      <hr />
      <h3>Kilika Temple</h3>
      <Image 
      src="/images/Kilika_Temple.jpg"
      height={300}
      width={381}
      style={{
        margin: "auto",
      }}
      alt="Kilika Temple"
      />
      <p>Aeon: Ifrit</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Ifrit.jpg"
      height={300}
      width={309}
      style={{
        margin: "auto",
      }}
      alt="Ifrit"
      /></Link>
      <hr />
      <h3>Djose Temple</h3>
      <Image 
      src="/images/Djose.jpg"
      height={300}
      width={529}
      style={{
        margin: "auto",
      }}
      alt="Djose"
      />
      <p>Aeon: Ixion</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Ixion.jpg"
      height={300}
      width={361}
      style={{
        margin: "auto",
      }}
      alt="Ixion"
      /></Link>
      <hr />
      <h3>Macalania Temple</h3>
      <Image 
      src="/images/Macalania_Temple.jpg"
      height={300}
      width={328}
      style={{
        margin: "auto",
      }}
      alt="Macalania temple"
      />
      <p>Aeon: Shiva</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Shiva.jpg"
      height={300}
      width={284}
      style={{
        margin: "auto",
      }}
      alt="Shiva"
      /></Link>
      <hr />
      <h3>Bevelle Temple</h3>
      <Image 
      src="/images/Bevelle_Temple.png"
      height={300}
      width={425}
      style={{
        margin: "auto",
      }}
      alt="Bevelle"
      />
      <p>Aeon: Bahamut</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Bahamut.jpg"
      height={300}
      width={285}
      style={{
        margin: "auto",
      }}
      alt="Bahamut"
      /></Link>
      <hr />
      <h3>Remiem Temple</h3>
      <Image 
      src="/images/Remiem_Temple.png"
      height={300}
      width={533}
      style={{
        margin: "auto",
      }}
      alt="Remiem Temple"
      />
      <p>Aeon: Magus Sisters</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Magus_Sisters.jpeg"
      height={300}
      width={320}
      style={{
        margin: "auto",
      }}
      alt="Magus Sisters"
      /></Link>
      <hr />
      <h3>Baaj Temple</h3>
      <Image 
      src="/images/Yevon-Baaj.jpg"
      height={300}
      width={399}
      style={{
        margin: "auto",
      }}
      alt="Baaj Temple"
      />
      <p>Anima is the second of three option Aeons that you can obtain within Final Fantasy X. Anima can be obtained by traveling to Baaj Temple, one of the optional areas that you can explore once you reach the end of the game. You need to travel to Baaj Temple and unlock the Chamber of the Fayth at the back of the temple in order to obtain Anima.</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Anima.jpeg"
      height={300}
      width={268}
      style={{
        margin: "auto",
      }}
      alt="Anima"
      /></Link>
      <hr />
      <h3>Cavern of the Stolen Fayth</h3>
      <Image 
      src="/images/Cavern_of_Stolen_Fayth.webp"
      height={300}
      width={412}
      style={{
        margin: "auto",
      }}
      alt="Stolen Fayth"
      />
      <p>Aeon: Yojimbo</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Yojimbo.jpeg"
      height={300}
      width={343}
      style={{
        margin: "auto",
      }}
      alt="Yojimbo"
      /></Link>
      <hr />
      <h3>Zanarkand Dome</h3>
      <Image 
      src="/images/Zanarkand_Dome.webp"
      height={300}
      width={253}
      style={{
        margin: "auto",
      }}
      alt="Zanarkand Dome"
      />
      <p>Aeon: Lord Zaon (Power lost)</p>
      <Link href={`/aeons/`}><Image 
      src="/images/Lord_Zaon_Aeon.jpg"
      height={300}
      width={429}
      style={{
        margin: "auto",
      }}
      alt="Anima"
      /></Link>
      <hr />
    </Layout>
  );
}
