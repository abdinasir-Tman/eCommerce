import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
        setMainImage(data.thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, [id]);
  if (!product) return <ProductDetailsSkeleton />;
  return (
    product && (
      <div className="max-w-4xl p-4 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="py-2 px-4 bg-pink-600 rounded-lg text-white mt-4 mb-4 hover:bg-pink-700 transition-colors duration-200"
        >
          ← Go Back
        </button>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div className="md:flex space-x-10">
          {/* images side */}
          <div className="w-full  mb-10">
            <img
              src={mainImage}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
            <div className="flex space-x-3 overflow-x-auto mt-4 w-full">
              {product.images.map((img, i) => (
                <img
                  onClick={() => setMainImage(img)}
                  key={i}
                  src={img}
                  className="rounded-lg h-24 w-1/4 object-cover cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <p className="mt-4 text-gray-500">{product.description}</p>
            <div className="flex justify-between items-center">
              <h1 className="text-pink-500 text-3xl">${product.price}</h1>
              {
                <h1 className="text-gray-500 text-sm">
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : product.stock + " out stock"}
                </h1>
              }
            </div>
            <div>
              <span className="text-yellow-400">
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span className="text-gray-300">
                {"★".repeat(Math.round(5 - product.rating))}
              </span>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-600 rounded-lg text-white my-3 hover:bg-pink-700 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
