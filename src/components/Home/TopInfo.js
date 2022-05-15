import React from 'react';
import { btnReset, v } from '../../styles/variables';
import styled from 'styled-components';

const TopInfo = () => {
  return (
    <Wrapper>
      <article>
        <p>Total Profit</p>
        <p>
          <span>$95,595</span>
          <span>+3.55%</span>
        </p>
      </article>
      <article>
        <p>Total Expenses</p>
        <p>
          <span>$95,595</span>
          <span>+2.45%</span>
        </p>
      </article>
      <article>
        <p>New Users</p>
        <p>
          <span>$95,595</span>
          <span>+8.97%</span>
        </p>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  article {
    width: 33.3%;
    background-color: ${({ theme }) => theme.bg};
    padding: 1.5rem 1rem;
    border-radius: 4px;
  }
  article p:first-of-type {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
  article p:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }
  article p:nth-of-type(2) span:last-of-type {
    color: green;
  }
`;
export default TopInfo;
