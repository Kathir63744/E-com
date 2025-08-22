// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Phone,
  Info,
  Home,
  Store,
  LogIn,
  UserPlus,
  LogOut
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in (for demonstration)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen(null);
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle dropdown
  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  // Handle login/logout
  const handleAuth = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      // Add logout logic here
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-r from-blue-50 to-indigo-50 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShopEase
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 justify-center px-6">
            <form onSubmit={handleSearch} className="relative w-full max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search products, brands, and categories..."
                className={`w-full pl-12 pr-4 py-3 rounded-full border transition-all duration-300 focus:outline-none text-sm ${isSearchFocused ? 'border-blue-400 shadow-md' : 'border-gray-200'}`}
              />
              <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
              <button 
                type="submit" 
                className="absolute right-2 top-1.5 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist" className="hidden md:flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
              <Heart className="w-5 h-5" />
              <span className="ml-1 text-sm font-medium">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
              <ShoppingCart className="w-5 h-5" />
              <span className="ml-1 text-sm font-medium">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* User Account */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('user')}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
              >
                <User className="w-5 h-5" />
                <span className="ml-1 text-sm font-medium hidden md:inline">
                  {isLoggedIn ? 'Account' : 'Login'}
                </span>
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {/* User Dropdown */}
              {dropdownOpen === 'user' && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                  {isLoggedIn ? (
                    <>
                      <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Link>
                      <Link to="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Orders
                      </Link>
                      <Link to="/wishlist" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        <Heart className="w-4 h-4 mr-2" />
                        Wishlist
                      </Link>
                      <hr className="my-2" />
                      <button 
                        onClick={handleAuth}
                        className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => navigate('/login')}
                        className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </button>
                      <button 
                        onClick={() => navigate('/register')}
                        className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Register
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-gray-600 p-2 rounded-lg hover:bg-blue-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-8 py-2 border-t border-gray-100">
          <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <Link to="/shop" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
            <Store className="w-4 h-4 mr-1" />
            Shop
          </Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('categories')}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
            >
              Categories <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen === 'categories' && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-xl py-2 w-48 z-50 border border-gray-100">
                <Link to="/categories/clothing" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  👕 Clothing
                </Link>
                <Link to="/categories/electronics" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  📱 Electronics
                </Link>
                <Link to="/categories/home" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🏠 Home & Kitchen
                </Link>
                <Link to="/categories/beauty" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  💄 Beauty
                </Link>
                <Link to="/categories/sports" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  ⚽ Sports
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
            <Info className="w-4 h-4 mr-1" />
            About
          </Link>
          <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50">
            <Phone className="w-4 h-4 mr-1" />
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </form>

            <Link to="/" className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>
              <Home className="w-5 h-5 mr-3" />
              Home
            </Link>
            <Link to="/shop" className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>
              <Store className="w-5 h-5 mr-3" />
              Shop
            </Link>

            {/* Mobile Categories Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobileCategories')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                <div className="flex items-center">
                  <span>Categories</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'mobileCategories' ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === 'mobileCategories' && (
                <div className="pl-8 mt-1 space-y-2">
                  <Link to="/categories/clothing" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>👕 Clothing</Link>
                  <Link to="/categories/electronics" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>📱 Electronics</Link>
                  <Link to="/categories/home" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>🏠 Home & Kitchen</Link>
                  <Link to="/categories/beauty" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>💄 Beauty</Link>
                  <Link to="/categories/sports" className="block py-2 text-gray-600" onClick={() => setIsOpen(false)}>⚽ Sports</Link>
                </div>
              )}
            </div>

            <Link to="/deals" className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>
               Deals
            </Link>
            <Link to="/about" className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>
              <Info className="w-5 h-5 mr-3" />
              About
            </Link>
            <Link to="/contact" className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>
              <Phone className="w-5 h-5 mr-3" />
              Contact
            </Link>
            
            <div className="pt-4 border-t border-gray-100">
              {isLoggedIn ? (
                <button 
                  onClick={() => { handleAuth(); setIsOpen(false); }}
                  className="flex items-center w-full py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => { navigate('/login'); setIsOpen(false); }}
                    className="flex items-center w-full py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg mb-2"
                  >
                    <LogIn className="w-5 h-5 mr-3" />
                    Login
                  </button>
                  <button 
                    onClick={() => { navigate('/register'); setIsOpen(false); }}
                    className="flex items-center w-full py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg"
                  >
                    <UserPlus className="w-5 h-5 mr-3" />
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;