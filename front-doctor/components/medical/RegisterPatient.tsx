"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { getAddress } from 'ethers'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, CheckCircle2, Loader2 } from "lucide-react"
import { contractAddress } from '@/config/wagmi'
import contractABI from '@/contracts/MedicalRecords.json'

export default function RegisterPatient() {
  const [formData, setFormData] = useState({
    pacienteAddress: '',
    nombre: '',
    edad: '',
    sexo: 'M',
    tipoSangre: 'O+',
    direccion: '',
    telefono: '',
    email: '',
    numeroSeguroSocial: ''
  })

  const [checksummedAddress, setChecksummedAddress] = useState('')

  const { writeContract, data: hash, isPending, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate Ethereum address format
    if (!formData.pacienteAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      alert('Please enter a valid wallet address (format: 0x...)')
      return
    }

    try {
      // Normalize to lowercase, then convert to checksummed
      const normalizedAddress = formData.pacienteAddress.toLowerCase()
      const checksummedAddr = getAddress(normalizedAddress)

      writeContract({
        address: contractAddress as `0x${string}`,
        abi: contractABI.abi,
        functionName: 'registrarPaciente',
        args: [
          checksummedAddr as `0x${string}`,
          formData.nombre,
          parseInt(formData.edad),
          formData.sexo,
          formData.tipoSangre,
          formData.direccion,
          formData.telefono,
          formData.email,
          formData.numeroSeguroSocial
        ]
      })
    } catch (err: any) {
      console.error('Error registering patient:', err)
      alert('Error: ' + (err.message || 'Could not register patient'))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // If changing patient address, show checksummed version
    if (name === 'pacienteAddress' && value.match(/^0x[a-fA-F0-9]{40}$/)) {
      try {
        const normalizedAddress = value.toLowerCase()
        const checksummed = getAddress(normalizedAddress)
        setChecksummedAddress(checksummed)
      } catch (err) {
        setChecksummedAddress('')
      }
    } else if (name === 'pacienteAddress') {
      setChecksummedAddress('')
    }
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
              <h3 className="text-2xl font-bold text-[#0B3861] mb-2">Patient Registered!</h3>
              <p className="text-[#666666]">Medical record created successfully on the blockchain</p>
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
          <div className="h-12 w-12 rounded-lg bg-[#0B3861] flex items-center justify-center">
            <UserPlus className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl text-[#0B3861]">Register Patient</CardTitle>
            <CardDescription>Create a new patient medical record on the blockchain</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="pacienteAddress">Patient Wallet Address *</Label>
              <Input
                id="pacienteAddress"
                name="pacienteAddress"
                value={formData.pacienteAddress}
                onChange={handleChange}
                placeholder="0x..."
                required
                className="font-mono"
              />
              <p className="text-xs text-[#666666]">The blockchain address of the patient</p>
              {checksummedAddress && checksummedAddress !== formData.pacienteAddress && (
                <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-xs font-semibold text-blue-900 mb-1">Checksummed format:</p>
                  <p className="text-xs font-mono text-blue-700 break-all">{checksummedAddress}</p>
                  <p className="text-xs text-blue-600 mt-1">This format will be used automatically</p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="nombre">Full Name *</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edad">Age *</Label>
              <Input
                id="edad"
                name="edad"
                type="number"
                value={formData.edad}
                onChange={handleChange}
                placeholder="30"
                required
                min="0"
                max="150"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sexo">Sex *</Label>
              <Select
                value={formData.sexo}
                onValueChange={(value) => setFormData({ ...formData, sexo: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="M">Male</SelectItem>
                  <SelectItem value="F">Female</SelectItem>
                  <SelectItem value="O">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoSangre">Blood Type *</Label>
              <Select
                value={formData.tipoSangre}
                onValueChange={(value) => setFormData({ ...formData, tipoSangre: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="direccion">Address</Label>
              <Input
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="123 Main St, City, Country"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Phone</Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+1 234 567 8900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="numeroSeguroSocial">Social Security Number</Label>
              <Input
                id="numeroSeguroSocial"
                name="numeroSeguroSocial"
                value={formData.numeroSeguroSocial}
                onChange={handleChange}
                placeholder="XXX-XX-XXXX"
                className="font-mono"
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">❌ Error: {error.message}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isPending || isConfirming}
            className="w-full bg-[#0B3861] hover:bg-[#1F4E6F] text-white py-6 text-lg shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-50"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Signing Transaction...
              </>
            ) : isConfirming ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Confirming on Blockchain...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-5 w-5" />
                Register Patient
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
