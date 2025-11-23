export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  bullets: string[];
}

export const experiences: WorkExperience[] = [
  {
    id: 1,
    title: "Software Development Engineer III",
    company: "Workday",
    location: "Vancouver, BC, Canada",
    startDate: "02/2023",
    endDate: "Present",
    bullets: [
      "Designed and Led fullstack features - including UI (TypeScript & React), web services (REST & GraphQL & SOAP), and integrations (Java) with comprehensive automated test coverage.",
      "Served as Scrum Master, leading ceremonies, monitoring epic and feature progress, managing sprint priorities and team capacity, and improving overall team performance and efficiency.",
      "Participated in on-call rotations, actively triaging and resolving critical customer-reported issues.",
      "Mentored 2 junior developers and conducted knowledge-sharing sessions across the organization.",
    ],
  },
  {
    id: 2,
    title: "Associate Data Engineer",
    company: "Willow Laboratories, Inc. (formerly Cercacor Laboratories, Inc.)",
    location: "Vancouver, BC, Canada",
    startDate: "03/2022",
    endDate: "02/2023",
    bullets: [
      "Designed, developed, and optimized REST APIs in Java for mobile and web applications.",
      "Implemented automated ETL data transformation pipelines from diverse data sources.",
      "Improved real-time data processing with Kafka and reduced query latency from seconds to milliseconds by integrating Elasticsearch.",
      "Mentored a junior data engineer and backend engineer, providing hands-on technical guidance.",
    ],
  },
  {
    id: 3,
    title: "Computational Biologist – Database Development",
    company: "BC Cancer",
    location: "Vancouver, BC, Canada",
    startDate: "10/2021",
    endDate: "03/2022",
    bullets: [
      "Contributed to the development and maintenance of data pipelines between production databases.",
      "Designed automation programs in Python for data validation and extraction processes.",
    ],
  },
  {
    id: 4,
    title: "Application Programmer Analyst",
    company: "CancerCare Manitoba",
    location: "Winnipeg, MB, Canada",
    startDate: "11/2019",
    endDate: "10/2021",
    bullets: [
      "Led design and development of a provincial cancer research platform, including warehouse architecture, ETL pipelines (SSIS), and deployment of open-source applications.",
      "Mentored and onboarded a junior developer, providing guidance that expanded team capacity.",
      "Supported and maintained two electronic data capture applications critical for research operations.",
    ],
  },
  {
    id: 5,
    title: "Programmer Analyst Co-op",
    company: "CancerCare Manitoba",
    location: "Winnipeg, MB, Canada",
    startDate: "01/2018",
    endDate: "08/2018",
    bullets: [
      "Built a full-stack electronic data capture web application, improving internal research workflows.",
    ],
  },
];

