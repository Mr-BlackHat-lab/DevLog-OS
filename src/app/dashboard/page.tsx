import '@/styles/page.css';
import { getCurrentUser } from "@/lib/auth.utils";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <main className="page">
            <div className="dashboard-header">
                <h1>Welcome back, {user.name?.split(' ')[0] || 'Developer'}!</h1>
                <p>Your stats. Your Streaks. Your Reality</p>
            </div>

            <div className="dashboard-content">
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Total Logs</h3>
                        <p className="stat-value">0</p>
                    </div>
                    <div className="stat-card">
                        <h3>Active Projects</h3>
                        <p className="stat-value">0</p>
                    </div>
                    <div className="stat-card">
                        <h3>Current Streak</h3>
                        <p className="stat-value">0 days</p>
                    </div>
                    <div className="stat-card">
                        <h3>This Week</h3>
                        <p className="stat-value">0 logs</p>
                    </div>
                </div>
            </div>
        </main>
    );
}