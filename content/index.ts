// Central export point for all content
export { personalInfo } from "./personal-info";
export { skillCategories, type SkillCategory } from "./skills";
export { projects, type Project } from "./projects";
export { socialLinks, type SocialLink } from "./social-links";
export { navItems, type NavItem } from "./navigation";
export { sectionContent, type SectionContent } from "./sections";
export { experiences, type WorkExperience } from "./experience";
export { education, type Education } from "./education";
export { getResumeContext, resumeData, type ResumeData } from "./resume";
export { 
  getComprehensiveResumeContext, 
  comprehensiveResumeData,
  type ComprehensiveResumeData,
  type ComprehensiveWorkExperience,
  type ComprehensiveEducation,
  type ComprehensiveProject,
  type ComprehensiveSkill
} from "./ai-resume-data";

