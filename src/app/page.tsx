"use client";

import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { Button } from "@/components/ui/button";    
import { motion } from "framer-motion";

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineRef = useRef(null);
  const coffeeObjectRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSplineClick = () => {
    // Navigate to checkout page
    window.location.href = "../menu";  
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSplineLoad = (spline: any) => {
    setIsLoaded(true);
    splineRef.current = spline;

    // Find the coffee cup object in the Spline scene
    const coffeeObject = spline.findObjectByName("Coffee Cup");
    if (coffeeObject) {
      coffeeObjectRef.current = coffeeObject;
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#ffe1b6]">
      {/* Spline 3D Object - Clickable */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        style={{ transform: "translateY(-20px)" }}
        onClick={handleSplineClick}
      >
        <Spline
          scene="https://prod.spline.design/0DswSlwrB7Ze4-xH/scene.splinecode"
          onLoad={handleSplineLoad}
        />
      </div>

      {/* Content on top of Spline */}
      <div
        className="relative z-20 flex flex-col items-center justify-end min-h-screen px-4 pb-32 pointer-events-none"
        style={{ transform: "translateY(-20px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Title */}
          <h1
            className="text-[#402e25] text-[150px] font-extrabold leading-none tracking-tighter mb-2 text-center"
            style={{
              textShadow:
                "4px 4px 8px rgba(0,0,0,0.1), inset 2px 2px 4px rgba(0,0,0,0.2)",
              letterSpacing: "-0.075em",
            }}
          >
            KAPE NI RAB
          </h1>

          {/* Menu Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/menu" passHref>
              <Button className="bg-[#402e25] text-white hover:bg-[#8b6244] transition-colors text-lg py-2 px-8 rounded-full shadow-lg mx-auto block text-center z">
                Click Rab the Kape to check the menu
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div className="absolute bottom-0 left-0 h-24 w-full text-[#402e25] text-center py-4 bg-[#ecc090] bg-opacity-80 backdrop-blur-md z-20">
        <p className="text-lg font-semibold">
          © 2024 Kape ni Rab. All rights reserved.
        </p>
      </motion.div>
    </main>
  );
}
