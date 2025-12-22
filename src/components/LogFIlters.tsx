"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function LogFilters() {
    const router = useRouter();
    const searchParmas = useSearchParams();

    const [q, setQ] = useState(searchParmas.get('q') || "");
    const [mood, setMood] = useState(searchParmas.get('mood') || "all");

    function applyFilters() {
        const params = new URLSearchParams();

        if (q) params.set("q", q);
        if (mood !== "all") params.set("mood", mood);

        router.push(`/logs?${params.toString()}`);
    }
    return (
        <div className="log-filters">
            <input
                placeholder="Search log..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            <select value={mood} onChange={(e) => setMood(e.target.value)} >
                <option value="all">all</option>
                <option value="good">good</option>
                <option value="meh">meh</option>
                <option value="bad">bad</option>
            </select>
            <button onClick={applyFilters}>Apply</button>
        </div>
    )
}