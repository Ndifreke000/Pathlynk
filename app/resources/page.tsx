"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Video,
  Download,
  ExternalLink,
  Calculator,
  CheckCircle,
  Play,
  FileCheck,
  GraduationCap,
} from "lucide-react"

export default function ResourcesPage() {
  const [downloadCount, setDownloadCount] = useState(0)

  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1)
    // Simulate download
    alert("Download started! Check your downloads folder.")
  }

  const cvTemplates = [
    {
      title: "NHS Healthcare CV Template",
      description: "Specifically designed for nurses, doctors, and healthcare assistants",
      downloads: "2,847",
      format: "PDF + Word",
    },
    {
      title: "Care Worker CV Template",
      description: "Perfect for care home and domiciliary care positions",
      downloads: "1,923",
      format: "PDF + Word",
    },
    {
      title: "Skilled Worker CV Template",
      description: "For IT, engineering, and technical professionals",
      downloads: "3,156",
      format: "PDF + Word",
    },
  ]

  const guides = [
    {
      icon: FileCheck,
      title: "Complete UK Job Application Guide",
      description: "50-page comprehensive guide covering everything from job search to visa application",
      type: "PDF Guide",
      pages: "50 pages",
      updated: "January 2025",
    },
    {
      icon: GraduationCap,
      title: "IELTS Preparation Handbook",
      description: "Study materials, practice tests, and tips to achieve required scores",
      type: "Study Pack",
      pages: "120 pages",
      updated: "December 2024",
    },
    {
      icon: Calculator,
      title: "UK Migration Cost Calculator",
      description: "Calculate total costs for visa, IELTS, documents, and living expenses",
      type: "Interactive Tool",
      pages: "Web Tool",
      updated: "Live",
    },
  ]

  const videoSeries = [
    {
      title: "NHS Job Application Masterclass",
      duration: "45 mins",
      lessons: "8 lessons",
      description: "Step-by-step process for NHS applications",
    },
    {
      title: "UK Interview Preparation",
      duration: "30 mins",
      lessons: "5 lessons",
      description: "Common questions and how to answer them",
    },
    {
      title: "Visa Application Walkthrough",
      duration: "60 mins",
      lessons: "10 lessons",
      description: "Complete visa application process",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
          Free Resources
        </Badge>
        <h1 className="text-4xl font-bold mb-6">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Succeed in the UK
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Access our comprehensive library of templates, guides, and tools - all created specifically for Nigerians
          applying to UK jobs. Downloaded over 50,000 times.
        </p>
      </div>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates">CV Templates</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {cvTemplates.map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    <Badge variant="secondary">{template.format}</Badge>
                  </div>
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{template.downloads} downloads</span>
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <Button onClick={handleDownload} className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guides" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <guide.icon className="h-5 w-5 text-emerald-600" />
                    <Badge variant="secondary">{guide.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Length:</span>
                      <span>{guide.pages}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Updated:</span>
                      <span>{guide.updated}</span>
                    </div>
                  </div>
                  <Button onClick={handleDownload} className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Access Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {videoSeries.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="h-5 w-5 text-emerald-600" />
                    <Badge variant="secondary">Video Series</Badge>
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lessons:</span>
                      <span>{video.lessons}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-5 w-5 text-emerald-600" />
                  <Badge variant="secondary">Interactive Tool</Badge>
                </div>
                <CardTitle>UK Migration Cost Calculator</CardTitle>
                <CardDescription>
                  Calculate total costs for your UK migration including visa fees, IELTS, documents, and living expenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Visa fee calculations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Living cost estimates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Document processing fees</span>
                  </div>
                </div>
                <Button className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Use Calculator
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck className="h-5 w-5 text-emerald-600" />
                  <Badge variant="secondary">Checklist Tool</Badge>
                </div>
                <CardTitle>UK Job Application Checklist</CardTitle>
                <CardDescription>
                  Interactive checklist to track your progress through the UK job application process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Document preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Application tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Progress monitoring</span>
                  </div>
                </div>
                <Button className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Start Checklist
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Premium Resources CTA */}
      <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want More Personalized Support?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Upgrade to Premium for ₦2,000/month and get personalized CV reviews, exclusive job leads, and priority
            mentor matching.
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
