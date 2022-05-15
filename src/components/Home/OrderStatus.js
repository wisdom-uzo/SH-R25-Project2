import React from 'react';
import styled from 'styled-components';

const OrderStatus = () => {
  return (
    <Wrapper>
      <article>
        <h3>Top 10</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>20% increase in Sales</p>
      </article>
      <article>
        <h3>26</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>15% increase in from last month</p>
      </article>
      <article>
        <h3>500</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>25% increase from last week</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 5px;

  article {
    width: 80%;
    margin: auto;
    background-color: white;
    padding: 0.5rem;
    text-align: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.bg3};
  }
  article p:last-of-type {
    font-size: 0.9rem;
  }
`;
export default OrderStatus;
