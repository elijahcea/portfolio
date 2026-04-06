import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-4 mt-auto text-xs py-12 w-full">
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/elijahcea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/elijahcea/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin />
        </a>
        <a
          href="https://www.instagram.com/elijah_cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram />
        </a>
      </div>

      <div>
        © {year}{" "}
        <Link href="/">
          <span className="inline">elijahcea.com</span>{" "}
        </Link>
      </div>
    </footer>
  );
}
