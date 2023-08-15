import React, { useEffect, useState } from "react";
import productList from "../assets/products.json";
import Productitem from "./Productitem";
import axios from "axios";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
const ProductsList = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  //fetching data from Server ..
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        setProducts(data.products);
        setLoading(true);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (!loading) return <ProductLoadingSkeleton />;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-3">
      {Products.map((product) => (
        <Productitem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
