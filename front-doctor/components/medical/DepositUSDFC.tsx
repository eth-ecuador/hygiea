'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function DepositUSDFC() {
  const { address, isConnected } = useAccount()
  const [amount, setAmount] = useState('0.1')
  const [isDepositing, setIsDepositing] = useState(false)
  const [status, setStatus] = useState<string>('')

  const depositUSDFC = async () => {
    if (!isConnected || !address) {
      setStatus('❌ Please connect your wallet first')
      return
    }

    try {
      setIsDepositing(true)
      setStatus('🔄 Switching to Filecoin Calibration network...')

      // Switch to Filecoin Calibration
      const FILECOIN_CALIBRATION_CHAIN_ID = '0x4cb2f' // 314159 in hex

      try {
        await window.ethereum?.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: FILECOIN_CALIBRATION_CHAIN_ID }],
        })
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          await window.ethereum?.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: FILECOIN_CALIBRATION_CHAIN_ID,
                chainName: 'Filecoin - Calibration testnet',
                nativeCurrency: {
                  name: 'tFIL',
                  symbol: 'tFIL',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc.ankr.com/filecoin_testnet'],
                blockExplorerUrls: ['https://calibration.filscan.io'],
              },
            ],
          })
        }
      }

      setStatus('🔄 Initializing Synapse SDK...')

      // Import Synapse SDK
      const { Synapse, RPC_URLS } = await import('@filoz/synapse-sdk')
      const { BrowserProvider, parseUnits, MaxUint256 } = await import('ethers')

      // Create provider and signer
      const provider = new BrowserProvider(window.ethereum!)
      const signer = await provider.getSigner()

      // Initialize Synapse
      const synapse = await Synapse.create({
        signer,
        rpcURL: RPC_URLS.calibration.http,
      })

      setStatus('💰 Depositing USDFC to Synapse...')

      // Convert amount to wei (USDFC uses 18 decimals - standard ERC-20)
      const depositAmount = parseUnits(amount, 18)

      // Get Warm Storage address
      const warmStorageAddress = synapse.getWarmStorageAddress()

      console.log('Deposit details:', {
        amount: depositAmount.toString(),
        warmStorageAddress,
        address,
      })

      // Deposit and approve in single transaction
      const tx = await synapse.payments.depositWithPermitAndApproveOperator(
        depositAmount,
        warmStorageAddress,
        MaxUint256,
        MaxUint256,
        30 * 2880 // EPOCHS_PER_MONTH (30 days)
      )

      setStatus('⏳ Waiting for transaction confirmation...')
      await tx.wait()

      setStatus(`✅ Successfully deposited ${amount} USDFC! You can now upload to Filecoin.`)
    } catch (error: any) {
      console.error('Deposit failed:', error)
      setStatus(`❌ Error: ${error.message || 'Deposit failed'}`)
    } finally {
      setIsDepositing(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deposit USDFC for Filecoin Storage</CardTitle>
        <CardDescription>
          Deposit USDFC tokens to Synapse to pay for automatic Filecoin uploads
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Amount (USDFC)</label>
          <Input
            type="number"
            step="0.01"
            min="0.06"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.1"
            disabled={isDepositing}
          />
          <p className="text-xs text-muted-foreground">
            Minimum: 0.06 USDFC. Recommended: 0.1+ USDFC for multiple uploads.
          </p>
        </div>

        <Button
          onClick={depositUSDFC}
          disabled={!isConnected || isDepositing}
          className="w-full"
        >
          {isDepositing ? 'Depositing...' : 'Deposit USDFC to Synapse'}
        </Button>

        {status && (
          <div className={`text-sm p-3 rounded-md ${
            status.includes('✅')
              ? 'bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100'
              : status.includes('❌')
              ? 'bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100'
              : 'bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100'
          }`}>
            {status}
          </div>
        )}

        <div className="text-xs space-y-1 text-muted-foreground">
          <p><strong>What this does:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Deposits USDFC into Synapse&apos;s payment contract on Filecoin</li>
            <li>Approves Warm Storage service to use your deposited funds</li>
            <li>Required for automatic Filecoin uploads when registering patients</li>
            <li>You need tFIL in your wallet for gas fees</li>
          </ul>
        </div>

        <div className="text-xs p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-md text-yellow-900 dark:text-yellow-100">
          <strong>Note:</strong> This will switch your wallet to Filecoin Calibration network temporarily.
        </div>
      </CardContent>
    </Card>
  )
}
