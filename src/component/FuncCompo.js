import React,{useState} from 'react'
import FuncComponent from './FuncComponent';
import './FunccCompoStyle.css'
function FuncCompo() {
  const [state,setState]=useState(false);

  return (
    <>
    <button className="btn1" onClick={()=>{setState(!state)}}>To see styling in function components</button>
    <div className="funcDiv">
    {state && <FuncComponent />}
    </div>
    </>
  );
}

export default FuncCompo