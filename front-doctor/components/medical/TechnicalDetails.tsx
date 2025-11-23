'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { ChevronDown, ChevronUp, Code, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface TechnicalDetailsProps {
  transactionHash?: string
  blockNumber?: number
  filecoinCID?: string
  dataHash?: string
  sapphireExplorer?: string
}

export function TechnicalDetails({
  transactionHash,
  blockNumber,
  filecoinCID,
  dataHash,
  sapphireExplorer = 'https://explorer.oasis.io/testnet/sapphire'
}: TechnicalDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Don't show if no data yet
  if (!transactionHash && !blockNumber && !filecoinCID && !dataHash) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4"
    >
      <Card className="border-gray-300">
        <CardContent className="pt-4">
          {/* Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-[#0B3861]" />
              <span className="font-semibold text-[#0B3861]">
                Technical Details
              </span>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-4">
                  {/* Transaction Hash */}
                  {transactionHash && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Transaction Hash
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="text-xs font-mono text-[#0B3861] break-all flex-1">
                          {transactionHash}
                        </code>
                        <a
                          href={`${sapphireExplorer}/tx/${transactionHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-[#00A8E8] hover:text-[#0B3861] transition-colors"
                          title="View on explorer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Block Number */}
                  {blockNumber && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Block
                      </p>
                      <code className="text-xs font-mono text-[#0B3861]">
                        #{blockNumber}
                      </code>
                    </div>
                  )}

                  {/* Data Hash */}
                  {dataHash && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Data Hash (SHA-256)
                      </p>
                      <code className="text-xs font-mono text-[#0B3861] break-all">
                        {dataHash}
                      </code>
                    </div>
                  )}

                  {/* Filecoin CID */}
                  {filecoinCID && (
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Filecoin CID
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="text-xs font-mono text-[#0B3861] break-all flex-1">
                          {filecoinCID}
                        </code>
                        <a
                          href={`https://calibration.filscan.io/en/address/${filecoinCID}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-[#00A8E8] hover:text-[#0B3861] transition-colors"
                          title="View on Filscan"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Data is permanently stored on the Filecoin network
                      </p>
                    </div>
                  )}

                  {/* Info Banner */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Security:</span> All data
                      is encrypted using Sapphire TEE before being stored
                      on blockchain and Filecoin.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}
