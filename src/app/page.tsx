"use client";

import { iconURL } from "@/components/about-page";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/menu`;
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
        className="hidden sm:block sm:absolute inset-0 z-10 cursor-pointer"
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
        className="relative z-20 flex flex-col items-center justify-center sm:justify-end min-h-screen px-4 sm:pb-32 sm:pointer-events-none"
        style={{ transform: "translateY(-20px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Title */}
          <Link href="/menu">
            <Image
              src={iconURL}
              width={150}
              height={150}
              alt="Kape ni Rab Logo"
              className="rounded-full sm:hidden mx-auto border-4 border-[#402e25] hover:border-[#8b6244] transition-colors mb-4 hover:shadow-2xl cursor-pointer"
            />
          </Link>
          <h1
            className="text-[#402e25] text-8xl sm:text-9xl font-extrabold leading-none tracking-tighter mb-2 text-center pointer-events-auto"
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
            <p className="bg-[#402e25] text-center font-bold text-white hover:bg-[#8b6244] transition-colors text-lg py-2 px-8 rounded-full shadow-lg">
                Click Rab the Kape to check the menu
            </p>
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
