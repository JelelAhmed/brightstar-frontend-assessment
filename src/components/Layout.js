import React from 'react';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <nav className="layout-nav">
          <h1>Product List</h1>
        </nav>
      </header>
      <main className="layout-content">
        {children}
      </main>
      <footer className="layout-footer">
        <p>&copy; 2024 Brightstar</p>
      </footer>
    </div>
  );
};

export default Layout;
