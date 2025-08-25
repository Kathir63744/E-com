// Categories.jsx
import { useState } from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Fashion", trending: true },
    { id: 2, name: "Electronics", trending: true },
    { id: 3, name: "Beauty", trending: false },
    { id: 4, name: "Sports", trending: false },
    { id: 5, name: "Books", trending: false },
    { id: 6, name: "Home", trending: false },
    { id: 7, name: "Toys", trending: true },
    { id: 8, name: "Groceries", trending: false },
  ];

  // Mock products for each category
  const products = {
    Fashion: [
      { id: 101, name: "T-Shirt", image: "/fas.jpeg", price: 499 },
      { id: 102, name: "Jeans", image: "/fas.jpeg", price: 999 },
      { id: 103, name: "Jacket", image: "/fas.jpeg", price: 1999 },
      { id: 104, name: "Shoes", image: "/fas.jpeg", price: 1499 },
      { id: 105, name: "Hat", image: "/fas.jpeg", price: 299 },
      { id: 106, name: "Sunglasses", image: "/fas.jpeg", price: 399 },
    ],
    Electronics: [
      { id: 201, name: "Laptop", image: "/gad.jpeg", price: 45000 },
      { id: 202, name: "Headphones", image: "/gad.jpeg", price: 1999 },
      { id: 203, name: "Smartphone", image: "/gad.jpeg", price: 15000 },
      { id: 204, name: "Smartwatch", image: "/gad.jpeg", price: 4999 },
      { id: 205, name: "Camera", image: "/gad.jpeg", price: 12000 },
      { id: 206, name: "Speaker", image: "/gad.jpeg", price: 2999 },
    ],
    Beauty: [
      { id: 301, name: "Lipstick", image: "/bea.jpeg", price: 499 },
      { id: 302, name: "Foundation", image: "/bea.jpeg", price: 799 },
      { id: 303, name: "Perfume", image: "/bea.jpeg", price: 1500 },
      { id: 304, name: "Nail Polish", image: "/bea.jpeg", price: 299 },
      { id: 305, name: "Face Wash", image: "/bea.jpeg", price: 399 },
      { id: 306, name: "Hair Oil", image: "/bea.jpeg", price: 249 },
    ],
    Sports: [
      { id: 401, name: "Football", image: "/spo.jpeg", price: 999 },
      { id: 402, name: "Basketball", image: "/spo.jpeg", price: 899 },
      { id: 403, name: "Tennis Racket", image: "/spo.jpeg", price: 1499 },
      { id: 404, name: "Yoga Mat", image: "/spo.jpeg", price: 499 },
      { id: 405, name: "Dumbbells", image: "/spo.jpeg", price: 799 },
      { id: 406, name: "Cycle Helmet", image: "/spo.jpeg", price: 599 },
    ],
    Books: [
      { id: 501, name: "Novel", image: "/book.jpeg", price: 399 },
      { id: 502, name: "Science Book", image: "/book.jpeg", price: 599 },
      { id: 503, name: "History Book", image: "/book.jpeg", price: 499 },
      { id: 504, name: "Comics", image: "/book.jpeg", price: 199 },
      { id: 505, name: "Poetry", image: "/book.jpeg", price: 299 },
      { id: 506, name: "Biography", image: "/book.jpeg", price: 599 },
    ],
    Home: [
      { id: 601, name: "Chair", image: "/vac.jpeg", price: 1999 },
      { id: 602, name: "Table", image: "/vac.jpeg", price: 2999 },
      { id: 603, name: "Lamp", image: "/vac.jpeg", price: 999 },
      { id: 604, name: "Curtains", image: "/vac.jpeg", price: 499 },
      { id: 605, name: "Cushion", image: "/vac.jpeg", price: 299 },
      { id: 606, name: "Shelf", image: "/vac.jpeg", price: 1499 },
    ],
    Toys: [
      { id: 701, name: "Puzzle", image: "/can.jpeg", price: 399 },
      { id: 702, name: "Doll", image: "/can.jpeg", price: 499 },
      { id: 703, name: "Car Toy", image: "/can.jpeg", price: 299 },
      { id: 704, name: "Blocks", image: "/can.jpeg", price: 599 },
      { id: 705, name: "Board Game", image: "/can.jpeg", price: 699 },
      { id: 706, name: "Action Figure", image: "/can.jpeg", price: 799 },
    ],
    Groceries: [
      { id: 801, name: "Rice", image: "/ultra.jpeg", price: 899 },
      { id: 802, name: "Milk", image: "/ultra.jpeg", price: 50 },
      { id: 803, name: "Eggs", image: "/ultra.jpeg", price: 120 },
      { id: 804, name: "Oil", image: "/ultra.jpeg", price: 200 },
      { id: 805, name: "Spices", image: "/ultra.jpeg", price: 399 },
      { id: 806, name: "Flour", image: "/ultra.jpeg", price: 250 },
    ],
  };

  const [activeTab, setActiveTab] = useState("Fashion");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Categories</h1>
        <p className="text-gray-600 mb-6">Browse through our wide range of products</p>

        {/* Tabs */}
        <div className="flex space-x-4 overflow-x-auto mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.name)}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300
                ${activeTab === cat.name ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products[activeTab].map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
              <p className="text-gray-700 font-bold">₹{item.price.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
