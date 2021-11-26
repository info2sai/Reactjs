import React from "react";
import Sai from './Sai';
function App(){
  let mobile = "mobile";
  return(
    <div>
      <h1>{mobile}</h1>
      <hr/>
      <Sai />
      <button className="btn btn-success">Test</button>
    </div>
  )
}
export default App;