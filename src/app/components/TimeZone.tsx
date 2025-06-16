"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function getNYCTimeString() {
    const now = new Date();
    // New York is always America/New_York
    return now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/New_York",
    });
}

export default function TimeZone() {
    const [time, setTime] = useState(getNYCTimeString());
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getNYCTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const isLight = resolvedTheme === 'light';
    return (
        <div
            className={`fixed z-50 bottom-6 right-6 font-mono px-5 py-3 rounded-xl shadow-xl border select-none transition-all hover:scale-105 hidden md:block ${isLight ? 'bg-white/90 text-gray-900 border-gray-300 hover:bg-blue-50' : 'bg-gray-900/90 text-white border-gray-700 hover:bg-gray-800/90'}`}
            title="I leave this here so you know when I'm up! 😅"
            style={{ userSelect: "none" }}
        >
            <span className="text-xs text-gray-400 block mb-1 tracking-widest">MY TIMEZONE (ET)</span>
            <span className="text-2xl tabular-nums tracking-wider" style={{ letterSpacing: "0.08em" }}>{time}</span>
        </div>
    );
} 