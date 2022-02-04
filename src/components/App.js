import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [DBData, setDBData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(d => setDBData(d))
  }, [])

  function saveToy (formData) {
    fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {"content-type": "application/json" },
        body: JSON.stringify(formData)
      })
    .then(r => r.json())
    .then(d => setDBData([...DBData, d]))
  }

  function deleteToy (id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {"content-type": "application/json" },
    })
    setDBData([...DBData.filter(toy => (toy.id !== id ))])
  }

  function likeToy(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json" },
      body: JSON.stringify({ likes: (toy.likes + 1) })
    })
    .then(r=>r.json())
    .then(returnData=> setDBData([...DBData.map(eachToy => ( eachToy.id === toy.id ? returnData : eachToy ))]))
  }

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm saveToy={saveToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer DBData={DBData} deleteToy={deleteToy} likeToy={likeToy} />
    </>
  );
}

export default App;