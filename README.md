# Rahul Ankit — Personal Portfolio

Personal portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Premium dark theme, smooth animations, Resend-powered contact form, and fully responsive.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.local.example .env.local

# 3. Add your Resend API key to .env.local (see below)

# 4. Run the dev server on port 3035
npm run dev
```

Open [http://localhost:3035](http://localhost:3035).

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Email that receives contact form submissions |
| `CONTACT_FROM_EMAIL` | Sender address (must be a verified Resend domain) |
| `NEXT_PUBLIC_SITE_URL` | Your deployed URL (for SEO/OG metadata) |

**Getting a Resend API key:**
1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Go to API Keys → Create API Key
3. Paste it into `.env.local`
4. For testing without a verified domain, leave `CONTACT_FROM_EMAIL` as `Portfolio <onboarding@resend.dev>`

---

## Where to Place Your Resume

Place your PDF at:

```
public/resume.pdf
```

The navbar, hero CTA, and footer all link to `/resume.pdf`. To update it, just replace the file.

---

## How to Customize Content

All content is centralized in **one file**:

### `src/lib/data.ts`

Edit this file to update:
- `personal` — name, title, email, location, GitHub, LinkedIn URLs
- `stats` — the 4 animated stat counters in the About section
- `skillCategories` — all skill categories and individual skills
- `projects` — all project cards (title, description, tags, GitHub link, highlights)
- `experiences` — work history timeline
- `education` — degrees
- `awards` — recognition received
- `navItems` — navigation links
- `socialLinks` — social media links

### `src/app/layout.tsx`

Update `metadata` for SEO:
- `title`, `description`, `keywords`
- `openGraph` image URL (after deploying, replace the og-image URL)

---

## File Structure

```
src/
├── app/
│   ├── api/contact/route.ts    ← Resend email API
│   ├── layout.tsx              ← Root layout + SEO metadata
│   ├── page.tsx                ← Main page (all sections)
│   ├── globals.css             ← Design system + Tailwind config
│   └── not-found.tsx           ← Custom 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Sticky navbar, mobile menu, active highlight
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx            ← Full-screen hero with particles
│   │   ├── About.tsx           ← Bio + animated stat counters
│   │   ├── Skills.tsx          ← Categorized skills with filter
│   │   ├── Projects.tsx        ← Project cards + modal
│   │   ├── Experience.tsx      ← Premium timeline
│   │   ├── Education.tsx       ← Education + awards
│   │   └── Contact.tsx         ← Contact form with Resend
│   └── ui/
│       ├── AnimatedCounter.tsx
│       ├── Button.tsx
│       ├── CommandPalette.tsx  ← Cmd+K quick navigation
│       ├── ProjectCard.tsx
│       ├── ProjectModal.tsx
│       ├── SectionHeader.tsx
│       ├── SkillBadge.tsx
│       └── TimelineItem.tsx
├── lib/
│   ├── data.ts                 ← ALL content (edit this first)
│   └── utils.ts
└── types/
    └── index.ts
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Cmd+K` (Mac) / `Ctrl+K` (Win) | Open command palette for quick navigation |
| `Esc` | Close command palette / project modal |
| `↑↓` in palette | Navigate items |
| `↵` in palette | Go to section |

---

## Deploy to Vercel

### One-click deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Or via Vercel dashboard:

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select your repository
4. Add environment variables in the Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (set to your Vercel domain, e.g. `https://rahul-ankit.vercel.app`)
5. Click **Deploy**

The build command is `npm run build` and the output directory is `.next` (auto-detected).

---

## Features

- **Premium dark theme** — custom design system with indigo/purple accent
- **Framer Motion animations** — scroll-triggered reveals, staggered entrances, smooth transitions
- **Animated particle hero** — canvas-based particle field with connection lines
- **Command palette** (`Cmd+K`) — quick navigation between sections
- **Project modals** — click any project for full details, tech stack, and links
- **Skills filter** — filter skills by category with animated transitions
- **Animated stat counters** — numbers count up when scrolled into view
- **Resend contact form** — production-ready with validation, loading/success/error states
- **Copy email to clipboard** — one-click email copy in the contact section
- **Active section navbar** — highlights current section via IntersectionObserver
- **Mobile-first responsive** — polished on all screen sizes
- **SEO ready** — full Open Graph + Twitter card metadata
- **Custom 404 page**
- **Resume download** from navbar, hero, and footer

---

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend](https://resend.com/) — transactional email
- [Lucide React](https://lucide.dev/) — icons
- [Vercel](https://vercel.com/) — deployment
