"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, BookOpen, Download, ExternalLink, Calculator } from "lucide-react"
import Link from "next/link"

export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "CV Templates",
      description: "UK-formatted CV templates for healthcare, tech, and care sectors",
      type: "PDF Download",
      color: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: BookOpen,
      title: "IELTS Prep Guide",
      description: "Complete study materials and practice tests for IELTS success",
      type: "Study Guide",
      color: "bg-teal-50 border-teal-200 dark:bg-teal-950/20 dark:border-teal-800",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for job applications and visa processes",
      type: "Video Series",
      color: "bg-cyan-50 border-cyan-200 dark:bg-cyan-950/20 dark:border-cyan-800",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: Calculator,
      title: "Visa Fee Calculator",
      description: "Calculate total costs for your UK visa application and migration",
      type: "Interactive Tool",
      color: "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Free Resources & Tools</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of guides, templates, and tools designed specifically for Nigerians
            applying to UK jobs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${resource.color} border-2 hover:shadow-lg transition-all duration-300 h-full`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 ${resource.iconColor} mx-auto mb-4`}>
                    <resource.icon className="w-full h-full" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{resource.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <span className="inline-block px-3 py-1 bg-background text-foreground text-sm font-medium rounded-full border">
                      {resource.type}
                    </span>
                    <Link href="/resources" className="block">
                      <Button className="w-full bg-background text-foreground hover:bg-accent border border-border">
                        <Download className="mr-2 h-4 w-4" />
                        Access Free
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Resource */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
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
                    <Link href="/resources">
                      <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                        <Download className="mr-2 h-5 w-5" />
                        Download Free (PDF)
                      </Button>
                    </Link>
                    <Link href="/resources">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Preview Online
                      </Button>
                    </Link>
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
        </motion.div>
      </div>
    </section>
  )
}
