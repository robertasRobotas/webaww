import Image from "next/image";
import linked from "../assets/social/in.svg";
import github from "../assets/social/github.svg";
import yt from "../assets/social/yt.svg";
import Link from "next/link";

export function SocialIcons() {
  return (
    <ul className="flex gap-4 md:w-full items-center justify-center">
      <li className="w-4">
        <Link href="https://github.com/robertasRobotas/" target="_blank">
          <Image alt="github icon" src={github} />
        </Link>
      </li>
      <li className="w-4 ">
        <Link href="https://www.linkedin.com/" target="_blank">
          <Image alt="linkedin icon" src={linked} />
        </Link>
      </li>
      <li className="w-5">
        <Link href="https://www.youtube.com/" target="_blank">
          <Image alt="youtube icon" src={yt} />
        </Link>
      </li>
    </ul>
  );
}
