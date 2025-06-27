"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Wrench, GraduationCap, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

export function JobPaths() {
  const jobPaths = [
    {
      icon: Heart,
      title: "NHS Healthcare Jobs",
      description: "Nurses, doctors, healthcare assistants, and medical professionals",
      opportunities: "2,500+ openings",
      salary: "£25,000 - £45,000",
      color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      icon: Building,
      title: "Care Sector Roles",
      description: "Care workers, support workers, and residential care positions",
      opportunities: "1,800+ openings",
      salary: "£20,000 - £30,000",
      color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Wrench,
      title: "Skilled Worker Visa",
      description: "Engineering, IT, construction, and technical roles",
      opportunities: "3,200+ openings",
      salary: "£26,000 - £60,000",
      color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: GraduationCap,
      title: "Graduate Opportunities",
      description: "Entry-level positions for recent graduates and students",
      opportunities: "900+ openings",
      salary: "£22,000 - £35,000",
      color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/20",
      iconColor: "text-purple-600 dark:text-purple-400",
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore UK Job Paths</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the most in-demand job sectors for Nigerian professionals in the UK. Each path comes with dedicated
            resources and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${path.color} border-2 hover:shadow-lg transition-all duration-300 h-full`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 ${path.iconColor} mx-auto mb-4`}>
                    <path.icon className="w-full h-full" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{path.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Opportunities:</span>
                      <span className="text-sm font-semibold">{path.opportunities}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Salary Range:</span>
                      <span className="text-sm font-semibold">{path.salary}</span>
                    </div>
                  </div>
                  <Link href="/jobs" className="block">
                    <Button className="w-full bg-background text-foreground hover:bg-accent border border-border">
                      Explore Path
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">Not sure which path is right for you?</p>
          <Link href="/assessment">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              Take Career Assessment
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
