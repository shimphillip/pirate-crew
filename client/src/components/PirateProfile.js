import React from 'react';
import Button from '../shared/Button';
import Layout from '../shared/Layout';

/**
 * Individual Pirate Profile Page
 * Attach event listeners for the buttons. Send Patch requests to the backend to modify individual data.
 */

const PirateProfile = ({
  pirateName,
  imgUrl,
  treasureChests,
  pirateCatchPhrase,
  crewPosition,
  isPegLeg,
  isEyePatch,
  isHookHand,
}) => {
  return (
    <Layout title={pirateName}>
      <div className="profile">
        <div className="left">
          <img src={imgUrl} alt="hey" />
          <h3>{pirateCatchPhrase}</h3>
        </div>
        <div className="right">
          <h5>About</h5>
          <ul>
            <li>Position: {crewPosition}</li>
            <li>Treasures: {treasureChests}</li>
            <li>
              Peg Leg: {isPegLeg}{' '}
              <Button buttonText="No" buttonBackgroundColor="red" />
            </li>
            <li>
              Eye Patch: {isEyePatch}{' '}
              <Button buttonText="No" buttonBackgroundColor="red" />
            </li>
            <li>
              Hook Hand: {isHookHand}{' '}
              <Button buttonText="No" buttonBackgroundColor="red" />
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PirateProfile;
