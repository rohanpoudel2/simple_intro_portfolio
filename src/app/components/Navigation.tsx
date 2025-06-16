"use client";
import { useTheme } from "next-themes";
import { BookText, Briefcase, Wrench, FileText, Mail, GraduationCap } from 'lucide-react';
import React from 'react';

interface NavigationLink {
    href: string;
    label: string;
}

interface NavigationProps {
    links: NavigationLink[];
}

const navIcons: Record<string, React.ReactNode> = {
    About: <BookText className="w-5 h-5" />,
    Education: <GraduationCap className="w-5 h-5" />,
    Experience: <Briefcase className="w-5 h-5" />,
    Skills: <Wrench className="w-5 h-5" />,
    Projects: <FileText className="w-5 h-5" />,
    Contact: <Mail className="w-5 h-5" />,
};

export default function Navigation({ links }: NavigationProps) {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';
    return (
        <div className="sticky top-8 self-start">
            <div className={`space-y-4 p-4 rounded border transition-colors ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`}>
                <h3 className={`font-mono font-semibold mb-4 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>Navigation</h3>
                <div className="space-y-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`font-mono font-medium block text-sm transition-colors flex items-center gap-2 rounded px-2 py-2 ${isLight ? 'text-blue-700 hover:bg-blue-50' : 'text-blue-400 hover:bg-gray-700'}`}
                        >
                            <span>{navIcons[link.label]}</span>
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
} 