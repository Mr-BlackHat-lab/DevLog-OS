"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function Pagination({
    page,
    totalPages,
}: {
    page: number;
    totalPages: number;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function goToPage(p: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(p));
        router.push(`/logs?${params.toString()}`);
    }

    return (
        <div className="pagination">
            <button disabled={page <= 1} onClick={() => goToPage(page - 1)}>
                Prev
            </button>

            <span>
                {page} / {totalPages}
            </span>

            <button
                disabled={page >= totalPages}
                onClick={() => goToPage(page + 1)}
            >
                Next
            </button>
        </div>
    );
}