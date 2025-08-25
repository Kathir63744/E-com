"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IndianRupee } from "lucide-react";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    paymentMethod: "card",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      const validItems = parsed.filter(item => item && item.salePrice != null);
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

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const orderData = {
      user: formData.email, // or your logged-in user id
      items: cartItems.map(item => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity || 1,
        salePrice: item.salePrice,
      })),
      totalAmount: total,
      paymentMethod: formData.paymentMethod,
    };

    const res = await axios.post("http://localhost:5000/api/orders", orderData);

    if (res.status === 201) {
      setSuccess(true);
      localStorage.removeItem("cartItems");
      setCartItems([]);
    }
  } catch (err) {
    console.error(err);
    alert("Payment failed. Please try again.");
  }
};

  if (success) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="mb-4">Thank you, {formData.name}. Your order has been placed.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity || 1}</span>
            <span>
              <IndianRupee size={14} />
              {(item.salePrice * (item.quantity || 1)).toLocaleString("en-IN")}
            </span>
          </div>
        ))}
        <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>
            <IndianRupee size={16} />
            {total.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {formData.paymentMethod === "card" && (
          <div className="space-y-2">
            <div>
              <label className="block font-semibold mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength={16}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block font-semibold mb-1">Expiry (MM/YY)</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-1">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength={3}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 mt-4"
        >
          Pay <IndianRupee size={14} /> {total.toLocaleString("en-IN")}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
