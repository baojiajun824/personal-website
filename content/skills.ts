export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & API",
    skills: [
      "Java",
      "Python",
      "Node.js",
      "C#",
      "REST APIs",
      "GraphQL",
      "SOAP APIs",
    ],
  },
  {
    title: "Data & Infrastructure",
    skills: [
      "SQL",
      "Elasticsearch",
      "Kafka",
      "SSIS",
      "Pantaho",
      "Trino",
      "Spark",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, RDS, S3)",
      "Vercel",
      "Git",
      "Automated Testing",
    ],
  },
  {
    title: "Leadership & Methodology",
    skills: [
      "Scrum Master",
      "Agile",
      "Mentoring",
      "Team Performance Tracking & Improvement",
    ],
  },
];

