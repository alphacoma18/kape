'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X, Plus, Minus, Coffee, IceCream, Leaf, Croissant, Grid, Trash2, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

export type CartItem = MenuItem & { quantity: number }

const menuItems: MenuItem[] = [
  { id: 1, name: 'Caffe Latte', description: 'Rich espresso with steamed milk', price: 3.95, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/latte.jpg', category: 'Hot Coffees' },
  { id: 2, name: 'Cappuccino', description: 'Espresso with steamed milk foam', price: 3.95, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/cappuccino.jpg', category: 'Hot Coffees' },
  { id: 3, name: 'Caramel Macchiato', description: 'Espresso with vanilla syrup and caramel', price: 4.45, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/caramel-macchiato.jpg', category: 'Hot Coffees' },
  { id: 4, name: 'Iced Coffee', description: 'Freshly brewed coffee served chilled', price: 2.95, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/iced-coffee.jpg', category: 'Cold Coffees' },
  { id: 5, name: 'Cold Brew', description: 'Slow-steeped for smooth taste', price: 3.45, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/cold-brew.jpg', category: 'Cold Coffees' },
  { id: 6, name: 'Iced Caramel Macchiato', description: 'Espresso, milk, vanilla, and caramel', price: 4.45, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/iced-caramel-macchiato.jpg', category: 'Cold Coffees' },
  { id: 7, name: 'Chai Tea Latte', description: 'Black tea with spices and steamed milk', price: 3.95, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/chai-tea-latte.jpg', category: 'Tea' },
  { id: 8, name: 'Green Tea Latte', description: 'Green tea blended with milk', price: 3.95, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/green-tea-latte.jpg', category: 'Tea' },
  { id: 9, name: 'Chocolate Croissant', description: 'Flaky croissant with chocolate', price: 2.75, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/chocolate-croissant.jpg', category: 'Food' },
  { id: 10, name: 'Blueberry Muffin', description: 'Moist muffin with blueberries', price: 2.45, image: 'https://ik.imagekit.io/vhveqppefvk/coffee-shop/blueberry-muffin.jpg', category: 'Food' },
]

const categoryIcons = {
  'All Items': Grid,
  'Hot Coffees': Coffee,
  'Cold Coffees': IceCream,
  'Tea': Leaf,
  'Food': Croissant,
}

export default function Component() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All Items')
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const cartSidebar = document.getElementById('cart-sidebar')
      const cartButton = document.getElementById('cart-button')
      if (isCartOpen && cartSidebar && !cartSidebar.contains(event.target as Node) && event.target !== cartButton) {
        setIsCartOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isCartOpen])

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
    toast.success(`Added ${item.name} to cart`)
  }

  const updateCartItemQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta
          return newQuantity > 0 ? [...acc, { ...item, quantity: newQuantity }] : acc
        }
        return [...acc, item]
      }, [] as CartItem[])
    )
  }

  const clearCart = () => {
    setCart([])
    toast.info('Cart cleared')
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  return (
    <div className="min-h-screen bg-[#F2F0EB] text-[#1E3932]">
      <header className="bg-[#776B5D] text-white p-4 flex justify-between items-center sticky top-0 z-20">
        <h1 className="text-2xl font-bold">Kape ni Rab</h1>
        <Button id="cart-button" variant="ghost" size="icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          <ShoppingBag className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-[#C41E3A] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Button>
      </header>

      <nav className="bg-[#776B5D] text-white p-2 sticky top-[60px] z-10">
        {isMobile ? (
          <Slider {...sliderSettings} className="mx-8">
            {Object.entries(categoryIcons).map(([category, Icon]) => (
              <div key={category} className="px-1">
                <Button
                  variant={activeCategory === category ? "secondary" : "ghost"}
                  className={`w-full flex items-center justify-center space-x-2 ${activeCategory === category ? 'bg-white text-[#776B5D]' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{category}</span>
                </Button>
              </div>
            ))}
          </Slider>
        ) : (
          <ul className="flex justify-center space-x-2 flex-wrap">
            {Object.entries(categoryIcons).map(([category, Icon]) => (
              <li key={category}>
                <Button
                  variant={activeCategory === category ? "secondary" : "ghost"}
                  className={`flex items-center space-x-2 ${activeCategory === category ? 'bg-white text-[#776B5D]' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category}</span>
                </Button>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{activeCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems
            .filter((item) => activeCategory === 'All Items' || item.category === activeCategory)
            .map((item) => (
              <Card key={item.id} className="bg-white border-[#776B5D] border-opacity-20">
                <CardHeader>
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">${item.price.toFixed(2)}</p>
                    {categoryIcons[item.category as keyof typeof categoryIcons] && (
                      <span className="text-gray-500">
                        {React.createElement(categoryIcons[item.category as keyof typeof categoryIcons], { className: "h-5 w-5" })}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => addToCart(item)} className="w-full bg-[#776B5D] hover:bg-[#5D5448] text-white">
                    Add to Order
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </main>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            id="cart-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white p-4 shadow-lg overflow-y-auto z-30"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Order</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            {cart.length === 0 ? (
              <p>Your order is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center">
                      <Button variant="outline" size="icon" onClick={() => updateCartItemQuantity(item.id, -1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => updateCartItemQuantity(item.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <p className="font-bold text-lg">Total: ${getTotalPrice()}</p>
                  <div className="flex gap-2 mt-4">
                    <Link href={`/checkout?cart=${encodeURIComponent(JSON.stringify(cart))}`}>
                      <Button className="flex-1">Proceed to Checkout</Button>
                    </Link>
                    <Button onClick={clearCart} variant="outline" className="flex-1">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}

function CustomPrevArrow(props: any) {
  const { onClick } = props
  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
  )
}

function CustomNextArrow(props: any) {
  const { onClick } = props
  return (
    
    <Button
      variant="outline"
      size="icon"
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}