import Image from "next/image";
import fb from "../assets/social/fb.svg";
import linked from "../assets/social/in.svg";
import insta from "../assets/social/insta.svg";
import yt from "../assets/social/yt.svg";

export function SocialIcons() {
  return (
    <ul className="flex gap-4 md:w-32 items-center">
      <li className="w-4">
        <a>
          <Image alt="facebook icon" src={fb} />
        </a>
      </li>
      <li className="w-4 ">
        <a>
          <Image alt="facebook icon" src={linked} />
        </a>
      </li>
      <li className="w-4 ">
        <a>
          <Image alt="facebook icon" src={insta} />
        </a>
      </li>
      <li className="w-6">
        <a>
          <Image alt="facebook icon" src={yt} />
        </a>
      </li>
    </ul>
  );
}
