"use client";
import ContextGlobal from '@/utils/context/_global';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { Button } from './ui/button';
const Cart = () => {
    const { cart, isCartOpen, setIsCartOpen, updateCartItemQuantity, clearCart } = useContext(ContextGlobal);
    const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <motion.div
                    id="cart-sidebar"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween' }}
                    className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white p-4 shadow-lg overflow-y-auto z-30"
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
                                        <Button onClick={() => setIsCartOpen(false)} className="flex-1">Proceed to Checkout</Button>
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
    );
};

export default Cart;