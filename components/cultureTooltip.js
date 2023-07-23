import { Link, Spacer, Tooltip } from "@nextui-org/react";
import ReligionToolTip from "./religionTooltip";

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
      <Tooltip content={<ReligionToolTip />} placement="right">
        <Link css={{ marginLeft: "10px", color: "black" }} href={`/religion/`}>
          Religion
        </Link>
      </Tooltip>
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
