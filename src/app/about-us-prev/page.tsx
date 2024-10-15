"use client";
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Coffee, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState('mission');
    const [activeCommitment, setActiveCommitment] = useState(0);
    const partners = [
        "/placeholder.svg?height=100&width=100&text=Partner1",
        "/placeholder.svg?height=100&width=100&text=Partner2",
        "/placeholder.svg?height=100&width=100&text=Partner3",
        "/placeholder.svg?height=100&width=100&text=Partner4",
        "/placeholder.svg?height=100&width=100&text=Partner5",
        "/placeholder.svg?height=100&width=100&text=Partner6",
    ];

    const commitments = [
        { title: "Sustainable Sourcing", description: "We partner directly with farmers to ensure fair wages and sustainable practices." },
        { title: "Zero Waste Initiative", description: "Our goal is to eliminate all single-use plastics from our cafes by 2025." },
        { title: "Community Education", description: "We offer free coffee workshops to educate our community about sustainable coffee practices." },
        { title: "Carbon Neutral Roasting", description: "Our roasting facility is powered by 100% renewable energy." },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string; }) {
        const controls = useAnimation();
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, amount: 0.3 });

        useEffect(() => {
            if (inView) {
                controls.start("animate");
            }
        }, [controls, inView]);

        return (
            <motion.section
                ref={ref}
                initial="initial"
                animate={controls}
                variants={fadeInUp}
                className={`mb-24 ${className}`}
            >
                {children}
            </motion.section>
        );
    }

    return (
        <div className="min-h-screen bg-[#F5E6D3] text-[#4A3728]">
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <Image
                    src="https://as1.ftcdn.net/v2/jpg/03/24/54/32/1000_F_324543250_PZe6n442krQsG3rMsmgVnyLXzBQA2UHH.jpg"
                    alt="Kape ni Rab coffee shop"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center text-center text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h1 className="text-5xl font-bold mb-4">About Kape ni Rab</h1>
                        <p className="text-xl">Brewing community, one cup at a time</p>
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16">
                {/* Our Heritage */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
                    <p className="text-lg leading-relaxed">
                        Founded in 2020, Kape ni Rab began as a small coffee cart in the heart of the city. Our passion for quality coffee and community building quickly resonated with locals, leading to our growth into a beloved chain of coffee shops. Today, we continue to honor our roots while innovating in the world of specialty coffee.
                    </p>
                </AnimatedSection>

                {/* Mission & Vision */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                    <div className="bg-[#E1D4C0] rounded-lg p-6">
                        <div className="flex mb-4">
                            <motion.button
                                className={`flex-1 py-2 px-4 rounded-tl-lg rounded-tr-lg ${activeTab === 'mission' ? 'bg-[#4A3728] text-white' : 'bg-[#D1C3AE]'
                                    }`}
                                onClick={() => setActiveTab('mission')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Mission
                            </motion.button>
                            <motion.button
                                className={`flex-1 py-2 px-4 rounded-tl-lg rounded-tr-lg ${activeTab === 'vision' ? 'bg-[#4A3728] text-white' : 'bg-[#D1C3AE]'
                                    }`}
                                onClick={() => setActiveTab('vision')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Vision
                            </motion.button>
                        </div>
                        <motion.div
                            className="bg-white rounded-lg p-6"
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === 'mission' ? (
                                <p className="text-lg">
                                    Our mission is to create a warm and inviting space where people can connect over exceptional coffee. We strive to source the finest beans, roast them to perfection, and serve them with genuine hospitality.
                                </p>
                            ) : (
                                <p className="text-lg">
                                    We envision a world where every community has access to outstanding coffee experiences that bring people together, foster relationships, and inspire positive change.
                                </p>
                            )}
                        </motion.div>
                    </div>
                </AnimatedSection>

                {/* Specialties */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">Our Specialties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Artisanal Roasting', 'Latte Art Mastery', 'Farm-to-Cup Sourcing'].map((specialty, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#E1D4C0] rounded-lg p-6 text-center"
                                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                            >
                                <Coffee className="w-12 h-12 mx-auto mb-4 text-[#4A3728]" />
                                <h3 className="text-xl font-semibold mb-2">{specialty}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Team Section */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">Meet Our Founders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Jane Doe', role: 'CEO & Master Roaster' },
                            { name: 'John Smith', role: 'COO & Green Bean Sourcer' },
                            { name: 'Emily Chen', role: 'CMO & Community Builder' }
                        ].map((founder, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-lg"
                                whileHover={{ y: -5 }}
                            >
                                <Image
                                    src={`/placeholder.svg?height=300&width=300&text=${founder.name}`}
                                    alt={founder.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{founder.name}</h3>
                                    <p className="text-sm text-[#7D6B5D] mb-2">{founder.role}</p>
                                    <div className="flex space-x-2">
                                        <Link href="#" className="text-[#4A3728] hover:text-[#7D6B5D] transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="text-[#4A3728] hover:text-[#7D6B5D] transition-colors">
                                            <Github className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Commitment to Quality and Sustainability */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">Our Commitments</h2>
                    <div className="bg-white rounded-lg p-6 shadow-lg relative">
                        <motion.div
                            key={activeCommitment}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{commitments[activeCommitment].title}</h3>
                            <p className="text-lg">{commitments[activeCommitment].description}</p>
                        </motion.div>
                        <div className="flex justify-between mt-4">
                            <motion.button
                                onClick={() => setActiveCommitment((prev) => (prev - 1 + commitments.length) % commitments.length)}
                                className="p-2 rounded-full bg-[#E1D4C0] text-[#4A3728]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.button>
                            <motion.button
                                onClick={() => setActiveCommitment((prev) => (prev + 1) % commitments.length)}
                                className="p-2 rounded-full bg-[#E1D4C0] text-[#4A3728]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Partner Logos */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex space-x-8"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...partners, ...partners].map((partner, index) => (
                                <Image
                                    key={index}
                                    src={partner}
                                    alt={`Partner ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            ))}
                        </motion.div>
                    </div>
                </AnimatedSection>

                {/* Community Involvement */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">Community Involvement</h2>
                    <div className="bg-[#E1D4C0] rounded-lg p-6">
                        <p className="text-lg mb-6">
                            We believe in giving back to the communities that have embraced us. Here are some of our ongoing initiatives:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Local Artist Showcase", description: "Monthly exhibitions featuring local artists in our cafes", icon: "🎨" },
                                { title: "Coffee Education Workshops", description: "Free workshops teaching coffee brewing techniques to the community", icon: "☕" },
                                { title: "Youth Barista Training Program", description: "Providing job skills to underprivileged youth in partnership with local NGOs", icon: "👨‍🎓" },
                                { title: "Annual Charity Run", description: "'Run for Beans' event raising funds for coffee farming communities", icon: "🏃‍♀️" }
                            ].map((initiative, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-lg p-4 flex items-start space-x-4"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <span className="text-4xl">{initiative.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                                        <p>{initiative.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Testimonials and Press Mentions */}
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-6">What People Are Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Customer Testimonials</h3>
                            <div className="border-l-4 border-[#E1D4C0] pl-4 mb-4">
                                <blockquote className="italic text-lg mb-2">
                                    "Kape ni Rab isn't just about great coffee; it's about the warm community they've built. It's my second home!"
                                </blockquote>
                                <p className="text-right">- Maria S., Regular Customer</p>
                            </div>
                            <Image
                                src="/placeholder.svg?height=400&width=400&text=Tweet"
                                alt="Tweet from a customer"
                                width={400}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Press Mentions</h3>
                            <div className="mb-4">
                                <p className="text-lg mb-2">
                                    "Kape ni Rab is revolutionizing the local coffee scene with their commitment to quality and community."
                                </p>
                                <p className="text-right">- The Daily Brew Magazine</p>
                            </div>
                            <Image
                                src="/placeholder.svg?height=400&width=400&text=Press+Clipping"
                                alt="Press clipping mentioning Kape ni Rab"
                                width={400}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Call-to-Action (CTA) */}
                <AnimatedSection>
                    <div className="bg-[#4A3728] text-white rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Join Our Coffee Community</h2>
                        <p className="text-lg mb-6">
                            Sign up for our newsletter to receive updates on new blends, events, and exclusive offers.

                        </p>
                        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full md:w-64 px-4 py-2 rounded-lg text-[#4A3728]"
                            />
                            <motion.button
                                className="bg-[#E1D4C0] text-[#4A3728] px-6 py-2 rounded-lg font-semibold hover:bg-[#D1C3AE] transition-colors flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </motion.button>
                        </form>
                    </div>
                </AnimatedSection>
            </main>

            {/* Coffee Bean Decoration */}
            <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#3a2a1b] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-around">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
                            transition={{
                                y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
                                opacity: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
                                delay: i * 0.1,
                            }}
                            className="w-4 h-6 bg-[#6b4d2e] rounded-full transform rotate-45"
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#4A3728] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Mail className="w-5 h-5 mr-2" />
                                    <a href="mailto:info@kapenirab.com">info@kapenirab.com</a>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-5 h-5 mr-2" />
                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    <address>123 Coffee Street, Brew City, BC 12345</address>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:underline">Our Story</Link></li>
                                <li><Link href="#" className="hover:underline">Menu</Link></li>
                                <li><Link href="#" className="hover:underline">Locations</Link></li>
                                <li><Link href="#" className="hover:underline">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link href="#" className="hover:text-[#E1D4C0] transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <Link href="#" className="hover:text-[#E1D4C0] transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <Link href="#" className="hover:text-[#E1D4C0] transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p>&copy; 2024 Kape ni Rab. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
