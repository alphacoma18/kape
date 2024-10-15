'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

// Import the CartItem type from the menu-page file
import { CartItem } from '../menu/page'

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('credit_card')
  const router = useRouter()
  const searchParams = useSearchParams()
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const cartParam = searchParams.get('cart')
    if (cartParam) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartParam))
        setCart(parsedCart)
      } catch (error) {
        console.error('Failed to parse cart data:', error)
      }
    }
  }, [searchParams])

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const processOrder = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the order data to your backend
    console.log('Processing order for cart:', cart)
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        pending: 'Processing your order...',
        success: 'Order placed successfully! Thank you for your purchase.',
        error: 'An error occurred. Please try again.',
      }
    ).then(() => {
      router.push('/')
    })
  }

  return (
    <div className="min-h-screen bg-[#F2F0EB] text-[#1E3932] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form onSubmit={processOrder}>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="font-bold">
              Total: ${getTotalPrice()}
            </div>
            <div>
              <Label>Payment Method</Label>
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant={paymentMethod === 'credit_card' ? 'default' : 'outline'}
                  className={`flex-1 items-center justify-center space-x-2 p-4 ${
                    paymentMethod === 'credit_card' ? 'bg-[#776B5D] text-white' : ''
                  }`}
                  onClick={() => setPaymentMethod('credit_card')}
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Credit Card</span>
                </Button>
                <Button
                  type="button"
                  variant={paymentMethod === 'gcash' ? 'default' : 'outline'}
                  className={`flex-1 items-center justify-center space-x-2 p-4 ${
                    paymentMethod === 'gcash' ? 'bg-[#776B5D] text-white' : ''
                  }`}
                  onClick={() => setPaymentMethod('gcash')}
                >
                  <img src="/Gcash_logo.svg?height=20&width=20" alt="GCash" className="h-5 w-5" />
                  <span>GCash</span>
                </Button>
                <Button
                  type="button"
                  variant={paymentMethod === 'maya' ? 'default' : 'outline'}
                  className={`flex-1 items-center justify-center space-x-2 p-4 ${
                    paymentMethod === 'maya' ? 'bg-[#776B5D] text-white' : ''
                  }`}
                  onClick={() => setPaymentMethod('maya')}
                >
                  <img src="/Maya_logo.svg?height=20&width=20" alt="Maya" className="h-5 w-5" />
                  <span>Maya</span>
                </Button>
              </div>
            </div>
            {paymentMethod === 'credit_card' && (
              <>
                <div>
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" required />
                  </div>
                </div>
              </>
            )}
            {paymentMethod === 'gcash' && (
              <div>
                <Label htmlFor="gcash_number">GCash Number</Label>
                <Input id="gcash_number" placeholder="09XX XXX XXXX" required />
              </div>
            )}
            {paymentMethod === 'maya' && (
              <div>
                <Label htmlFor="maya_number">Maya Account Number</Label>
                <Input id="maya_number" placeholder="09XX XXX XXXX" required />
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <Button type="submit" className="flex-1 bg-[#776B5D] hover:bg-[#5D5448] text-white">
              <CreditCard className="mr-2 h-4 w-4" /> Pay Now
            </Button>
          </div>
        </form>
        <Link href="/">
          <Button variant="ghost" className="mt-4">
            Back to Menu
          </Button>
        </Link>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}