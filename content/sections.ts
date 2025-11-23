export interface SectionContent {
  title: string;
  subtitle: string;
}

export const sectionContent = {
  hero: {
    ctaPrimary: "View My Work",
    ctaSecondary: "Get In Touch",
  },
  about: {
    title: "About Me",
    subtitle: "Experienced Fullstack Developer passionate about building scalable SaaS solutions and leading high-performing teams",
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies and tools I work with",
  },
  projects: {
    title: "Projects",
    subtitle: "Some of my recent work and side projects",
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey and work history",
  },
  education: {
    title: "Education",
    subtitle: "My academic background and qualifications",
  },
} as const;

