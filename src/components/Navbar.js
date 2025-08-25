"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"
import { cn } from "../utils/cn"
import { Search, ShoppingCart, Heart } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState({})
  const navigate = useNavigate()

  const categories = [
    { name: "Ethnic Wear", path: "/categories/ethnic-wear" },
    { name: "Handicrafts", path: "/categories/handicrafts" },
    { name: "Jewelry", path: "/categories/jewelry" },
    { name: "Home Decor", path: "/categories/home-decor" },
    { name: "Textiles", path: "/categories/textiles" },
    { name: "Pottery", path: "/categories/pottery" },
  ]

  // Load user, cart, and wishlist from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    const savedCart = localStorage.getItem("cartItems")
    const savedWishlist = localStorage.getItem("wishlistItems")
    
    if (storedUser) setUser(storedUser)
    if (savedCart) setCartItems(JSON.parse(savedCart))
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist))

    const handleLogin = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"))
      setUser(updatedUser)
    }

    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cartItems") || "[]")
      setCartItems(updatedCart)
    }

    const handleWishlistUpdate = () => {
      const updatedWishlist = JSON.parse(localStorage.getItem("wishlistItems") || "{}")
      setWishlistItems(updatedWishlist)
    }

    window.addEventListener("login", handleLogin)
    window.addEventListener("cartUpdate", handleCartUpdate)
    window.addEventListener("wishlistUpdate", handleWishlistUpdate)

    return () => {
      window.removeEventListener("login", handleLogin)
      window.removeEventListener("cartUpdate", handleCartUpdate)
      window.removeEventListener("wishlistUpdate", handleWishlistUpdate)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    navigate("/")
  }

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
  
  // Calculate total wishlist items
  const wishlistItemCount = Object.values(wishlistItems).filter(Boolean).length

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-6 space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="heading-elegant text-xl text-foreground">Artisan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                <span>Categories</span>
                <ChevronDownIcon
                  className={cn("w-4 h-4 transition-transform", isCategoriesOpen && "rotate-180")}
                />
              </button>
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
          </div>
          {/* Search Bar - Using the same style as home page */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-1 rounded-lg"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>

          {/* Desktop Icons - Wishlist, Cart, User */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/wishlist" className="relative p-2">
              <Heart className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-2">
                <UserIcon className="w-5 h-5 text-gray-700" />
                <span className="text-gray-700">Hello, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="ml-2 text-red-500 font-medium hover:underline text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="px-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-1 rounded-lg"
                >
                  <Search className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>

            <div className="space-y-2 px-4">
              <Link 
                to="/" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-1">
                <span className="block py-2 text-gray-700 font-medium">Categories</span>
                <div className="pl-4 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/offers" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Offers
              </Link>
              <Link 
                to="/new-arrivals" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
            </div>

            {/* Mobile Auth Buttons and Icons */}
            <div className="flex items-center justify-around px-4 pt-4 border-t border-gray-200">
              <Link 
                to="/wishlist" 
                className="relative p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-6 h-6 text-gray-700" />
                {wishlistItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItemCount}
                  </span>
                )}
              </Link>
              
              <Link 
                to="/cart" 
                className="relative p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {user ? (
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700 text-sm">Hello, {user.name}</span>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="ml-2 text-red-500 font-medium hover:underline text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar