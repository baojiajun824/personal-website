# Content Management Guide

This guide explains how to manage and update content in your portfolio website.

## Overview

All editable content is stored in the `content/` directory, separate from component files. This architecture provides several benefits:

- **Easy Updates**: Change content without modifying component code
- **Type Safety**: TypeScript ensures content structure is correct
- **Maintainability**: Clear separation between content and presentation
- **Scalability**: Easy to add features like i18n or CMS integration

## Content Files

### `content/personal-info.ts`

Contains your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  email: "your.email@example.com",
  location: "Your Location",
  bio: {
    short: "Short bio",
    long: [
      "First paragraph of your bio",
      "Second paragraph...",
      // Add more paragraphs as needed
    ],
  },
}
```

### `content/skills.ts`

Define your skills by category:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", ...],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", ...],
  },
  // Add more categories
];
```

### `content/projects.ts`

List your projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://example.com",
    featured: true, // Optional: highlight featured projects
  },
  // Add more projects
];
```

### `content/social-links.ts`

Add your social media links:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "email",
  },
];
```

### `content/navigation.ts`

Customize navigation menu:

```typescript
export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // Add or remove items
];
```

### `content/sections.ts`

Update section titles and text:

```typescript
export const sectionContent = {
  hero: {
    ctaPrimary: "View My Work",
    ctaSecondary: "Get In Touch",
  },
  about: {
    title: "About Me",
    subtitle: "Get to know more about my background...",
  },
  // Update other sections...
};
```

## How Components Use Content

Components import content from the central `content/index.ts` file:

```typescript
import { personalInfo, projects, skillCategories } from "@/content";

// Use in component
<h1>{personalInfo.name}</h1>
```

## Adding New Content Types

1. Create a new file in `content/` directory
2. Define TypeScript interfaces for type safety
3. Export the content
4. Add to `content/index.ts` for central export
5. Import and use in components

## Best Practices

1. **Keep content separate**: Don't mix content with component logic
2. **Use TypeScript**: Define interfaces for all content structures
3. **Organize by feature**: Group related content in the same file
4. **Use constants**: Use `as const` for immutable content when appropriate
5. **Document changes**: Update this guide when adding new content types

## Future Enhancements

This structure makes it easy to:

- Add internationalization (i18n) by creating `content/en.ts`, `content/es.ts`, etc.
- Integrate with a CMS by replacing static content with API calls
- Add content validation
- Create an admin panel for content management
- Support multiple languages or locales

## Migration from Component-Based Content

If you have content in component files, follow these steps:

1. Identify all hardcoded text in components
2. Create appropriate content files
3. Move content to `content/` directory
4. Update components to import from `@/content`
5. Test to ensure everything works correctly

