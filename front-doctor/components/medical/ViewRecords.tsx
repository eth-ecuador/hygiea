"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Eye, Loader2, AlertCircle, User, Calendar, Heart, Phone, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ViewRecords() {
  const [pacienteAddress, setPacienteAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasData, setHasData] = useState(false)

  // Mock data
  const mockData = {
    afiliacion: {
      nombre: "John Doe",
      edad: 35,
      sexo: "M",
      tipoSangre: "O+",
      direccion: "123 Main St, City",
      telefono: "+1 234 567 8900",
      email: "john@example.com",
      numeroSeguroSocial: "XXX-XX-1234"
    },
    enfermedades: [
      {
        nombre: "Type 2 Diabetes",
        gravedad: "Moderada",
        descripcion: "Diagnosed in 2020, controlled with medication",
        tratamiento: "Metformin 500mg twice daily",
        fechaDiagnostico: Date.now() / 1000,
        activa: true
      }
    ],
    antecedentes: [
      {
        tipo: "Familiar",
        condicion: "Heart Disease",
        descripcion: "Father had heart attack at 60",
        relacionFamiliar: "Father"
      }
    ]
  }

  const handleSearch = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setHasData(true)
    }, 1500)
  }

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-[#0B3861] flex items-center justify-center">
            <Eye className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl text-[#0B3861]">View Medical Records</CardTitle>
            <CardDescription>Access patient medical information from the blockchain</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-3">
          <div className="flex-1 space-y-2">
            <Label htmlFor="paciente">Patient Address</Label>
            <Input
              id="paciente"
              value={pacienteAddress}
              onChange={(e) => setPacienteAddress(e.target.value)}
              placeholder="0x... or leave empty to view your own"
              className="font-mono"
            />
          </div>
          <div className="flex items-end">
            <Button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-[#2B7A9B] hover:bg-[#0B3861] text-white"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Eye className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {hasData ? (
          <div className="space-y-6">
            {/* Patient Information */}
            <Card className="border-[#0B3861]/20 bg-gradient-to-br from-white to-[#F8FBFC]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-[#2B7A9B]" />
                  <CardTitle className="text-xl text-[#0B3861]">Patient Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-[#666666]">Name</p>
                    <p className="font-semibold text-[#0B3861]">{mockData.afiliacion.nombre}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Age</p>
                    <p className="font-semibold text-[#0B3861]">{mockData.afiliacion.edad} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Sex</p>
                    <p className="font-semibold text-[#0B3861]">{mockData.afiliacion.sexo === 'M' ? 'Male' : 'Female'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Blood Type</p>
                    <Badge variant="outline" className="border-[#0B3861] text-[#0B3861]">
                      {mockData.afiliacion.tipoSangre}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666] flex items-center gap-1">
                      <Phone className="h-3 w-3" /> Phone
                    </p>
                    <p className="font-semibold text-[#0B3861]">{mockData.afiliacion.telefono}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666] flex items-center gap-1">
                      <Mail className="h-3 w-3" /> Email
                    </p>
                    <p className="font-semibold text-[#0B3861]">{mockData.afiliacion.email}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-[#666666]">Address</p>
                    <p className="font-semibold text-[#0B3861]">{mockData.afiliacion.direccion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diseases */}
            <Card className="border-[#0B3861]/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-[#2B7A9B]" />
                  <CardTitle className="text-xl text-[#0B3861]">Current Conditions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {mockData.enfermedades.length > 0 ? (
                  <div className="space-y-4">
                    {mockData.enfermedades.map((enfermedad, index) => (
                      <Card key={index} className="border-l-4 border-l-[#2B7A9B] bg-[#F8FBFC]">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-[#0B3861] text-lg">{enfermedad.nombre}</h4>
                            {enfermedad.activa && (
                              <Badge className="bg-[#2ECA77]">Active</Badge>
                            )}
                          </div>
                          <p className="text-sm text-[#666666] mb-2">{enfermedad.descripcion}</p>
                          <div className="grid gap-2 mt-3">
                            <div>
                              <span className="text-xs font-semibold text-[#666666]">Severity: </span>
                              <Badge variant="outline" className={
                                enfermedad.gravedad === 'Grave' ? 'border-red-500 text-red-500' :
                                enfermedad.gravedad === 'Moderada' ? 'border-orange-500 text-orange-500' :
                                'border-green-500 text-green-500'
                              }>
                                {enfermedad.gravedad}
                              </Badge>
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-[#666666]">Treatment: </span>
                              <span className="text-sm text-[#0B3861]">{enfermedad.tratamiento}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-[#666666]">
                              <Calendar className="h-3 w-3" />
                              Diagnosed: {new Date(enfermedad.fechaDiagnostico * 1000).toLocaleDateString()}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#666666] text-center py-4">No conditions recorded</p>
                )}
              </CardContent>
            </Card>

            {/* Medical History */}
            <Card className="border-[#0B3861]/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#2B7A9B]" />
                  <CardTitle className="text-xl text-[#0B3861]">Medical History</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {mockData.antecedentes.length > 0 ? (
                  <div className="space-y-3">
                    {mockData.antecedentes.map((ant, index) => (
                      <Card key={index} className="bg-[#F8FBFC] border-[#0B3861]/10">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <Badge variant="outline" className="border-[#2B7A9B] text-[#2B7A9B]">
                              {ant.tipo}
                            </Badge>
                            <div className="flex-1">
                              <h4 className="font-semibold text-[#0B3861]">{ant.condicion}</h4>
                              <p className="text-sm text-[#666666] mt-1">{ant.descripcion}</p>
                              {ant.relacionFamiliar && (
                                <p className="text-xs text-[#2B7A9B] mt-2">
                                  Family: {ant.relacionFamiliar}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#666666] text-center py-4">No medical history recorded</p>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Enter a patient address and click search to view their medical records
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
