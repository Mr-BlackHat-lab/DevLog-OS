import LogForm from '@/components/LogForm';
import LogFilters from '@/components/LogFIlters';
import Pagination from '@/components/Pagination';

// styles css
import '@/styles/form.css'
import '@/styles/page.css';
import '@/styles/logs.css';
import '@/styles/mood.css';
import '@/styles/markdown.css'

// import of markdown concept
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { revalidatePath } from 'next/cache';
import { MOOD_OPTIONS } from '@/config/constants';


// making it globall so it can be used in delete
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function getLogs(searchParams: {
    q?: string;
    mood?: string;
    page?: string;
}) {
    const params = new URLSearchParams();
    if (searchParams.q) params.set("q", searchParams.q);
    if (searchParams.mood) params.set("mood", searchParams.mood);
    if (searchParams.page) params.set("page", searchParams.page);

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
        page?: string;
    }>
}) {
    const params = await searchParams;
    const data = await getLogs(params);

    const { logs, page, totalPages } = data;

    return (
        <main className="page">
            <h1>Dev Logs</h1>
            <div className="log-add">
                <a href="/logs/new" className="add-log-link">+ Add Log</a>
            </div>
            {logs.length === 0 && (
                <p>No log yet. Start documenting your chaso</p>
            )}

            <div className="log-list">
                {/* log filter here */}
                <LogFilters />
                {logs.map((log: any) => (
                    <div key={log._id} className='log-card' >
                        <div className="log-header">
                            <h3>{log.title}</h3>
                            <span className={`mood-badge ${log.mood}`}>
                                {MOOD_OPTIONS.find(m => m.value === log.mood)?.label || log.mood}
                            </span>
                        </div>
                        <div className="log-meta">
                            {new Date(log.createdAt).toLocaleString()}
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
                <Pagination page={page} totalPages={totalPages} />
            </div>
        </main>)
}