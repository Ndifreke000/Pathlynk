"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import Link from "next/link"

export function SuccessStories() {
  const stories = [
    {
      name: "Adaora Okafor",
      role: "NHS Registered Nurse",
      location: "London, UK",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "Pathlynk guided me through every step of my NHS application. From IELTS preparation to visa processing, their resources were invaluable. I'm now working at a top London hospital!",
      timeframe: "Migrated in 8 months",
    },
    {
      name: "Chukwuma Eze",
      role: "Software Engineer",
      location: "Manchester, UK",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "The mentorship program connected me with a Nigerian engineer already working in the UK. His guidance helped me land a skilled worker visa and my dream tech job.",
      timeframe: "Migrated in 6 months",
    },
    {
      name: "Fatima Abdullahi",
      role: "Care Worker",
      location: "Birmingham, UK",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "As a single mother, I thought UK migration was impossible. Pathlynk showed me affordable pathways and supported me throughout. I now have a stable job and my children joined me!",
      timeframe: "Migrated in 10 months",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from Nigerians who successfully migrated to the UK with Pathlynk's guidance. You could be next!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors h-full">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-emerald-600 mb-4" />

                  {/* Story */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{story.story}"</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Profile */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                      <p className="text-sm text-emerald-600">{story.location}</p>
                    </div>
                  </div>

                  {/* Timeframe */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-emerald-600">{story.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">Ready to write your own success story?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                Read More Stories
              </Button>
            </Link>
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
