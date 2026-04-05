import Link from "next/link";
import NavMenu from "./NavMenu";
import { IconRocket } from "@tabler/icons-react";

export default function NavBar() {
  return (
    <header className="py-2 px-4 h-24 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
      <Link
        href={"/"}
        className="font-semibold italic inline-flex gap-1 items-center"
      >
        <IconRocket color="lab(64.4125 63.0291 19.2068)" />
        elijahcea
      </Link>
      <NavMenu />
    </header>
  );
}
