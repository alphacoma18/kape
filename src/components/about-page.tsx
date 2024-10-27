'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { Award, Coffee, Facebook, Heart, Instagram, Leaf, Menu, Star, Twitter, Users, X } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

const baseURL = "https://raw.githubusercontent.com/alphacoma18/kape/master/public";
const iconURL = "https://raw.githubusercontent.com/alphacoma18/kape/master/src/app/web-app-manifest-512x512.png";
const commitments = [
  {
    title: "Sustainability",
    icon: Leaf,
    description: "We're dedicated to reducing our environmental impact through eco-friendly practices and packaging.",
    details: "Our sustainability efforts include using biodegradable packaging, implementing energy-efficient roasting processes, and supporting reforestation projects in coffee-growing regions.",
    image: "/sustainability.jpg"
  },
  {
    title: "Community",
    icon: Users,
    description: "We actively support local initiatives and foster a sense of belonging in every neighborhood we serve.",
    details: "Through our community programs, we provide job training for local youth, sponsor neighborhood events, and collaborate with local artists and businesses to create a vibrant coffee culture.",
    image: "/community_2.jpg"
  },
  {
    title: "Quality",
    icon: Award,
    description: "From bean to cup, we maintain the highest standards to ensure an exceptional coffee experience.",
    details: "Our quality commitment involves rigorous bean selection, precise roasting techniques, regular barista training, and state-of-the-art brewing equipment to deliver consistently excellent coffee.",
    image: "/quality.jpg"
  },
  {
    title: "Inclusivity",
    icon: Heart,
    description: "We believe that everyone deserves to enjoy great coffee, regardless of background or circumstance.",
    details: "Inclusivity is at the heart of our mission, and we strive to create welcoming spaces where all are valued and respected. We offer accessible pricing, diverse hiring practices, and community outreach programs to ensure that everyone feels at home at Kape ni Rab.",
    image: "/inclusivity.jpg"
  }
];

const navLinks = [
  { title: "Home", url: "/" },
  { title: "Menu", url: "/menu" },
  { title: "About", url: "/about-us" },
];
const founders = [
  { name: "Rab Karl Colasino", role: "Visionary & Master Roaster", image: "/rab.png", quote: "Coffee is more than a drink; it's a connection to our roots and a bridge to our future." },
  { name: "Bently Rafa", role: "Chief Coffee Officer", image: "/bently.jpg", quote: "Every cup tells a story. Our mission is to make each story unforgettable." },
  { name: "Alpha Romer Coma", role: "Community Engagement Director", image: "/alpha.jpg", quote: "We don't just serve communities; we grow with them, one sip at a time." },
];

const communityImpact = [
  { title: "Youth Barista Program", description: "Training and employment opportunities for underprivileged youth" },
  { title: "Farmers' Support Network", description: "Direct partnerships with coffee farmers to ensure fair wages and sustainable practices" },
  { title: "Local Art Showcase", description: "Featuring local artists' work in our shops and on our packaging" },
];

const testimonials = [
  { quote: "Kape ni Rab isn't just a coffee shop, it's a sanctuary for coffee lovers. The attention to detail in every cup is simply remarkable.", author: "Aro Joash P., Food Critic", rating: 5 },
  { quote: "As a regular, I can confidently say that Kape ni Rab serves the best coffee in town. The ambiance and community feel keep me coming back.", author: "John Kenneth A., Loyal Customer", rating: 5 },
  { quote: "The commitment to sustainability and community support sets Kape ni Rab apart. It's more than just great coffee; it's a movement.", author: "Marc O., Environmental Activist", rating: 5 },
  { quote: "Kape ni Rab has become my go-to spot for meetings and catch-ups. The quality of the coffee and service is unmatched.", author: "Kristoffer Ian S., Business Owner", rating: 5 },
];

