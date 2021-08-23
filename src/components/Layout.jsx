import React from 'react';
import Footer from './Footer';
import Header from './Header';
import TasksList from './TasksList';

const Layout = () => {
  return (
    <div className='app'>
      <Header />
      <TasksList />
      <Footer />
    </div>
  );
};

export default Layout;
