import React from 'react';
import styled from 'styled-components';

const ProductsContainer = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, description, price, tags, name } = product;

        return (
          <article key={id}>
            <div className="image-container">
              <img src={image} alt={name} />
            </div>
            <div className="details">
              <p className="name">{name}</p>
              <p className="price">${(price / 1000).toFixed(2)}</p>
              <p className="desc">{description}</p>
              <button>DETAILS</button>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem;
  article {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 1rem;
    align-items: center;
  }
  .image-container {
    height: 200px;
    min-width: 300px;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    background-color: black;
  }
  .image-container:hover::after {
    content: 'Add To Cart';
    display: flex;
    position: relative;
    top: -18%;
    left: 60%;
    width: fit-content;
    background-color: #f6866a;
    border-radius: 4px;
    padding: 0.3rem;
    border-radius: 4px;
    z-index: 20;
  }

  img:hover {
    opacity: 0.4;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    z-index: 10;
  }
  .name {
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .price {
    color: #f6866a;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .desc {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  button {
    padding: 0.3em 0.5em;
    background-color: #f6866a;
    border: none;
    border-radius: 4px;
    font-size: 0.7rem;
    color: inherit;
  }
  button:hover {
    background-color: 1px solid ${({ theme }) => theme.bg};
    transform: scale(1.1);
    /* background-color: red; */
  }
`;

export default ProductsContainer;
