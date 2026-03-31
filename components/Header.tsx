import Link from "next/link";
import NavMenu from "./NavMenu";

export default function NavBar() {
    return (
        <header className="p-4 flex items-center justify-between">
            <Link href={'/'}>Elijah Cea</Link>
            <nav>
                <NavMenu />
            </nav>
        </header>
    )
}