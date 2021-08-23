import React from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import { CustomProvider } from './context/GlobalState';

function App() {
  return (
    <CustomProvider>
      <ToastContainer />
      <Layout />
    </CustomProvider>
  );
}

export default App;
