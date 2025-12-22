import Link from "next/link";
import '@/styles/navbar.css';
export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">DevLog OS</div>

            <ul className="navbar-link">
                <li><Link href="/" >Home</Link></li>
                <li><Link href="/logs" >Logs</Link></li>
                <li><Link href="/projects" >Projects</Link></li>
                <li><Link href="/dashboard" >Dashboard</Link></li>
            </ul>

        </nav>
    )
}