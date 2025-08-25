"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Star,
  Play,
  IndianRupee,
  Heart,
  Shield,
  Truck,
  Sparkles,
  Clock,
  Shirt,
  Footprints,
  Smartphone,
  Gem,
  Zap,
  ArrowRight,
  Award,
  CheckCircle,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react"

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Redefine Your Style Identity",
      description:
        "Curated collections that blend contemporary aesthetics with timeless elegance. Experience fashion that adapts to your lifestyle, not the other way around.",
      price: "From ₹499",
      rating: 4.9,
      reviews: "2.4K",
      image: "/fashion.jpg",
      buttonColor: "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/30",
      textColor: "text-white",
      icon: <Shirt className="w-6 h-6" />,
      category: "Fashion Revolution",
      accentColor: "from-cyan-500 to-blue-600",
      features: ["Sustainable materials", "30-day fit guarantee", "AI-style matching"]
    },
    {
      id: 2,
      title: "Architectural Footwear Design",
      description: "Engineered for ergonomic perfection with biomechanically designed soles that provide all-day comfort without compromising avant-garde style.",
      price: "From ₹899",
      rating: 4.8,
      reviews: "3.1K",
      image: "/footwear.jpg",
      buttonColor: "bg-gradient-to-r from-violet-600 to-purple-700 shadow-violet-500/30",
      textColor: "text-white",
      icon: <Footprints className="w-6 h-6" />,
      category: "Podiatric Innovation",
      accentColor: "from-violet-600 to-purple-700",
      features: ["Orthotic support", "Weather-resistant", "1000km durability"]
    },
    {
      id: 3,
      title: "Horological Masterpieces",
      description: "Precision-crafted timepieces that merge Swiss movement accuracy with minimalist design philosophy. For those who value every moment.",
      price: "From ₹1,499",
      rating: 4.9,
      reviews: "1.8K",
      image: "/smartwatch.jpg",
      buttonColor: "bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/30",
      textColor: "text-white",
      icon: <Clock className="w-6 h-6" />,
      category: "Temporal Artistry",
      accentColor: "from-amber-500 to-orange-600",
      features: ["Sapphire crystal glass", "5ATM water resistance", "2-year warranty"]
    },
    {
      id: 4,
      title: "Digital Ecosystem Accessories",
      description: "Seamlessly integrate technology into your lifestyle with accessories designed for the connected generation. Protection meets innovation.",
      price: "From ₹299",
      rating: 4.7,
      reviews: "4.2K",
      image: "/mobilr-acc.jpg",
      buttonColor: "bg-gradient-to-r from-fuchsia-600 to-pink-700 shadow-fuchsia-500/30",
      textColor: "text-white",
      icon: <Smartphone className="w-6 h-6" />,
      category: "Tech Integration",
      accentColor: "from-fuchsia-600 to-pink-700",
      features: ["Wireless charging compatible", "Military-grade protection", "Eco-friendly packaging"]
    },
    {
      id: 5,
      title: "Artisanal Adornments",
      description: "Handcrafted jewelry that tells a story with every curve and facet. Ethically sourced materials transformed into wearable art.",
      price: "From ₹799",
      rating: 4.9,
      reviews: "2.7K",
      image: "/jewel.jpg",
      buttonColor: "bg-gradient-to-r from-rose-500 to-red-600 shadow-rose-500/30",
      textColor: "text-white",
      icon: <Gem className="w-6 h-6" />,
      category: "Wearable Art",
      accentColor: "from-rose-500 to-red-600",
      features: ["Hypoallergenic materials", "Lifetime craftsmanship warranty", "Custom engraving available"]
    },
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length, isHovered])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div 
      className="relative w-full h-screen max-h-[900px] overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-amber-500/5 rounded-full animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"></div>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative h-full flex items-center justify-center p-6">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text content */}
                <div className="space-y-8 text-center lg:text-left relative">
                  {/* Category badge */}
                  <div className="inline-flex items-center px-5 py-2.5 rounded-2xl text-sm font-medium bg-white/5 text-white/90 border border-white/10 backdrop-blur-md mb-2">
                    <div className="mr-3 text-cyan-400">{slide.icon}</div>
                    <span>{slide.category}</span>
                    <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>

                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black ${slide.textColor} leading-tight tracking-tight`}>
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className="inline-block mr-2 transform hover:scale-105 transition-transform duration-300">
                        {word}
                      </span>
                    ))}
                  </h1>

                  <p className={`text-xl opacity-90 max-w-2xl ${slide.textColor} leading-relaxed font-light`}>
                    {slide.description}
                  </p>

                  {/* Stats and rating */}
                  <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6">
                    <div className="flex items-center bg-white/5 rounded-2xl px-5 py-3 border border-white/10 backdrop-blur-md">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={
                              i < Math.floor(slide.rating) ? "text-amber-400 fill-current" : "text-white/30"
                            }
                          />
                        ))}
                        <span className={`ml-3 text-lg font-semibold ${slide.textColor}`}>{slide.rating}</span>
                      </div>
                      <span className="text-white/60 text-sm">({slide.reviews} reviews)</span>
                    </div>
                    
                    <div className={`text-3xl font-bold flex items-center ${slide.textColor}`}>
                      <IndianRupee size={28} className="mr-1" />
                      {slide.price}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80 text-sm bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
                        <CheckCircle size={16} className="mr-2 text-emerald-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <button
                      className={`${slide.buttonColor} text-white px-10 py-5 rounded-2xl flex items-center transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl font-semibold group`}
                    >
                      <ShoppingBag size={22} className="mr-3 group-hover:scale-110 transition-transform" />
                      Explore Collection
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Stat highlight */}
                  <div className="absolute -left-10 bottom-20 hidden xl:block">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-sm font-medium px-4 py-2 rounded-2xl rotate-90 transform origin-left">
                      <TrendingUp size={16} className="inline mr-2" />
                      {slide.stats}
                    </div>
                  </div>
                </div>

                {/* Image showcase */}
                <div className="relative">
                  <div className="relative z-10">
                    {/* Main product image */}
                    <div className={`bg-gradient-to-br ${slide.accentColor} rounded-4xl p-2 shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700`}>
                      <div className="bg-gray-900 rounded-3xl overflow-hidden">
                        <div 
                          className="h-96 bg-cover bg-center rounded-3xl"
                          style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-5 -right-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-2xl shadow-lg flex items-center font-semibold z-20">
                      <Zap size={18} className="mr-2" />
                      Bestseller
                    </div>
                    
                    <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-violet-600 to-purple-700 text-white px-5 py-2.5 rounded-2xl shadow-lg flex items-center font-semibold z-20">
                      <Users size={18} className="mr-2" />
                      Community Favorite
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-10 -left-10 w-20 h-20 bg-cyan-500/10 rounded-full"></div>
                    <div className="absolute bottom-10 -right-10 w-16 h-16 bg-amber-500/10 rounded-full"></div>
                  </div>
                  
                  {/* Background decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-fuchsia-600/10 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-5 rounded-2xl hover:bg-white/20 transition-all z-20 border border-white/20 hover:scale-110 shadow-xl backdrop-blur-md group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-5 rounded-2xl hover:bg-white/20 transition-all z-20 border border-white/20 hover:scale-110 shadow-xl backdrop-blur-md group"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 relative ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <span className="absolute -inset-1.5 bg-white/20 rounded-full animate-ping"></span>
            )}
          </button>
        ))}
      </div>

      {/* Premium features panel */}
      <div className="absolute bottom-10 right-10 z-20 hidden xl:flex flex-col space-y-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 flex items-center border border-white/15 text-white shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl mr-4">
            <Truck size={20} />
          </div>
          <div>
            <div className="font-semibold">Free Global Shipping</div>
            <div className="text-sm text-white/60">On orders over ₹1999</div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 flex items-center border border-white/15 text-white shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-xl mr-4">
            <Shield size={20} />
          </div>
          <div>
            <div className="font-semibold">Hassle-Free Returns</div>
            <div className="text-sm text-white/60">30-day trial period</div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 flex items-center border border-white/15 text-white shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl mr-4">
            <Award size={20} />
          </div>
          <div>
            <div className="font-semibold">Premium Quality</div>
            <div className="text-sm text-white/60">Certified craftsmanship</div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/10 z-30">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-5000 ease-linear"
          style={{ width: isHovered ? '0%' : '100%' }}
        ></div>
      </div>
    </div>
  )
}

export default HeroBanner