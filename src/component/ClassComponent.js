import React, { Component } from 'react'
import './Style.css'
export default class ClassComponent extends Component {
  render() {
    return (
        < div className="smallContainer2 smallContainer">
        <h1>This is created Using class Component</h1> 
        <div  className='ext'>this is using external css</div>
        <div style={{color: "purple"}}>this is using internal css</div>
         </div>
    )
  }
}
