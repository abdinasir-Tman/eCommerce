import React from "react";
import { Link } from "react-router-dom";

const Productitem = ({ product }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="boreder border-lg shadow-sm hover:shadow-lg transition-shadow duration-3 ease-in overflow-hidden"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-75 ease-linear"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <p className="text-sm truncate">{product.description}</p>
        <div className="flex justify-between items-center py-3">
          <h1 className="text-blue-600">${product.price}</h1>
          <p>
            {product.stock > 0
              ? `${product.stock} in stock`
              : product.stock + " out stock"}
          </p>
        </div>
        <div className="mt-4">
          <span className="text-yellow-400">
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-300">
            {"★".repeat(Math.round(5 - product.rating))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Productitem;
