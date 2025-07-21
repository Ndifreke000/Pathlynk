"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DollarSign, Calculator } from "lucide-react"
import { motion } from "framer-motion"

export function UKMigrationCostCalculator() {
  const [visaType, setVisaType] = useState("skilled-worker")
  const [dependents, setDependents] = useState(0)
  const [livingCostEstimate, setLivingCostEstimate] = useState("moderate")
  const [totalCost, setTotalCost] = useState(0)

  const calculateCosts = () => {
    let visaFee = 0
    let ihsSurcharge = 0 // Immigration Health Surcharge
    const documentFees = 200 // Placeholder for general document processing
    let livingCosts = 0

    // Visa Fees (simplified for example)
    switch (visaType) {
      case "skilled-worker":
        visaFee = 719 // Example for 3 years
        ihsSurcharge = 624 * 3 // £624 per year
        break
      case "health-care-worker":
        visaFee = 284
        ihsSurcharge = 0 // Exempt from IHS
        break
      case "graduate":
        visaFee = 822
        ihsSurcharge = 624 * 2 // For 2 years
        break
      default:
        break
    }

    // Add costs for dependents
    visaFee += dependents * (visaType === "skilled-worker" ? 719 : 284)
    ihsSurcharge += dependents * (visaType === "health-care-worker" ? 0 : 624 * (visaType === "graduate" ? 2 : 3))

    // Living Costs (monthly estimate, multiplied by 3 for initial settlement)
    switch (livingCostEstimate) {
      case "low":
        livingCosts = 800 * 3 // £800/month for 3 months
        break
      case "moderate":
        livingCosts = 1200 * 3 // £1200/month for 3 months
        break
      case "high":
        livingCosts = 1800 * 3 // £1800/month for 3 months
        break
      default:
        break
    }
    livingCosts += dependents * 500 * 3 // Additional for each dependent

    const calculatedTotal = visaFee + ihsSurcharge + documentFees + livingCosts
    setTotalCost(calculatedTotal)
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div variants={fadeIn} initial="initial" animate="animate">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-emerald-600" />
            UK Migration Cost Calculator
          </CardTitle>
          <CardDescription>Estimate your total costs for migrating to the UK.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="visaType">Visa Type</Label>
              <Select value={visaType} onValueChange={setVisaType}>
                <SelectTrigger id="visaType">
                  <SelectValue placeholder="Select visa type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="skilled-worker">Skilled Worker Visa</SelectItem>
                  <SelectItem value="health-care-worker">Health and Care Worker Visa</SelectItem>
                  <SelectItem value="graduate">Graduate Visa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dependents">Number of Dependents</Label>
              <Input
                id="dependents"
                type="number"
                value={dependents}
                onChange={(e) => setDependents(Number.parseInt(e.target.value) || 0)}
                min="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="livingCost">Living Cost Estimate (First 3 Months)</Label>
            <Select value={livingCostEstimate} onValueChange={setLivingCostEstimate}>
              <SelectTrigger id="livingCost">
                <SelectValue placeholder="Select living cost level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (£800/month)</SelectItem>
                <SelectItem value="moderate">Moderate (£1200/month)</SelectItem>
                <SelectItem value="high">High (£1800/month)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateCosts} className="w-full">
            Calculate Total Costs
          </Button>

          {totalCost > 0 && (
            <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
              <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-2">
                <DollarSign className="h-6 w-6" />
                Estimated Total Cost: £{totalCost.toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                This is an estimate. Actual costs may vary. Contact us for personalized guidance.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
