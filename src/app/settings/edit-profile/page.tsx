import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth.utils";
import "@/styles/page.css";
import "@/styles/settings.css";
import "@/styles/form.css";

export default async function EditProfilePage() {
    const user = await getCurrentUser();
    if (!user) {
        redirect("/login");
    }

    return (
        <main className="page">
            <div className="settings-header">
                <a href="/settings" className="edit-link-small settings-back-button">
                    ← Back to settings
                </a>
                <h1>Edit Profile</h1>
            </div>

            <section className="settings-card">
                <form className="log-form">
                    <div className="settings-row">
                        <label htmlFor="displayName">Display name</label>
                        <input
                            id="displayName"
                            name="displayName"
                            type="text"
                            defaultValue={user.name || ""}
                            placeholder="Your display name"
                            required
                        />
                    </div>

                    <div className="settings-row">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={user.email || ""}
                            readOnly
                            disabled
                        />
                        <p className="settings-hint">Email cannot be changed.</p>
                    </div>

                    <button type="submit">Save Changes</button>
                </form>
            </section>
        </main>
    );
}
