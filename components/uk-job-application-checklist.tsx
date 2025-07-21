"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ListChecks, FileText, User, Briefcase, BookOpen, Users } from "lucide-react"
import { motion } from "framer-motion"

export function UKJobApplicationChecklist() {
  const [checklistItems, setChecklistItems] = useState([
    { id: "1", label: "Update CV to UK format", checked: false, icon: FileText },
    { id: "2", label: "Prepare a compelling Cover Letter", checked: false, icon: FileText },
    { id: "3", label: "Obtain IELTS certificate (if required)", checked: false, icon: BookOpen },
    { id: "4", label: "Gather educational and professional certificates", checked: false, icon: FileText },
    { id: "5", label: "Research target UK sectors and companies", checked: false, icon: Briefcase },
    { id: "6", label: "Identify visa sponsorship opportunities", checked: false, icon: Briefcase },
    { id: "7", label: "Create a professional LinkedIn profile", checked: false, icon: User },
    { id: "8", label: "Practice UK-style interview questions", checked: false, icon: User },
    { id: "9", label: "Secure professional references", checked: false, icon: Users },
    { id: "10", label: "Track all applications and follow-ups", checked: false, icon: ListChecks },
  ])

  const handleCheck = (id: string) => {
    setChecklistItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    )
  }

  const progress = (checklistItems.filter((item) => item.checked).length / checklistItems.length) * 100

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <motion.div variants={fadeIn} initial="initial" animate="animate">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-emerald-600" />
            UK Job Application Checklist
          </CardTitle>
          <CardDescription>
            Track your progress through the essential steps for your UK job application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground text-right">{Math.round(progress)}% Complete</p>

          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-3">
            {checklistItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className="flex items-center space-x-3">
                <Checkbox
                  id={`item-${item.id}`}
                  checked={item.checked}
                  onCheckedChange={() => handleCheck(item.id)}
                  className="h-5 w-5"
                />
                <Label
                  htmlFor={`item-${item.id}`}
                  className={`flex items-center gap-2 text-base font-medium cursor-pointer ${
                    item.checked ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  <item.icon className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>{item.label}</span>
                </Label>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
