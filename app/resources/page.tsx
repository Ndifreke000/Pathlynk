"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, BookOpen, Video, Users, ArrowRight, ListChecks } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { UKMigrationCostCalculator } from "@/components/uk-migration-cost-calculator"
import { UKJobApplicationChecklist } from "@/components/uk-job-application-checklist"

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Guides & E-books",
      description: "In-depth guides on UK job search, visa processes, and relocation.",
      icon: BookOpen,
      items: [
        {
          name: "UK Job Search Masterclass E-book",
          description: "Comprehensive guide to finding and securing jobs in the UK.",
          link: "#",
          type: "Download",
        },
        {
          name: "Visa Sponsorship Guide for Nigerians",
          description: "Detailed steps to secure a sponsored visa.",
          link: "#",
          type: "Download",
        },
        {
          name: "Relocation Checklist & Tips",
          description: "Everything you need to know for a smooth move.",
          link: "#",
          type: "Download",
        },
      ],
    },
    {
      title: "Templates & Tools",
      description: "Ready-to-use templates and interactive tools to streamline your application.",
      icon: ListChecks,
      items: [
        {
          name: "UK-Formatted CV Templates",
          description: "Download professional CV templates tailored for the UK market.",
          link: "#",
          type: "Download",
        },
        {
          name: "Cover Letter Samples",
          description: "Effective cover letter examples for various industries.",
          link: "#",
          type: "Download",
        },
        {
          name: "Interview Preparation Kit",
          description: "Common UK interview questions and best practice answers.",
          link: "#",
          type: "Download",
        },
      ],
    },
    {
      title: "Webinars & Workshops",
      description: "Expert-led sessions on key aspects of UK migration and career development.",
      icon: Video,
      items: [
        {
          name: "Live Q&A with UK Migrant Professionals",
          description: "Monthly live sessions to get your questions answered.",
          link: "#",
          type: "Watch",
        },
        {
          name: "Mastering UK Interviews Workshop",
          description: "Interactive workshop to ace your UK job interviews.",
          link: "#",
          type: "Watch",
        },
        {
          name: "Visa Application Demystified",
          description: "Step-by-step walkthrough of the UK visa application process.",
          link: "#",
          type: "Watch",
        },
      ],
    },
    {
      title: "Community & Support",
      description: "Connect with a vibrant community and get peer-to-peer support.",
      icon: Users,
      items: [
        {
          name: "Join Our WhatsApp Community",
          description: "Instant support and networking with fellow Nigerian migrants.",
          link: "#",
          type: "Join",
        },
        {
          name: "Mentorship Program Details",
          description: "Learn how to get matched with a UK-based mentor.",
          link: "/mentorship",
          type: "Learn More",
        },
        {
          name: "Success Stories & Testimonials",
          description: "Read inspiring journeys of Nigerians who made it to the UK.",
          link: "#", // Removed link to testimonials page, now just a placeholder
          type: "Read",
        },
      ],
    },
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
            Resource Hub
          </Badge>
        </motion.div>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
          Your Ultimate Toolkit for{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            UK Career Success
          </span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Access a wealth of free and premium resources, tools, and community support designed to guide you every step
          of your UK migration journey.
        </motion.p>
      </motion.div>

      {/* Interactive Tools Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Interactive Tools</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <UKMigrationCostCalculator />
          <UKJobApplicationChecklist />
        </div>
      </div>

      {/* Resource Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resourceCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <category.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Link href={item.link}>
                        <Button variant="outline" size="sm" className="flex-shrink-0 bg-transparent">
                          {item.type === "Download" && <Download className="mr-2 h-4 w-4" />}
                          {item.type === "Watch" && <Video className="mr-2 h-4 w-4" />}
                          {item.type === "Join" && <Users className="mr-2 h-4 w-4" />}
                          {item.type === "Learn More" && <ArrowRight className="mr-2 h-4 w-4" />}
                          {item.type === "Read" && <BookOpen className="mr-2 h-4 w-4" />}
                          {item.type}
                        </Button>
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Connect with our experts for personalized guidance and accelerate your UK career journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                >
                  Join Pathlynk Free
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
