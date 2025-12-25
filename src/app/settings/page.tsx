import { redirect } from "next/navigation";
import SignOutButton from "@/components/auth/SignOutButton";
import { getCurrentUser } from "@/lib/auth.utils";
import "@/styles/page.css";
import "@/styles/settings.css";
import "@/styles/components.css";

export default async function SettingsPage() {
    const user = await getCurrentUser();
    if (!user) {
        redirect("/login");
    }

    return (
        <main className="page settings-page">
            <div className="page-header">
                <h1>User Settings</h1>
                <p className="muted">Manage your account preferences.</p>
            </div>

            <section className="settings-card">
                <div className="settings-row">
                    <div className="settings-row-header">
                        <label>Display name</label>
                        <a href="/settings/edit-profile" className="edit-link-small">
                            ✏️ Edit
                        </a>
                    </div>
                    <p className="settings-value">{user.name || "Not set"}</p>
                </div>
            </section>

            <section className="settings-card">
                <div className="settings-row">
                    <label>Account</label>
                    <SignOutButton />
                </div>
            </section>
        </main>
    );
}
