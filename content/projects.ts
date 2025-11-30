export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  githubUrlText?: string;
  liveUrl?: string;
  liveUrlText?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RTO Tracker",
    description:
      "A mobile application available on the App Store for tracking Return-to-Office schedules. Built with modern mobile development practices and user-friendly design.",
    technologies: ["Swift", "SwiftUI", "iOS", "Mobile Development"],
    imageUrl: "/projects/rto-tracker.png", // Add your image to public/projects/rto-tracker.png
    liveUrl: "https://apps.apple.com/ca/app/rto-tracker/id6738399953",
    liveUrlText: "View on App Store",
    featured: true,
  },
  {
    id: 2, 
    title: "J&S Boutique Website",
    description:
      "A modern display website for J&S Boutique showcasing products with responsive design and smooth user experience. Features item storage in Supabase and is hosted on Vercel.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "/projects/js-boutique.jpg", // Add your image to public/projects/js-boutique.png
    liveUrl: "https://www.js-boutique.com",
    liveUrlText: "Visit Website",
    featured: true,
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A modern portfolio website showcasing my work and skills. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, featuring smooth animations, responsive design, and an AI-powered chat assistant that answers questions about my professional background and experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Gemini AI"],
    // No imageUrl - will display gradient background with "P" letter
    githubUrl: "https://github.com/baojiajun824",
    featured: false,
  },
];

