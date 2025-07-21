"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Award, MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "2,500+", label: "Assisted Journeys" }, // Changed from Successful Migrations
    { icon: MapPin, value: "150+", label: "UK Cities" },
    { icon: Calendar, value: "3", label: "Years Operating" },
    { icon: Award, value: "96%", label: "Guidance Effectiveness" }, // Changed from Success Rate
  ]

  const team = [
    {
      name: "Adebayo Ogundimu",
      role: "Founder & CEO",
      background: "Former UK Administrator, migrated from Lagos to London in 2019",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Chioma Nwankwo",
      role: "Head of Mentorship",
      background: "Registered Nurse, Manchester. Helps healthcare professionals navigate UK requirements",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Emeka Okafor",
      role: "Career Advisor",
      background: "Software Engineer, Birmingham. Specializes in skilled worker visa applications",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center mb-16">
        <motion.div variants={fadeIn}>
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            Our Story
          </Badge>
        </motion.div>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
          Empowering Nigerian Dreams,{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            One Guided Journey at a Time
          </span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Founded by Nigerians who successfully migrated to the UK, Pathlynk bridges the information gap and provides
          practical guidance for achieving UK career dreams.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid lg:grid-cols-2 gap-12 mb-16"
      >
        <motion.div variants={fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to UK job opportunities for Nigerians by providing comprehensive, affordable
                guidance and building a supportive community of successful migrants who help others achieve their
                dreams.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-emerald-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A world where talented Nigerians can seamlessly transition to fulfilling careers in the UK, contributing
                to both economies while achieving personal and professional growth.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Our Story */}
      <motion.div variants={fadeIn} initial="initial" animate="animate" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pathlynk was born from personal experience. Our founder, Adebayo, spent months navigating the complex UK
              job application process in 2019, facing countless rejections and confusion about visa requirements, CV
              formatting, and interview processes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After successfully securing a UK position and helping friends and family do the same, Adebayo realized
              there was a massive information gap. Talented Nigerians were struggling not because they lacked skills,
              but because they lacked the right guidance and support system.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Pathlynk has guided over 2,500 Nigerians towards securing jobs across the UK, from major cities to
              smaller towns. We've built more than a platform - we've created a movement of mutual support and shared
              success.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Team */}
      <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Led by Nigerians who've successfully made the transition to the UK and are passionate about helping others
          achieve the same success.
        </p>
      </motion.div>

      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="text-center">
              <CardContent className="p-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.background}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
