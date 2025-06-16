export interface EducationItem {
    school: string;
    degree: string;
    field: string;
    period: string;
    description?: string;
}

export const education: EducationItem[] = [
    {
        school: "University of New Haven",
        degree: "Master of Science",
        field: "Computer Science",
        period: "2024 - 2026",
        description: "Expected graduation in May 2026."
    },
    {
        school: "Leeds Beckett University",
        degree: "Bachelor of Science",
        field: "Computing",
        period: "2020 - 2023",
        description: "Graduated with a First Class Honours."
    }
]; 