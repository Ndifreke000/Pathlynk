import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Gateway to <span className="text-emerald-600">UK Job Opportunities</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Helping Nigerians migrate legally to the UK through structured job application support, comprehensive
                resources, and expert mentorship. Start your journey today.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">500+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">NHS & Care Jobs</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">UK Focused</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                  Start My UK Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by Nigerians worldwide</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-xs text-gray-500">Successful Migrations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">95%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">24/7</div>
                  <div className="text-xs text-gray-500">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Nigerian professional working in UK"
                className="w-full h-80 object-cover rounded-lg"
              />

              {/* Floating Success Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adaora M.</p>
                    <p className="text-sm text-gray-600">Now working as NHS Nurse in London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
