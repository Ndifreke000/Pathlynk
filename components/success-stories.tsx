import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from Nigerians who successfully migrated to the UK with Pathlynk's guidance. You could be next!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-emerald-200 transition-colors">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-emerald-600 mb-4" />

                {/* Story */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{story.story}"</p>

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
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.role}</p>
                    <p className="text-sm text-emerald-600">{story.location}</p>
                  </div>
                </div>

                {/* Timeframe */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-emerald-600">{story.timeframe}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to write your own success story?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/testimonials"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Read More Stories
            </a>
            <a
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
