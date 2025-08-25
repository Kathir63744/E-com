"use client"

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, IndianRupee, X } from "lucide-react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    const savedCart = localStorage.getItem("cartItems");
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  const removeFromWishlist = (id) => {
    const updated = { ...wishlist };
    delete updated[id];
    setWishlist(updated);
    localStorage.setItem("wishlistItems", JSON.stringify(updated));
  };

  const moveToCart = (product) => {
    // Add to cart
    const exists = cartItems.find(i => i.id === product.id);
    let updatedCart;
    if (exists) {
      updatedCart = cartItems.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Remove from wishlist
    removeFromWishlist(product.id);
  };

  const wishlistProducts = Object.keys(wishlist)
    .map(id => wishlist[id])
    .filter(item => item && item.id); // filter invalid items

  if (wishlistProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        <p className="text-gray-600">Your wishlist is empty. Start adding items you love!</p>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistProducts.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow p-4 relative">
            <img
              src={item.image || "https://via.placeholder.com/150"}
              alt={item.name || "Product"}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-gray-900 mb-1">{item.name || "Unnamed Product"}</h3>
            <div className="flex items-center mb-2">
              <IndianRupee size={14} />
              <span className="font-bold ml-1">
                {(item.salePrice ?? 0).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex space-x-2 mt-3">
              <button
                onClick={() => moveToCart(item)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-sm"
              >
                <ShoppingCart size={14} className="mr-1" />
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
