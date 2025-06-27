"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, MessageCircle, Calendar, Star, Clock, MapPin, Briefcase, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MentorshipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleMentorRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Mentor request submitted!",
      description: "We'll match you with a suitable mentor within 48 hours.",
    })

    setIsSubmitting(false)
  }

  const mentors = [
    {
      name: "Dr. Kemi Adebayo",
      role: "NHS Consultant",
      location: "London",
      experience: "5 years in UK",
      specialty: "Healthcare",
      rating: 4.9,
      sessions: 127,
      image: "/placeholder.svg?height=80&width=80",
      bio: "Helped 50+ Nigerian healthcare professionals secure NHS positions",
    },
    {
      name: "Chukwuma Okafor",
      role: "Senior Software Engineer",
      location: "Manchester",
      experience: "4 years in UK",
      specialty: "Technology",
      rating: 4.8,
      sessions: 89,
      image: "/placeholder.svg?height=80&width=80",
      bio: "Specializes in skilled worker visa applications for tech professionals",
    },
    {
      name: "Fatima Ibrahim",
      role: "Care Home Manager",
      location: "Birmingham",
      experience: "6 years in UK",
      specialty: "Care Sector",
      rating: 4.9,
      sessions: 156,
      image: "/placeholder.svg?height=80&width=80",
      bio: "Expert in care sector recruitment and career progression",
    },
  ]

  const communityStats = [
    { icon: Users, value: "2,500+", label: "Active Members" },
    { icon: MessageCircle, value: "500+", label: "Daily Messages" },
    { icon: Calendar, value: "50+", label: "Weekly Sessions" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
          Mentorship & Support
        </Badge>
        <h1 className="text-4xl font-bold mb-6">
          Get Guidance from{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Successful Nigerians
          </span>{" "}
          in the UK
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with experienced professionals who've successfully made the transition. Get personalized advice,
          career guidance, and emotional support throughout your journey.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {communityStats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Mentor Request Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-600" />
              Request a Mentor
            </CardTitle>
            <CardDescription>
              Fill out this form and we'll match you with a suitable mentor within 48 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleMentorRequest} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+234 xxx xxx xxxx" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="careerGoal">Career Goal</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your career goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nhs">NHS Healthcare Jobs</SelectItem>
                    <SelectItem value="care">Care Sector Roles</SelectItem>
                    <SelectItem value="skilled">Skilled Worker Visa</SelectItem>
                    <SelectItem value="graduate">Graduate Opportunities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Current Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your current role, qualifications, and experience..."
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenges">Specific Challenges</Label>
                <Textarea
                  id="challenges"
                  placeholder="What specific areas do you need help with? (CV writing, interview prep, visa process, etc.)"
                  rows={3}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Request Mentor Match
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Featured Mentors */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Meet Our Mentors</h2>
            <p className="text-muted-foreground">
              Experienced professionals ready to guide you through your UK career journey
            </p>
          </div>

          <div className="space-y-4">
            {mentors.map((mentor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{mentor.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {mentor.specialty}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          <span>{mentor.role}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{mentor.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">{mentor.bio}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span>{mentor.rating}</span>
                          </div>
                          <span>{mentor.sessions} sessions</span>
                          <span>{mentor.experience}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Community Groups */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-emerald-600" />
            Join Our Community Groups
          </CardTitle>
          <CardDescription>
            Connect with other Nigerians on the same journey through our active WhatsApp and Telegram groups
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">WhatsApp Groups</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">NHS Healthcare Group</p>
                    <p className="text-sm text-muted-foreground">450+ members</p>
                  </div>
                  <Button size="sm">Join</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Care Sector Group</p>
                    <p className="text-sm text-muted-foreground">320+ members</p>
                  </div>
                  <Button size="sm">Join</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Tech Professionals</p>
                    <p className="text-sm text-muted-foreground">280+ members</p>
                  </div>
                  <Button size="sm">Join</Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Telegram Channels</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Daily Job Updates</p>
                    <p className="text-sm text-muted-foreground">1,200+ subscribers</p>
                  </div>
                  <Button size="sm">Subscribe</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Visa Updates</p>
                    <p className="text-sm text-muted-foreground">800+ subscribers</p>
                  </div>
                  <Button size="sm">Subscribe</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Success Stories</p>
                    <p className="text-sm text-muted-foreground">950+ subscribers</p>
                  </div>
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Premium Mentorship */}
      <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Premium Mentorship</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Get priority mentor matching, weekly 1-on-1 sessions, and personalized career roadmaps for just
            ₦2,000/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Upgrade to Premium
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
