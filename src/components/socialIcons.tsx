import Image from "next/image";
import fb from "../assets/social/fb.svg";
import linked from "../assets/social/in.svg";
import insta from "../assets/social/insta.svg";
import yt from "../assets/social/yt.svg";
import Link from "next/link";

export function SocialIcons() {
  return (
    <ul className="flex gap-4 md:w-32 items-center">
      <li className="w-4">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image alt="facebook icon" src={fb} />
        </Link>
      </li>
      <li className="w-4 ">
        <Link href="https://www.linkedin.com/" target="_blank">
          <Image alt="linkedin icon" src={linked} />
        </Link>
      </li>
      <li className="w-4 ">
        <Link href="https://www.instagram.com/" target="_blank">
          <Image alt="instagram icon" src={insta} />
        </Link>
      </li>
      <li className="w-6">
        <Link href="https://www.youtube.com/" target="_blank">
          <Image alt="youtube icon" src={yt} />
        </Link>
      </li>
    </ul>
  );
}
