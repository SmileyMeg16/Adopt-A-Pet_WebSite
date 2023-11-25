import React, { useState, useEffect } from 'react';
import './home.css';

const imagePool = [
  'Simba.jpg', 'Salem.jpg', 'Tiger.jpg', 'Buddy.jpg', 'Lund.jpg', 'Max.jpg',
  'Dasiy.jpg', 'Rocky.jpg', 'Charlie.jpg', 'Zoe.jpg', 'Bailey.jpg', 'Rex.jpg',
  'Oscar.jpg', 'Penney.jpg', 'Rosie.jpg', 'Baxter.jpg', 'Mia.jpg', 'Milo.jpg',
  'Whiskers.jpg', 'Mittens.jpg', 'Oliver.jpg', 'Misty.jpg', 'Felix.jpg',
  'Smokey.jpg', 'Whisk.jpg', 'Mitten.jpg', 'Olivia.jpg', 'Leo.jpg', 'Echo.jpg'
];

const rotationInterval = 6500;

function getRandomImage(currentImage) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * imagePool.length);
  } while (imagePool[randomIndex] === currentImage);
  return imagePool[randomIndex];
}

function Home() {
  const [currentImage, setCurrentImage] = useState(getRandomImage(''));

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = getRandomImage(currentImage);
      setCurrentImage(nextImage);
    }, rotationInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div>
      <h1>Welcome to Adopt-A-Pet</h1>
      <p>
        Find your perfect furry friend today!<br></br> Dogs and Cats that are
        available at breeders and local shelters.
      </p>
      <div className="image-container">
        <img
          src={`/images/${currentImage}`}
          alt={``}
          className="individual-image"
        />
      </div>
    </div>
  );
}

export default Home;
