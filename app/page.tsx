import { siteData } from '@/lib/site-data'
import { Hero, type HeroVariant } from '@/components/sections/hero'
import { Projects, type ProjectsVariant } from '@/components/sections/projects'
import { Skills, type SkillsVariant } from '@/components/sections/skills'
import { CtaBanner, type CtaBannerVariant } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
          <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
            <Hero data={siteData} variant="big-number-stats" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
            <Projects data={siteData} variant="list" limit={4} />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
            <Skills data={siteData} variant="category-list" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '225ms' }}>
            <CtaBanner data={siteData} variant="fullbleed" />
          </div>
        </>
  )
}
