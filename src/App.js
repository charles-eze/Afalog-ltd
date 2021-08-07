import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ScrollToTop from "./components/ScrollToTop";
import QuotationForm from './components/QuotationForm';
import About from './components/About';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      {/* <NavBar /> */}
      
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={QuotationForm} path='/quotation' />
        <Route component={Services} path='/services' />
        <Route component={Careers} path='/careers' />
        <Route component={Contact} path='/contact' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
