// src/components/HeroBanner.js
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Star, ArrowRight, Play } from "lucide-react";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      description: "Experience crystal-clear sound with our noise-cancelling technology. Perfect for music lovers and professionals.",
      price: "$249.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
      overlay: "bg-gradient-to-r from-blue-900/70 to-purple-900/50"
    },
    {
      id: 2,
      title: "Smart Fitness Watch Series 7",
      description: "Track your health metrics, receive notifications, and stay connected with our advanced smartwatch.",
      price: "$199.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=80",
      buttonColor: "bg-green-600 hover:bg-green-700",
      textColor: "text-white",
      overlay: "bg-gradient-to-r from-green-900/70 to-teal-900/50"
    },
    {
      id: 3,
      title: "Professional Camera X2000",
      description: "Capture stunning photos with our professional-grade camera. Perfect for photographers of all levels.",
      price: "$899.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
      buttonColor: "bg-red-600 hover:bg-red-700",
      textColor: "text-white",
      overlay: "bg-gradient-to-r from-red-900/70 to-orange-900/50"
    },
    {
      id: 4,
      title: "Modern Running Shoes Pro",
      description: "Designed for comfort and performance. Perfect for runners who demand the best from their footwear.",
      price: "$129.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=80",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      textColor: "text-white",
      overlay: "bg-gradient-to-r from-purple-900/70 to-pink-900/50"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen max-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 ${slide.overlay}`} />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left p-6 md:p-10">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                    New Collection
                  </span>
                </div>
                
                <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${slide.textColor} animate-fadeInUp`}>
                  {slide.title}
                </h2>
                
                <p className={`text-xl mb-8 opacity-90 max-w-2xl ${slide.textColor} animate-fadeInUp delay-150`}>
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8 animate-fadeInUp delay-300">
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < Math.floor(slide.rating) ? "text-yellow-400 fill-current" : "text-white opacity-30"}
                        />
                      ))}
                      <span className={`ml-2 ${slide.textColor}`}>{slide.rating}</span>
                    </div>
                    <span className={`text-2xl font-bold ${slide.textColor}`}>{slide.price}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp delay-500">
                  <button className={`${slide.buttonColor} text-white px-8 py-4 rounded-lg flex items-center transition-all hover:scale-105 shadow-lg`}>
                    <ShoppingBag size={20} className="mr-2" />
                    Shop Now
                  </button>
                  <button className="bg-white/20 text-white px-8 py-4 rounded-lg flex items-center border border-white/30 transition-all hover:bg-white/30 hover:scale-105 backdrop-blur-sm">
                    <Play size={18} className="mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Product Badge */}
              <div className="hidden md:block md:w-1/2 relative animate-float">
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
                    <div className="text-center">
                      <span className="text-white text-sm block mb-2">Special Offer</span>
                      <span className="text-white text-3xl font-bold block">30% OFF</span>
                      <span className="text-white text-sm block mt-2">For Limited Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all z-10 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all z-10 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;