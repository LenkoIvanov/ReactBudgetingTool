import React from "react";
import DisplayTool from "./DisplayTool";
import ExpenseForm from "./ExpenseForm";

class App extends React.Component{
  render(){
    return(
    <div>
      <h1>React Budgeting Tool</h1>
      <h1><DisplayTool/></h1>
      <ExpenseForm/>
    </div>
    );
  }
}

export default App;
