import { SignInButton } from "@/components/auth";
import { getCurrentUser } from "@/lib/auth.utils";
import { redirect } from "next/navigation";
import '@/styles/page.css';

export default async function LoginPage() {
  // Redirect if already logged in
  const user = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="page">
      <div className="login-container">
        <h1>Welcome to DevLog OS</h1>
        <p className="login-description">
          Track your development journey, document your progress, and manage your projects.
        </p>
        <div className="login-actions">
          <SignInButton />
        </div>
      </div>
    </main>
  );
}
