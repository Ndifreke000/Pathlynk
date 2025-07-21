"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@pathlynk.com",
      response: "Within 24 hours",
    },
    {
      icon: Phone,
      title: "WhatsApp Support",
      description: "Quick chat support",
      contact: "+234 (0) 123 456 7890",
      response: "Within 2 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging",
      contact: "Available on website",
      response: "Instant response",
    },
  ]

  const faqs = [
    {
      question: "How much does Pathlynk cost?",
      answer:
        "Pathlynk is completely free to join! You get access to all our resources, CV templates, guides, and community support at no cost. We also offer premium features for ₦2,000/month which includes personalized CV reviews, exclusive job leads, and priority mentor matching.",
    },
    {
      question: "How long does it take to get a UK job?",
      answer:
        "Based on our success stories, most members secure UK job offers within 6-12 months. The timeline depends on your sector (e.g., medical roles typically take 8-10 months, social care roles 4-6 months, skilled worker roles 6-8 months), qualifications, and how actively you apply our guidance.",
    },
    {
      question: "Do you guarantee job placement?",
      answer:
        "While we can't guarantee job placement, we have a 96% success rate among members who actively follow our guidance. We provide all the tools, resources, and support needed, but success ultimately depends on your commitment and effort in applying our strategies.",
    },
    {
      question: "What documents do I need for UK job applications?",
      answer:
        "Essential documents include: Updated CV (UK format), Educational certificates, Professional certifications, IELTS certificate (minimum 6.5), Passport, Reference letters, and Cover letter. We provide templates and guidance for all these documents.",
    },
    {
      question: "Can I get visa sponsorship?",
      answer:
        "Yes! Many UK employers offer visa sponsorship, especially in healthcare, social care, and skilled worker roles. We maintain a database of sponsor-licensed employers and guide you on how to identify and apply to companies that can sponsor your visa.",
    },
    {
      question: "Is IELTS mandatory for all UK jobs?",
      answer:
        "IELTS is required for visa applications and most professional roles. Minimum scores vary: e.g., medical roles typically require 7.0 overall, social care roles 6.5, and skilled worker roles 6.0. We provide comprehensive IELTS preparation materials to help you achieve required scores.",
    },
    {
      question: "How does the mentorship program work?",
      answer:
        "After joining, you can request a mentor match based on your career goals. We pair you with a Nigerian professional already working in your target sector in the UK. Mentorship includes monthly video calls, WhatsApp support, CV reviews, and interview preparation.",
    },
    {
      question: "What's included in premium membership?",
      answer:
        "Premium membership (₦2,000/month) includes: Personalized CV reviews by UK professionals, Access to exclusive job leads not available publicly, Priority mentor matching within 24 hours, Weekly group coaching sessions, Direct WhatsApp access to our team, and Interview preparation with mock sessions.",
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
      {/* Header */}
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center mb-12">
        <motion.div variants={fadeIn}>
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            Contact & Support
          </Badge>
        </motion.div>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
          We're Here to{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Help You Succeed
          </span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions about your UK career journey? Need support with applications? Our team is ready to help you
          every step of the way.
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-emerald-600" />
                Send us a Message
              </CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} required />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Methods */}
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Choose the best way to reach us. We're available 7 days a week to support your UK career journey.
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                        <method.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="font-medium text-emerald-600 mb-1">{method.contact}</p>
                        <p className="text-xs text-muted-foreground">{method.response}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Office Info */}
          <motion.div variants={fadeIn}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-sm text-muted-foreground mb-2">Visit us in person</p>
                    <p className="text-sm">
                      123 Victoria Island
                      <br />
                      Lagos, Nigeria
                      <br />
                      101001
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <motion.div variants={fadeIn} initial="initial" animate="animate" className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Pathlynk, UK job applications, and the migration process.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-start gap-2 pt-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join our community of 2,500+ members and get answers from people who've successfully made the journey to
              the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Join Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                Book a Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
