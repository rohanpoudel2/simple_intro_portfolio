"use client";
import { useTheme } from "next-themes";
import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

interface ContactLink {
    href: string;
    label: string;
}

interface ContactProps {
    description: string;
    links: ContactLink[];
}

const contactIcons: Record<string, React.ReactNode> = {
    Email: <Mail className="w-6 h-6" />,
    LinkedIn: <Linkedin className="w-6 h-6" />,
    GitHub: <Github className="w-6 h-6" />,
    Instagram: <Instagram className="w-6 h-6" />,
};

export default function Contact({ description, links }: ContactProps) {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';
    return (
        <div id="contact" className={`rounded-2xl p-6 md:p-8 border ${isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'} transition-colors`}>
            <h2 className={`font-mono text-3xl md:text-4xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                / Contact
            </h2>
            <div className="font-mono">
                <p className={`mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`flex flex-col items-center justify-center h-20 px-2 border rounded-lg bg-transparent transition-all duration-200 no-underline group ${isLight ? 'border-gray-200 hover:bg-gray-100 hover:border-blue-500 text-blue-700' : 'border-gray-700 hover:bg-gray-800 hover:border-blue-500 text-blue-400'}`}
                        >
                            <span className="mb-1 group-hover:scale-110 transition-transform">
                                {contactIcons[link.label]}
                            </span>
                            <span className="font-mono font-medium text-base leading-tight group-hover:underline">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
} 