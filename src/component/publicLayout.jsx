import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const PublicLayout = ({ children }) => {
    const currentPath = useLocation().pathname;
    return (
       <div>
         {currentPath !== '/login' && currentPath !== '/register' && currentPath !== '/forgotpw' && <Navbar />}
         {children}
         {currentPath !== '/login' && currentPath !== '/register' && currentPath !== '/forgotpw' && <Footer />}
       </div>
    );
};

export default PublicLayout;