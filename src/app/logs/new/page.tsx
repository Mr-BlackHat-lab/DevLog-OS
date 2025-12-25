import LogForm from "@/components/LogForm";
import "@/styles/form.css";
import "@/styles/page.css";
import "@/styles/logs.css";

export default function NewLogPage() {
    return (
        <main className="page">
            <div className="page-header">
                <h1>Add New Log</h1>
                <a href="/logs" className="add-log-link">← Back to logs</a>
            </div>
            <LogForm />
        </main>
    );
}
