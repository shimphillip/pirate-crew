import React, { useState, useEffect } from 'react';
import Layout from '../shared/Layout';
import PirateCard from './PirateCard';
import './Pirates.css';

/**
 * As soon as the component loads, use useEffect hook to fetch a list of the pirates from the backend.
 * Store the data into local state. Map through the list and render the pirates
 */
const Pirates = () => {
  return (
    <Layout title="Pirate Crew" buttonText="Add Pirate">
      <ul className="list">
        <PirateCard />
      </ul>
    </Layout>
  );
};

export default Pirates;
