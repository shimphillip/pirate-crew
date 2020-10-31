import React from 'react';
import axios from 'axios';
import Button from '../shared/Button';
import Layout from '../shared/Layout';
import './AddPirate.css';

/**
 * The best way to handle form is using existing libraries
 * like Formik. Once the data is collected, send the formdata to the backend
 * and programatically navigate using react-router-dom to the pirate profile page.
 * It's usually a convention to store the form data into the state but not necessary here.
 * Make sure to clean up the form data as well since this is a SPA app so the data persists within the component.
 * Even after coming back from a different view.
 */

const AddPirate = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const {
      pirateName,
      imgUrl,
      treasureChests,
      pirateCatchPhrase,
      crewPosition,
      isPegLeg,
      isEyePatch,
      isHookHand,
    } = e.target.elements;

    const pirateData = {
      pirateName: pirateName.value,
      imgUrl: imgUrl.value,
      treasureChests: treasureChests.value,
      pirateCatchPhrase: pirateCatchPhrase.value,
      crewPosition: crewPosition.value,
      isPegLeg: isPegLeg.value,
      isEyePatch: isEyePatch.value,
      isHookHand: isHookHand.value,
    };

    axios
      .post('/api/add', pirateData)
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Add Pirate" buttonText="Crew Board">
      <form className="form" onSubmit={submitForm}>
        <div className="left">
          <label htmlFor="pirateName">Pirate Name:</label>
          <input type="text" id="pirateName" name="pirateName" />

          <label htmlFor="imageUrl">Image Url:</label>
          <input type="text" id="imageUrl" name="imageUrl" />

          <label htmlFor="treasureChests"># of Treasure Chests</label>
          <input type="number" id="treasureChests" name="treasureChests" />

          <label htmlFor="catchPhrase">Pirate Catch Phrase: </label>
          <textarea id="catchPhrase" name="catchPhrase"></textarea>
        </div>
        <div className="right">
          <label htmlFor="crewPosition">Crew Position:</label>
          <input type="text" id="crewPosition" name="crewPosition" />

          <input type="checkbox" id="isPegLeg" name="isPegLeg" />
          <label htmlFor="isPegLeg">Peg Leg</label>

          <input type="checkbox" id="isEyePatch" name="isEyePatch" />
          <label htmlFor="isEyePatch">Eye Patch</label>

          <input type="checkbox" id="isHookHand" name="isHookHand" />
          <label htmlFor="isHookHand">Hook Hand</label>

          <Button buttonText="Add Pirate" type="submit" />
        </div>
      </form>
    </Layout>
  );
};

export default AddPirate;
