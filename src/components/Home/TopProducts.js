import React from 'react';
import { topProducts } from '../../utils/helpers';
import styled from 'styled-components';

const TopProducts = () => {
  return (
    <Wrapper>
      <h3>Top Selling Products</h3>
      {topProducts.map(({ id, name, image, price }) => {
        return (
          <article key={id}>
            <div className="image-container">
              <img src={image} alt={name} />
            </div>
            <p>
              <span>{name}</span>
              <span>{price}</span>
            </p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.bg};
  padding:.5rem;
  max-height: 24.7rem;
  overflow: scroll;
  border-radius: 5px;

  h3 {
    margin-bottom: 1rem;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
  .image-container {
    width: 3.5rem;
    height: 3.5rem;
  }
  img {
    object-fit: cover;
    object-position: right;
    height: 100%;
    width: 100%;
    display: block;
  }
  p {
    flex-basis: 82%;
    display: flex;
    justify-content: space-between;
  }
  p span:nth-of-type(2) {
    font-weight: 500;
  }
`;

export default TopProducts;
