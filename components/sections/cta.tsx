"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CTA() {
  const benefits = [
    "Free access to all resources and guides",
    "Personalized UK job roadmap",
    "Community support and mentorship",
    "Regular job opportunity updates",
    "Visa application guidance",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your UK Journey?</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Join thousands of Nigerians who have successfully migrated to the UK with our guidance. Your dream job is
            waiting!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">What you get when you join:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-200 flex-shrink-0" />
                  <span className="text-emerald-100">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-gray-900 dark:bg-gray-900 dark:text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today - It's Free!</h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-800">
                  <option value="">Select Your Goal</option>
                  <option value="nhs">NHS Healthcare Jobs</option>
                  <option value="care">Care Sector Roles</option>
                  <option value="skilled">Skilled Worker Visa</option>
                  <option value="graduate">Graduate Opportunities</option>
                </select>
              </div>

              <Link href="/auth" className="block">
                <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-4">
                  Start My Journey Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </form>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
