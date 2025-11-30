/**
 * Comprehensive Resume Data for AI Agent
 * 
 * This file contains detailed, comprehensive resume information specifically for the AI agent.
 * It includes more detailed information than what's displayed on the website, allowing the AI
 * to provide thorough answers to recruiters and hiring managers.
 * 
 * Update this file with comprehensive details about your professional background.
 */

export interface ComprehensiveWorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  employmentType?: string; // e.g., "Full-time", "Contract", "Co-op"
  industry?: string;
  companyDescription?: string;
  detailedBullets: string[];
  keyAchievements?: string[];
  technologiesUsed?: string[];
  teamSize?: string;
  reportingTo?: string;
}

export interface ComprehensiveEducation {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  fieldOfStudy?: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
  thesis?: string;
}

export interface ComprehensiveProject {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  role?: string;
  duration?: string;
  teamSize?: string;
  keyFeatures?: string[];
  challenges?: string[];
  results?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ComprehensiveSkill {
  category: string;
  skills: string[];
  proficiency?: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  yearsOfExperience?: string;
  lastUsed?: string;
}

export interface ComprehensiveResumeData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    location: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    summary: string[];
    coreCompetencies: string[];
  };
  workExperience: ComprehensiveWorkExperience[];
  education: ComprehensiveEducation[];
  skills: ComprehensiveSkill[];
  projects: ComprehensiveProject[];
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    expiryDate?: string;
  }>;
  languages?: Array<{
    language: string;
    proficiency: string;
  }>;
  additionalInfo?: {
    publications?: string[];
    presentations?: string[];
    volunteerWork?: string[];
    awards?: string[];
  };
}

/**
 * Comprehensive resume data for AI agent
 * Add as much detail as possible to help the AI provide accurate and thorough answers
 */