const tabsData = [
  {
    id: 'beans',
    title: 'Our Beans',
    heading: 'Ethically Sourced Beans',
    description: 'Our beans are carefully selected from sustainable farms across the globe, ensuring the highest quality and ethical practices.',
    imageSrc: '/beans.jpg',
    imageAlt: 'Coffee Beans',
    features: [
      'Single-origin selections',
      'Fair trade certified',
      'Organic options available'
    ]
  },
  {
    id: 'roasting',
    title: 'Roasting Process',
    heading: 'Artisanal Roasting',
    description: 'Our master roasters bring out the unique flavors of each bean through carefully crafted roasting profiles.',
    imageSrc: '/process.jpg',
    imageAlt: 'Roasting Process',
    features: [
      'Small-batch roasting',
      'Customized roast levels',
      'Peak flavor preservation'
    ]
  },
  {
    id: 'brewing',
    title: 'Brewing Methods',
    heading: 'Precision Brewing',
    description: 'We offer a variety of brewing methods to bring out the best in every cup, tailored to your preferences.',
    imageSrc: '/brew.jpg',
    imageAlt: 'Brewing Methods',
    features: [
      'Pour-over',
      'Espresso',
      'Cold brew',
      'French press'
    ]
  },
  {
    id: 'pairings',
    title: 'Perfect Pairings',
    heading: 'Culinary Harmony',
    description: 'Enhance your coffee experience with our expertly curated food pairings, designed to complement and elevate the flavors in your cup.',
    imageSrc: '/pairings.jpg',
    imageAlt: 'Coffee Pairings',
    features: [
      'Artisanal pastries',
      'Gourmet sandwiches',
      'Locally-sourced treats'
    ]
  }
];

