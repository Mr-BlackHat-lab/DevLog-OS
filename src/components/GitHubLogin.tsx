import { signInWithGitHub } from "@/actions/auth.actions";

/**
 * @deprecated Use SignInButton from @/components/auth instead
 */
export default function GitHubLogin() {
    return (
        <form action={signInWithGitHub}>
            <button type="submit">Sign in with GitHub</button>
        </form>
    );
}
