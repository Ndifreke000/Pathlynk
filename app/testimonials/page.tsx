import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, MapPin, Calendar, Briefcase } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Adaora Okafor",
      role: "Registered Nurse",
      company: "NHS Foundation Trust",
      location: "London, UK",
      timeframe: "Migrated in 8 months",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "Pathlynk was a game-changer for me. The CV template specifically for NHS applications helped me stand out, and the IELTS preparation materials were spot-on. The mentorship program connected me with a nurse already working in London who guided me through the entire process. I'm now working at a top London hospital and couldn't be happier!",
      rating: 5,
      date: "December 2024",
      previousRole: "Staff Nurse, Lagos University Teaching Hospital",
    },
    {
      name: "Chukwuma Eze",
      role: "Senior Software Engineer",
      company: "TechCorp Manchester",
      location: "Manchester, UK",
      timeframe: "Migrated in 6 months",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "The skilled worker visa guidance was incredibly detailed. I followed the step-by-step process and got my visa approved on the first try. The tech community on WhatsApp was also very supportive - I got interview tips and even job referrals. The investment in Pathlynk paid for itself within the first month of my UK salary.",
      rating: 5,
      date: "November 2024",
      previousRole: "Software Developer, Andela Nigeria",
    },
    {
      name: "Fatima Abdullahi",
      role: "Care Home Manager",
      company: "Sunrise Senior Living",
      location: "Birmingham, UK",
      timeframe: "Migrated in 10 months",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "As a single mother, I thought UK migration was impossible. Pathlynk showed me affordable pathways through the care sector. The cost calculator helped me budget properly, and the community support kept me motivated during tough times. I started as a care assistant and was promoted to manager within 18 months. My children joined me last year!",
      rating: 5,
      date: "October 2024",
      previousRole: "Social Worker, Kano State Government",
    },
    {
      name: "Dr. Emeka Okonkwo",
      role: "Junior Doctor",
      company: "Royal Liverpool Hospital",
      location: "Liverpool, UK",
      timeframe: "Migrated in 12 months",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "The medical pathway guidance was exceptional. From PLAB preparation to GMC registration, every step was clearly explained. The mentor I was matched with had gone through the same process just two years earlier, so his advice was current and practical. The premium support was worth every naira - I got my first NHS job offer within 3 weeks of arriving in the UK.",
      rating: 5,
      date: "September 2024",
      previousRole: "House Officer, University of Nigeria Teaching Hospital",
    },
    {
      name: "Blessing Okoro",
      role: "Teaching Assistant",
      company: "Greenfield Primary School",
      location: "Leeds, UK",
      timeframe: "Migrated in 9 months",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "I never thought I could work in UK education with my Nigerian qualifications. Pathlynk showed me how to get my credentials recognized and connected me with schools looking for diverse teachers. The interview preparation was thorough - I felt confident walking into every interview. Now I'm working towards my QTS and loving every moment!",
      rating: 5,
      date: "August 2024",
      previousRole: "Primary School Teacher, Lagos State",
    },
    {
      name: "Ibrahim Musa",
      role: "Construction Project Manager",
      company: "Balfour Beatty",
      location: "Glasgow, UK",
      timeframe: "Migrated in 7 months",
      image: "/placeholder.svg?height=80&width=80",
      story:
        "The construction industry guidance was incredibly detailed. I learned about UK building standards, health and safety requirements, and how to present my Nigerian experience effectively. The networking events helped me connect with other Nigerian professionals in construction. My salary tripled compared to what I was earning in Abuja!",
      rating: 5,
      date: "July 2024",
      previousRole: "Site Engineer, Julius Berger Nigeria",
    },
  ]

  const stats = [
    { value: "2,500+", label: "Success Stories" },
    { value: "96%", label: "Success Rate" },
    { value: "8.5", label: "Avg. Months to Job" },
    { value: "4.9/5", label: "User Rating" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
          Success Stories
        </Badge>
        <h1 className="text-4xl font-bold mb-6">
          Real Stories from{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Successful Nigerians
          </span>{" "}
          in the UK
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Read inspiring stories from Nigerians who successfully migrated to the UK with Pathlynk's guidance. Their
          journeys prove that with the right support, your UK dream is achievable.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials */}
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border-2 border-border hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors"
          >
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Profile */}
                <div className="lg:col-span-1">
                  <div className="text-center lg:text-left">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                    <p className="text-emerald-600 font-medium mb-1">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground mb-2">{testimonial.company}</p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <MapPin className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <Calendar className="h-3 w-3" />
                        <span>{testimonial.date}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-center lg:justify-start">
                        <Briefcase className="h-3 w-3" />
                        <span>{testimonial.timeframe}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center lg:justify-start gap-1 mt-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="lg:col-span-3">
                  <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">"{testimonial.story}"</p>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Previous Role:</strong> {testimonial.previousRole}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Own Success Story?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Join thousands of Nigerians who have successfully migrated to the UK with our guidance. Your dream job is
            waiting!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
