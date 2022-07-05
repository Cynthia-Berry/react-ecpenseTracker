import {useState} from "react";
import '../../assets/css/ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState(0.00);
  const [enteredDate, setDate] = useState('');

  /*******ALTERNATIVELY*******/
  /*  const [userInput, setUserInput] = useState({title: '', amount: 0.00, date: new Date()})
   const titleChangedHandler = event => {
      // setTitle(event.target.value);
      setUserInput((prevState) => {
        return {...prevState, title: event.target.value}
      });
    }
    const amountChangeHandler = event => {
      // setTitle(event.target.value);
      setUserInput((prevState) => {
        return {...prevState, amount: event.target.value}
      });
    }
    const dateChangeHandler = event => {
      // setTitle(event.target.value);
      setUserInput((prevState) => {
        return {...prevState, date: event.target.value}
      });
    }*/


  const addExpense = (e) => {
    e.preventDefault();
    const date = new Date(enteredDate).toUTCString()
    const expenseFormValue = {title: enteredTitle, amount: enteredAmount, date: new Date(date)};
    props.onSaveExpenseData(expenseFormValue);
    setTitle('');
    setAmount(0.00);
    setDate('');
  }


  return (
    <form onSubmit={addExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
                 value={enteredTitle}
                 onChange={event => {
                   setTitle(event.target.value)
                 }}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"
                 value={enteredAmount}
                 onChange={event => {
                   setAmount(event.target.value)
                 }}/>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2023-12-31"
                 value={enteredDate}
                 onChange={event => {
                   setDate(event.target.value)
                 }}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.showForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;