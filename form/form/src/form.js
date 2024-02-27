import React, { useState } from 'react';

const MyForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add other form fields as needed
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
       [name]: value,
        //[name]:value
        // [email]:value (formdata.email)
        //...formdata will keep all the data save like name ,then email keep updating it in text box.
    });
    
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, like sending data to a server

    // For now, let's just log the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* Add other form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
