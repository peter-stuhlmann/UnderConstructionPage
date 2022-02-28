import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/global.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Router from './Router';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
