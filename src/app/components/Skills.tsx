"use client";
import { useTheme } from "next-themes";

interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';
    return (
        <div id="skills" className={`rounded-2xl p-6 md:p-8 border ${isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'} transition-colors`}>
            <h2 className={`font-mono text-3xl md:text-4xl font-bold mb-6 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                / Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                    <div key={i} className={`rounded px-4 py-2 font-mono text-sm border ${isLight ? 'bg-gray-50 border-gray-200 text-gray-800' : 'bg-gray-800 border-gray-700 text-gray-100'}`}>{skill}</div>
                ))}
            </div>
        </div>
    );
} 