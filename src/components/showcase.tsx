"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import Image from 'next/image';

const PartnerShowcase = () => {
    const partners = useMemo(() => [
        "/placeholder.svg?height=100&width=100&text=Partner1",
        "/placeholder.svg?height=100&width=100&text=Partner2",
        "/placeholder.svg?height=100&width=100&text=Partner3",
        "/placeholder.svg?height=100&width=100&text=Partner4",
        "/placeholder.svg?height=100&width=100&text=Partner5",
        "/placeholder.svg?height=100&width=100&text=Partner6",
    ], []);

    const [loopWidth, setLoopWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const speed = 50; // Pixels per second

    useEffect(() => {
        if (containerRef.current) {
            setLoopWidth(containerRef.current.scrollWidth / 2);
        }
    }, [partners]);

    useAnimationFrame((t, delta) => {
        if (loopWidth > 0) {
            let newPosition = xPosition - (speed * delta) / 1000;
            if (Math.abs(newPosition) >= loopWidth) {
                newPosition += loopWidth;
            }
            setXPosition(newPosition);
        }
    });

    const logoElements = partners.map((partner, index) => (
        <div key={index} className="flex-shrink-0 mx-4" style={{ width: '100px' }}>
            <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
            />
        </div>
    ));

    return (
        <section className="py-12 bg-gray-50 rounded-lg">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Partners</h2>
                <div className="relative overflow-hidden">
                    <motion.div
                        ref={containerRef}
                        className="flex"
                        style={{
                            x: xPosition,
                            width: `${loopWidth * 2}px`,
                        }}
                    >
                        {logoElements}
                        {logoElements}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PartnerShowcase;