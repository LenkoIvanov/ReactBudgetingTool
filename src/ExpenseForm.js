import React from "react";

class ExpenseForm extends React.Component{
    handleSubmit = (e) =>{
        e.preventDefault();

        var name = this.refs.name.value;  //deprecated cause it's considered legacy; refactor later when possible
        var cost = this.refs.cost.value;

        this.refs.name.value = "";
        this.refs.cost.value = "";
        alert(name + " is " + cost);

    }

    render(){
        return(
        <div>
        <form className = "expense-form" onSubmit = {this.handleSubmit}>
            <input type = "text" placeholder = "Enter the expense..." ref = "name"/> &nbsp;&nbsp;&nbsp;
            <input type = "text" placeholder = "Enter the cost..." ref = "cost"/> &nbsp;&nbsp;&nbsp;
            <button className = "new-expense-btn">Add new expense</button>
        </form>
        </div>
        );
    }
}

export default ExpenseForm;