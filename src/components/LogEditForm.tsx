"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function LogEditForm({ log }: any) {
    const [title, setTitle] = useState(log.title);
    const [content, setContent] = useState(log.content);
    const [mood, setMood] = useState(log.mood);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await fetch(`/api/logs/${log._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content, mood }),
        });

        router.push("/logs");
        router.refresh();
    }
    return (
        <form onSubmit={handleSubmit} className="log-form">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <select value={mood} onChange={(e) => setMood(e.target.value)} >
                <option value="good">Good</option>
                <option value="meh">meh</option>
                <option value="bad">bad</option>
            </select>
            <button>Save Changes</button>
        </form>
    );
}