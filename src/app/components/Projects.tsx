"use client";
import { useTheme } from "next-themes";
import { ExternalLink } from "lucide-react";

interface ProjectItem {
    title: string;
    description: string;
    tech: string[];
    status: 'In Progress' | 'Completed';
    links?: {
        name: string;
        url: string;
    }[];
}

interface ProjectsProps {
    projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';
    return (
        <div id="projects" className={`rounded-2xl p-6 md:p-8 border ${isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'} transition-colors`}>
            <h2 className={`font-mono text-3xl md:text-4xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                / Projects
            </h2>
            <div className="grid gap-6">
                {projects.map((project, i) => (
                    <div key={i} className={`rounded-xl p-5 border font-mono transition-colors ${isLight ? 'bg-gray-50 border-gray-200 text-gray-800' : 'bg-gray-800 border-gray-700 text-gray-100'}`}>
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                                <span className={`font-bold block truncate ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>{project.title}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full border ml-2 shrink-0 ${project.status === 'Completed' ? (isLight ? 'bg-green-100 text-green-700 border-green-200' : 'bg-green-900/30 text-green-300 border-green-700') : (isLight ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-yellow-900/30 text-yellow-300 border-yellow-700')}`}>{project.status}</span>
                        </div>
                        <p className={`text-sm mb-2 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tech.map((t: string) => (
                                <span key={t} className={`px-3 py-1 rounded-full text-xs border font-mono ${isLight ? 'bg-white border-gray-200 text-gray-700' : 'bg-gray-900 border-gray-700 text-gray-300'}`}>{t}</span>
                            ))}
                        </div>
                        {project.links && project.links.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                {project.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${isLight
                                            ? 'text-blue-600 hover:text-blue-800'
                                            : 'text-blue-400 hover:text-blue-300'
                                            }`}
                                    >
                                        {link.name}
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
} 