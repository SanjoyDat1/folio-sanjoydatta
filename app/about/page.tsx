import type { Metadata } from 'next'
import { siteData } from '@/lib/site-data'
import { About, type AboutVariant } from '@/components/sections/about'
import { Skills, type SkillsVariant } from '@/components/sections/skills'
import { Contact, type ContactVariant } from '@/components/sections/contact'

export const metadata: Metadata = {
  title: "About · sanjoy datta",
  description: "About sanjoy datta. Building practical software that solves real problems for students and communities. I ship complete products from design to deployment while learning",
}

export default function AboutPage() {
  return (
    <>
          <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
            <About data={siteData} variant="split" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
            <Skills data={siteData} variant="category-list" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
            <Contact data={siteData} variant="form" />
          </div>
        </>
  )
}
