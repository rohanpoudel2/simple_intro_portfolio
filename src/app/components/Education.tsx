"use client";
import { useTheme } from "next-themes";
import { education } from "../content/education";

export default function Education() {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';
    return (
        <div id="education" className={`rounded-2xl p-6 md:p-8 border ${isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'} transition-colors`}>
            <h2 className={`font-mono text-3xl md:text-4xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                / Education
            </h2>
            <div className="space-y-6">
                {education.map((edu, idx) => (
                    <div key={idx} className={`rounded p-6 font-mono border ${isLight ? 'bg-gray-50 border-gray-200 text-gray-800' : 'bg-gray-800 border-gray-700 text-gray-100'}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <h3 className={`font-semibold font-mono text-lg ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>{edu.school}</h3>
                            <span className={`text-sm font-mono ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{edu.period}</span>
                        </div>
                        <div className="mb-1">
                            <span className="font-bold">{edu.degree}</span>{' '}
                            <span className="text-sm">in {edu.field}</span>
                        </div>
                        {edu.description && <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{edu.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
} 