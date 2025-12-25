import { signOutUser } from "@/actions/auth.actions";

export default function SignOutButton() {
    return (
        <form action={signOutUser}>
            <button
                type="submit"
                className="auth-button sign-out"
            >
                Sign out
            </button>
        </form>
    );
}
