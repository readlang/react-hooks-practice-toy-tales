import React, { useState } from "react";

function ToyForm({saveToy}) {
  
  const initialFormState = {
    name: "",
    image: "",
    likes: 0,
  }

  const [formData, setFormData] = useState(initialFormState)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    saveToy(formData)
  }

  return (
    <div className="container">

      <form onSubmit={ handleSubmit } className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={ formData.name } 
          onChange= { (e) => ( setFormData( {...formData, name: e.target.value} ) ) }
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange= {e=> setFormData({...formData, image: e.target.value}) }
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>

    </div>
  );
}

export default ToyForm;
