import { getCurrentUser } from "@/lib/auth.utils";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

export default async function UserMenu() {
    const user = await getCurrentUser();

    if (!user) {
        return (
            <Link href="/login" className="nav-link">
                Login
            </Link>
        );
    }

    return (
        <div className="user-menu">
            <div className="user-info">
                {user.image && (
                    <img
                        src={user.image}
                        alt={user.name || "User"}
                        className="user-avatar"
                    />
                )}
                <span className="user-name">{user.name || user.email}</span>
            </div>
            <SignOutButton />
        </div>
    );
}
