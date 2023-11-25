import React from 'react';
import './AnimalsAvailable.css';

function AnimalCard({ animal, getImageFilename }) {
  return (
    <div className="animal-card">
      <img
        src={`/images/${getImageFilename(animal.name)}`}
        alt={`${animal.name} Image`}
        className="animal-image"
      />
      <div className="animal-details">
        <strong>Name: {animal.name}</strong>
        <p>Age: {animal.age} years</p>
        <p>Breed: {animal.breed}</p>
        <p>Location: {animal.location}</p>
        <p>Fun Fact: {animal.fun_fact}</p>
      </div>
    </div>
  );
}

function AnimalsAvailable({ data }) {
  const dogs = data.dogs;
  const cats = data.cats;

  const getImageFilename = (animalName) => {
    return `${animalName}.jpg`;
  };

  return (
    <div className="animals-available-container">
      <h2>Animals Available for Adoption</h2>

      <div className="animal-group">
        <h3>Dogs:</h3>
        <div className="animal-cards">
          {dogs.map((dog, index) => (
            <AnimalCard key={index} animal={dog} getImageFilename={getImageFilename} />
          ))}
        </div>
      </div>

      <div className="animal-group">
        <h3>Cats:</h3>
        <div className="animal-cards">
          {cats.map((cat, index) => (
            <AnimalCard key={index} animal={cat} getImageFilename={getImageFilename} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimalsAvailable;
