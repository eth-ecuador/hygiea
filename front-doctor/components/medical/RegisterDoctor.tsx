"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Stethoscope, CheckCircle2, Loader2 } from "lucide-react"

export default function RegisterDoctor() {
  const [nombreMedico, setNombreMedico] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // TODO: Implement blockchain registration
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setNombreMedico('')
      }, 3000)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="border-[#2ECA77] border-2 shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2ECA77] mb-4"
              >
                <CheckCircle2 className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#0B3861] mb-2">Doctor Registered!</h3>
              <p className="text-[#666666]">You can now be authorized by patients to access records</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-[#2B7A9B] flex items-center justify-center">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl text-[#0B3861]">Register Doctor</CardTitle>
            <CardDescription>Register as a healthcare provider to access patient records</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nombreMedico">Doctor Name *</Label>
            <Input
              id="nombreMedico"
              value={nombreMedico}
              onChange={(e) => setNombreMedico(e.target.value)}
              placeholder="Dr. Jane Smith"
              required
            />
            <p className="text-xs text-[#666666]">Your professional name as it will appear to patients</p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#2B7A9B] hover:bg-[#0B3861] text-white py-6 text-lg shadow-lg transition-all hover:-translate-y-0.5"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Registering on Blockchain...
              </>
            ) : (
              <>
                <Stethoscope className="mr-2 h-5 w-5" />
                Register as Doctor
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
