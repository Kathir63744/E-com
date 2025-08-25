"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Star, Shield, Heart, ShoppingCart, IndianRupee, MapPin, Clock, Award, Users, TrendingUp, Zap, Timer, Gift, Truck, Eye, ArrowRight, ChevronRight, Flame, CloudLightning as Lightning, ShoppingBag, Sparkles, Target, Crown, Percent, Calendar, CheckCircle2 } from "lucide-react"
import HeroBanner from "../components/HeroBanner"


const Home = () => {
  const [isWishlist, setIsWishlist] = useState({})
  const [cartCount, setCartCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")
  const [flashSaleTime, setFlashSaleTime] = useState({ hours: 2, minutes: 45, seconds: 30 })
  const [currentDeal, setCurrentDeal] = useState(0)

  // Timer for flash sale
  useEffect(() => {
    const timer = setInterval(() => {
      setFlashSaleTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Auto-rotate deals
  useEffect(() => {
    const dealRotator = setInterval(() => {
      setCurrentDeal(prev => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(dealRotator)
  }, [])

  // Enhanced categories with modern design
  const categories = [
    {
      id: 1,
      name: "Fashion & Lifestyle",
      image: "/fas.jpeg",
      items: 15420,
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      discount: "Up to 80% OFF",
      trending: true,
    },
    {
      id: 2,
      name: "Electronics & Gadgets",
      image: "/gad.jpeg",
      items: 8945,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      discount: "Up to 70% OFF",
      trending: true,
    },
    {
      id: 3,
      name: "Beauty & Wellness",
      image: "/bea.jpeg",
      items: 6734,
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
      discount: "Up to 60% OFF",
      trending: false,
    },
    {
      id: 4,
      name: "Sports & Fitness",
      image: "/spo.jpeg",
      items: 4523,
      color: "bg-gradient-to-br from-orange-500 to-amber-600",
      discount: "Up to 65% OFF",
      trending: false,
    },
    {
      id: 5,
      name: "Books & Media",
      image: "/book.jpeg",
      items: 9876,
      color: "bg-gradient-to-br from-cyan-500 to-teal-600",
      discount: "Up to 50% OFF",
      trending: false,
    },
  ]

  // Flash sale products
  const flashSaleProducts = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      originalPrice: 4999,
      salePrice: 1299,
      rating: 4.5,
      reviews: 2847,
      image: "/buds.jpeg",
      stock: 23,
      sold: 1250,
      discount: 74,
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      originalPrice: 3999,
      salePrice: 999,
      rating: 4.3,
      reviews: 1594,
      image: "/smartwatch.jpg",
      stock: 15,
      sold: 890,
      discount: 75,
    },
    {
      id: 3,
      name: "Premium Backpack",
      originalPrice: 2999,
      salePrice: 899,
      rating: 4.7,
      reviews: 1203,
      image: "/back.jpeg",
      stock: 8,
      sold: 567,
      discount: 70,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      originalPrice: 5999,
      salePrice: 1799,
      rating: 4.6,
      reviews: 3421,
      image: "/blue.jpeg",
      stock: 31,
      sold: 1890,
      discount: 70,
    },
  ]

  // Featured products with enhanced data
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      originalPrice: 159900,
      price: 139900,
      rating: 4.8,
      reviews: 1247,
      image: "/i.jpeg",
      category: "Electronics",
      discount: 13,
      badge: "Bestseller",
      freeDelivery: true,
      isSponsored: false,
      warranty: "1 Year Apple Warranty",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5 Headphones",
      originalPrice: 29990,
      price: 24990,
      rating: 4.7,
      reviews: 892,
      image: "/sony.jpeg",
      category: "Electronics",
      discount: 17,
      badge: "Choice",
      freeDelivery: true,
      isSponsored: true,
      warranty: "2 Year Warranty",
    },
    {
      id: 3,
      name: "Nike Air Jordan Retro",
      originalPrice: 12999,
      price: 9799,
      rating: 4.9,
      reviews: 567,
      image: "/nike.jpeg",
      category: "Fashion",
      discount: 25,
      badge: "Limited Edition",
      freeDelivery: true,
      isSponsored: false,
      warranty: "6 Month Warranty",
    },
    {
      id: 4,
      name: "MacBook Air M2",
      originalPrice: 114900,
      price: 99900,
      rating: 4.6,
      reviews: 445,
      image: "/air.jpeg",
      category: "Electronics",
      discount: 13,
      badge: "New Launch",
      freeDelivery: true,
      isSponsored: false,
      warranty: "1 Year Apple Warranty",
    },
    {
      id: 5,
      name: "Samsung 4K Smart TV 55\"",
      originalPrice: 54999,
      price: 41999,
      rating: 4.4,
      reviews: 789,
      image: "/tv.jpeg",
      category: "Electronics",
      discount: 24,
      badge: "Deal of the Day",
      freeDelivery: true,
      isSponsored: true,
      warranty: "2 Year Warranty",
    },
    {
      id: 6,
      name: "Adidas Ultraboost 23",
      originalPrice: 16999,
      price: 11899,
      rating: 4.5,
      reviews: 678,
      image: "/ultra.jpeg",
      category: "Fashion",
      discount: 30,
      badge: "Hot Deal",
      freeDelivery: true,
      isSponsored: false,
      warranty: "6 Month Warranty",
    },
    {
      id: 7,
      name: "Canon EOS R6 Mark II",
      originalPrice: 224990,
      price: 199990,
      rating: 4.8,
      reviews: 234,
      image: "/can.jpeg",
      category: "Electronics",
      discount: 11,
      badge: "Professional",
      freeDelivery: true,
      isSponsored: false,
      warranty: "2 Year Canon Warranty",
    },
    {
      id: 8,
      name: "Dyson V15 Detect Vacuum",
      originalPrice: 54999,
      price: 44999,
      rating: 4.9,
      reviews: 1203,
      image: "/vac.jpeg",
      category: "Home Appliances",
      discount: 18,
      badge: "Premium Choice",
      freeDelivery: true,
      isSponsored: false,
      warranty: "2 Year Warranty",
    },
  ]

  const deals = [
    {
      title: "Mega Electronics Sale",
      subtitle: "Up to 80% OFF on Smartphones, Laptops & More",
      bgColor: "from-blue-600 to-purple-700",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Fashion Fiesta",
      subtitle: "Flat 70% OFF on Premium Brands",
      bgColor: "from-pink-600 to-rose-700",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Home Makeover",
      subtitle: "Transform your space - Up to 60% OFF",
      bgColor: "from-emerald-600 to-green-700",
      icon: <Crown className="w-8 h-8" />,
    },
  ]

  const toggleWishlist = (productId) => {
    setIsWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Quick Actions Bar */}
      <div className="bg-white border-b shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center text-green-600">
                <Truck size={18} className="mr-2" />
                <span className="text-sm font-medium">FREE Delivery on orders ₹499+</span>
              </div>
              <div className="flex items-center text-blue-600">
                <Shield size={18} className="mr-2" />
                <span className="text-sm font-medium">100% Authentic Products</span>
              </div>
              <div className="flex items-center text-purple-600">
                <Gift size={18} className="mr-2" />
                <span className="text-sm font-medium">Easy Returns & Exchange</span>
              </div>
            </div>
            <div className="flex items-center text-orange-600">
              <Timer size={18} className="mr-2" />
              <span className="text-sm font-medium">Flash Sale Ends in: {flashSaleTime.hours}h {flashSaleTime.minutes}m {flashSaleTime.seconds}s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rotating Deals Banner */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r ${deals[currentDeal].bgColor} rounded-2xl p-6 text-white relative overflow-hidden`}>
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute left-0 bottom-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  {deals[currentDeal].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{deals[currentDeal].title}</h3>
                  <p className="text-lg opacity-90">{deals[currentDeal].subtitle}</p>
                </div>
              </div>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Lightning className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white flex items-center">
                  Flash Sale
                  <Flame className="w-8 h-8 ml-2 animate-pulse" />
                </h2>
                <p className="text-white/90 text-lg">Limited time offers - Grab them fast!</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-white text-lg font-bold">
                {String(flashSaleTime.hours).padStart(2, '0')}:{String(flashSaleTime.minutes).padStart(2, '0')}:{String(flashSaleTime.seconds).padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm">Time Left</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative">
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}%
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
                  >
                    <Heart size={18} className={isWishlist[product.id] ? "text-red-500 fill-current" : "text-gray-600"} />
                  </button>
                </div>
                
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center">
                        <IndianRupee size={18} className="text-gray-900" />
                        <span className="text-xl font-bold text-gray-900">{product.salePrice.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <IndianRupee size={12} />
                        <span className="text-sm line-through">{product.originalPrice.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                    <button
                      onClick={addToCart}
                      className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Stock: {product.stock} left</span>
                      <span className="text-green-600 font-medium">{product.sold} sold</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" 
                        style={{ width: `${(product.sold / (product.sold + product.stock)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover millions of products across all categories with unbeatable prices and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onClick={() => setActiveCategory(category.name)}
              >
                <div className={`${category.color} p-8 h-64 flex flex-col justify-between relative`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                  
                  {category.trending && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium flex items-center">
                        <TrendingUp size={14} className="mr-1" />
                        Trending
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-2xl mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.items.toLocaleString()} products</p>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-2xl font-bold">{category.discount}</div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-lg text-gray-600">Handpicked products just for you</p>
            </div>
            <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
              View All
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative">
                {product.isSponsored && (
                  <div className="absolute top-3 left-3 z-10 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                    Sponsored
                  </div>
                )}
                
                <div className="absolute top-3 right-3 z-10 flex flex-col space-y-2">
                  {product.badge && (
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </div>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
                  >
                    <Heart size={18} className={isWishlist[product.id] ? "text-red-500 fill-current" : "text-gray-600"} />
                  </button>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.discount && (
                    <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{product.discount}% OFF
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <IndianRupee size={18} className="text-gray-900" />
                        <span className="text-xl font-bold text-gray-900">{product.price.toLocaleString("en-IN")}</span>
                      </div>
                      {product.discount && (
                        <span className="text-sm text-green-600 font-medium">Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}</span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="flex items-center text-gray-500">
                        <IndianRupee size={12} />
                        <span className="text-sm line-through mr-2">{product.originalPrice.toLocaleString("en-IN")}</span>
                        <span className="text-sm text-green-600">({product.discount}% off)</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    {product.freeDelivery && (
                      <div className="flex items-center text-green-600 text-sm">
                        <Truck size={14} className="mr-2" />
                        Free Delivery
                      </div>
                    )}
                    <div className="flex items-center text-gray-600 text-sm">
                      <Shield size={14} className="mr-2" />
                      {product.warranty}
                    </div>
                  </div>

                  <button
                    onClick={addToCart}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Join millions of happy customers who trust us for their shopping needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">50M+ Customers</h3>
              <p className="text-white/80">Trust us worldwide</p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">100% Authentic</h3>
              <p className="text-white/80">Genuine products only</p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">Fast Delivery</h3>
              <p className="text-white/80">Same day & next day delivery</p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="text-white w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">Secure Payments</h3>
              <p className="text-white/80">Your money is safe with us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter with Modern Design */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of Trends</h2>
              <p className="text-white/90 mb-8 text-lg">
                Get exclusive deals, new arrivals, and personalized recommendations delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-white/70 mt-4 text-sm">Join 2M+ subscribers. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home