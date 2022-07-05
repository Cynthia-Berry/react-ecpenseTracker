import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import '../../assets/css/NewExpense.css';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {id: Math.random().toString(), ...enteredExpenseData};
    props.onAddExpenseItem(expenseData);
    setShowExpenseForm(false);
  };

  const showFormHandler = () => {
    showExpenseForm ? setShowExpenseForm(false) : setShowExpenseForm(true)
  }


  return (
    <div className="new-expense">
      {!showExpenseForm && <button className="new-expense__actions" onClick={showFormHandler}>Add Expense</button>}
      {showExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} showForm={showFormHandler}/>}
    </div>
  )
}

export default NewExpense;