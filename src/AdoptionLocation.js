// src/LocationsToAdopt.js

import React from 'react';
import locationData from './location.json';
import './AdoptionLocation.css';

function LocationsToAdopt() {
  const dogShelters = locationData.dog_shelters;
  const catShelters = locationData.cat_shelters;
  const dogBreeders = locationData.dog_breeders;
  const catBreeders = locationData.cat_breeders;

  return (
    <div className="locations-container">
      <h2>Locations to Adopt</h2>

      <div className="location-group">
        <h3>Dog Shelters</h3>
        <div className="location-cards">
          {dogShelters.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
        <h3>Cat Shelters</h3>
        <div className="location-cards">
          {catShelters.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
        <h3>Dog Breeders</h3>
        <div className="location-cards">
          {dogBreeders.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
        <h3>Cat Breeders</h3>
        <div className="location-cards">
          {catBreeders.map((shelter, index) => (
            <div key={index} className="location-card">
              <strong>{shelter.name}</strong>
              <p>{shelter.address}</p>
              <p>Email: {shelter.email}</p>
              <p>Phone Number: {shelter.phone_number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationsToAdopt;
