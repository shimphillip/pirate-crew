import React from 'react';
import './Button.css';

/**
 * Little bit of Design system to update the isolated button component using props
 * This is for the view only. All the event handlers associated with buttons should be handled
 * within their appropriate view components
 */
const Button = ({ buttonText = 'Text', buttonBackgroundColor = 'blue' }) => {
  const className = `button ${buttonBackgroundColor}`;

  return <button className={className}>{buttonText}</button>;
};

export default Button;
