export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export const experiences: ExperienceItem[] = [
    {
        role: "Organizing Committee Member, University of New Haven",
        company: "Hult Prize Foundation",
        period: "Nov 2024 - Feb 2025",
        description: "Helped organize and launch the first-ever Hult Prize event at the University of New Haven.",
        technologies: ["Event Planning", "Team Management", "Public Speaking", "Community Engagement"]
    },
    {
        role: "Software Engineer",
        company: "Versity Tech",
        period: "Jan 2024 - Jun 2024",
        description: "Developed full-stack applications and deployment pipelines for clients across various industries.",
        technologies: ["React", "Node.js", "Python", "TypeScript", "AWS", "Lambda", "Docker", "CI/CD"]
    },
    {
        role: "Software Engineer",
        company: "Danphe Software Labs",
        period: "Jul 2023 - Jul 2024",
        description: "Built web and mobile applications and learned foundational software development skills in an agile environment.",
        technologies: ["Ruby on Rails", "React", "React Native", "TypeScript", "PostgreSQL", "Git", "Agile"]
    }
]; 