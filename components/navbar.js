import { Navbar, Link, Dropdown } from "@nextui-org/react";
import Image from "next/image";

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
      name: "Equipment",
      href: "/equipment",
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
      <Navbar.Content enableCursorHighlight hideIn="xs">
        <Navbar.Link href="/characters">Characters</Navbar.Link>

        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button auto light ripple={false}>
              Culture
            </Dropdown.Button>
          </Navbar.Item>

          <Dropdown.Menu
            aria-label="Culture Menu"
            css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "70px",
              "& .nextui-dropdown-item": {
                py: "$4",
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                  w: "100%",
                  fontWeight: "$semibold",
                },
              },
            }}
          >
            <Dropdown.Item
              key="races"
              // as={Link} href={`/races/`}
              showFullDescription
              description="The variety of races that exist in the world. Includes Humanoids, Demi-Humans and Creatures."
            >
              <Link href="/races">Races</Link>
            </Dropdown.Item>

            <Dropdown.Item
              key="scripts"
              showFullDescription
              description="Details on the unique Scripts. Includes Sprian, Al Bhed and  Yevon scripts."
            >
              <Link href="/scripts">Scripts</Link>
            </Dropdown.Item>

            <Dropdown.Item
              key="Religion"
              showFullDescription
              description="Information on the Yevon religion. Includes Maesters, Summoners and Aeons."
            >
              <Link href="/religion">Religion</Link>
            </Dropdown.Item>

            <Dropdown.Item
              key="Military"
              showFullDescription
              description="Crusaders, Guardians, Warrior Monks, Crimson Squad and Chocobo Knights."
            >
              <Link href="/military">Military</Link>
            </Dropdown.Item>

            <Dropdown.Item
              key="Technology"
              showFullDescription
              description="Vehicles, Machina, Currency, Fire Arms and Hand Held items that can be used to take control of the world."
            >
              <Link href="/technology">Technology</Link>
            </Dropdown.Item>

            <Dropdown.Item
              key="/blitzball"
              showFullDescription
              description="The sport that unites everyone in Spira and helps the people forget about the never ending doom of Sin."
            >
              <Link href="/blitzball">Blitzball</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Navbar.Link href="/locations">Locations</Navbar.Link>
        <Navbar.Link href="/equipment">Equipment</Navbar.Link>
        <Navbar.Link href="/walkthrough">Walkthrough</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="/catalogue">
          Catalogue
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item.href}>
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
