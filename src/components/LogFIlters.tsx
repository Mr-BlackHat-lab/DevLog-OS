"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition, useEffect } from "react"

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
        return()=> clearTimeout(timeout);
    }, [q, mood]);
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
            {isPending && <span className="loading">Filtering...</span>}
        </div>
    )
}