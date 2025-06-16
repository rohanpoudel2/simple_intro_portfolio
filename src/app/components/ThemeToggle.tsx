"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;
    const isLight = resolvedTheme === 'light';
    return (
        <button
            className={`fixed top-6 right-6 z-50 ${isLight ? 'bg-gray-900/80' : 'bg-white/100'} border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors`}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark/light mode"
        >
            {isLight ? (
                <Moon className="w-6 h-6 text-white" />
            ) : (
                <Sun className="w-6 h-6 text-yellow-500" />
            )}
        </button>
    );
} 