import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import NavBar from './components/NavBar';
import ScrollToTop from "./components/ScrollToTop";
import QuotationForm from './components/QuotationForm';
import About from './components/About';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Submit from './components/Submit';

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <NavBar />
      
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={QuotationForm} path='/quotation' />
        <Route component={Services} path='/services' />
        <Route component={Careers} path='/careers' />
        <Route component={Contact} path='/contact' /> 
        <Route component={Submit} path='/submitted' /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
