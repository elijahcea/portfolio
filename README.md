# Personal Portfolio — elijahcea.com

My personal website showcasing my experience, projects, and a little bit about me. Built as a statically exported Next.js site and hosted on GitHub Pages.

🌐 **Live site:** [www.elijahcea.com](https://www.elijahcea.com)

---

## Tech Stack

| Technology                                                                           |
| ------------------------------------------------------------------------------------ |
| [Next.js](https://nextjs.org/) With static export (`output: 'export'`)               |
| [TypeScript](https://www.typescriptlang.org/)                                        |
| [Tailwind CSS](https://tailwindcss.com/)                                             |
| [pnpm](https://pnpm.io/)                                                             |
| [GitHub Pages](https://pages.github.com/)                                            |
| [GitHub Actions](https://github.com/features/actions) Auto-deploys on push to `main` |

---

## Project Structure

```
portfolio/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── lib/              # Utility functions and helpers
├── public/           # Static assets (images, icons, etc.)
├── next.config.ts    # Next.js configuration (static export)
└── tailwind.config.* # Tailwind CSS configuration
```

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/elijahcea/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Deployment

This site deploys automatically to **GitHub Pages** via a GitHub Actions workflow on every push to the `main` branch. The workflow runs `next build`, which produces a static export in the `out/` directory.

To build the static export manually:

```bash
pnpm build
```

The static output will be in the `out/` directory.
