import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your UK Journey?</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Join thousands of Nigerians who have successfully migrated to the UK with our guidance. Your dream job is
            waiting!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">What you get when you join:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-200 flex-shrink-0" />
                  <span className="text-emerald-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today - It's Free!</h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option value="">Select Your Goal</option>
                  <option value="nhs">NHS Healthcare Jobs</option>
                  <option value="care">Care Sector Roles</option>
                  <option value="skilled">Skilled Worker Visa</option>
                  <option value="graduate">Graduate Opportunities</option>
                </select>
              </div>

              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-4">
                Start My Journey Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <p className="text-sm text-gray-600 text-center mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
