import { signInWithGitHub } from "@/actions/auth.actions";

export default function SignInButton() {
    return (
        <form action={signInWithGitHub}>
            <button
                type="submit"
                className="auth-button sign-in"
            >
                Sign in with GitHub
            </button>
        </form>
    );
}
