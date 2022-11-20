import React from 'react';

import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />

      <main className=" grow h-screen ">{children}</main>
    </div>
  );
};

export default Layout;
