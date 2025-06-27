import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, BookOpen, Download, ExternalLink } from "lucide-react"

export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "CV Templates",
      description: "UK-formatted CV templates for healthcare, tech, and care sectors",
      type: "PDF Download",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
    },
    {
      icon: BookOpen,
      title: "IELTS Prep Guide",
      description: "Complete study materials and practice tests for IELTS success",
      type: "Study Guide",
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for job applications and visa processes",
      type: "Video Series",
      color: "bg-cyan-50 border-cyan-200",
      iconColor: "text-cyan-600",
    },
    {
      icon: FileText,
      title: "Visa Fee Calculator",
      description: "Calculate total costs for your UK visa application and migration",
      type: "Interactive Tool",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Free Resources & Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of guides, templates, and tools designed specifically for Nigerians
            applying to UK jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className={`${resource.color} border-2 hover:shadow-lg transition-shadow`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 ${resource.iconColor} mx-auto mb-4`}>
                  <resource.icon className="w-full h-full" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{resource.title}</CardTitle>
                <CardDescription className="text-gray-600">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <span className="inline-block px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full">
                    {resource.type}
                  </span>
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
                    <Download className="mr-2 h-4 w-4" />
                    Access Free
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Resource */}
        <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Complete UK Migration Handbook</h3>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Our comprehensive 50-page guide covering everything from job search strategies to visa applications,
                  IELTS preparation, and settling in the UK. Valued at ₦15,000 - yours free!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                    <Download className="mr-2 h-5 w-5" />
                    Download Free (PDF)
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-emerald-600"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Preview Online
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/placeholder.svg?height=300&width=200"
                  alt="UK Migration Handbook"
                  className="mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
