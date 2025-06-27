"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Globe, Award } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: "Successful Migrations",
      description: "Nigerians now working in the UK",
    },
    {
      icon: TrendingUp,
      value: "96%",
      label: "Success Rate",
      description: "Of our guided applications",
    },
    {
      icon: Globe,
      value: "150+",
      label: "UK Cities",
      description: "Where our members work",
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "User Rating",
      description: "From community feedback",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
