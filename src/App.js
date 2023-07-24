import './App.css'
import FuncCompo from "./component/FuncCompo";
import ClassCompo from "./component/ClassCompo";
function App() {

  return (
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

