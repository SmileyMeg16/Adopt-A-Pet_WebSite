import React, { useState } from 'react';
import './AdoptionForm.css';
import locationData from './location.json'; // Import the location data

function AdoptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    animal: '',
    message: '',
    animalName: '',
    adoptionLocation: '', // Initialize adoptionLocation as an empty string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/submit-adoption-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          animal: '',
          message: '',
          animalName: '',
          adoptionLocation: '', // Reset adoptionLocation as well
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="adoption-form-container">
      <h2>Adopt an Animal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Animal:
            <select
              name="animal"
              value={formData.animal}
              onChange={handleChange}
            >
              <option value="">Select an animal</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Animal Name:
            <input
              type="text"
              name="animalName"
              value={formData.animalName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Adoption Location:
            <select
              name="adoptionLocation"
              value={formData.adoptionLocation}
              onChange={handleChange}
            >
              <option value="">Select an adoption location</option>
              {formData.animal === 'dog' ? (
                locationData.dog_shelters.map((shelter, index) => (
                  <option key={index} value={shelter.address}>
                    {shelter.name}
                  </option>
                ))
              ) : formData.animal === 'cat' ? (
                locationData.cat_shelters.map((shelter, index) => (
                  <option key={index} value={shelter.address}>
                    {shelter.name}
                  </option>
                ))
              ) : null}
              {formData.animal === 'dog' ? (
                locationData.dog_breeders.map((breeder, index) => (
                  <option key={index} value={breeder.address}>
                    {breeder.name}
                  </option>
                ))
              ) : formData.animal === 'cat' ? (
                locationData.cat_breeders.map((breeder, index) => (
                  <option key={index} value={breeder.address}>
                    {breeder.name}
                  </option>
                ))
              ) : null}
            </select>
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdoptionForm;
