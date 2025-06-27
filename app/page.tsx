import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { JobPaths } from "@/components/sections/job-paths"
import { SuccessStories } from "@/components/sections/success-stories"
import { Resources } from "@/components/sections/resources"
import { CTA } from "@/components/sections/cta"
import { Stats } from "@/components/sections/stats"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <HowItWorks />
      <JobPaths />
      <SuccessStories />
      <Resources />
      <CTA />
    </div>
  )
}
