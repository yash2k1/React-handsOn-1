// this is just for under standing the class based call 


import React ,{Component} from "react";
import './App.css'
import FunctionalComponent from './component/FuncComponent';
import ClassComponent from './component/ClassComponent';

class ClassCall extends Component{
constructor(){
  super();
  this.state={
    value:0,
  //  fState:false,
  //  cState:false
  };
}
// clickHandle1=()=>{
//   this.setState({fState:!this.state.fState})
// }
// clickHandle2=()=>{
//   this.setState({cState:!this.state.cState})
// }
componentDidMount(){
  console.log("component is mount")
}
componentDidUpdate(){
  console.log("component is updated")
}
componentWillUnmount(){
  console.log("component is unmounted")
}

hangeCounter=(e)=>{
this.setState({value:this.state.value+1})
}
render(){
  return (
    <>
    {/* <button onClick={this.clickHandle1}>function component</button>
    {this.state.fState && <FunctionalComponent/>}
    <button onClick={this.clickHandle2} >class component</button>
    {this.state.cState && <ClassComponent/>} */}
<h1>Counter:{this.state.value}</h1>
<button onClick={this.hangeCounter}>increase</button>
    </>
  )
}
}
export default ClassCall;

