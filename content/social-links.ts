export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "twitter" | "website";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/baojiajun824",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/baojiajun",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:baojiajun824@gmail.com",
    icon: "email",
  },
];

