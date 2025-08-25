"use client";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IndianRupee, X } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      const validItems = parsed.filter(item => item && item.salePrice != null && item.id != null);
      setCartItems(validItems);
    }
  }, []);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + (item.salePrice || 0) * (item.quantity || 1),
      0
    );
    setTotal(totalAmount);
  }, [cartItems]);

  const removeFromCart = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const changeQuantity = (id, qty) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-gray-600">Your cart is empty. Start shopping to add items!</p>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center bg-white rounded-xl shadow p-4">
              <img src={item.image || "https://via.placeholder.com/150"} alt={item.name || "Product"} className="w-24 h-24 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name || "Unnamed Product"}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <IndianRupee size={14} />
                  <span className="font-bold">{(item.salePrice || 0).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <label>Qty:</label>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    min={1}
                    onChange={(e) => changeQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 px-2 py-1 border rounded text-center"
                  />
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 p-2 hover:bg-red-50 rounded-full ml-2"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Items ({cartItems.reduce((sum, i) => sum + (i.quantity || 1), 0)})</span>
            <span>
              <IndianRupee size={14} />
              {total.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>
              <IndianRupee size={16} />
              {total.toLocaleString("en-IN")}
            </span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
