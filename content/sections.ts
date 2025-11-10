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
  contact: {
    title: "Get In Touch",
    subtitle: "Have a project in mind or want to collaborate? Let's talk!",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      submitButton: "Send Message",
      submittingButton: "Sending...",
      successMessage: "Thank you for your message! I'll get back to you soon.",
      directContactText: "Or reach out directly:",
    },
  },
} as const;

