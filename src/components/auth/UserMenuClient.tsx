"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

interface UserMenuClientProps {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}

export default function UserMenuClient({ user }: UserMenuClientProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="user-menu" ref={menuRef}>
            <button
                className="user-menu-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {user.image && (
                    <img
                        src={user.image}
                        alt={user.name || "User"}
                        className="user-avatar"
                    />
                )}
            </button>

            {isOpen && (
                <div className="user-dropdown">
                    <div className="dropdown-header">
                        <div className="dropdown-user-info">
                            {user.image && (
                                <img
                                    src={user.image}
                                    alt={user.name || "User"}
                                    className="dropdown-avatar"
                                />
                            )}
                            <div className="dropdown-text">
                                <p className="dropdown-name">{user.name || "User"}</p>
                                <p className="dropdown-email">{user.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className="dropdown-links">
                        <Link href="/settings" className="dropdown-link" onClick={() => setIsOpen(false)}>
                            <span>⚙️</span> Settings
                        </Link>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className="dropdown-footer">
                        <SignOutButton />
                    </div>
                </div>
            )}
        </div>
    );
}
