import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

      // Show the footer only when the user has scrolled down
      setIsFooterVisible(clientHeight + scrollTop >= scrollHeight);
    };

    // Initial check on component mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <footer className={`bg-black text-white p-4 fixed bottom-0 right-0 left-0 ${isFooterVisible ? '' : 'hidden'}`}>
      <div className="container mx-auto flex justify-center items-center">
        {/* Contact information */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
