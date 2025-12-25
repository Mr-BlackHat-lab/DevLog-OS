import { getCurrentUser } from "@/lib/auth.utils";
import UserMenuClient from "@/components/auth/UserMenuClient";
import Link from "next/link";

export default async function UserMenu() {
    const user = await getCurrentUser();

    if (!user) {
        return (
            <Link href="/login" className="nav-link login-btn">
                Login
            </Link>
        );
    }

    return <UserMenuClient user={user} />;
}
