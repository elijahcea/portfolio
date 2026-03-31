import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function NavBar() {
    return (
        <header className="p-4 flex items-center justify-between">
            <Link href={'/'}>Elijah Cea</Link>
            <Bars3Icon className="size-5" />
        </header>
    )
}