export const comprehensiveResumeData: ComprehensiveResumeData = {
  personalInfo: {
    name: "Jiajun Bao",
    title: "Fullstack Developer",
    tagline: "Fullstack Developer with 6+ years of experience developing customer-facing applications and features that drive user engagement and business value",
    email: "baojiajun824@gmail.com",
    phone: "(204) 898-8335",
    location: "Vancouver, BC, Canada or Seattle, WA",
    linkedin: "https://www.linkedin.com/in/jiajun-bao",
    github: "https://github.com/baojiajun824",
    website: "https://www.jiajun-bao.com",
    summary: [
      "6+ years of software development experience developing customer-facing SaaS solutions including:",
      "• 4+ years focused on backend APIs, services, and data pipelines",
      "• 2+ years delivering end-to-end fullstack features with modern UI and API integration",
      "3+ years team leadership experience leading ceremonies, monitoring epic and feature progress, managing sprint priorities and team capacity, and improving overall team performance and efficiency.",
      "Mentored 5 junior engineers, accelerating onboarding and providing hands-on technical guidance.",
    ],
    coreCompetencies: [
      "Full-stack development (Frontend: React, TypeScript, Next.js, HTML, Tailwind CSS | Backend: Java, Python, Node.js, C#)",
      "REST, GraphQL, and SOAP API design and development",
      "Data engineering and ETL pipeline development with SQL, Elasticsearch, Kafka, SSIS, Pantaho, Trino",
      "Database technologies: PostgreSQL, MySQL, SQL Server, DynamoDB, Supabase",
      "Cloud platforms: AWS (EC2, RDS, S3), Vercel",
      "Agile/Scrum methodologies and team leadership",
      "Mentoring and knowledge sharing",
      "On-call support and production issue resolution",
    ],
  },
  workExperience: [
    {
      id: 1,
      title: "Software Development Engineer III",
      company: "Workday",
      location: "Vancouver, BC, Canada",
      startDate: "02/2023",
      endDate: "Present",
      employmentType: "Full-time",
      industry: "Enterprise Software / SaaS",
      companyDescription: "Workday is a leading provider of enterprise cloud applications for finance, HR, and planning.",
      detailedBullets: [
        "Designed and Led fullstack features - including UI (TypeScript & React), web services (REST & GraphQL & SOAP), and integrations (Java) with comprehensive automated test coverage.",
        "Served as Scrum Master, leading ceremonies, monitoring epic and feature progress, managing sprint priorities and team capacity, and improving overall team performance and efficiency.",
        "Participated in on-call rotations, actively triaging and resolving critical customer-reported issues.",
        "Mentored 2 junior developers and conducted knowledge-sharing sessions across the organization.",
      ],
      keyAchievements: [
        "Successfully led multiple fullstack features from design to production",
        "Improved team efficiency through effective Scrum Master practices",
        "Mentored and accelerated the growth of junior team members",
      ],
      technologiesUsed: [
        "TypeScript",
        "React",
        "Java",
        "REST APIs",
        "GraphQL",
        "SOAP APIs",
        "Automated Testing",
      ],
      teamSize: "Part of a larger engineering team",
    },
    {
      id: 2,
      title: "Associate Data Engineer",
      company: "Willow Laboratories, Inc. (formerly Cercacor Laboratories, Inc.)",
      location: "Vancouver, BC, Canada",
      startDate: "03/2022",
      endDate: "02/2023",
      employmentType: "Full-time",
      industry: "Healthcare / Medical Devices",
      detailedBullets: [
        "Designed, developed, and optimized REST APIs in Java for mobile and web applications.",
        "Implemented automated ETL data transformation pipelines from diverse data sources.",
        "Improved real-time data processing with Kafka and reduced query latency from seconds to milliseconds by integrating Elasticsearch.",
        "Mentored a junior data engineer and backend engineer, providing hands-on technical guidance.",
      ],
      keyAchievements: [
        "Significantly improved query performance by reducing latency from seconds to milliseconds through Elasticsearch integration",
        "Successfully implemented real-time data processing solutions using Kafka",
        "Mentored junior engineers, contributing to team growth and knowledge sharing",
      ],
      technologiesUsed: [
        "Java",
        "REST APIs",
        "Kafka",
        "Elasticsearch",
        "ETL Pipelines",
        "Python",
      ],
      teamSize: "Small to medium engineering team",
    },
    {
      id: 3,
      title: "Computational Biologist – Database Development",
      company: "BC Cancer",
      location: "Vancouver, BC, Canada",
      startDate: "10/2021",
      endDate: "03/2022",
      employmentType: "Full-time",
      industry: "Healthcare / Research",
      companyDescription: "BC Cancer is a provincial agency providing cancer care and research services.",
      detailedBullets: [
        "Contributed to the development and maintenance of data pipelines between production databases.",
        "Designed automation programs in Python for data validation and extraction processes.",
      ],
      technologiesUsed: [
        "Python",
        "SQL",
        "Database Development",
        "Data Pipelines",
        "Automation",
      ],
    },
    {
      id: 4,
      title: "Application Programmer Analyst",
      company: "CancerCare Manitoba",
      location: "Winnipeg, MB, Canada",
      startDate: "11/2019",
      endDate: "10/2021",
      employmentType: "Full-time",
      industry: "Healthcare / Research",
      detailedBullets: [
        "Led design and development of a provincial cancer research platform, including warehouse architecture, ETL pipelines (SSIS), and deployment of open-source applications.",
        "Mentored and onboarded a junior developer, providing guidance that expanded team capacity.",
        "Supported and maintained two electronic data capture applications critical for research operations.",
      ],
      keyAchievements: [
        "Led the development of a provincial-scale cancer research platform",
        "Successfully mentored and onboarded junior developer, expanding team capacity",
        "Maintained critical applications supporting research operations",
      ],
      technologiesUsed: [
        "SSIS",
        "ETL Pipelines",
        "Data Warehouse",
        "SQL",
        "Open-source Applications",
      ],
      teamSize: "Small team",
    },
    {
      id: 5,
      title: "Programmer Analyst Co-op",
      company: "CancerCare Manitoba",
      location: "Winnipeg, MB, Canada",
      startDate: "01/2018",
      endDate: "08/2018",
      employmentType: "Co-op / Internship",
      industry: "Healthcare / Research",
      detailedBullets: [
        "Built a full-stack electronic data capture web application, improving internal research workflows.",
      ],
      technologiesUsed: [
        "Full-stack Development",
        "Web Applications",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of Manitoba",
      location: "Winnipeg, MB, Canada",
      startDate: "01/2014",
      endDate: "08/2019",
      fieldOfStudy: "Computer Engineering",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind CSS"],
      proficiency: "Advanced",
    },
    {
      category: "Backend & API",
      skills: ["Java", "Python", "Node.js", "C#", "REST API", "GraphQL API", "SOAP API"],
      proficiency: "Advanced",
    },
    {
      category: "Data & Infrastructure",
      skills: ["SQL", "Elasticsearch", "Kafka", "SSIS", "Pantaho", "Trino", "PostgreSQL", "MySQL", "SQL Server", "DynamoDB", "Supabase"],
      proficiency: "Intermediate to Advanced",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, RDS, S3)", "Vercel", "Git", "Automated Testing"],
      proficiency: "Intermediate",
    },
    {
      category: "Leadership & Methodology",
      skills: ["Scrum Master", "Agile", "Mentoring", "Team Performance Tracking & Improvement"],
      proficiency: "Advanced",
    },
  ],
  projects: [
    {
      id: 1,
      title: "RTO Tracker",
      description: "A mobile application available on the App Store for tracking Return-to-Office schedules. Built with modern mobile development practices and user-friendly design.",
      detailedDescription: "A native iOS mobile application that helps employees track and manage their return-to-office schedules. The app provides an intuitive interface for scheduling and viewing office attendance, helping teams coordinate their in-office days effectively.",
      technologies: ["Swift", "SwiftUI", "iOS", "Mobile Development"],
      role: "Sole Developer",
      keyFeatures: [
        "Schedule tracking and management",
        "User-friendly interface",
        "App Store distribution",
      ],
      liveUrl: "https://apps.apple.com/ca/app/rto-tracker/id6738399953",
    },
    {
      id: 2,
      title: "J&S Boutique Website",
      description: "A modern display website for J&S Boutique showcasing products with responsive design and smooth user experience. Features item storage in Supabase and is hosted on Vercel.",
      detailedDescription: "A modern, responsive website for J&S Boutique that displays products with a clean and elegant design. The website uses Supabase for data storage and is hosted on Vercel, providing fast loading times and reliable uptime. The site features a responsive design that works seamlessly across all devices.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      role: "Full-stack Developer",
      keyFeatures: [
        "Product display and catalog",
        "Responsive design",
        "Supabase integration for data storage",
        "Vercel hosting for optimal performance",
      ],
      liveUrl: "https://www.js-boutique.com",
    },
    {
      id: 3,
      title: "Personal Website",
      description: "A modern portfolio website showcasing my work and skills. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, featuring smooth animations and responsive design.",
      detailedDescription: "A personal portfolio website built with modern web technologies to showcase professional experience, skills, and projects. Features include smooth animations, responsive design, dark mode support, and an AI-powered chat assistant that can answer questions about my professional background.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      role: "Full-stack Developer",
      keyFeatures: [
        "Responsive design",
        "Smooth animations with Framer Motion",
        "Dark mode support",
        "AI chat assistant integration",
        "Clean architecture and maintainable code",
      ],
      liveUrl: "https://www.jiajun-bao.com",
      githubUrl: "https://github.com/baojiajun824",
    },
  ],
  certifications: [
    {
      name: "Certified ScrumMaster®",
      issuer: "Scrum Alliance",
      date: "05/2022",
    },
  ],
};

