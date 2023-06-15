import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "jonh",
    lastName: "tito",
  });

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
     firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
     lastName: event.target.value,
    });
  }

  return (
    <form>
      <input type="text" 
      name="firstName"
      value={formData.firstName} />
      onChange={handleFirstNameChange} 

      <input type="text" 
      name="lastName" 
       value={formData.lastName} />
      onChange={handleLastNameChange} 

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
