"use client";
import { useTheme } from "next-themes";
import { experiences } from "../content/experience";

export default function Experience() {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';

    return (
        <div id="experience" className={`rounded-2xl p-6 md:p-8 border ${isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'} transition-colors`}>
            <h2 className={`font-mono text-3xl md:text-4xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                / Experience
            </h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className={`rounded p-6 font-mono border ${isLight ? 'bg-gray-50 border-gray-200 text-gray-800' : 'bg-gray-800 border-gray-700 text-gray-100'}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <h3 className={`font-semibold font-mono ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>{exp.role}</h3>
                            <span className={`text-sm font-mono ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{exp.period}</span>
                        </div>
                        <p className={`font-medium mb-2 font-mono ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>{exp.company}</p>
                        <p className={`text-sm mb-4 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className={`text-xs px-2 py-1 rounded-full font-medium ${isLight
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                        : 'bg-blue-900/30 text-blue-400 border border-blue-800'
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 