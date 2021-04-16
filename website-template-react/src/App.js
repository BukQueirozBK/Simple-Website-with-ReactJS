import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Hero from './components/Hero';
import Products from './components/products';
import {ProductData, ProductDataTwo} from './components/products/data';
import Feature from './components/feature';
// import {ProductDataTwo} from './components/products/data';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='As mais procuradas' data={ProductData}/>
      <Feature />
      <Products heading='Todos os modelos' data={ProductDataTwo}/>
      <Feature />
      <Footer />
    </Router>
  );
};

export default App;
