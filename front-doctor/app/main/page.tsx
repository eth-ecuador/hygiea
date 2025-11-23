"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAccount, useDisconnect } from "wagmi"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  UserPlus,
  Stethoscope,
  ClipboardList,
  FileHeart,
  Eye,
  Shield,
  Lock,
  LogOut,
  Home,
  Database
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Import components
import RegisterPatient from "@/components/medical/RegisterPatient"
import RegisterDoctor from "@/components/medical/RegisterDoctor"
import AuthorizeDoctor from "@/components/medical/AuthorizeDoctor"
import ViewRecords from "@/components/medical/ViewRecords"
import AddDisease from "@/components/medical/AddDisease"
import ManagePermissions from "@/components/medical/ManagePermissions"
import AddHistory from "@/components/medical/AddHistory"
import BackupToFilecoin from "@/components/medical/BackupToFilecoin"
import { DepositUSDFC } from "@/components/medical/DepositUSDFC"
import { useAutoFilecoinSync } from "@/hooks/useAutoFilecoinSync"

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("register")
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  // 🚀 Auto-sync to Filecoin when patient data changes
  useAutoFilecoinSync({
    enabled: isConnected,
    callerAddress: address, // Pass the connected wallet address for authorization
    onSuccess: (cid) => {
      console.log('✅ Automatic Filecoin sync successful:', cid)
    },
    onError: (error) => {
      console.error('❌ Automatic Filecoin sync failed:', error)
    },
  })

  // Redirect to connect-wallet if not connected (only once on mount)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isConnected) {
        router.push('/connect-wallet')
      } else {
        setIsChecking(false)
      }
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  if (isChecking || !isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-[#F8FBFC] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B3861] mx-auto"></div>
          <p className="mt-4 text-[#666666]">Loading...</p>
        </div>
      </div>
    )
  }

  const walletAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ""

  const tabs = [
    { id: "register", label: "Register", icon: UserPlus },
    { id: "diseases", label: "Diseases", icon: Stethoscope },
    { id: "history", label: "History", icon: ClipboardList },
    { id: "filecoin", label: "Filecoin Backup", icon: Database },
    { id: "view", label: "View Records", icon: Eye },
    { id: "permissions", label: "Permissions", icon: Lock },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F8FBFC] to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#0B3861]/10 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Hygiea MedGuard" width={48} height={48} className="h-12 w-auto" />
              <div>
                <span className="block text-2xl font-bold text-[#0B3861]">Hygiea MedGuard</span>
                <span className="block text-xs text-[#666666]">Medical Records Dashboard</span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              {/* Wallet Info */}
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F8FBFC] border border-[#0B3861]/10">
                <div className="h-2 w-2 rounded-full bg-[#2ECA77] animate-pulse" />
                <div className="text-sm">
                  <p className="text-xs text-[#666666]">Connected</p>
                  <p className="font-mono text-[#0B3861] font-semibold">{walletAddress}</p>
                </div>
              </div>

              <Link href="/">
                <Button variant="outline" className="border-[#0B3861]/20 text-[#0B3861] hover:bg-[#0B3861] hover:text-white">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>

              <Button 
                variant="ghost" 
                className="text-[#666666] hover:text-[#0B3861]"
                onClick={() => {
                  disconnect()
                  setTimeout(() => {
                    router.push('/connect-wallet')
                  }, 300)
                }}
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-none shadow-lg bg-gradient-to-r from-[#0B3861] to-[#2B7A9B] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-10">
              <FileHeart className="h-48 w-48" />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl">Welcome to Your Medical Dashboard</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Manage your medical records securely on the blockchain
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#2ECA77]" />
                  <span className="text-sm">Blockchain Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-[#2ECA77]" />
                  <span className="text-sm">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-[#2ECA77]" />
                  <span className="text-sm">You Control Access</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto p-0">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="data-[state=active]:bg-[#0B3861] data-[state=active]:text-white bg-white border border-[#0B3861]/10 hover:border-[#2B7A9B] transition-all shadow-sm data-[state=active]:shadow-lg h-auto py-4"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {tab.label}
                  </TabsTrigger>
                )
              })}
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="register" className="space-y-6 mt-0">
                  <RegisterPatient />
                  <div className="grid gap-6 md:grid-cols-2">
                    <RegisterDoctor />
                    <AuthorizeDoctor />
                  </div>
                </TabsContent>

                <TabsContent value="diseases" className="mt-0">
                  <AddDisease />
                </TabsContent>

                <TabsContent value="history" className="mt-0">
                  <AddHistory />
                </TabsContent>

                <TabsContent value="filecoin" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2">
                    <DepositUSDFC />
                    <BackupToFilecoin />
                  </div>
                </TabsContent>

                <TabsContent value="view" className="mt-0">
                  <ViewRecords />
                </TabsContent>

                <TabsContent value="permissions" className="mt-0">
                  <ManagePermissions />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-[#0B3861]/10 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#666666]">
              <Shield className="h-4 w-4 text-[#2B7A9B]" />
              <span>All data is encrypted on Sapphire blockchain</span>
            </div>
            <div className="text-sm text-[#666666]">
              <span className="font-semibold text-[#0B3861]">Sapphire Testnet</span>
              <span className="mx-2">•</span>
              <a 
                href="https://explorer.oasis.io/testnet/sapphire" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2B7A9B] hover:text-[#0B3861] underline"
              >
                Explorer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
