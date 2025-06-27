"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Users, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Badge */}
            <Badge
              variant="secondary"
              className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
            >
              <Star className="w-3 h-3 mr-1" />
              2,500+ Nigerians now working in the UK
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Land Your Dream{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  UK Job
                </span>{" "}
                in 6-12 Months
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete step-by-step guidance for Nigerians to secure NHS, care sector, and skilled worker jobs in the
                UK. From CV templates to visa support - everything you need in one place.
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-3">
              {[
                "Free UK-formatted CV templates & guides",
                "NHS job application step-by-step process",
                "IELTS preparation materials",
                "Visa application guidance",
                "Active community of 2,500+ members",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 h-12 w-full sm:w-auto"
                >
                  Start Free Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8 h-12 w-full sm:w-auto bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-border/50">
              <div className="flex items-center justify-between max-w-sm">
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-600">2,500+</div>
                  <div className="text-xs text-muted-foreground">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-600">96%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-600">6-12</div>
                  <div className="text-xs text-muted-foreground">Months Avg</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 border border-border/50">
              <img
                src="/placeholder.svg?height=350&width=450"
                alt="Nigerian professionals succeeding in UK careers"
                className="w-full h-72 object-cover rounded-2xl"
              />

              {/* Floating Success Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-border/50"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Adaora M.</p>
                    <p className="text-xs text-muted-foreground">NHS Nurse, London</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-border/50"
              >
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-medium">2,500+ members</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
