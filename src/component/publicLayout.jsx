import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const PublicLayout = ({ children }) => {
    const currentPath = useLocation().pathname;
    return (
       <div>
         {currentPath !== '/login' && <Navbar />}
         {children}
         {currentPath !== '/login' && <Footer />}
       </div>
    );
};

export default PublicLayout;