import React, { useState } from "react";

function SimpleForm({ myref }) {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Event handler to update form data as the user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here (e.g., send it to a server)
    console.log(formData);
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            ref={myref}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