export function AboutPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="min-h-screen bg-[#F3E5D8] overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-[#2C1810] text-white py-4 px-4 sm:px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Image src={iconURL}

              alt="Kape ni Rab Logo" width={40} height={40} className="rounded-full w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-lg sm:text-2xl font-bold">Kape ni Rab</span>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {
              navLinks.map((link, index) => (
                <Link key={index} href={link.url} className="hover:text-[#D4A574] transition-colors text-sm lg:text-base">
                  {link.title}
                </Link>
              ))
            }
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button className="bg-[#D4A574] hover:bg-[#B78D5F] text-[#2C1810] text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
              <Link href={"/menu"}>Order Now</Link>
            </Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {
              navLinks.map((link, index) => (
                <Link key={index} href={link.url} className="block py-2 hover:text-[#D4A574] transition-colors text-sm">
                  {link.title}
                </Link>
              ))
            }
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center flex items-center justify-center overflow-hidden">
        <Image src={baseURL + "/shop.jpg"}
          alt="Kape ni Rab" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">Crafting Moments,<br />One Cup at a Time</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">Experience the rich heritage and artisanal passion of Kape ni Rab</p>
          <Button className="bg-[#D4A574] hover:bg-[#B78D5F] text-[#2C1810] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3">
            <Link href={"#heritage"}>Discover Our Story</Link>
          </Button>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white" id="heritage">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-[#2C1810]">Our Rich Heritage</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Since our humble beginnings in 2022, Kape ni Rab has been more than just a coffee shop - it&apos;s been a journey of passion, quality, and community. Our story began in a small corner of Manila, where our founder, Rab Santos, first dreamed of creating a space where coffee could bring people together.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Over the years, we&apos;ve grown from that single location to become a beloved presence across the Philippines, never forgetting our roots or compromising on our commitment to excellence.
              </p>
            </div>
            <div className="relative mt-6 md:mt-0">
              <Image
                src={baseURL + "/service.jpg"}
                alt="Kape ni Rab heritage"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl mx-auto w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#D4A574] text-[#2C1810] p-2 sm:p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg sm:text-xl md:text-2xl">Est. 2022</p>
                <p className="text-xs sm:text-sm md:text-base">Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Experience Tabs */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3E5D8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-[#2C1810]">
            The Kape ni Rab Experience
          </h2>
          <Tabs defaultValue="beans" className="w-full">
            <TabsList className="flex items-stretch w-full justify-around flex-wrap h-auto space-y-1 mb-6 sm:mb-8 bg-[#2C1810] rounded-lg p-1">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="text-xs sm:text-sm md:text-base data-[state=active]:bg-[#D4A574] data-[state=active]:text-[#2C1810]"
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabsData.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <Card>
                  <CardContent className="flex flex-col md:flex-row items-center p-4 sm:p-6">
                    <Image
                      src={baseURL + tab.imageSrc}
                      alt={tab.imageAlt}
                      width={300}
                      height={300}
                      className="rounded-lg mb-4 md:mb-0 md:mr-6 mx-auto w-full md:max-w-[300px] h-auto"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-[#2C1810]">
                        {tab.heading}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-4">
                        {tab.description}
                      </p>
                      <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                        {tab.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-[#2C1810]">Our Commitments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
                  <div className="bg-[#D4A574] p-3 sm:p-4 rounded-full mb-4 sm:mb-6">
                    <commitment.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#2C1810]" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 text-[#2C1810]">{commitment.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 flex-grow mb-4">{commitment.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="text-sm sm:text-base text-[#2C1810] hover:text-[#D4A574]">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-[#2C1810] mb-4">{commitment.title}</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <Image
                          src={baseURL + commitment.image}
                          alt={commitment.title}
                          width={400}
                          height={200}
                          className="rounded-lg w-full h-auto"
                        />
                        <p className="text-sm sm:text-base text-gray-700">{commitment.details}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#2C1810] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">Meet the Founders</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-4 sm:mb-6">
                  <Image
                    src={baseURL + founder.image}
                    alt={founder.name}
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-[#D4A574] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#D4A574] text-[#2C1810] p-2 rounded-full">
                    <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{founder.name}</h3>
                <p className="text-[#D4A574] text-sm sm:text-base mb-2 sm:mb-4">{founder.role}</p>
                <p className="italic text-xs sm:text-sm">&ldquo;{founder.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3E5D8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-[#2C1810]">Our Community Impact</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#2C1810]">Brewing Positive Change</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                At Kape ni Rab, we believe in the power of coffee to create positive change. Through our various initiatives, we&apos;re committed to supporting local communities, promoting sustainable practices, and fostering a culture of inclusivity.
              </p>
              <ul className="space-y-2 sm:space-y-4">
                {communityImpact.map((initiative, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#D4A574] p-1 sm:p-2 rounded-full mr-2 sm:mr-4 mt-1">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#2C1810]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#2C1810]">{initiative.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-700">{initiative.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-6 md:mt-0">
              <Image
                src={baseURL + "/community-impact.jpg"}
                alt="Community Impact"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl mx-auto w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#2C1810] text-white p-2 sm:p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg sm:text-xl md:text-2xl">10,000+</p>
                <p className="text-xs sm:text-sm md:text-base">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-[#2C1810]">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex mb-2 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-4 flex-grow italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#2C1810]">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup with Parallax */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}>
        <div className="max-w-4xl mx-auto bg-white bg-opacity-90 p-6 sm:p-8 md:p-12 rounded-lg shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-center text-[#2C1810]">Stay Connected</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-center text-gray-700">Join our community and be the first to know about special offers, new flavors, and coffee tips!</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:max-w-sm bg-white text-[#2C1810] border-[#D4A574]"
            />
            <Button className="bg-[#2C1810] text-white hover:bg-[#4A3228]">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Coffee Bean Decoration */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#2C1810] overflow-hidden">
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
              className="w-4 h-6 bg-[#D4A574] rounded-full transform rotate-45"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Image src={iconURL}
              alt="Kape ni Rab Logo" width={80} height={80} className="mb-4 w-16 h-16 sm:w-20 sm:h-20" />
            <p className="text-xs sm:text-sm">Crafting moments and memories, one cup at a time since 2022.</p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-xs sm:text-sm hover:text-[#D4A574] transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Contact Us</h3>
            <p className="text-xs sm:text-sm mb-1 sm:mb-2">123 Coffee Street, Manila, Philippines</p>
            <p className="text-xs sm:text-sm mb-1 sm:mb-2">Phone: (123) 456-7890</p>
            <p className="text-xs sm:text-sm">Email: hello@kapenirab.com</p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4A574] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-[#D4A574] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-[#D4A574] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Kape ni Rab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}