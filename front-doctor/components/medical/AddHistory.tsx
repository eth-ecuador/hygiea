"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ClipboardList, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AddHistory() {
  const [formData, setFormData] = useState({
    paciente: '',
    tipo: 'Personal',
    condicion: '',
    descripcion: '',
    relacionFamiliar: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
      setFormData({ paciente: '', tipo: 'Personal', condicion: '', descripcion: '', relacionFamiliar: '' })
      setTimeout(() => setSuccess(false), 3000)
    }, 1500)
  }

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-[#0B3861] flex items-center justify-center">
            <ClipboardList className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl text-[#0B3861]">Add Medical History</CardTitle>
            <CardDescription>Record personal or family medical history</CardDescription>
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
                Medical history added successfully!
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
              placeholder="0x..."
              className="font-mono"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tipo">History Type *</Label>
            <Select
              value={formData.tipo}
              onValueChange={(value) => setFormData({ ...formData, tipo: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Personal">Personal History</SelectItem>
                <SelectItem value="Familiar">Family History</SelectItem>
                <SelectItem value="Quirurgico">Surgical History</SelectItem>
                <SelectItem value="Alergias">Allergies</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condicion">Condition / Event *</Label>
            <Input
              id="condicion"
              value={formData.condicion}
              onChange={(e) => setFormData({ ...formData, condicion: e.target.value })}
              placeholder="E.g.: Heart Disease, Surgery, Allergy to Penicillin"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Description</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              placeholder="Additional details, dates, outcomes..."
              rows={4}
            />
          </div>

          {formData.tipo === 'Familiar' && (
            <div className="space-y-2">
              <Label htmlFor="relacionFamiliar">Family Relationship</Label>
              <Input
                id="relacionFamiliar"
                value={formData.relacionFamiliar}
                onChange={(e) => setFormData({ ...formData, relacionFamiliar: e.target.value })}
                placeholder="E.g.: Father, Mother, Sibling"
              />
            </div>
          )}

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
              'Save Medical History'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
