// src/pages/Category.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { id } = useParams();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">{id.charAt(0).toUpperCase() + id.slice(1)} Category</h1>
      <p className="text-gray-600">Browse products in the {id} category.</p>
    </div>
  );
};

export default Category;