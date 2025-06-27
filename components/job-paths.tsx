import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Wrench, GraduationCap, Building, ArrowRight } from "lucide-react"

export function JobPaths() {
  const jobPaths = [
    {
      icon: Heart,
      title: "NHS Healthcare Jobs",
      description: "Nurses, doctors, healthcare assistants, and medical professionals",
      opportunities: "2,500+ openings",
      salary: "£25,000 - £45,000",
      color: "border-red-200 bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Building,
      title: "Care Sector Roles",
      description: "Care workers, support workers, and residential care positions",
      opportunities: "1,800+ openings",
      salary: "£20,000 - £30,000",
      color: "border-emerald-200 bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Wrench,
      title: "Skilled Worker Visa",
      description: "Engineering, IT, construction, and technical roles",
      opportunities: "3,200+ openings",
      salary: "£26,000 - £60,000",
      color: "border-orange-200 bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: GraduationCap,
      title: "Graduate Opportunities",
      description: "Entry-level positions for recent graduates and students",
      opportunities: "900+ openings",
      salary: "£22,000 - £35,000",
      color: "border-purple-200 bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore UK Job Paths</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most in-demand job sectors for Nigerian professionals in the UK. Each path comes with dedicated
            resources and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobPaths.map((path, index) => (
            <Card key={index} className={`${path.color} border-2 hover:shadow-lg transition-shadow`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 ${path.iconColor} mx-auto mb-4`}>
                  <path.icon className="w-full h-full" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{path.title}</CardTitle>
                <CardDescription className="text-gray-600">{path.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Opportunities:</span>
                    <span className="text-sm font-semibold text-gray-900">{path.opportunities}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Salary Range:</span>
                    <span className="text-sm font-semibold text-gray-900">{path.salary}</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
                  Explore Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Not sure which path is right for you?</p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Take Our Career Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}
