import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import PublicLayout from './component/publicLayout';
import Hero from './component/hero';
import AboutUs from './component/about';
import Contact from './component/contact';
import Service from './component/service';
import Pricing from './component/pricing';
import Benefits from './component/benefit';
import Login from './component/login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <PublicLayout>
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/benefit" component={Benefits} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Hero} />
        </PublicLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
