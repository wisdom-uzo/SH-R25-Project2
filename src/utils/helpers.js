import react from 'react';

const topProducts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    name: 'Beats by Dre Headphones',
    price: '39.99',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
    name: 'Nike Air',
    price: '140.99',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80',
    name: 'Android Smart Watch',
    price: '58.89',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    name: 'Rayban fashion glasses',
    price: '54.89',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
    name: 'Nike Air',
    price: '140.99',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    name: 'Versace flower vase',
    price: '140.89',
  },
];

const recentOrders = [
  {
    id: 1,
    date: '01 Jun 17:56 AM',
    customer: 'Paula Allen',
    status: 'Completed',
    price: 104.98,
  },
  {
    id: 2,
    date: '01 Jun 17:56 AM',
    customer: 'Kevin Dicky',
    status: 'Completed',
    price: 121.98,
  },
  {
    id: 3,
    date: '01 Jun 17:56 AM',
    customer: 'Joyce Murray',
    status: 'Completed',
    price: 67.98,
  },
  {
    id: 4,
    date: '01 Jun 17:56 AM',
    customer: 'Paula Allen',
    status: 'Completed',
    price: 104.98,
  },
  {
    id: 5,
    date: '01 Jun 17:56 AM',
    customer: 'Paula Allen',
    status: 'Pending',
    price: 344.98,
  },
  
 
];

export { topProducts, recentOrders };
