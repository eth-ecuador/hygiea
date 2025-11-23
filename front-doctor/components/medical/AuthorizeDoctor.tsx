"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { getAddress } from 'ethers'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { UserCheck, CheckCircle2, Loader2, AlertCircle, ShieldCheck } from "lucide-react"
import { contractAddress } from '@/config/wagmi'
import contractABI from '@/contracts/MedicalRecords.json'

export default function AuthorizeDoctor() {
  const [doctorAddress, setDoctorAddress] = useState('')
  const [checksummedAddress, setChecksummedAddress] = useState('')
  const { address: userAddress } = useAccount()

  const { writeContract, data: hash, isPending, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate Ethereum address format
    if (!doctorAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      alert('Please enter a valid wallet address (format: 0x...)')
      return
    }

    try {
      // Normalize to lowercase, then convert to checksummed
      const normalizedAddress = doctorAddress.toLowerCase()
      const checksummedAddr = getAddress(normalizedAddress)

      writeContract({
        address: contractAddress as `0x${string}`,
        abi: contractABI.abi,
        functionName: 'autorizarMedico',
        args: [checksummedAddr as `0x${string}`]
      })
    } catch (err: any) {
      console.error('Error authorizing doctor:', err)
      alert('Error: ' + (err.message || 'Could not authorize doctor'))
    }
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setDoctorAddress(value)

    // Show checksummed version
    if (value.match(/^0x[a-fA-F0-9]{40}$/)) {
      try {
        const normalizedAddress = value.toLowerCase()
        const checksummed = getAddress(normalizedAddress)
        setChecksummedAddress(checksummed)
      } catch (err) {
        setChecksummedAddress('')
      }
    } else {
      setChecksummedAddress('')
    }
  }

  // Show success message
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
              <h3 className="text-2xl font-bold text-[#0B3861] mb-2">
                Doctor Authorized!
              </h3>
              <p className="text-[#666666] mb-4">
                The doctor can now register patients and access medical records
              </p>
              <p className="text-xs font-mono text-[#666666] break-all px-4">
                {checksummedAddress || doctorAddress}
              </p>
              <Button
                onClick={() => {
                  setDoctorAddress('')
                  setChecksummedAddress('')
                }}
                className="mt-6 bg-[#0B3861] hover:bg-[#1F4E6F]"
              >
                Authorize Another Doctor
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
            <UserCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl text-[#0B3861]">Authorize Doctor</CardTitle>
            <CardDescription>
              Grant a doctor permission to register patients and access records
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Admin Notice */}
          <Alert>
            <ShieldCheck className="h-4 w-4" />
            <AlertDescription className="space-y-2">
              <p>
                <strong>Admin Only - Step 2 of 2:</strong> This function can only be called by the contract owner.
                Make sure you're connected with the admin wallet.
              </p>
              <p className="text-xs">
                <strong>Important:</strong> The doctor must register first using "Register Doctor" before
                they can be authorized here.
              </p>
            </AlertDescription>
          </Alert>

          {/* Current User */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-1">
              Your connected wallet:
            </p>
            <p className="text-xs font-mono text-blue-700 dark:text-blue-300 break-all">
              {userAddress || 'Not connected'}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="doctorAddress">Doctor Wallet Address *</Label>
            <Input
              id="doctorAddress"
              name="doctorAddress"
              value={doctorAddress}
              onChange={handleAddressChange}
              placeholder="0x..."
              required
              className="font-mono"
            />
            <p className="text-xs text-[#666666]">
              The blockchain address of the doctor you want to authorize
            </p>
            {checksummedAddress && checksummedAddress !== doctorAddress && (
              <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-xs font-semibold text-blue-900 mb-1">✓ Checksummed format:</p>
                <p className="text-xs font-mono text-blue-700 break-all">{checksummedAddress}</p>
                <p className="text-xs text-blue-600 mt-1">This format will be used automatically</p>
              </div>
            )}
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error.message.includes('user rejected')
                  ? 'Transaction was rejected'
                  : error.message.includes('Ownable')
                  ? 'Only the contract owner can authorize doctors'
                  : error.message.includes('not registered') || error.message.includes('error code 8')
                  ? 'The doctor is not registered. They must use "Register Doctor" first before being authorized.'
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
                <UserCheck className="mr-2 h-5 w-5" />
                Authorize Doctor
              </>
            )}
          </Button>

          <div className="text-xs space-y-1 text-muted-foreground bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <p><strong>What happens after authorization:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Doctor can register new patients on the blockchain</li>
              <li>Doctor can add diseases and medical history</li>
              <li>Doctor can upload medical documents</li>
              <li>Doctor can backup patient records to Filecoin</li>
            </ul>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
