# Personal Portfolio Website

A modern, responsive personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. This project showcases frontend development skills with a clean architecture, smooth animations, and modern design patterns.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
personal-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx           # Home page (sections)
│   └── globals.css        # Global styles with Tailwind v4
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx # Responsive navigation with smooth scroll
│   │   └── Footer.tsx     # Footer with social links
│   └── sections/         # Page sections
│       ├── Hero.tsx      # Hero section with animations
│       ├── About.tsx     # About section
│       ├── Skills.tsx    # Skills showcase
│       ├── Projects.tsx  # Projects portfolio
│       └── Contact.tsx   # Contact form
├── content/              # Content configuration (separated from components)
│   ├── index.ts          # Central export point
│   ├── personal-info.ts  # Personal information
│   ├── skills.ts         # Skills data
│   ├── projects.ts       # Projects data
│   ├── social-links.ts   # Social media links
│   ├── navigation.ts     # Navigation items
│   └── sections.ts       # Section titles and text
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🏗️ Architecture

The project follows a clean, modular architecture:

- **Components**: Reusable UI components organized by feature
- **Content Separation**: All editable content is separated from components in `content/` directory
- **Sections**: Page sections as separate components for better maintainability
- **Layout**: Shared layout components (Navigation, Footer)
- **Type Safety**: Full TypeScript support throughout
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **Animations**: Framer Motion for smooth, performant animations
- **Responsive**: Mobile-first design with breakpoints for all devices

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Content Management (Recommended Approach)

All editable content is separated from components in the `content/` directory. This makes it easy to update your portfolio without touching component code:

1. **Personal Information**: Edit `content/personal-info.ts`
   - Update name, title, tagline, email, and bio

2. **Skills**: Edit `content/skills.ts`
   - Modify the `skillCategories` array with your skills

3. **Projects**: Edit `content/projects.ts`
   - Update the `projects` array with your actual projects
   - Add project images, GitHub links, and live demo URLs

4. **Social Links**: Edit `content/social-links.ts`
   - Update social media links (GitHub, LinkedIn, email, etc.)

5. **Navigation**: Edit `content/navigation.ts`
   - Update navigation menu items if needed

6. **Section Content**: Edit `content/sections.ts`
   - Update section titles, subtitles, and form labels

### Benefits of Content Separation

- ✅ **Separation of Concerns**: Content is separated from presentation logic
- ✅ **Easy Maintenance**: Update text without touching component code
- ✅ **Type Safety**: TypeScript interfaces ensure content structure
- ✅ **Reusability**: Content can be shared across multiple components
- ✅ **Future-proof**: Easy to add i18n, CMS integration, or API calls
- ✅ **Clean Code**: Components focus purely on presentation

### Legacy Approach (Not Recommended)

If you prefer, you can still edit content directly in component files, but the content separation approach is more maintainable and scalable.

### Styling

- **Colors**: Modify the primary color variables in `app/globals.css`
- **Global Styles**: Edit `app/globals.css` for global styles
- **Component Styles**: Use Tailwind classes directly in components
- **Theme**: Tailwind v4 uses CSS-first configuration in `globals.css`

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Animations with Framer Motion
- ✅ TypeScript for type safety
- ✅ Modern UI with Tailwind CSS v4
- ✅ Dark mode support (system preference)
- ✅ SEO-friendly structure
- ✅ Accessible components
- ✅ Clean, maintainable code architecture
- ✅ Interactive project cards
- ✅ Contact form (ready for backend integration)

## 🚧 Future Enhancements

- [ ] Dark mode toggle (manual switch)
- [ ] Backend API integration for contact form
- [ ] Blog section
- [ ] Project filtering and search
- [ ] Image optimization with Next.js Image
- [ ] Analytics integration
- [ ] Performance optimizations
- [ ] Loading states and error handling
- [ ] More interactive animations
- [ ] Accessibility improvements

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with modern web technologies and best practices for frontend development.

## 🎯 Learning Resources

Since you're transitioning from backend to frontend, here are some concepts demonstrated in this project:

1. **React Hooks**: `useState`, `useEffect` for component state and lifecycle
2. **Client Components**: `"use client"` directive for interactive components
3. **Server Components**: Default in Next.js App Router for better performance
4. **Animations**: Framer Motion for declarative animations
5. **Responsive Design**: Tailwind's responsive utilities
6. **TypeScript**: Type safety for better developer experience
7. **Component Composition**: Breaking UI into reusable components
8. **CSS-in-JS Alternative**: Utility-first CSS with Tailwind
