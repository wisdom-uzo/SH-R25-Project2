import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import { ProductsContainer } from '../../components';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    setLoading(true);
    await axios
      .get('https://fakerapi.it/api/v1/products?_quantity=18')
      .then((response) => {
        setProducts(response.data.data);
      });
    setLoading(false);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);

  return (
    <Wrapper>
      <section className="title">
        <div className="header">
          <h1>SHOP YOUR FAVORITE ITEMS </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            cumque labore quas asperiores exercitationem vitae officiis
            perspiciatis, eos fugiat itaque a commodi natus autem laborum quo.
            Numquam minima error distinctio.
          </p>
        </div>

        <div>
          <hr />
          <span className="loading">
            {loading ? 'Loading...' : `${products.length} products available`}
          </span>
        </div>
      </section>

      <ProductsContainer products={products} loading={loading} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    text-align: center;
    margin-bottom: 2rem;
  }
  .header p {
    width: 60%;
    margin: auto;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  hr {
    border: none;
    border-top: 3px solid #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
  }

  .title span {
    display: inline-block;
    background: #f6866a;
    border-radius: 4px;
    content: '';
    padding: 0 4px;
    position: relative;
    top: -22px;
    right: -41%;
    padding: 0.5rem;
    width: 12rem;
  }
  .loading {
    text-align: center;
  }
`;

export default Products;
