"use client";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NotFound() {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === "light";

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 font-mono transition-colors overflow-hidden" style={{ background: isLight ? '#f8fafc' : '#0a192f' }}>
            <div className={`relative z-10 rounded-2xl border shadow-xl px-8 py-12 max-w-lg w-full text-center transition-colors ${isLight ? "bg-white/80 border-gray-200 text-gray-900" : "bg-gray-900/80 border-gray-700 text-white"}`} style={{ backdropFilter: 'blur(2px)' }}>
                <div className="flex justify-center mb-6 animate-fade-float">
                    <img
                        src="https://images.unsplash.com/photo-1614726365952-510103b1bbb4?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Curiosity rover, NASA/Unsplash"
                        className="rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 object-cover w-36 h-36 sm:w-52 sm:h-52 mb-2 opacity-90"
                        style={{ filter: 'drop-shadow(0 4px 24px rgba(80,120,255,0.18)) blur(0.5px)' }}
                    />
                </div>
                <h1 className="text-6xl font-black mb-2 tracking-tight">404</h1>
                <p className="mb-8 text-base md:text-lg text-gray-500 dark:text-gray-400 italic">
                    Somewhere between questions and answers, wonder drifts —
                    quiet, tireless, and beautifully lost.
                </p>
                <Link href="/">
                    <span className={`inline-block px-6 py-3 rounded-xl font-mono font-semibold shadow transition-all hover:scale-105 border ${isLight ? "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100" : "bg-gray-800 text-blue-400 border-gray-700 hover:bg-blue-900/40"}`}>Go Home</span>
                </Link>
            </div>
            <style jsx>{`
                .animate-fade-float {
                    animation: fadeFloat 3.5s ease-in-out infinite;
                }
                @keyframes fadeFloat {
                    0%, 100% { opacity: 0.85; transform: translateY(0); }
                    50% { opacity: 1; transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
} 