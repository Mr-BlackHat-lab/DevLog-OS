import LogForm from '@/components/LogForm';

import '@/styles/form.css'
import '@/styles/page.css';
import '@/styles/logs.css';
import '@/styles/markdown.css'

// import of markdown concept
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Content } from 'next/font/google';


async function getLogs() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/logs`);

    if (!res.ok) {
        throw new Error(`Failed to fetch logs: ${res.status}`);
    }

    return res.json();
}


export default async function LogsPage() {

    const logs = await getLogs();

    return (
        <main className="page">
            <h1>Dev Logs</h1>

            <LogForm/>
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
                        <div className="log-content markdown">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                            >
                                {log.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}