import React from 'react';
import Button from '../shared/Button';
import './Layout.css';

/**
 * Higher order component for styles
 * Receives props for buttons and the header title, etc...
 */
const Layout = ({ children, title, buttonText }) => {
  return (
    <div className="container">
      <header className="header">
        <h2 className="page-title">{title}</h2>
        {buttonText ? <Button buttonText={buttonText}></Button> : null}
      </header>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
