/**
 * Consolidated resume data for AI agent
 * This file aggregates all professional information that the AI can reference
 * when answering questions about the candidate.
 */

import { personalInfo } from "./personal-info";
import { experiences } from "./experience";
import { education } from "./education";
import { skillCategories } from "./skills";
import { projects } from "./projects";

/**
 * Formats the complete resume as a text document for AI context
 */
export function getResumeContext(): string {
  const resumeText = `
PERSONAL INFORMATION
Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}
Email: ${personalInfo.email}

PROFESSIONAL SUMMARY
${personalInfo.tagline}

${personalInfo.bio.long.join("\n\n")}

CERTIFICATIONS
- Certified ScrumMaster® (May 2022, Scrum Alliance)

WORK EXPERIENCE
${experiences
  .map((exp) => {
    const duration = `${exp.startDate} - ${exp.endDate}`;
    return `
${exp.title}
${exp.company} | ${exp.location}
${duration}

${exp.bullets.map((bullet) => `• ${bullet}`).join("\n")}
`;
  })
  .join("\n---\n")}

EDUCATION
${education
  .map((edu) => {
    return `
${edu.degree}
${edu.institution} | ${edu.location}
${edu.startDate} - ${edu.endDate}
`;
  })
  .join("\n---\n")}

SKILLS
${skillCategories
  .map((category) => {
    return `
${category.title}: ${category.skills.join(", ")}
`;
  })
  .join("\n")}

PROJECTS
${projects
  .map((project) => {
    let projectText = `
${project.title}
${project.description}
Technologies: ${project.technologies.join(", ")}
`;
    if (project.liveUrl) {
      projectText += `Live URL: ${project.liveUrl}\n`;
    }
    if (project.githubUrl) {
      projectText += `GitHub: ${project.githubUrl}\n`;
    }
    return projectText;
  })
  .join("\n---\n")}
`;

  return resumeText.trim();
}

/**
 * Returns structured resume data for programmatic access
 */
export interface ResumeData {
  personalInfo: typeof personalInfo;
  experiences: typeof experiences;
  education: typeof education;
  skills: typeof skillCategories;
  projects: typeof projects;
}

export const resumeData: ResumeData = {
  personalInfo,
  experiences,
  education,
  skills: skillCategories,
  projects,
};

