"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Stethoscope, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AddDisease() {
  const [formData, setFormData] = useState({
    paciente: '',
    nombre: '',
    descripcion: '',
    gravedad: 'Leve',
    tratamiento: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
      setFormData({ paciente: '', nombre: '', descripcion: '', gravedad: 'Leve', tratamiento: '' })
      setTimeout(() => setSuccess(false), 3000)
    }, 1500)
  }

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-[#0B3861] flex items-center justify-center">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl text-[#0B3861]">Add Disease / Diagnosis</CardTitle>
            <CardDescription>Record a new medical condition for a patient</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Alert className="border-[#2ECA77] bg-[#2ECA77]/10">
              <AlertCircle className="h-4 w-4 text-[#2ECA77]" />
              <AlertDescription className="text-[#2ECA77]">
                Disease added successfully to blockchain!
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="paciente">Patient Address *</Label>
            <Input
              id="paciente"
              value={formData.paciente}
              onChange={(e) => setFormData({ ...formData, paciente: e.target.value })}
              placeholder="0x... or leave empty for yourself"
              className="font-mono"
              required
            />
            <p className="text-xs text-[#666666]">Leave your own address to add to your record</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nombre">Disease Name *</Label>
            <Input
              id="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              placeholder="E.g.: Type 2 Diabetes, Hypertension"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Description</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              placeholder="Detailed diagnosis information, symptoms, test results..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gravedad">Severity *</Label>
            <Select
              value={formData.gravedad}
              onValueChange={(value) => setFormData({ ...formData, gravedad: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Leve">Mild (Leve)</SelectItem>
                <SelectItem value="Moderada">Moderate (Moderada)</SelectItem>
                <SelectItem value="Grave">Severe (Grave)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tratamiento">Treatment Plan</Label>
            <Textarea
              id="tratamiento"
              value={formData.tratamiento}
              onChange={(e) => setFormData({ ...formData, tratamiento: e.target.value })}
              placeholder="Medications, dosages, lifestyle changes, follow-up instructions..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0B3861] hover:bg-[#1F4E6F] text-white py-6 text-lg shadow-lg transition-all hover:-translate-y-0.5"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving to Blockchain...
              </>
            ) : (
              'Save Disease Record'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
