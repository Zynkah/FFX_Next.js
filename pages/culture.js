import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Culture(){
    return (
        <Layout>
            <h1>Culture in Spira</h1>
            <Link href={`/races/`}> Races |</Link>
            <Link href={`/scripts/`}> Scripts |</Link>
            <Link href={`/blitzball/`}> Blitzball </Link>
            <hr />
            <p>Spira has a variety of different races and languages thoughout its lands. Each region has its own people, with their own culture. Blitzball is a shared sport most regions have, and brings them together. The fear of Sin and its destruction is another thing they have in common. Although they may have differnt ways to achieve the Calm, they all yearn for peace in the end.</p>
        </Layout>    
    )
}