import React from 'react';
import circle from '../../assets/circle.svg';
import styled from 'styled-components';

const SalesReport = () => {
  return (
    <Wrapper>
      <article className="sales-chart">
        <h3>Sales Strength</h3>
        <div className="charts">
          <div className="yellow"></div>
          <div className="orange"></div>
          <div className="blue"></div>
          <div className="purple"></div>
        </div>
        <div className="tags">
          <div>
            <span className="yellow-box"></span>
            <span>HR</span>
          </div>
          <div>
            <span className="orange-box"></span>
            <span>Marketing</span>
          </div>
          <div>
            <span className="purple-box"></span>
            <span>Developers</span>
          </div>
          <div>
            <span className="blue-box"></span>
            <span>Design</span>
          </div>
        </div>
      </article>
      <article className="employees">
        <div className="details-title">
          <h3>Employees</h3>
          <p>23 August 2022</p>
        </div>
        <div className="employee-details">
          <div className="details-text">
            <div className="active">
              <p>
                <span
                  style={{ backgroundColor: '#f6866a' }}
                  className="tiny-box"
                ></span>{' '}
                Active
              </p>
              <p>3000</p>
            </div>
            <div className="inactive">
              <p>
                <span
                  style={{ backgroundColor: '#7661e2' }}
                  className="tiny-box"
                ></span>
                Inactive
              </p>
              <p>254</p>
            </div>
            <div className="total">
              <p>
                <span
                  style={{ backgroundColor: '#fabe7a' }}
                  className="tiny-box"
                ></span>
                Total
              </p>
              <p>3254</p>
            </div>
          </div>
          <div>
            <img src={circle} alt="chart" />
          </div>
        </div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  article {
    padding: 1rem;
  }
  .sales-chart {
    flex-basis: 50%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bg};
  }
  .charts {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0;
    height: 46%;
  }
  .yellow,
  .blue,
  .purple,
  .orange {
    width: 15%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .yellow {
    width: 15%;
    height: 85%;
    background-color: #fabe7a;
  }
  .blue {
    width: 15%;
    height: 60%;
    background-color: #59e6f6;
  }
  .purple {
    width: 15%;
    height: 75%;
    background-color: #7661e2;
  }
  .orange {
    width: 15%;
    height: 30%;
    background-color: #f6866a;
  }
  .employees {
    flex-basis: 50%;
    background-color: ${({ theme }) => theme.bg};
    border-radius: 5px;
  }
  .details-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .details-title p {
    font-size: 0.8rem;
  }
  .tags {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1.5rem;
  }
  .tags > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: 45%;
  }

  .yellow-box,
  .blue-box,
  .orange-box,
  .purple-box {
    height: 1%;
    width: 1%;
    display: block;
    padding: 1rem;
  }
  .blue-box {
    background-color: #59e6f6;
  }
  .orange-box {
    background-color: #f6866a;
  }
  .purple-box {
    background-color: #7661e2;
  }
  .yellow-box {
    background-color: #fabe7a;
  }
  .employee-details {
    display: flex;
    justify-content: space-between;
  }
  .details-text {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
  }
  .details-text div p:first-of-type {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
  .details-text div p:last-of-type {
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 0.9rem;
  }
  .tiny-box {
    height: 14px;
    width: 14px;
    margin-right: 0.2rem;
    border-radius: 50%;
    display: inline-block;
  }
`;

export default SalesReport;
