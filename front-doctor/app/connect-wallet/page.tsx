"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Shield, Lock, CheckCircle2, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConnectWalletPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
      // Redirect after successful connection
      setTimeout(() => {
        // window.location.href = "/dashboard"
      }, 1500)
    }, 2000)
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
                {/* Animated Logo */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3861] to-[#2B7A9B] rounded-full blur-2xl opacity-20" />
                    <div className="relative bg-gradient-to-br from-[#0B3861] to-[#2B7A9B] p-8 rounded-3xl shadow-xl">
                      <Image
                        src="/logo.png"
                        alt="Hygiea MedGuard"
                        width={120}
                        height={120}
                        className="h-28 w-28 sm:h-32 sm:w-32"
                      />
                    </div>
                  </motion.div>
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
                {!isConnected ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <Button
                      size="lg"
                      onClick={handleConnectWallet}
                      disabled={isConnecting}
                      className="w-full bg-gradient-to-r from-[#0B3861] to-[#2B7A9B] text-white hover:from-[#1F4E6F] hover:to-[#0B3861] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg py-7"
                    >
                      {isConnecting ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Connecting Wallet...
                        </>
                      ) : (
                        <>
                          <Wallet className="mr-3 h-6 w-6" />
                          Connect Wallet to Continue
                        </>
                      )}
                    </Button>

                    {/* Supported Wallets */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-[#666666] mb-3">Supported Wallets</p>
                      <div className="flex justify-center gap-4 flex-wrap">
                        {["MetaMask", "WalletConnect", "Coinbase Wallet"].map((wallet, index) => (
                          <motion.div
                            key={wallet}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                            className="px-4 py-2 rounded-full bg-[#F8FBFC] border border-[#0B3861]/10 text-xs font-medium text-[#0B3861]"
                          >
                            {wallet}
                          </motion.div>
                        ))}
                      </div>
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
                    <p className="text-[#666666]">Redirecting to your dashboard...</p>
                  </motion.div>
                )}

                {/* Info Text */}
                {!isConnected && (
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