/**
 * Formats the comprehensive resume data as a text document for AI context
 */
export function getComprehensiveResumeContext(): string {
  const data = comprehensiveResumeData;

  const resumeText = `
PERSONAL INFORMATION
Name: ${data.personalInfo.name}
Title: ${data.personalInfo.title}
Location: ${data.personalInfo.location}
Email: ${data.personalInfo.email}
Phone: ${data.personalInfo.phone || "Not provided"}
LinkedIn: ${data.personalInfo.linkedin || "Not provided"}
GitHub: ${data.personalInfo.github || "Not provided"}
Website: ${data.personalInfo.website || "Not provided"}

PROFESSIONAL SUMMARY / HIGHLIGHTS
${data.personalInfo.tagline}

${data.personalInfo.summary.join("\n")}

CORE COMPETENCIES
${data.personalInfo.coreCompetencies.map((comp) => `• ${comp}`).join("\n")}

WORK EXPERIENCE
${data.workExperience
  .map((exp) => {
    const duration = `${exp.startDate} - ${exp.endDate}`;
    let expText = `
${exp.title}
${exp.company} | ${exp.location}
${duration}${exp.employmentType ? ` | ${exp.employmentType}` : ""}${exp.industry ? ` | ${exp.industry}` : ""}
${exp.companyDescription ? `\nCompany: ${exp.companyDescription}` : ""}
${exp.teamSize ? `Team Size: ${exp.teamSize}` : ""}
`;

    // Show all details in AI resume data
    if (exp.detailedBullets.length > 0) {
      expText += `\nResponsibilities & Achievements:\n${exp.detailedBullets.map((bullet) => `• ${bullet}`).join("\n")}\n`;
    }

    if (exp.keyAchievements && exp.keyAchievements.length > 0) {
      expText += `\nKey Achievements:\n${exp.keyAchievements.map((achievement) => `• ${achievement}`).join("\n")}\n`;
    }

    if (exp.technologiesUsed && exp.technologiesUsed.length > 0) {
      expText += `\nTechnologies Used: ${exp.technologiesUsed.join(", ")}\n`;
    }

    return expText;
  })
  .join("\n---\n")}

EDUCATION
${data.education
  .map((edu) => {
    let eduText = `
${edu.degree}
${edu.institution} | ${edu.location}
${edu.startDate} - ${edu.endDate}
`;
    if (edu.fieldOfStudy) {
      eduText += `Field of Study: ${edu.fieldOfStudy}\n`;
    }
    if (edu.gpa) {
      eduText += `GPA: ${edu.gpa}\n`;
    }
    if (edu.honors && edu.honors.length > 0) {
      eduText += `Honors: ${edu.honors.join(", ")}\n`;
    }
    if (edu.relevantCoursework && edu.relevantCoursework.length > 0) {
      eduText += `Relevant Coursework: ${edu.relevantCoursework.join(", ")}\n`;
    }
    return eduText;
  })
  .join("\n---\n")}

TECHNICAL SKILLS
${data.skills
  .map((skill) => {
    let skillText = `${skill.category}: ${skill.skills.join(", ")}`;
    if (skill.proficiency) {
      skillText += ` (${skill.proficiency})`;
    }
    if (skill.yearsOfExperience) {
      skillText += ` - ${skill.yearsOfExperience} years`;
    }
    return skillText;
  })
  .join("\n")}

PROJECTS
${data.projects
  .map((project) => {
    let projectText = `
${project.title}
${project.description}
${project.detailedDescription ? `\nDetailed Description: ${project.detailedDescription}` : ""}
${project.role ? `Role: ${project.role}` : ""}
${project.duration ? `Duration: ${project.duration}` : ""}
${project.teamSize ? `Team Size: ${project.teamSize}` : ""}
Technologies: ${project.technologies.join(", ")}
`;

    if (project.keyFeatures && project.keyFeatures.length > 0) {
      projectText += `\nKey Features:\n${project.keyFeatures.map((feature) => `• ${feature}`).join("\n")}\n`;
    }

    if (project.challenges && project.challenges.length > 0) {
      projectText += `\nChallenges: ${project.challenges.join(", ")}\n`;
    }

    if (project.results && project.results.length > 0) {
      projectText += `\nResults:\n${project.results.map((result) => `• ${result}`).join("\n")}\n`;
    }

    if (project.liveUrl) {
      projectText += `Live URL: ${project.liveUrl}\n`;
    }
    if (project.githubUrl) {
      projectText += `GitHub: ${project.githubUrl}\n`;
    }

    return projectText;
  })
  .join("\n---\n")}

CERTIFICATIONS
${data.certifications
  .map((cert) => {
    let certText = `${cert.name} - ${cert.issuer} (${cert.date})`;
    if (cert.credentialId) {
      certText += ` - Credential ID: ${cert.credentialId}`;
    }
    if (cert.expiryDate) {
      certText += ` - Expires: ${cert.expiryDate}`;
    }
    return certText;
  })
  .join("\n")}
${data.languages && data.languages.length > 0 ? `\nLANGUAGES\n${data.languages.map((lang) => `${lang.language}: ${lang.proficiency}`).join("\n")}` : ""}
${data.additionalInfo ? `
ADDITIONAL INFORMATION
${data.additionalInfo.publications && data.additionalInfo.publications.length > 0 ? `Publications:\n${data.additionalInfo.publications.map((pub) => `• ${pub}`).join("\n")}\n` : ""}
${data.additionalInfo.presentations && data.additionalInfo.presentations.length > 0 ? `Presentations:\n${data.additionalInfo.presentations.map((pres) => `• ${pres}`).join("\n")}\n` : ""}
${data.additionalInfo.volunteerWork && data.additionalInfo.volunteerWork.length > 0 ? `Volunteer Work:\n${data.additionalInfo.volunteerWork.map((vol) => `• ${vol}`).join("\n")}\n` : ""}
${data.additionalInfo.awards && data.additionalInfo.awards.length > 0 ? `Awards:\n${data.additionalInfo.awards.map((award) => `• ${award}`).join("\n")}\n` : ""}
` : ""}
`;

  return resumeText.trim();
}

