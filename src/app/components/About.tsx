"use client";
import { useTheme } from "next-themes";

interface AboutProps {
    content: string[];
    photo?: string;
    photoAlt?: string;
}

export default function About({ content, photo, photoAlt = "Profile photo" }: AboutProps) {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';
    return (
        <div id="about" className={`rounded-2xl p-6 md:p-8 border ${isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'} transition-colors`}>
            <h2 className={`font-mono text-3xl md:text-4xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                / About
            </h2>
            <div className="lg:flex lg:gap-12 lg:items-start">
                <div className={`font-mono space-y-4 leading-relaxed lg:flex-1 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                    {content.map((paragraph, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    <div className="pt-4">
                        <a
                            href="/resume_rohan_poudel.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 font-mono text-sm transition-colors duration-200 border-b ${isLight ? 'text-blue-700 border-blue-300 hover:text-blue-900 hover:border-blue-900' : 'text-gray-600 dark:text-gray-400 hover:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-200'}`}
                        >
                            <span>View Resume</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
                {photo && (
                    <div className="mt-8 lg:mt-0 lg:w-64 lg:flex-shrink-0">
                        <div className="relative">
                            <img
                                src={photo}
                                alt={photoAlt}
                                className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl mx-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 