"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  Coffee,
  Croissant,
  Grid,
  IceCream,
  Leaf,
  Menu,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuItem } from "@/utils/context/_global";
import GlobalContext from "@/utils/context/_global";
import { useContext } from "react";
import Cart from "@/components/cart";
import Image from "next/image";

const menuItems: MenuItem[] = [
  { id: 1, name: "Caffe Latte", description: "Rich espresso with steamed milk", price: 3.95, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1280px-Caffe_Latte_at_Pulse_Cafe.jpg", category: "Hot Coffees" },
  { id: 2, name: "Cappuccino", description: "Espresso with steamed milk foam", price: 3.95, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1920px-Cappuccino_at_Sightglass_Coffee.jpg", category: "Hot Coffees" },
  { id: 3, name: "Caramel Macchiato", description: "Espresso with vanilla syrup and caramel", price: 4.45, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Macchiato_%287199366530%29.jpg/1280px-Macchiato_%287199366530%29.jpg", category: "Hot Coffees" },
  { id: 4, name: "Iced Coffee", description: "Freshly brewed coffee served chilled", price: 2.95, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg/1024px-Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg", category: "Cold Coffees" },
  { id: 5, name: "Cold Brew", description: "Slow-steeped for smooth taste", price: 3.45, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nitro_Cold_Brew.jpg/800px-Nitro_Cold_Brew.jpg", category: "Cold Coffees" },
  { id: 6, name: "Iced Caramel Macchiato", description: "Espresso, milk, vanilla, and caramel", price: 4.45, image: "https://www.allrecipes.com/thmb/gMKrji54zxfPBd-wkIX0peoh24g=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg", category: "Cold Coffees" },
  { id: 7, name: "Chai Tea Latte", description: "Black tea with spices and steamed milk", price: 3.95, image: "https://fitfoodiefinds.com/wp-content/uploads/2021/09/Chai-Tea-Latte-05.jpg", category: "Tea" },
  { id: 8, name: "Green Tea Latte", description: "Green tea blended with milk", price: 3.95, image: "https://primulaproducts.com/cdn/shop/articles/jackieo_Youve_been_drinking_matcha_green_tea_latte_for_a_few_w_f5899c8d-f20b-4331-b1a8-d1eb1736d367_900x.png?v=1687789713", category: "Tea" },
  { id: 9, name: "Chocolate Croissant", description: "Flaky croissant filled with rich chocolate", price: 2.75, image: "https://ruokala.sg/cdn/shop/articles/ruokala-gourmet-chocolate-croissants.jpg?v=1707194100&width=1000", category: "Food" },
  { id: 10, name: "Blueberry Muffin", description: "Moist muffin with blueberries", price: 2.45, image: "https://cambreabakes.com/wp-content/uploads/2024/03/bakery-style-blueberry-muffins-featured-2.jpg", category: "Food" },
  { id: 11, name: "Vanilla Bean Latte", description: "Espresso with steamed milk and vanilla flavor", price: 4.25, image: "https://assets.surlatable.com/m/2ee217309ac4f8ba/72_dpi_webp-REC-506950_VanillaLatte.jpg", category: "Hot Coffees" },
  { id: 12, name: "Matcha Latte", description: "Matcha green tea whisked with steamed milk", price: 4.5, image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg", category: "Tea" },
  { id: 13, name: "Espresso", description: "Strong and bold shot of espresso", price: 2.5, image: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg", category: "Hot Coffees" },
  { id: 14, name: "Turmeric Latte", description: "A warming drink with turmeric, milk, and spices", price: 4.0, image: "https://sweetpotatosoul.com/wp-content/uploads/2024/02/turmeric-latte-in-mug-819x1024.jpeg", category: "Tea" },
  { id: 15, name: "Peach Iced Tea", description: "Refreshing iced tea infused with peach flavor", price: 2.95, image: "https://delight-fuel.com/wp-content/uploads/2020/07/Peach_Ice_Tea_3-735x1103.jpg", category: "Cold Teas" },
  { id: 16, name: "Banana Bread", description: "Moist banana bread with walnuts", price: 2.95, image: "https://www.onceuponachef.com/images/2011/04/Best-Banana-Bread-1200x1370.jpg", category: "Food" },
  { id: 17, name: "Almond Croissant", description: "Delicious almond-filled croissant", price: 3.25, image: "https://olivesnthyme.com/wp-content/uploads/2024/04/Almond-Croissant-21.jpg", category: "Food" },
  { id: 18, name: "Matcha Chai Latte", description: "A blend of matcha and chai spices with steamed milk", price: 4.75, image: "https://cookhousediary.com/wp-content/uploads/2023/04/matcha-chai-latte-cover.jpeg", category: "Tea" },
  { id: 19, name: "Pumpkin Spice Latte", description: "Seasonal favorite with pumpkin and spices", price: 4.5, image: "https://www.ambitiouskitchen.com/wp-content/uploads/2021/09/Pumpkin-Spice-Latte-4.jpg", category: "Hot Coffees" },
  { id: 20, name: "Lemon Tart", description: "Tangy lemon tart with a buttery crust", price: 3.5, image: "https://www.elmundoeats.com/wp-content/uploads/2022/03/RC-Healthy-lemon-tarts-on-a-rack-view-from-front-2.jpg", category: "Food" },
];

const categoryIcons = {
  "All Items": Grid,
  "Hot Coffees": Coffee,
  "Cold Coffees": IceCream,
  Tea: Leaf,
  Food: Croissant,
};

export default function MenuPage() {
  const { cart, setCart, isCartOpen, setIsCartOpen } = useContext(GlobalContext);
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const cartSidebar = document.getElementById("cart-sidebar");
      const cartButton = document.getElementById("cart-button");
      if (
        isCartOpen &&
        cartSidebar &&
        !cartSidebar.contains(event.target as Node) &&
        event.target !== cartButton
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCartOpen, setIsCartOpen]);

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    toast.success(`Added ${item.name} to cart`);
  };


  return (
    <div className="min-h-screen bg-[#F2F0EB] text-[#1E3932]">
      <nav className="bg-[#776B5D] text-white p-2 sticky top-0 w-full z-10">
  <div className="flex items-center justify-between">
    {/* Hamburger Menu Button */}
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-white"
    >
      <Menu className="h-6 w-6" />
    </Button>

    {/* Centered Menu Items */}
    <div className="flex-1 flex justify-center">
      {isMobile ? (
        <div className="flex justify-center overflow-x-auto space-x-2 px-4">
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              className={`flex items-center justify-center space-x-2 ${
                activeCategory === category ? "bg-white text-[#776B5D]" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <Icon className="h-6 w-6" />
            </Button>
          ))}
        </div>
      ) : (
        <ul className="flex justify-center space-x-2 flex-wrap">
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <li key={category}>
              <Button
                variant={activeCategory === category ? "secondary" : "ghost"}
                className={`flex items-center space-x-2 ${
                  activeCategory === category ? "bg-white text-[#776B5D]" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <Icon className="h-5 w-5" />
                <span>{category}</span>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</nav>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-lg z-20"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-2 right-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <ul className="mt-8 space-y-4">
              <li>
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-lg font-semibold">
                  About
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {activeCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems
            .filter(
              (item) =>
                activeCategory === "All Items" || item.category === activeCategory
            )
            .map((item) => (
              <Card
                key={item.id}
                className="bg-white border-[#776B5D] border-opacity-20 flex flex-col"
              >
                <CardHeader>
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  width={500} // Specify the width
                  height={192} // Specify the height
                />
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">${item.price.toFixed(2)}</p>
                    {categoryIcons[item.category as keyof typeof categoryIcons] && (
                      <span className="text-gray-500">
                        {React.createElement(
                          categoryIcons[item.category as keyof typeof categoryIcons],
                          { className: "h-5 w-5" }
                        )}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => addToCart(item)}
                    className="w-full bg-[#776B5D] hover:bg-[#5D5448] text-white"
                  >
                    Add to Order
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </main>

      <Button
        id="cart-button"
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 bg-[#776B5D] hover:bg-[#5D5448] text-white shadow-lg"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingBag className="h-6 w-6" />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </Button>
      
      

      <Cart />

      <ToastContainer position="bottom-right" autoClose={1500} />
    </div>
  );
}