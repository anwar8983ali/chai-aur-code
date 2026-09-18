import { useState } from "react";

function App() {

  const [counter,setCounter]=useState(15);//inside useStae we select default value
  //counter is variable which holds deafult value 15 and 
  // setCounter is function to update the counter variable

  function addvalue(){
    if(counter==20){
      return;
    }
    setCounter(counter+1);
  }

  function deletecounter(){
    if(counter==0){
      return;
    }
    setCounter(counter-1);
  }

  return (
    <>
    <h1>counter_Project</h1><br></br>
    <h2>value:{counter}</h2>
    <button
    onClick={addvalue}
    >add value</button>
    <br></br>
    <button
    onClick={deletecounter}
    >delete value</button>
    </>
  )
}

export default App
