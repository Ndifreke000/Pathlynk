"use client"

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
  Code,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function JobPathsPage() {
  const jobPaths = [
    {
      icon: Heart,
      title: "Healthcare & Allied Professions",
      description: "Nurses, doctors, healthcare assistants, and medical professionals",
      opportunities: "2,500+ openings",
      salary: "£25,000 - £45,000",
      timeframe: "8-12 months",
      visaType: "Health and Care Worker Visa",
      requirements: [
        "Relevant healthcare qualification",
        "IELTS 7.0 overall (6.5 minimum in each band)",
        "Professional registration (e.g., NMC, GMC)",
        "2+ years experience (preferred)",
      ],
      benefits: [
        "Visa sponsorship available",
        "Relocation support packages",
        "Professional development opportunities",
        "Competitive pension scheme",
      ],
      color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      icon: Building,
      title: "Community & Support Roles",
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
        "Career progression",
        "Flexible working hours",
      ],
      color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Code,
      title: "Technology & Digital Roles",
      description: "Software development, data analysis, cybersecurity, IT support, and more.",
      opportunities: "3,500+ openings",
      salary: "£30,000 - £70,000+",
      timeframe: "6-12 months",
      visaType: "Skilled Worker Visa",
      requirements: [
        "Relevant degree or strong portfolio",
        "IELTS 6.0 overall (5.5 minimum in each band)",
        "Job offer from licensed sponsor",
        "Proficiency in relevant tech stacks",
      ],
      benefits: [
        "High earning potential",
        "Innovation-driven environment",
        "Opportunities for rapid career growth",
        "Flexible and remote work options",
      ],
      color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Wrench,
      title: "Other Skilled Worker Roles",
      description: "Engineering, construction, finance, and other professional roles",
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
      healthcare: "8-12 months",
      community: "4-8 months",
      tech: "6-12 months",
      skilled: "6-10 months",
      graduate: "6-9 months",
    },
    {
      aspect: "IELTS Requirement",
      healthcare: "7.0 overall",
      community: "6.5 overall",
      tech: "6.0 overall",
      skilled: "6.0 overall",
      graduate: "6.0 overall",
    },
    {
      aspect: "Experience Required",
      healthcare: "2+ years",
      community: "Preferred",
      tech: "Varies",
      skilled: "Varies",
      graduate: "None",
    },
    { aspect: "Visa Cost", healthcare: "£284", community: "£284", tech: "£719", skilled: "£719", graduate: "£822" },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center mb-16">
        <motion.div variants={fadeIn}>
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            UK Career Paths
          </Badge>
        </motion.div>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
          Explore Your{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            UK Career Options
          </span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the most in-demand job sectors for Nigerian professionals in the UK. Each path comes with dedicated
          resources, support, and proven guidance strategies.
        </motion.p>
      </motion.div>

      {/* Job Paths */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid lg:grid-cols-2 gap-8 mb-16"
      >
        {jobPaths.map((path, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className={`${path.color} border-2 hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
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

              <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
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
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full">
                      Get Guidance
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Explore Resources
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Comparison Table */}
      <motion.div variants={fadeIn} initial="initial" animate="animate" className="mb-16">
        <Card>
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
                    <th className="text-center p-3 font-semibold">Healthcare & Allied</th>
                    <th className="text-center p-3 font-semibold">Community & Support</th>
                    <th className="text-center p-3 font-semibold">Technology & Digital</th>
                    <th className="text-center p-3 font-semibold">Other Skilled Worker</th>
                    <th className="text-center p-3 font-semibold">Graduate</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3 font-medium">{row.aspect}</td>
                      <td className="p-3 text-center text-sm">{row.healthcare}</td>
                      <td className="p-3 text-center text-sm">{row.community}</td>
                      <td className="p-3 text-center text-sm">{row.tech}</td>
                      <td className="p-3 text-center text-sm">{row.skilled}</td>
                      <td className="p-3 text-center text-sm">{row.graduate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                >
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
