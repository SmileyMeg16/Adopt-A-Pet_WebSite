import React, { useState } from 'react';
import './AdoptionForm.css';

function AdoptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    animal: '',
    message: '',
    animalName: '',
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
      const response = await fetch('http://localhost:3000/api/submit-adoption-form', {
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
