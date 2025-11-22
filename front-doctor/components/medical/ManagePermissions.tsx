"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Lock, Unlock, UserCheck, UserX, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ManagePermissions() {
  const [medicoAddress, setMedicoAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState('')

  // Mock authorized doctors
  const [authorizedDoctors] = useState([
    {
      address: "0x1234...5678",
      nombre: "Dr. Jane Smith",
      fechaAutorizacion: new Date(),
      activo: true
    }
  ])

  const handleAuthorize = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSuccess('authorized')
      setTimeout(() => setSuccess(''), 3000)
      setMedicoAddress('')
    }, 1500)
  }

  const handleRevoke = async (address: string) => {
    // TODO: Implement revoke logic
    console.log('Revoking:', address)
  }

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-[#0B3861] flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl text-[#0B3861]">Manage Doctor Permissions</CardTitle>
            <CardDescription>Control who can access your medical records</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Alert className="border-[#2ECA77] bg-[#2ECA77]/10">
              <AlertCircle className="h-4 w-4 text-[#2ECA77]" />
              <AlertDescription className="text-[#2ECA77]">
                {success === 'authorized' ? 'Doctor authorized successfully!' : 'Permission revoked successfully!'}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {/* Authorize New Doctor */}
        <div className="space-y-4">
          <h3 className="font-semibold text-[#0B3861] flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            Authorize Doctor
          </h3>
          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <Label htmlFor="medicoAddress">Doctor Wallet Address</Label>
              <Input
                id="medicoAddress"
                value={medicoAddress}
                onChange={(e) => setMedicoAddress(e.target.value)}
                placeholder="0x..."
                className="font-mono"
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleAuthorize}
                disabled={isLoading || !medicoAddress}
                className="bg-[#2ECA77] hover:bg-[#28b567] text-white"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Unlock className="mr-2 h-4 w-4" />
                    Authorize
                  </>
                )}
              </Button>
            </div>
          </div>
          <p className="text-xs text-[#666666]">
            Grant a doctor access to view your medical records on the blockchain
          </p>
        </div>

        {/* Authorized Doctors List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-[#0B3861] flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            Authorized Doctors ({authorizedDoctors.length})
          </h3>

          {authorizedDoctors.length > 0 ? (
            <div className="space-y-3">
              {authorizedDoctors.map((doctor, index) => (
                <Card key={index} className="border-[#0B3861]/20 bg-[#F8FBFC]">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-[#0B3861]">{doctor.nombre}</h4>
                          {doctor.activo ? (
                            <Badge className="bg-[#2ECA77]">
                              <Unlock className="h-3 w-3 mr-1" />
                              Active
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-red-500 text-red-500">
                              <Lock className="h-3 w-3 mr-1" />
                              Revoked
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-[#666666] font-mono">{doctor.address}</p>
                        <p className="text-xs text-[#666666] mt-1">
                          Authorized: {doctor.fechaAutorizacion.toLocaleDateString()}
                        </p>
                      </div>
                      {doctor.activo && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRevoke(doctor.address)}
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          <UserX className="h-4 w-4 mr-1" />
                          Revoke
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No doctors authorized yet. Add a doctor's address to grant access to your records.
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Info Box */}
        <Alert className="border-[#2B7A9B] bg-[#F8FBFC]">
          <Lock className="h-4 w-4 text-[#2B7A9B]" />
          <AlertDescription className="text-[#666666]">
            <strong className="text-[#0B3861]">Privacy Note:</strong> Only authorized doctors can view your medical records. You can revoke access at any time.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
