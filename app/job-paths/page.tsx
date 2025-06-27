import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Wrench,
  GraduationCap,
  Building,
  ArrowRight,
  Clock,
  PoundSterling,
  Users,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function JobPathsPage() {
  const jobPaths = [
    {
      icon: Heart,
      title: "NHS Healthcare Jobs",
      description: "Nurses, doctors, healthcare assistants, and medical professionals",
      opportunities: "2,500+ openings",
      salary: "£25,000 - £45,000",
      timeframe: "8-12 months",
      visaType: "Health and Care Worker Visa",
      requirements: [
        "Relevant healthcare qualification",
        "IELTS 7.0 overall (6.5 minimum in each band)",
        "Professional registration (NMC, GMC, etc.)",
        "2+ years experience (preferred)",
      ],
      benefits: [
        "Visa sponsorship available",
        "Relocation support packages",
        "Professional development opportunities",
        "NHS pension scheme",
      ],
      color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      icon: Building,
      title: "Care Sector Roles",
      description: "Care workers, support workers, and residential care positions",
      opportunities: "1,800+ openings",
      salary: "£20,000 - £30,000",
      timeframe: "4-8 months",
      visaType: "Health and Care Worker Visa",
      requirements: [
        "Care experience (preferred but not essential)",
        "IELTS 6.5 overall (6.0 minimum in each band)",
        "DBS check (can be done in UK)",
        "Compassionate and caring nature",
      ],
      benefits: [
        "Fast-track visa processing",
        "Training provided by employers",
        "Career progression opportunities",
        "Flexible working hours",
      ],
      color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Wrench,
      title: "Skilled Worker Visa",
      description: "Engineering, IT, construction, and technical roles",
      opportunities: "3,200+ openings",
      salary: "£26,000 - £60,000+",
      timeframe: "6-10 months",
      visaType: "Skilled Worker Visa",
      requirements: [
        "Relevant degree or equivalent experience",
        "IELTS 6.0 overall (5.5 minimum in each band)",
        "Job offer from licensed sponsor",
        "Meet skill level requirements",
      ],
      benefits: [
        "Higher salary potential",
        "Path to permanent residence",
        "Bring family members",
        "Professional growth opportunities",
      ],
      color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: GraduationCap,
      title: "Graduate Opportunities",
      description: "Entry-level positions for recent graduates and students",
      opportunities: "900+ openings",
      salary: "£22,000 - £35,000",
      timeframe: "6-9 months",
      visaType: "Graduate Visa / Skilled Worker",
      requirements: [
        "UK degree or equivalent qualification",
        "IELTS 6.0 overall (5.5 minimum in each band)",
        "Graduate visa (if studied in UK)",
        "Strong academic record",
      ],
      benefits: [
        "Entry-level opportunities",
        "Graduate training programs",
        "Career development support",
        "Networking opportunities",
      ],
      color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ]

  const comparisonData = [
    {
      aspect: "Processing Time",
      nhs: "8-12 months",
      care: "4-8 months",
      skilled: "6-10 months",
      graduate: "6-9 months",
    },
    {
      aspect: "IELTS Requirement",
      nhs: "7.0 overall",
      care: "6.5 overall",
      skilled: "6.0 overall",
      graduate: "6.0 overall",
    },
    { aspect: "Experience Required", nhs: "2+ years", care: "Preferred", skilled: "Varies", graduate: "None" },
    { aspect: "Visa Cost", nhs: "£284", care: "£284", skilled: "£719", graduate: "£822" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
          UK Career Paths
        </Badge>
        <h1 className="text-4xl font-bold mb-6">
          Explore Your{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            UK Career Options
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the most in-demand job sectors for Nigerian professionals in the UK. Each path comes with dedicated
          resources, support, and proven success strategies.
        </p>
      </div>

      {/* Job Paths */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {jobPaths.map((path, index) => (
          <Card key={index} className={`${path.color} border-2 hover:shadow-lg transition-all duration-300`}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 ${path.iconColor} bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center`}
                >
                  <path.icon className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {path.visaType}
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-base">{path.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-600 mb-1">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-semibold">{path.opportunities}</div>
                  <div className="text-xs text-muted-foreground">Openings</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-600 mb-1">
                    <PoundSterling className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-semibold">{path.salary}</div>
                  <div className="text-xs text-muted-foreground">Salary</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-600 mb-1">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-semibold">{path.timeframe}</div>
                  <div className="text-xs text-muted-foreground">Timeline</div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="font-semibold mb-3">Requirements:</h4>
                <div className="space-y-2">
                  {path.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-semibold mb-3">Benefits:</h4>
                <div className="space-y-2">
                  {path.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/jobs" className="flex-1">
                  <Button className="w-full">
                    View Jobs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Get Guide
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle>Path Comparison</CardTitle>
          <CardDescription>
            Compare key aspects of different UK career paths to choose the best fit for your situation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Aspect</th>
                  <th className="text-center p-3 font-semibold">NHS Healthcare</th>
                  <th className="text-center p-3 font-semibold">Care Sector</th>
                  <th className="text-center p-3 font-semibold">Skilled Worker</th>
                  <th className="text-center p-3 font-semibold">Graduate</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 font-medium">{row.aspect}</td>
                    <td className="p-3 text-center text-sm">{row.nhs}</td>
                    <td className="p-3 text-center text-sm">{row.care}</td>
                    <td className="p-3 text-center text-sm">{row.skilled}</td>
                    <td className="p-3 text-center text-sm">{row.graduate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Not Sure Which Path is Right for You?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Take our free career assessment to get personalized recommendations based on your background, skills, and
            career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Take Career Assessment
              </Button>
            </Link>
            <Link href="/mentorship">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                Talk to a Mentor
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
