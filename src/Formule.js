import React, { useState } from 'react';

function Formule() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    birthday: '',
    city: '',
    gender: '',
    hobbies: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={formData.id} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Birthday:
          <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
        </label>
        <br />
        <label>
          City:
          <select name="city" id="city" value={formData.city} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Tangier">Tangier</option>
            <option value="Rabat">Rabat</option>
          </select>
        </label>
        <br />
        <label>
          Gender:
          <input type="radio" name="gender" value="Mr" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Mme" onChange={handleChange}/> Female
        </label>
        <br />
        <label>
          Hobbies:
          <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Photo:
          <input type="file" name="photo" accept="image/*" onChange={handleChange}/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Summary</h2>
        <p>Je suis (formData.gender) {formData.id} né le {formData.birthday} à {formData.city} et mes loisirs sont : {formData.hobbies}</p>
      </div>
    </div>
  );
}

export default Formule;