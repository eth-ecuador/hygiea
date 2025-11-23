'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Circle, Database, Lock, Upload, Link2, FileCheck, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

export type RegistrationStep =
  | 'validating'
  | 'connecting'
  | 'encrypting'
  | 'registering'
  | 'preparing-backup'
  | 'encrypting-filecoin'
  | 'uploading-filecoin'
  | 'storing-cid'
  | 'completed'

interface RegistrationProgressProps {
  currentStep: RegistrationStep
  patientName?: string
  transactionHash?: string
  filecoinCID?: string
  dataHash?: string
}

interface Step {
  id: RegistrationStep
  title: string
  description: string
  icon: typeof Database
  color: string
}

const steps: Step[] = [
  {
    id: 'validating',
    title: 'Validating Data',
    description: 'Verifying patient information',
    icon: FileCheck,
    color: '#FFB800'
  },
  {
    id: 'connecting',
    title: 'Connecting to Sapphire',
    description: 'Establishing blockchain connection',
    icon: Link2,
    color: '#00A8E8'
  },
  {
    id: 'encrypting',
    title: 'Encrypting Data',
    description: 'Protecting information with TEE',
    icon: Lock,
    color: '#9B59B6'
  },
  {
    id: 'registering',
    title: 'Registering on Blockchain',
    description: 'Storing encrypted medical record',
    icon: Database,
    color: '#E74C3C'
  },
  {
    id: 'preparing-backup',
    title: 'Preparing Backup',
    description: 'Organizing data for Filecoin',
    icon: FileCheck,
    color: '#3498DB'
  },
  {
    id: 'encrypting-filecoin',
    title: 'Encrypting for Filecoin',
    description: 'Second layer of encryption',
    icon: Lock,
    color: '#9B59B6'
  },
  {
    id: 'uploading-filecoin',
    title: 'Uploading to Filecoin',
    description: 'Permanent decentralized storage',
    icon: Upload,
    color: '#2ECA77'
  },
  {
    id: 'storing-cid',
    title: 'Storing CID',
    description: 'Linking Filecoin with blockchain',
    icon: Link2,
    color: '#00A8E8'
  },
  {
    id: 'completed',
    title: 'Completed!',
    description: 'Patient successfully registered',
    icon: CheckCircle2,
    color: '#2ECA77'
  }
]

export function RegistrationProgress({ currentStep, patientName, transactionHash, filecoinCID, dataHash }: RegistrationProgressProps) {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep)

  return (
    <Card className="border-[#00A8E8] border-2 shadow-xl">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0B3861] mb-2">
              Registering Patient
            </h3>
            {patientName && (
              <p className="text-[#666666]">
                {patientName}
              </p>
            )}
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isCompleted = index < currentStepIndex || (currentStep === 'completed' && index === currentStepIndex)
              const isCurrent = index === currentStepIndex && currentStep !== 'completed'
              const isPending = index > currentStepIndex

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
                    isCurrent
                      ? 'bg-[#00A8E8]/10 border-2 border-[#00A8E8]'
                      : isCompleted
                      ? 'bg-[#2ECA77]/10 border border-[#2ECA77]/30'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? 'bg-[#2ECA77]'
                      : isCurrent
                      ? 'bg-[#00A8E8]'
                      : 'bg-gray-300'
                  }`}>
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle2 className="h-6 w-6 text-white" />
                      </motion.div>
                    ) : isCurrent ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                    ) : (
                      <Circle className="h-6 w-6 text-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold ${
                      isCurrent ? 'text-[#0B3861]' : isCompleted ? 'text-[#2ECA77]' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${
                      isCurrent ? 'text-[#666666]' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>

                    {isCurrent && (
                      <motion.div
                        className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="h-full bg-[#00A8E8]"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    {isCurrent && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Loader2 className="h-5 w-5 text-[#00A8E8] animate-spin" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm text-[#666666] mb-2">
              <span>Overall Progress</span>
              <span className="font-semibold">
                {Math.round((currentStepIndex / (steps.length - 1)) * 100)}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00A8E8] to-[#2ECA77]"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {currentStepIndex >= 4 && currentStepIndex < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-[#0B3861] mb-1">
                    Filecoin Backup
                  </h5>
                  <p className="text-sm text-[#666666]">
                    Data is being automatically backed up on Filecoin,
                    a decentralized storage network. This ensures the
                    permanence and availability of medical records.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
