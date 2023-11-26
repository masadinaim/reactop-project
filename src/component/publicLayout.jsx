import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const PublicLayout = ({ children }) => {
    const currentPath = useLocation().pathname;
    return (
       <div>
         {currentPath !== '/login' && currentPath !== '/register' && currentPath !== '/forgotpw' && currentPath !== '/resetpw' && <Navbar />}
         {children}
         {currentPath !== '/login' && currentPath !== '/register' && currentPath !== '/forgotpw' && currentPath !== '/resetpw' && <Footer />}
       </div>
    );
};

export default PublicLayout;