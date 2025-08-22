// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Details</h1>
      <p className="text-gray-600">Viewing details for product #{id}.</p>
    </div>
  );
};

export default ProductDetail;