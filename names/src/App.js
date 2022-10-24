

import React, {useState} from "react";


function App(props) {
  const[first, setFirst]=useState('');
  const handleChange = event =>{
    setFirst(event.target.value);
  };
  
  const[last, setLast]=useState('');
  const handleChanges = event =>{
    setLast(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <input placeholder="First NAME" onChange={handleChange}/>
      </div>
      <div>
        <input placeholder="Last NAME" onChange={handleChanges} />
      </div>
      <h2>First Name : {first}</h2>
      <h2>Last Name : {last}</h2>
    </div>
  );
}

export default App;
