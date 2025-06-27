"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Clock,
  PoundSterlingIcon as Pound,
  ExternalLink,
  Heart,
  Filter,
  Briefcase,
  Building,
  Users,
} from "lucide-react"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSector, setSelectedSector] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const jobs = [
    {
      id: 1,
      title: "Registered Nurse - Emergency Department",
      company: "NHS Foundation Trust",
      location: "London",
      salary: "£28,000 - £34,000",
      type: "Full-time",
      sector: "healthcare",
      posted: "2 days ago",
      description: "Join our dynamic emergency department team. Visa sponsorship available for qualified candidates.",
      requirements: ["NMC Registration", "2+ years experience", "IELTS 7.0+"],
      benefits: ["Visa sponsorship", "Relocation support", "Professional development"],
      featured: true,
    },
    {
      id: 2,
      title: "Care Assistant",
      company: "Sunrise Senior Living",
      location: "Manchester",
      salary: "£20,000 - £24,000",
      type: "Full-time",
      sector: "care",
      posted: "1 day ago",
      description: "Provide compassionate care to elderly residents in our modern facility.",
      requirements: ["Care Certificate", "Compassionate nature", "Basic English"],
      benefits: ["Training provided", "Career progression", "Flexible shifts"],
      featured: false,
    },
    {
      id: 3,
      title: "Software Developer",
      company: "TechCorp UK",
      location: "Birmingham",
      salary: "£35,000 - £50,000",
      type: "Full-time",
      sector: "technology",
      posted: "3 days ago",
      description: "Join our innovative tech team building cutting-edge solutions.",
      requirements: ["Bachelor's degree", "3+ years experience", "JavaScript/React"],
      benefits: ["Skilled Worker visa", "Remote work options", "Stock options"],
      featured: true,
    },
    {
      id: 4,
      title: "Teaching Assistant",
      company: "Greenfield Primary School",
      location: "Leeds",
      salary: "£18,000 - £22,000",
      type: "Full-time",
      sector: "education",
      posted: "5 days ago",
      description: "Support teachers in delivering quality education to primary school children.",
      requirements: ["Level 2 qualification", "Experience with children", "DBS check"],
      benefits: ["Term-time only", "Professional development", "Pension scheme"],
      featured: false,
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = selectedSector === "all" || job.sector === selectedSector
    const matchesLocation =
      selectedLocation === "all" || job.location.toLowerCase().includes(selectedLocation.toLowerCase())

    return matchesSearch && matchesSector && matchesLocation
  })

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case "healthcare":
        return <Heart className="h-4 w-4" />
      case "care":
        return <Users className="h-4 w-4" />
      case "technology":
        return <Briefcase className="h-4 w-4" />
      case "education":
        return <Building className="h-4 w-4" />
      default:
        return <Briefcase className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">UK Job Opportunities</h1>
        <p className="text-muted-foreground">Discover curated job opportunities with visa sponsorship available</p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger>
                <SelectValue placeholder="All Sectors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="care">Care Sector</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="manchester">Manchester</SelectItem>
                <SelectItem value="birmingham">Birmingham</SelectItem>
                <SelectItem value="leeds">Leeds</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className={`${job.featured ? "border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/10" : ""}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    {job.featured && <Badge className="bg-emerald-500 hover:bg-emerald-600">Featured</Badge>}
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-lg font-semibold text-emerald-600">
                    <Pound className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    {getSectorIcon(job.sector)}
                    <span className="text-sm text-muted-foreground capitalize">{job.sector}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
