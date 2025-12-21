import '@/styles/page.css'
import '@/styles/logs.css';

async function getLogs() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/logs`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch logs: ${res.status}`);
    }

    return res.json();
}


export default async function LogPage() {

    const logs = await getLogs();

    return (
        <main className="page">
            <h1>Dev Logs</h1>

            {logs.length === 0 && (
                <p>No log yet. Start documenting your chaso</p>
            )}
            <div className="log-list">
                {logs.map((log: any) => (
                    <div key={log._id} className='log-card' >
                        <h3>{log.title}</h3>
                        <div className="log-meta">
                            {new Date(log.createdAt).toLocaleString()}.{log.mood}
                        </div>
                        <div className="log-content">{log.content}</div>
                    </div>
                ))}
            </div>
        </main>
    )
}