import React from 'react'
import ClassComponent from './ClassComponent'
import './ClassCompoStyle.css'
export default class ClassCompo extends React.Component {
    state={
        flag:false,
    }
render(){
    
    return(
        <>
    <button className="btn2" onClick={()=>{this.setState({flag:!this.state.flag})}}>To see styling in class components</button>

<div className="classDiv">
    {this.state.flag&& <ClassComponent/>}
</div>
        </>
    )
}
}