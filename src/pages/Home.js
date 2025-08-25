"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Star,
  Shield,
  Heart,
  ShoppingCart,
  IndianRupee,
  Award,
  Users,
  TrendingUp,
  Zap,
  Timer,
  Gift,
  Truck,
  ArrowRight,
  ChevronRight,
  Flame,
  CloudLightning as Lightning,
  Sparkles,
  Crown,
  Search,
  Menu,
  X,
  Filter,
  ChevronLeft,
} from "lucide-react"
import HeroBanner from "../components/HeroBanner"

const Home = () => {
  const navigate = useNavigate()
  const [isWishlist, setIsWishlist] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")
  const [flashSaleTime, setFlashSaleTime] = useState({ hours: 2, minutes: 45, seconds: 30 })
  const [currentDeal, setCurrentDeal] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Load cart and wishlist from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems")
    const savedWishlist = localStorage.getItem("wishlistItems")
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    
    if (savedWishlist) {
      setIsWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  // Save cart and wishlist to localStorage when they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(isWishlist))
  }, [isWishlist])

  // Timer for flash sale
  useEffect(() => {
    const timer = setInterval(() => {
      setFlashSaleTime((prev) => {
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
      setCurrentDeal((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(dealRotator)
  }, [])

  // Show scroll to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const categories = [
    {
      id: 1,
      name: "Fashion",
      image: "/fas.jpeg",
      items: 15420,
      color: "from-rose-400 via-pink-500 to-purple-600",
      discount: "80% OFF",
      trending: true,
      icon: "👗",
    },
    {
      id: 2,
      name: "Electronics",
      image: "/gad.jpeg",
      items: 8945,
      color: "from-blue-400 via-cyan-500 to-teal-600",
      discount: "70% OFF",
      trending: true,
      icon: "📱",
    },
    {
      id: 3,
      name: "Beauty",
      image: "/bea.jpeg",
      items: 6734,
      color: "from-purple-400 via-violet-500 to-indigo-600",
      discount: "60% OFF",
      trending: false,
      icon: "💄",
    },
    {
      id: 4,
      name: "Sports",
      image: "/spo.jpeg",
      items: 4523,
      color: "from-orange-400 via-amber-500 to-yellow-600",
      discount: "65% OFF",
      trending: false,
      icon: "⚽",
    },
    {
      id: 5,
      name: "Books",
      image: "/book.jpeg",
      items: 9876,
      color: "from-emerald-400 via-green-500 to-teal-600",
      discount: "50% OFF",
      trending: false,
      icon: "📚",
    },
    {
      id: 6,
      name: "Home",
      image: "/home.jpeg",
      items: 7234,
      color: "from-gray-400 via-slate-500 to-zinc-600",
      discount: "55% OFF",
      trending: false,
      icon: "🏠",
    },
  ]

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
      name: 'Samsung 4K Smart TV 55"',
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
    setIsWishlist((prev) => {
      const newWishlist = {
        ...prev,
        [productId]: !prev[productId],
      }
      return newWishlist
    })
  }

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const quickViewProduct = (product) => {
    // In a real app, this would open a modal with product details
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Header with search and navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                ShopNow
              </Link>
            </div>

            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-1 rounded-lg">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/wishlist" className="relative p-2">
                <Heart className="w-6 h-6" />
                {Object.values(isWishlist).filter(Boolean).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {Object.values(isWishlist).filter(Boolean).length}
                  </span>
                )}
              </Link>
              
              <Link to="/cart" className="relative p-2">
                <ShoppingCart className="w-6 h-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
              
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-1 rounded-lg">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4">
            <div className="flex flex-col space-y-3">
              <Link to="/categories" className="py-2 px-4 rounded-lg hover:bg-gray-100">Categories</Link>
              <Link to="/offers" className="py-2 px-4 rounded-lg hover:bg-gray-100">Offers</Link>
              <Link to="/account" className="py-2 px-4 rounded-lg hover:bg-gray-100">Account</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <HeroBanner />

      <div className="backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between text-sm overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-6 whitespace-nowrap">
              <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                <Truck size={16} className="mr-1" />
                <span className="font-medium">FREE Delivery ₹499+</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                <Shield size={16} className="mr-1" />
                <span className="font-medium">100% Authentic</span>
              </div>
              <div className="flex items-center text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                <Gift size={16} className="mr-1" />
                <span className="font-medium">Easy Returns</span>
              </div>
            </div>
            <div className="flex items-center text-orange-600 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-1 rounded-full">
              <Timer size={16} className="mr-2" />
              <span className="font-bold">
                ⚡ {flashSaleTime.hours}h {flashSaleTime.minutes}m {flashSaleTime.seconds}s
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-gradient-to-r ${deals[currentDeal].bgColor} rounded-2xl p-4 text-white relative overflow-hidden shadow-xl`}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-xl mr-3 backdrop-blur-sm">{deals[currentDeal].icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{deals[currentDeal].title}</h3>
                  <p className="text-sm opacity-90">{deals[currentDeal].subtitle}</p>
                </div>
              </div>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg text-sm">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-xl mr-3 backdrop-blur-sm">
                <Lightning className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  Flash Sale
                  <Flame className="w-6 h-6 ml-2 animate-pulse" />
                </h2>
                <p className="text-white/90">Limited time offers!</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <div className="text-white text-lg font-bold">
                {String(flashSaleTime.hours).padStart(2, "0")}:{String(flashSaleTime.minutes).padStart(2, "0")}:
                {String(flashSaleTime.seconds).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-xs">Time Left</div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {flashSaleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
              >
                <div className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                  -{product.discount}%
                </div>
                <div className="absolute top-2 right-2 z-10">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-red-50 transition-colors"
                  >
                    <Heart
                      size={14}
                      className={isWishlist[product.id] ? "text-red-500 fill-current" : "text-gray-600"}
                    />
                  </button>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-2">{product.name}</h3>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="flex items-center">
                        <IndianRupee size={14} className="text-gray-900" />
                        <span className="text-lg font-bold text-gray-900">
                          {product.salePrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <IndianRupee size={10} />
                        <span className="text-xs line-through">{product.originalPrice.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-orange-500 text-white px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                    >
                      Add
                    </button>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">{product.stock} left</span>
                      <span className="text-green-600 font-medium">{product.sold} sold</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-red-500 h-1.5 rounded-full"
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

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-600">Discover millions of products with unbeatable prices</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setActiveCategory(category.name)}
              >
                <div className={`bg-gradient-to-br ${category.color} p-4 h-32 flex flex-col justify-between relative`}>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>

                  {category.trending && (
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      <span className="text-white text-xs font-medium flex items-center">
                        <TrendingUp size={10} className="mr-1" />
                        Hot
                      </span>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="text-2xl mb-1">{category.icon}</div>
                    <h3 className="text-white font-bold text-sm mb-0.5">{category.name}</h3>
                    <p className="text-white/90 text-xs">{(category.items / 1000).toFixed(0)}k+ items</p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-sm font-bold">{category.discount}</div>
                    </div>
                    <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Featured Products</h2>
              <p className="text-gray-600">Handpicked just for you</p>
            </div>
            <Link
              to="/products"
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-xl transition-colors"
            >
              View All
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {featuredProducts.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
              >
                {product.isSponsored && (
                  <div className="absolute top-2 left-2 z-10 bg-yellow-400 text-black px-2 py-0.5 rounded text-xs font-bold">
                    Sponsored
                  </div>
                )}

                <div className="absolute top-2 right-2 z-10 flex flex-col space-y-1">
                  {product.badge && (
                    <div className="bg-blue-600 text-white px-2 py-0.5 rounded-lg text-xs font-bold">
                      {product.badge}
                    </div>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-red-50 transition-colors"
                  >
                    <Heart
                      size={14}
                      className={isWishlist[product.id] ? "text-red-500 fill-current" : "text-gray-600"}
                    />
                  </button>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.discount && (
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                      -{product.discount}% OFF
                    </div>
                  )}
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <IndianRupee size={14} className="text-gray-900" />
                        <span className="text-lg font-bold text-gray-900">{product.price.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="flex items-center text-gray-500">
                        <IndianRupee size={10} />
                        <span className="text-xs line-through mr-1">
                          {product.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-green-600">({product.discount}% off)</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1 mb-3">
                    {product.freeDelivery && (
                      <div className="flex items-center text-green-600 text-xs">
                        <Truck size={12} className="mr-1" />
                        Free Delivery
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center"
                    >
                      <ShoppingCart size={14} className="mr-1" />
                      Add
                    </button>
                    <button
                      onClick={() => quickViewProduct(product)}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Why Choose Us?</h2>
            <p className="text-white/90">Join millions of happy customers worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-white">50M+</h3>
              <p className="text-white/80 text-sm">Happy Customers</p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-white">100%</h3>
              <p className="text-white/80 text-sm">Authentic Products</p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Truck className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-white">Fast</h3>
              <p className="text-white/80 text-sm">Same Day Delivery</p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-white">Secure</h3>
              <p className="text-white/80 text-sm">Safe Payments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Stay Ahead of Trends</h2>
              <p className="text-white/90 mb-6">Get exclusive deals and personalized recommendations</p>

              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>

              <p className="text-white/70 mt-3 text-sm">Join 2M+ subscribers. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <ArrowRight className="w-5 h-5 transform -rotate-90" />
        </button>
      )}
    </div>
  )
}

export default Home