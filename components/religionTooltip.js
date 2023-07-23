import { Link, Spacer } from "@nextui-org/react";

export default function ReligionToolTip() {
  return (
    <>
      <Link css={{ color: "black" }} href={`/maesters/`}>
        Maesters
      </Link>
      <Spacer y={1} />
      <Link css={{ color: "black" }} href={`/summoners/`}>
        Summoners
      </Link>
      <Spacer y={1} />
      <Link css={{ color: "black" }} href={`/aeons/`}>
        Aeons
      </Link>
    </>
  );
}
