import { siteData } from '@/lib/site-data'
import { Hero, type HeroVariant } from '@/components/sections/hero'
import { Stats, type StatsVariant } from '@/components/sections/stats'
import { Philosophy, type PhilosophyVariant } from '@/components/sections/philosophy'
import { Projects, type ProjectsVariant } from '@/components/sections/projects'
import { CtaBanner, type CtaBannerVariant } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
          <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
            <Hero data={siteData} variant="gallery-grid" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
            <Stats data={siteData} variant="row" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
            <Philosophy data={siteData} variant="pull-quote" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '225ms' }}>
            <Projects data={siteData} variant="carousel" limit={4} />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '300ms' }}>
            <CtaBanner data={siteData} variant="fullbleed" />
          </div>
        </>
  )
}
