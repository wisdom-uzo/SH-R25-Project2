import React from 'react';
import './style.css';
import styled from 'styled-components';
import { TopProducts, SalesReport, TopInfo, OrderStatus, RecentOrders } from '../../components';

const HomePage = () => {
  return (
    <Wrapper>
      <h2>Overview</h2>
      <main>
        <setion className="top-grid">
          <section className="top-left-grid">
            <TopInfo />
            <SalesReport />
          </section>
          <section className="top-right-grid">
            <TopProducts />
          </section>
        </setion>
        <section className='bottom-grid'>
          <RecentOrders />
          <OrderStatus/>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .top-grid {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
    width: 100%;
  }
  .top-left-grid {
    flex-grow: 1;
    flex-basis: 70%;
  }
  .top-right-grid {
    flex-grow: 1;
    flex-basis: 30%;
  }
  .bottom-grid{
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  }
`;
export default HomePage;
