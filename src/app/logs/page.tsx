import LogForm from '@/components/LogForm';
import LogFilters from '@/components/LogFIlters';

import '@/styles/form.css'
import '@/styles/page.css';
import '@/styles/logs.css';
import '@/styles/markdown.css'

// import of markdown concept
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { revalidatePath } from 'next/cache';


// making it globall so it can be used in delete
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function getLogs(searchParams: {
    q?: string;
    mood?: string;
}) {
    const params = new URLSearchParams();
    if (searchParams.q) params.set("q", searchParams.q);
    if (searchParams.mood) params.set("mood", searchParams.mood);

    const res = await fetch(`${baseUrl}/api/logs?${params.toString()}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch logs: ${res.status}`);
    }

    return res.json();
}


export default async function LogsPage({
    searchParams,
}: {
    searchParams: Promise<{
        q?: string;
        mood?: string;
    }>
}) {
    const params = await searchParams;
    const logs = await getLogs(params);

    return (
        <main className="page">
            <h1>Dev Logs</h1>
            {/* log form here  */}
            <LogForm />
            {logs.length === 0 && (
                <p>No log yet. Start documenting your chaso</p>
            )}

            <div className="log-list">
                {/* log filter here */}
                <LogFilters />
                {logs.map((log: any) => (
                    <div key={log._id} className='log-card' >
                        <h3>{log.title}</h3>
                        <div className="log-meta">
                            {new Date(log.createdAt).toLocaleString()}.{log.mood}
                        </div>
                        <div className="log-content markdown">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                            >
                                {log.content}
                            </ReactMarkdown>
                        </div>
                        <div className="log-actions">
                            <form action={async () => {
                                "use server";
                                await fetch(`${baseUrl}/api/logs`, {
                                    method: "DELETE",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ id: log._id })
                                });
                                revalidatePath("/logs")
                            }}>
                                <button className='delete-btn'>Delete</button>
                                <a href={`logs/${log._id}`} className='edit-link'>
                                    Edit
                                </a>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}