import { Navbar, Link, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import CultureTooltip from "./cultureTooltip";

export default function Nav() {
  const collapseItems = [
    {
      name: "Characters",
      href: "/characters",
    },
    {
      name: "Culture",
      href: "/culture",
    },
    {
      name: "Locations",
      href: "/locations",
    },
    {
      name: "Weapons",
      href: "/weapons",
    },
    {
      name: "Walkthrough",
      href: "/walkthrough",
    },
  ];
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Link href="/" block color="secondary">
          <Image
            priority
            src="/images/logo.jpg"
            style={{
              borderRadius: "5px",
              marginLeft: 12,
            }}
            height={30}
            width={46}
            alt="FFX Logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        variant="highlight-rounded"
        hideIn="xs"
      >
        <Navbar.Link href="/characters">Characters</Navbar.Link>
        <Tooltip content={<CultureTooltip />} placement="bottom">
          <Navbar.Link href="/culture">Culture</Navbar.Link>
        </Tooltip>
        <Navbar.Link href="/locations">Locations</Navbar.Link>
        <Navbar.Link href="/weapons">Weapons</Navbar.Link>
        <Navbar.Link href="/walkthrough">Walkthrough</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="/catalogue">
          Catalogue
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
