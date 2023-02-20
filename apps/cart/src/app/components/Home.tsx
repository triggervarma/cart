import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { NavBar } from './NavBar';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState<any>([]);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  const getProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (e) {}
  };

  const handleAddToProduct = (product: any) => {
    const productExist = products.find((item: any) => item.id === product.id);
    console.log('productExist', productExist);
    console.log(productExist);

    if (productExist) {
      console.log('coming into if', productExist);

      setCartProducts((prevState: any) => {
        return [...prevState, productExist];
      });
    } else {
      setCartProducts([...cartProducts, { ...product }]);
    }
  };

  return (
    <>
      <NavBar />

      <div className="products-container">
        <>
          {products.length > 0 &&
            products.map((product: any, index) => {
              return (
                <>
                  <ProductCard
                    product={product}
                    handleAddToProduct={handleAddToProduct}
                  />
                </>
              );
            })}
        </>
      </div>
    </>
  );
};

export default Home;
