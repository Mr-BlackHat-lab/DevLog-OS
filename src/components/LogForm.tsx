"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LogForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mood, setMood] = useState("meh");
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/logs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content, mood }),
        });

        if (!res.ok) {
            setLoading(false);
            return;
        }

        router.refresh();

        setTitle("");
        setContent("");
        setMood("meh");
        setLoading(false);


    }
    return (
        <form onSubmit={handleSubmit} className="log-form" >
            <input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
            />

            <textarea
                placeholder="What did you do today"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
            />
            <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
            >
                <option value="meh" className="options-list">meh</option>
                <option value="good" className="options-list">good</option>
                <option value="bad" className="options-list">bad</option>
            </select>
            <button disabled={loading || !title || !content}>
                {loading ? "Saving..." : "Add Log"}
            </button>
        </form>
    )
}