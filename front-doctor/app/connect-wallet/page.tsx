"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useConnect, useAccount, useSwitchChain } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Shield, Lock, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ConnectWalletPage() {
  const router = useRouter()
  const { connectors, connect, error: connectError, isPending: isConnecting } = useConnect()
  const { address, isConnected, chain } = useAccount()
  const { switchChain } = useSwitchChain()
  const [showSuccess, setShowSuccess] = useState(false)
  const [hasRedirected, setHasRedirected] = useState(false)

  useEffect(() => {
    if (isConnected && address && !hasRedirected) {
      setShowSuccess(true)
      setHasRedirected(true)
      
      // Check if on correct chain (Sapphire Testnet: 0x5aff = 23295)
      const targetChainId = 0x5aff
      if (chain?.id !== targetChainId && switchChain) {
        try {
          switchChain({ chainId: targetChainId })
        } catch (error) {
          console.log('Chain switch error:', error)
        }
      }
      
      // Redirect after showing success
      setTimeout(() => {
        router.push("/main")
      }, 2000)
    }
  }, [isConnected, address, chain, switchChain, router, hasRedirected])

  const handleConnect = async (connector: any) => {
    try {
      connect({ connector })
    } catch (error) {
      console.error('Connection error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F8FBFC] to-white relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#0B3861]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#2B7A9B]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <nav className="relative z-10 border-b border-[#0B3861]/10 bg-white/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Hygiea MedGuard" width={48} height={48} className="h-12 w-auto" />
              <span className="text-2xl font-bold text-[#0B3861]">Hygiea MedGuard</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-[#0B3861] hover:text-[#2B7A9B]">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h1 className="text-4xl font-bold text-[#0B3861] sm:text-5xl lg:text-6xl mb-4">
              You're About to Begin
            </h1>
            <p className="text-lg text-[#666666] sm:text-xl">
              Connect your wallet to access secure medical records on the blockchain
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 sm:p-12">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <Image
                    src="/gif.gif"
                    alt="Hygiea MedGuard"
                    width={300}
                    height={300}
                    className="h-72 w-102"
                    unoptimized
                  />
                </div>

                {/* Security Features */}
                <div className="grid gap-4 mb-8 sm:grid-cols-3">
                  {[
                    { icon: Shield, label: "Blockchain Secured" },
                    { icon: Lock, label: "End-to-End Encrypted" },
                    { icon: CheckCircle2, label: "HIPAA Compliant" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#F8FBFC]"
                    >
                      <feature.icon className="h-6 w-6 text-[#2B7A9B]" />
                      <span className="text-xs text-[#666666] text-center font-medium">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Connect Button */}
                {!showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="space-y-4"
                  >
                    {/* Error Message */}
                    {connectError && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {connectError.message}
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Multi-Wallet Connect Buttons */}
                    <div className="space-y-3">
                      {connectors.map((connector) => (
                        <Button
                          key={connector.id}
                          size="lg"
                          onClick={() => handleConnect(connector)}
                          disabled={isConnecting}
                          className="w-full bg-gradient-to-r from-[#0B3861] to-[#2B7A9B] text-white hover:from-[#1F4E6F] hover:to-[#0B3861] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg py-7"
                        >
                          {isConnecting ? (
                            <>
                              <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                              Connecting...
                            </>
                          ) : (
                            <>
                              <Wallet className="mr-3 h-6 w-6" />
                              Connect with {connector.name}
                            </>
                          )}
                        </Button>
                      ))}
                    </div>

                    {/* Network Info */}
                    <div className="mt-6 p-4 rounded-lg bg-[#F8FBFC] border border-[#0B3861]/10">
                      <h4 className="font-semibold text-[#0B3861] mb-2 text-sm">⚠️ Network Required</h4>
                      <p className="text-xs text-[#666666] mb-2">
                        You'll be prompted to add Sapphire Testnet to your wallet if you don't have it yet.
                      </p>
                      <ul className="text-xs text-[#666666] space-y-1">
                        <li>• <strong>Network:</strong> Sapphire Testnet</li>
                        <li>• <strong>Chain ID:</strong> 23295</li>
                      </ul>
                      <a
                        href="https://faucet.testnet.oasis.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#2B7A9B] hover:text-[#0B3861] underline mt-2 inline-block"
                      >
                        🚰 Get testnet tokens
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2ECA77] mb-4"
                    >
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#0B3861] mb-2">Wallet Connected!</h3>
                    <p className="text-[#666666] mb-2">Address: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
                    <p className="text-[#666666]">Redirecting to your dashboard...</p>
                  </motion.div>
                )}

                {/* Info Text */}
                {!showSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="mt-8 text-center"
                  >
                    <p className="text-sm text-[#666666] leading-relaxed">
                      By connecting your wallet, you agree to our{" "}
                      <a href="#" className="text-[#2B7A9B] hover:text-[#0B3861] underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[#2B7A9B] hover:text-[#0B3861] underline">
                        Privacy Policy
                      </a>
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-[#666666]">
              Need help?{" "}
              <a href="#" className="text-[#2B7A9B] hover:text-[#0B3861] font-medium">
                Contact Support
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
