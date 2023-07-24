import { useState } from "react";
import './App.css'
import FunctionalComponent from './component/FuncComponent';
import ClassComponent from './component/ClassComponent';
import ClassCall from "./ClassCall";
import FuncCompo from "./component/FuncCompo";
import ClassCompo from "./component/ClassCompo";
function App() {
  const [state,setState]=useState(false);
  const [ClassState,ClassSetState]=useState(false);
  return (
  //   <div className="container">
  //     <div className="main">
  //   <h1 >Styling using function and class component</h1>
  //   <button className="btn1" onClick={()=>{setState(!state)}}>To see styling in function components</button>
    // <button className="btn1" onClick={()=>{ClassSetState(!ClassState)}}>To see styling in class components</button>
  // </div>  

  //   <div className="header">
  //     <div className="func">
  //     {state && <FunctionalComponent />}
  //     </div>
  //     <div className="cls">
  //     {ClassState && <ClassComponent />}
     
  //     </div>
  //   </div>
 
    
  //   </div>
  <>
   <h1 >Styling using function and class component</h1>
  
  
 
  <div className="container">


  <div className="func">
  <FuncCompo/>

  </div>
  <div className="class">
  <ClassCompo/>

  </div>
  </div>
  </>
  );
}

export default App;

