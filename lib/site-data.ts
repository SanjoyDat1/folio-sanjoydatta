/**
 * Single source of truth for every piece of content on this site.
 *
 * To change your bio, add a new project, or swap the CTA — edit this
 * file. Save, commit, push — Netlify handles the rest.
 *
 * Design tokens (colors, fonts, spacing) live in `styles/globals.css`.
 */

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  impact?: string
  mediaUrl?: string | null
}

export type Stat = { label: string; value: string }

export type SkillGroup = { category: string; items: string[] }

export type SocialLink = { label: string; href: string }

export type GalleryItem = { url: string; alt: string; caption?: string | null }

export type EducationEntry = {
  school: string
  degree?: string | null
  field?: string | null
  dates?: string | null
}

export type CredentialEntry = {
  kind: 'certification' | 'publication'
  name: string
  issuer?: string | null
  year?: string | null
}

export type SiteData = {
  persona: { name: string; firstName: string; slug: string; tone?: string | null }
  role: string
  ctaHref: string
  palette: string
  typography: string
  hero: string
  motif: string
  animation: string
  content: {
    headline: string
    subheadline: string
    bio: string
    ctaText: string
    ctaEmail: string | null
    /**
     * Base64-encoded, +7-char-shifted ctaEmail used by the ContactModal
     * so the plain address never appears in static HTML. Decoded client-
     * side after the user clicks the CTA. Kept optional so older sites
     * regenerated before this field existed still type-check.
     */
    ctaEmailEnc?: string | null
    avatarUrl: string
    location: string | null
    availability: string | null
    stats: Stat[]
    heroMediaUrl?: string | null
    gallery?: GalleryItem[]
    projects: Project[]
    skills: SkillGroup[]
    socialLinks: SocialLink[]
    education?: EducationEntry[]
    credentials?: CredentialEntry[]
    footerTagline: string
    metaTitle: string
    metaDescription: string
    sectionCopy?: {
      workEyebrow?: string
      workTitle?: string
      aboutEyebrow?: string
      aboutTitle?: string
      statsEyebrow?: string
      statsTitle?: string
      galleryEyebrow?: string
      galleryTitle?: string
      ctaHeadline?: string
      ctaSubline?: string
    }
  }
}

export const siteData: SiteData = {
  persona: {
    name: "Sanjoy Datta",
    firstName: "Sanjoy",
    slug: "sanjoydatta",
    tone: "technical",
  },
  role: "iOS engineer",
  ctaHref: "#contact",
  palette: "dark-studio",
  typography: "space-grotesk-geist",
  hero: "big-number-stats",
  motif: "numbered-index",
  animation: "restrained",
  content: {
    headline: "iOS founder and student who ships fast, learns in public, and builds mobile-first products",
    subheadline: "Building practical software that solves real problems for students and end users. Focused on shipping complete products from design to deployment while learning new technologies.",
    bio: "Building practical software that solves real problems for students and end users. Focused on shipping complete products from design to deployment while learning new technologies.\n\nI work as a ios engineer and I've spent time on the kind of work that shows up in the projects below.",
    ctaText: "Get in touch",
    ctaEmail: null,
    avatarUrl: "https://avatars.githubusercontent.com/u/77421859?v=4",
    location: null,
    availability: null,
    stats: [
      {
        label: "GITHUB STARS",
        value: "5",
      },
      {
        label: "REPOSITORIES",
        value: "29",
      },
      {
        label: "FOLLOWERS",
        value: "7",
      },
    ],
    heroMediaUrl: null,
    gallery: [],
    projects: [
      {
        title: "SunnyD_NoteTaker",
        description: "AI-powered notes with SunnyD - a proactive writing assistant that reads, thinks, and improves your notes as you write.",
        tags: [
          "JavaScript",
        ],
        impact: "★ 2 on GitHub",
        link: "https://github.com/SanjoyDat1/SunnyD_NoteTaker",
        mediaUrl: "https://socialify.git.ci/SanjoyDat1/SunnyD_NoteTaker/image?theme=Light&pattern=Plus&font=Inter&description=1&owner=1",
      },
      {
        title: "MLBotTrader",
        description: "Developed a stock trading bot using Python and machine learning algorithms through the Alpaca API that beat the S&P 500 over an 8-year period. This program detects market sentiment through machine learning models to buy, sell, and short SPY and beat the market.",
        tags: [
          "Python",
        ],
        impact: "★ 2 on GitHub",
        link: "https://github.com/SanjoyDat1/MLBotTrader",
        mediaUrl: "https://socialify.git.ci/SanjoyDat1/MLBotTrader/image?theme=Light&pattern=Plus&font=Inter&description=1&owner=1",
      },
      {
        title: "lahacks26",
        description: "lahacks26 github repo",
        tags: [
          "TypeScript",
        ],
        impact: "★ 1 on GitHub",
        link: "https://github.com/SanjoyDat1/lahacks26",
        mediaUrl: "https://socialify.git.ci/SanjoyDat1/lahacks26/image?theme=Light&pattern=Plus&font=Inter&description=1&owner=1",
      },
      {
        title: "Meridian",
        description: "Meridian — clinical insurance appeals workspace (AI-assisted pipeline + UI)",
        tags: [
          "Python",
        ],
        link: "https://github.com/SanjoyDat1/Meridian",
        mediaUrl: "https://socialify.git.ci/SanjoyDat1/Meridian/image?theme=Light&pattern=Plus&font=Inter&description=1&owner=1",
      },
      {
        title: "Recent work",
        description: "Published Lights Out 1, a mobile escape room game, on the iOS App Store with 150+ downloads across 22 countries and a 5-star rating—spread entirely through organic word of mouth. Built a Python trading bot using machine learning and the Alpaca API th",
        tags: [
          "execution",
          "systems",
          "learning",
        ],
      },
    ],
    skills: [
      {
        category: "Stack",
        items: [
          "TypeScript",
          "Python",
          "JavaScript",
        ],
      },
      {
        category: "What I do well",
        items: [
          "execution",
          "systems",
          "learning",
        ],
      },
    ],
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/SanjoyDat1/",
      },
      {
        label: "Website",
        href: "https://www.sanjoydat.com",
      },
      {
        label: "Email",
        href: "mailto:sanjoyd1@uci.edu",
      },
    ],
    footerTagline: "iOS engineer",
    metaTitle: "Sanjoy Datta — iOS engineer",
    metaDescription: "Building practical software that solves real problems for students and end users. Focused on shipping complete products from design to deployment whil",
    sectionCopy: null,
    ctaEmailEnc: "emh1cXaAazhHfGpwNWxrfA==",
  },
}

export function projectSlugs(projects: Project[]): string[] {
  const seen = new Set<string>()
  return projects.map((p) => {
    let base = p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40) || 'project'
    let slug = base
    let i = 2
    while (seen.has(slug)) slug = `${base}-${i++}`
    seen.add(slug)
    return slug
  })
}
