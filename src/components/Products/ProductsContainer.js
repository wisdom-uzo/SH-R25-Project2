import React from 'react';
import styled from 'styled-components';

const ProductsContainer = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, description, price, tags, name, net_price, taxes } =
          product;

        return (
          <article key={id}>
            <div className="image-container">
              <img src={image} alt={name} />
            </div>
            <div className="details">
              <p className="name">{name}</p>
              <p className="price">
                <span> Price :</span> ${(price / 1000).toFixed(2)}
              </p>
              <p>
                <span>Net Price :</span> ${(net_price / 1000).toFixed(2)}
              </p>
              <p>
                <span>Taxes : </span> ${taxes.toFixed(2)}
              </p>
              <p className="desc">
                <span>Description</span> {description}
              </p>
            </div>
            <button>DETAILS</button>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  article {
    display: flex;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    background-color: ${({ theme }) => theme.bg3};
    justify-content: space-between;
  }
  article .details span {
    font-weight: 700;
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
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    z-index: 10;
  }
  .name {
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .price {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .desc {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  button {
    padding: 0.3em 0.5em;
    background-color: #f6866a;
    border: none;
    border-radius: 4px;
    font-size: 0.7rem;
    color: inherit;
    width: 100%;
  }
  button:hover {
    background-color: 1px solid ${({ theme }) => theme.bg};
    transform: scale(0.98);
  }
`;

export default ProductsContainer;
