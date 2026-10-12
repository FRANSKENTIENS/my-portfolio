# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

Cloned from the [portfoliov2-template](https://github.com/brewed-ops/portfoliov2-template) by brewed-ops.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive (desktop & mobile)
- ⚡ Fast with Vite and React 19
- 🎯 SEO-friendly
- 🌙 Dark/Light theme support
- ♿ Accessible (WCAG compliant)
- 📦 TypeScript for type safety
- 🎭 Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5190`.

### Build

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

## Customization

### Site Configuration

Edit `src/content/site.ts` to update:
- Your name and title
- Email and contact info
- Social links
- External resource links
- Timezone and location

### Pages

Add or modify pages in `src/app/routes.ts`. Each page is a route entry.

### Styling

- Colors and theme: `src/styles/index.css`
- Components: `src/components/`
- Tailwind configuration: Built-in via `@tailwindcss/vite`

### Content

- Navigation and pages: `src/content/` directory
- Create new content files as needed

## Project Structure

```
src/
├── app/              # Router, routes, app shell
├── content/          # Site content and configuration
├── components/       # React components (build as needed)
├── styles/           # Global styles
├── hooks/            # React hooks (build as needed)
├── lib/              # Utility functions (build as needed)
└── main.tsx          # App entry point
```

## Development

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## License

Based on [PolyForm Noncommercial 1.0.0](LICENSE) license from the original template.

## Credits

- Original template: [brewed-ops/portfoliov2-template](https://github.com/brewed-ops/portfoliov2-template)
- Icons: [Phosphor Icons](https://phosphoricons.com)
- Typography: [Tailwind CSS](https://tailwindcss.com)
