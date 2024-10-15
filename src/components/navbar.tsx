"use client";
import ContextGlobal from '@/utils/context/_global';
import { ShoppingBag } from 'lucide-react';
import { useContext } from 'react';
import { Button } from './ui/button';
const Navbar = () => {
    const { cart, setIsCartOpen, isCartOpen } = useContext(ContextGlobal);
    return (
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
    );
};

export default Navbar;