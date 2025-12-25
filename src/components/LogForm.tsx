"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"
import { MOOD_OPTIONS } from "@/config/constants";

export default function LogForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mood, setMood] = useState(MOOD_OPTIONS[0]?.value ?? "productive");
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
        setMood(MOOD_OPTIONS[0]?.value ?? "productive");
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
                {MOOD_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value} className="options-list">
                        {option.label}
                    </option>
                ))}
            </select>
            <button disabled={loading || !title || !content}>
                {loading ? "Saving..." : "Add Log"}
            </button>
        </form>
    )
}