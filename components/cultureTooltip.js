import { Link, Spacer } from "@nextui-org/react";

export default function CultureTooltip() {
  return (
    <>
      <Link css={{ color: "black" }} href={`/races/`}>
        Races
      </Link>
      <Spacer y={1} />
      <Link css={{ color: "black" }} href={`/scripts/`}>
        Scripts
      </Link>
      <Spacer y={1} />
      <Link css={{ color: "black" }} href={`/religion/`}>
        Religion
      </Link>
      <Spacer y={1} />
      <Link css={{ color: "black" }} href={`/military/`}>
        Military
      </Link>
      <Spacer y={1} />
      <Link css={{ color: "black" }} href={`/technology/`}>
        Technology
      </Link>
      <Spacer y={1} />
      <Link css={{ color: "black" }} href={`/blitzball/`}>
        Blitzball
      </Link>
    </>
  );
}
