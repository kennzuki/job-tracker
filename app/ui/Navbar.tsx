import Link from "next/link";
import { BiBriefcase } from "react-icons/bi";

const Navbar = () => {
    return ( 
        <div className="flex justify-between">
            <Link href='/' className="text-3xl text-pink-500 uppercase font-bold flex place-items-center gap-2">KenkiTracker<BiBriefcase /></Link>
            <nav className="flex justify-evenly gap-4 place-items-center">
                <Link href='/sign-in'className="text-xl capitalize">log in</Link>
                <Link href='/sign-up'><button className="btn-primary font-bold">start</button></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;