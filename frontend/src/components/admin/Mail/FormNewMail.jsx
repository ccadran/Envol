import React, { useState } from "react";
import axios from "axios";

const FormNewMail = () => {
  const [email, setEmail] = useState("");
  const [childNames, setChildNames] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ]);

  const handleInputChange = (id, value) => {
    // Update the childNames state based on the id of the input being changed
    const updatedChildNames = childNames.map((child) =>
      child.id === id ? { ...child, value } : child
    );
    setChildNames(updatedChildNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new mail object with the email and childNames fields
    const newMail = {
      email,
      childNames: childNames.map((child) => child.value),
    };

    // Send the new mail object to the server
    axios
      .post("http://localhost:5001/mail-parent", newMail)
      .then((res) => {
        // Handle the response if needed
        console.log(newMail);
        console.log("Mail added successfully!");
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error adding mail:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="mail">Titre de la section :</label>
        <input
          type="text"
          id="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="childNames">Le nom des enfants</label>
        {childNames.map((child) => (
          <input
            key={child.id}
            type="text"
            value={child.value}
            onChange={(e) => handleInputChange(child.id, e.target.value)}
          />
        ))}
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default FormNewMail;
