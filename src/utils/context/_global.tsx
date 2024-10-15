"use client";
import { ReactNode, createContext, useState } from "react";
export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};
import { Dispatch, SetStateAction } from "react";
export type CartItem = MenuItem & { quantity: number; };
import { toast } from 'react-toastify';

interface IContextGlobal {
    setCart: Dispatch<SetStateAction<CartItem[]>>;
    cart: CartItem[];
    isCartOpen: boolean;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>;
    updateCartItemQuantity: (id: number, delta: number) => void;
    clearCart: () => void;
}
const ContextGlobal = createContext<IContextGlobal>({} as IContextGlobal);
export default ContextGlobal;

interface Props {
    children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const updateCartItemQuantity = (id: number, delta: number) => {
        setCart((prevCart) =>
            prevCart.reduce((acc, item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + delta;
                    return newQuantity > 0 ? [...acc, { ...item, quantity: newQuantity }] : acc;
                }
                return [...acc, item];
            }, [] as CartItem[])
        );
    };

    const clearCart = () => {
        setCart([]);
        toast.info('Cart cleared');
    };

    return (
        <ContextGlobal.Provider value={{
            setCart, cart,
            isCartOpen, setIsCartOpen,
            updateCartItemQuantity,
            clearCart
        }}>
            {children}
        </ContextGlobal.Provider>
    );
};