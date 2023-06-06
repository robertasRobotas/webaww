import Image from "next/image";
import ai from "../assets/social/ai.svg";
import react from "../assets/social/react.svg";
import web from "../assets/social/website-icon.svg";
import Link from "next/link";

export function ServiceIcons() {
  return (
    <ul className="flex gap-4 md:w-32 items-center">
      <li className="w-6">
        <Link href="/ai">
          <Image alt="ai icon" src={ai} />
        </Link>
      </li>
      <li className="w-6 ">
        <Link href="/react">
          <Image alt="react icon" src={react} />
        </Link>
      </li>
      <li className="w-6">
        <Link href="/webpages">
          <Image alt="youtube icon" src={web} />
        </Link>
      </li>
    </ul>
  );
}
