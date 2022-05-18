import React from 'react';
import styled from 'styled-components';
import { recentOrders } from '../../utils/helpers';

const RecentOrders = () => {
  return (
    <Wrapper>
      <div className="title">
        <h3>Last Transaction</h3>
        <span>See more</span>
      </div>

      {recentOrders.map(({ price, customer, date, id, status }) => {
        return (
          <div key={id} className="orders-column">
            <p>{date}</p>
            <p>{customer}</p>
            <p>{status}</p>
            <p>${price}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 70%;
  background-color: ${({ theme }) => theme.bg};
  padding: 0.5rem;
  border-radius: 5px;

  .title {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  .orders-column {
    display: flex;
    justify-content: space-between;
    padding: 0.9rem 0;
  }
  .orders-column p {
    flex-basis: 15%;
    text-align: start;
  }
  .orders-column:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
  }
`;

export default RecentOrders;
