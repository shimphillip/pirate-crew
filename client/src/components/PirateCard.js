import React from 'react';
import Button from '../shared/Button';
import './PirateCard.css';

/**
 * Attach event listeners for the buttons and send requests to the backend
 * It will be GET for 'View Pirate' and DELETE for 'Walk the Plank'
 * Pass along unique ids retrieved from the parent component 'Pirates.js' as a prop here when making requests.
 * Delete handler method should also come from the parent component and when trigerred,
 * and the callback returns successful, rerender the list view.
 */

const PirateCard = () => {
  return (
    <li className="card">
      <div className="img-container">
        <img src="https://via.placeholder.com/150x75" alt="img" />
      </div>
      <div className="pirate-info">
        <h3 className="pirate-name">Pirate Name</h3>
        <div className="button-container">
          <Button buttonText="View Pirate" />
          <Button buttonText="Walk the Plank" buttonBackgroundColor="red" />
        </div>
      </div>
    </li>
  );
};

export default PirateCard;
