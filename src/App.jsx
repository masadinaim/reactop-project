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
import Register from './component/register';
import ForgotPassword from './component/forgotpw';
import ResetPassword from './component/resetpw';
import Portofolio from './component/portofolio';

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
          <Route path="/portofolio" component={Portofolio} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgotpw" component={ForgotPassword} />
          <Route path="/resetpw" component={ResetPassword} />
          <Route path="/" exact component={Hero} />
        </PublicLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
