import React, { useState } from "react"
import Footer from './footer';
import Navbar from './navbar';
import Navbar1 from './navbar-v2';

import Sidebar from './sidebar';

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState (false);

  const toggleSidebar = () => {
    setIsOpen (!isOpen);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar1 toggleSidebar={toggleSidebar} />
        {/* <Navbar /> */}

        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
