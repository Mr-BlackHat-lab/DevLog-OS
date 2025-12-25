"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition, useEffect } from "react"
import { MOOD_OPTIONS } from "@/config/constants"

export default function LogFilters() {
    const router = useRouter();
    const searchParmas = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const [q, setQ] = useState(searchParmas.get('q') || "");
    const [mood, setMood] = useState(searchParmas.get('mood') || "all");

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams();

            if (q) params.set("q", q);
            if (mood !== "all") params.set("mood", mood);

            startTransition(() => {
                router.replace(`/logs/?${params.toString()}`)
            });
        }, 300);
        return () => clearTimeout(timeout);
    }, [q, mood]);

    return (
        <div className="log-filters">
            <div className="filter-search">
                <input
                    className="filter-input"
                    placeholder="🔍 Search logs..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>

            <div className="filter-mood">
                <select
                    className="filter-select"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                >
                    <option value="all">All Moods</option>
                    {MOOD_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {isPending && <span className="filter-loading">⏳ Filtering...</span>}
        </div>
    )
}