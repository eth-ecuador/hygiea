"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Stethoscope, CheckCircle2, Loader2, AlertCircle, Info } from "lucide-react"
import { contractAddress } from '@/config/wagmi'
import contractABI from '@/contracts/MedicalRecords.json'

export default function RegisterDoctor() {
  const [nombreMedico, setNombreMedico] = useState('')
  const { address: userAddress } = useAccount()

  const { writeContract, data: hash, isPending, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      writeContract({
        address: contractAddress as `0x${string}`,
        abi: contractABI.abi,
        functionName: 'registrarMedico',
        args: [nombreMedico]
      })
    } catch (err: any) {
      console.error('Error registering doctor:', err)
      alert('Error: ' + (err.message || 'Could not register doctor'))
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
              <h3 className="text-2xl font-bold text-[#0B3861] mb-2">Doctor Registered!</h3>
              <p className="text-[#666666] mb-4">
                You are now registered. Wait for admin authorization to access records.
              </p>
              <p className="text-xs font-mono text-[#666666] break-all px-4 mb-4">
                {userAddress}
              </p>
              <Alert className="mb-4">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-left text-sm">
                  <strong>Next Step:</strong> The contract admin must authorize your wallet address
                  using the "Authorize Doctor" form before you can register patients and access records.
                </AlertDescription>
              </Alert>
              <Button
                onClick={() => {
                  setNombreMedico('')
                }}
                className="bg-[#0B3861] hover:bg-[#1F4E6F]"
              >
                Close
              </Button>
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
          {/* Info Alert */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Step 1 of 2:</strong> Register yourself as a doctor. After registration,
              wait for the admin to authorize your wallet before you can register patients.
            </AlertDescription>
          </Alert>

          {/* Current User */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-1">
              Your wallet address:
            </p>
            <p className="text-xs font-mono text-blue-700 dark:text-blue-300 break-all">
              {userAddress || 'Not connected'}
            </p>
          </div>

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

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error.message.includes('user rejected')
                  ? 'Transaction was rejected'
                  : error.message.includes('already registered')
                  ? 'This wallet is already registered as a doctor'
                  : `Error: ${error.message}`}
              </AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isPending || isConfirming}
            className="w-full bg-[#2B7A9B] hover:bg-[#0B3861] text-white py-6 text-lg shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-50"
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
