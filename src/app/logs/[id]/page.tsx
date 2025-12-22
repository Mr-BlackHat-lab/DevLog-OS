import '@/styles/page.css'
import '@/styles/form.css'
import LogEditForm from '@/components/LogEditForm'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function getLogs(id: string) {
    const res = await fetch(`${baseUrl}/api/logs/${id}`);
    return res.json();
}
export default async function EditLogPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    const log = await getLogs(id);
    return(
        <main className='page'>
            <h1>Edit Log</h1>
            <LogEditForm log={log} />
        </main>
    )
}