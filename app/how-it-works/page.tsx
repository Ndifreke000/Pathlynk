"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Search, Users, Plane, ArrowRight, Clock, Target, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: FileText,
      title: "Create Your Profile",
      description: "Sign up for free and complete your profile with your background, skills, and UK career goals.",
      details: [
        "Complete skills assessment",
        "Set your career objectives",
        "Upload current CV for review",
        "Choose your target UK sectors",
      ],
      timeframe: "5 minutes",
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      icon: Search,
      title: "Explore Career Paths", // Changed from Explore Job Paths
      description: "Discover UK healthcare roles, skilled worker positions, social care opportunities, and more.",
      details: [
        "Browse sector-specific guides",
        "Understand visa requirements",
        "Learn about salary expectations",
        "Identify skill gaps to address",
      ],
      timeframe: "1-2 hours",
      color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
    },
    {
      icon: CheckCircle,
      title: "Prepare Your Documents",
      description: "Access UK-formatted CV templates, IELTS prep materials, and visa guidance.",
      details: [
        "Download sector-specific CV templates",
        "Prepare for IELTS examination",
        "Gather required documents",
        "Get credentials evaluated",
      ],
      timeframe: "2-4 months",
      color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
    {
      icon: Users,
      title: "Get Mentorship & Support",
      description: "Connect with mentors and join our active community of successful UK migrants.",
      details: [
        "Get matched with a mentor",
        "Join sector-specific WhatsApp groups",
        "Attend weekly Q&A sessions",
        "Access premium support if needed",
      ],
      timeframe: "Ongoing",
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      icon: Plane,
      title: "Navigate Applications & Relocation", // Changed from Apply & Land Your UK Job
      description: "Receive guidance on job applications and track your progress towards UK relocation.", // Rephrased
      details: [
        "Discover relevant job opportunities", // Rephrased
        "Receive guidance on targeted applications", // Rephrased
        "Prepare for UK-style interviews",
        "Understand job offer and visa processes", // Rephrased
      ],
      timeframe: "2-6 months",
      color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
    },
  ]

  const successMetrics = [
    { icon: Target, value: "96%", label: "Guidance Effectiveness", description: "Of active members secure UK jobs" }, // Changed from Success Rate
    { icon: Clock, value: "8.5", label: "Average Months", description: "From start to job offer" },
    { icon: Star, value: "4.9/5", label: "User Rating", description: "Average satisfaction score" },
    { icon: Users, value: "2,500+", label: "Guided Journeys", description: "Nigerians now working in UK" }, // Changed from Success Stories
  ]

  const pathways = [
    {
      title: "UK Healthcare Sector Pathway", // Changed from UK Medical & Health Pathway
      timeframe: "8-12 months",
      requirements: ["Relevant healthcare qualification", "IELTS 7.0+", "Professional registration"],
      process: "Qualification recognition → IELTS → Job application → Visa application",
      salary: "£25,000 - £45,000",
    },
    {
      title: "UK Community Care Sector Pathway", // Changed from UK Social Care Pathway
      timeframe: "4-8 months",
      requirements: ["Care experience (preferred)", "IELTS 6.5+", "DBS check"],
      process: "Skills assessment → IELTS → Job application → Visa application",
      salary: "£20,000 - £30,000",
    },
    {
      title: "Skilled Worker Route",
      timeframe: "6-10 months",
      requirements: ["Relevant degree/experience", "IELTS 6.0+", "Job offer from licensed sponsor"],
      process: "Skills assessment → Job search → Job offer → Visa application",
      salary: "£26,000 - £60,000+",
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
            How It Works
          </Badge>
        </motion.div>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
          Your Roadmap to{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            UK Career Success
          </span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our proven 5-step process has helped over 2,500 Nigerians successfully migrate to the UK. Follow the same
          systematic approach to achieve your career dreams.
        </motion.p>
      </motion.div>

      {/* Success Metrics */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {successMetrics.map((metric, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-4">
                  <metric.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Step-by-Step Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Pathlynk Process</h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    {/* Step Icon & Number */}
                    <div className="text-center lg:text-left">
                      <div className="relative inline-block">
                        <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4`}>
                          <step.icon className="h-8 w-8" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {step.timeframe}
                      </Badge>
                    </div>

                    {/* Step Content */}
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Pathways */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular UK Career Pathways</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{pathway.title}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline">{pathway.timeframe}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pathway.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Process:</h4>
                    <p className="text-sm text-muted-foreground">{pathway.process}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Salary Range:</h4>
                    <p className="text-emerald-600 font-medium">{pathway.salary}</p>
                  </div>

                  <Link href="/job-paths">
                    {" "}
                    {/* Changed to job-paths page */}
                    <Button className="w-full">
                      Explore Pathways
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
        <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your UK Journey?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join thousands of Nigerians who have successfully followed this process. Your UK career is just 5 steps
              away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Start Free Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                >
                  Download Free Guide
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
