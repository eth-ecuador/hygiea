"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Link2, Stethoscope, Shield, Database, Users, Check, Play } from "lucide-react"
import Image from "next/image"

export default function HygeiaLandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Hygiea MedGuard" width={48} height={48} className="h-12 w-auto" />
              <span className="text-2xl font-bold text-[#0B3861]">Hygiea MedGuard</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm font-medium text-[#0B3861] hover:text-[#2B7A9B] transition-colors">
                Features
              </a>
              <a href="#security" className="text-sm font-medium text-[#0B3861] hover:text-[#2B7A9B] transition-colors">
                Security
              </a>
              <a href="#pricing" className="text-sm font-medium text-[#0B3861] hover:text-[#2B7A9B] transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-sm font-medium text-[#0B3861] hover:text-[#2B7A9B] transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-[#0B3861] text-[#0B3861] hover:bg-[#0B3861] hover:text-white bg-transparent"
                onClick={() => window.location.href = '/connect-wallet'}
              >
                Doctor Login
              </Button>
              <Button 
                className="bg-[#0B3861] text-white hover:bg-[#1F4E6F] shadow-lg transition-all hover:-translate-y-0.5"
                onClick={() => window.location.href = '/connect-wallet'}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FBFC] to-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold leading-tight text-[#0B3861] lg:text-6xl xl:text-7xl">
                Secure Patient Records, Verified by Doctors.
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed">
                The first blockchain-secured platform for immutable patient data and granular doctor access.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-[#2ECA77] text-white hover:bg-[#28b567] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                  onClick={() => window.location.href = '/connect-wallet'}
                >
                  Start Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0B3861] text-[#0B3861] hover:bg-[#0B3861] hover:text-white bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0B3861] to-[#2B7A9B] p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <Shield className="h-10 w-10 text-[#2ECA77]" />
                    <div>
                      <p className="font-semibold text-white">Blockchain Verified</p>
                      <p className="text-sm text-white/70">Immutable record keeping</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <Database className="h-10 w-10 text-[#2ECA77]" />
                    <div>
                      <p className="font-semibold text-white">Encrypted Storage</p>
                      <p className="text-sm text-white/70">Military-grade security</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <Users className="h-10 w-10 text-[#2ECA77]" />
                    <div>
                      <p className="font-semibold text-white">Granular Access</p>
                      <p className="text-sm text-white/70">Patient-controlled permissions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0B3861] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-white">2,847</p>
              <p className="mt-2 text-sm text-white/80">Providers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">156K+</p>
              <p className="mt-2 text-sm text-white/80">Records</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">99.9%</p>
              <p className="mt-2 text-sm text-white/80">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">$0</p>
              <p className="mt-2 text-sm text-white/80">Breach Incidents</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-[#0B3861] mb-4">Why Hygiea MedGuard?</h2>
            <p className="text-xl text-[#666666]">Enterprise-grade security meets seamless usability</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Lock,
                title: "End-to-End Encryption",
                description:
                  "Military-grade AES-256 encryption ensures your patient data remains completely private and secure.",
              },
              {
                icon: Link2,
                title: "Blockchain Integrity",
                description:
                  "Every record is immutably stored on blockchain, providing complete audit trails and tamper-proof verification.",
              },
              {
                icon: Stethoscope,
                title: "Doctor-Controlled Access",
                description:
                  "Granular permission system allows patients to authorize specific doctors for limited time periods.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B3861]">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#0B3861]">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-[#666666]">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="security" className="bg-[#F8FBFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-[#0B3861] mb-4">How It Works</h2>
            <p className="text-xl text-[#666666]">Simple, secure, and seamless</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Patient Onboards",
                description: "Patient creates secure account and uploads medical records with encryption",
              },
              {
                step: "02",
                title: "Doctor Requests",
                description: "Healthcare provider submits access request with credentials and purpose",
              },
              {
                step: "03",
                title: "Patient Authorizes",
                description: "Patient reviews and grants time-limited access permissions",
              },
              {
                step: "04",
                title: "Secure Access",
                description: "Doctor accesses records with full audit trail and blockchain verification",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3861] text-3xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0B3861]">{step.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div
                    className="absolute right-0 top-10 hidden h-0.5 w-full bg-[#2B7A9B] md:block"
                    style={{ left: "50%", width: "100%", zIndex: -1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-[#0B3861] mb-4">Transparent Pricing</h2>
            <p className="text-xl text-[#666666]">Choose the plan that fits your practice</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$99",
                period: "/month",
                description: "Perfect for small practices",
                features: [
                  "Up to 100 patients",
                  "5 doctor accounts",
                  "Basic analytics",
                  "Email support",
                  "99.5% uptime SLA",
                ],
                highlighted: false,
              },
              {
                name: "Professional",
                price: "$299",
                period: "/month",
                description: "Best value for growing practices",
                features: [
                  "Up to 1,000 patients",
                  "20 doctor accounts",
                  "Advanced analytics",
                  "Priority support",
                  "99.9% uptime SLA",
                  "Custom integrations",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large institutions",
                features: [
                  "Unlimited patients",
                  "Unlimited doctors",
                  "White-label solution",
                  "Dedicated support",
                  "99.99% uptime SLA",
                  "On-premise deployment",
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full ${
                    plan.highlighted
                      ? "border-[#0B3861] border-2 shadow-2xl scale-105"
                      : "border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#2ECA77] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Best Value
                      </span>
                    </div>
                  )}
                  <CardHeader className={plan.highlighted ? "bg-[#0B3861] text-white rounded-t-lg" : ""}>
                    <CardTitle className={`text-2xl ${plan.highlighted ? "text-white" : "text-[#0B3861]"}`}>
                      {plan.name}
                    </CardTitle>
                    <CardDescription className={plan.highlighted ? "text-white/90" : "text-[#666666]"}>
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-[#0B3861]"}`}>
                        {plan.price}
                      </span>
                      <span className={plan.highlighted ? "text-white/80" : "text-[#666666]"}>{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#2ECA77] flex-shrink-0 mt-0.5" />
                          <span className="text-[#666666]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-8 w-full ${
                        plan.highlighted
                          ? "bg-[#2ECA77] hover:bg-[#28b567] text-white shadow-lg"
                          : "bg-[#0B3861] hover:bg-[#1F4E6F] text-white"
                      } transition-all hover:-translate-y-0.5`}
                      size="lg"
                      onClick={() => {
                        if (plan.price !== "Custom") {
                          window.location.href = '/connect-wallet'
                        }
                      }}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0B3861] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Hygiea MedGuard" width={40} height={40} className="h-10 w-auto" />
                <span className="text-xl font-bold">Hygiea MedGuard</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Securing healthcare data with blockchain technology and military-grade encryption.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-white/70 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-white/70 hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    HIPAA Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Data Processing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p>&copy; 2025 Hygiea MedGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
