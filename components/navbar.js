import { Navbar, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Link href="/">
          <Image
            priority
            src="/images/logo.jpg"
            style={{
              borderRadius: "5px",
            }}
            height={30}
            width={46}
            alt="FFX Logo"
          />
        </Link>
      </Navbar.Brand>

      <Navbar.Content enableCursorHighlight>
        <Navbar.Link href={`/characters/`}>Characters</Navbar.Link>
        <Navbar.Link href={`/culture/`}>Culture</Navbar.Link>
        <Navbar.Link href={`/locations/`}>Locations</Navbar.Link>
        <Navbar.Link href={`/weapons/`}>Weapons</Navbar.Link>
        <Navbar.Link href={`/walkthrough/`}>Walkthrough</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href={`/catalogue/`}>
          Index
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}
