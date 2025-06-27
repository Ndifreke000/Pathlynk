"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Users, Briefcase, BookOpen, ArrowRight, Target, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const roadmapSteps = [
    {
      title: "Complete Profile Setup",
      description: "Add your education and work experience",
      status: "completed",
      icon: CheckCircle,
    },
    {
      title: "Download CV Template",
      description: "Get UK-formatted CV template for your sector",
      status: "current",
      icon: FileText,
    },
    {
      title: "IELTS Preparation",
      description: "Prepare for English language requirements",
      status: "pending",
      icon: BookOpen,
    },
    {
      title: "Job Applications",
      description: "Apply to curated UK job opportunities",
      status: "pending",
      icon: Briefcase,
    },
    {
      title: "Visa Application",
      description: "Complete your UK visa application",
      status: "pending",
      icon: Target,
    },
  ]

  const quickActions = [
    {
      title: "Browse Jobs",
      description: "View latest UK job opportunities",
      href: "/jobs",
      icon: Briefcase,
      color: "bg-emerald-500",
    },
    {
      title: "Access Resources",
      description: "Download guides and templates",
      href: "/resources",
      icon: FileText,
      color: "bg-teal-500",
    },
    {
      title: "Find Mentor",
      description: "Connect with UK professionals",
      href: "/mentorship",
      icon: Users,
      color: "bg-cyan-500",
    },
    {
      title: "Join Community",
      description: "Connect with other migrants",
      href: "/community",
      icon: MessageCircle,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">
          Continue your journey to UK career success. You're {user.progress}% complete.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Your Progress
              </CardTitle>
              <CardDescription>Track your journey to {user.goal} opportunities in the UK</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">{user.progress}%</span>
                </div>
                <Progress value={user.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">Great progress! Complete your CV template to reach 60%.</p>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>Your Roadmap</CardTitle>
              <CardDescription>Follow these steps to achieve your UK career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roadmapSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                    <div
                      className={`p-2 rounded-full ${
                        step.status === "completed"
                          ? "bg-emerald-100 text-emerald-600"
                          : step.status === "current"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <step.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{step.title}</h3>
                        <Badge
                          variant={
                            step.status === "completed"
                              ? "default"
                              : step.status === "current"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {step.status === "completed" ? "Done" : step.status === "current" ? "In Progress" : "Pending"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {step.status === "current" && (
                      <Button size="sm">
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors cursor-pointer">
                    <div className={`p-2 rounded-lg ${action.color} text-white`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{action.title}</h4>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-muted-foreground">Profile completed</span>
                <span className="text-xs text-muted-foreground ml-auto">2 days ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-muted-foreground">Downloaded NHS guide</span>
                <span className="text-xs text-muted-foreground ml-auto">1 week ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-muted-foreground">Joined community</span>
                <span className="text-xs text-muted-foreground ml-auto">2 weeks ago</span>
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Card */}
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Upgrade to Premium</h3>
              <p className="text-sm text-emerald-100 mb-4">
                Get priority mentor matching and exclusive job leads for just ₦2,000/month.
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
