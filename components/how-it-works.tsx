import { CheckCircle, FileText, Search, Users, Plane } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Create Your Profile",
      description: "Sign up and tell us about your background, skills, and UK job goals.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Search,
      title: "Explore Job Paths",
      description: "Discover NHS roles, skilled worker positions, and care sector opportunities.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: CheckCircle,
      title: "Prepare Your Documents",
      description: "Access CV templates, IELTS prep, and visa guidance tailored for UK applications.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Users,
      title: "Get Mentorship",
      description: "Connect with mentors and join our community of successful UK migrants.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Plane,
      title: "Land Your UK Job",
      description: "Apply to curated job listings and track your progress to success.",
      color: "bg-teal-100 text-teal-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Pathlynk Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step process has helped hundreds of Nigerians successfully migrate to the UK. Follow the same
            path to your dream job.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 bg-white border-4 border-white shadow-lg`}
                  >
                    <step.icon className="h-8 w-8" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to start your journey?</p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
