import {useState} from "react";
import Expenses from "./pages/expenses/Expenses";
import NewExpense from "./pages/newExpense/NewExpense";

const INITIAL_EXPENSES = [
  {id: '1', title: 'Food', amount: 50000.78, date: new Date(2019, 11, 5)},
  {id: '2', title: 'Rent', amount: 100000.00, date: new Date(2019, 2, 14)},
  {id: '3', title: 'Data', amount: 200.78, date: new Date(2022, 4, 28)},
  {id: '4', title: 'Toiletries', amount: 600.00, date: new Date(2022, 8, 28)},
  {id: '4', title: 'School Fee', amount: 165000.78, date: new Date(2019, 9, 25)},
];


const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseItemHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState]
    })
  }

  return (
    <>
      <NewExpense onAddExpenseItem={addExpenseItemHandler}/>
      <Expenses items={expenses}/>
    </>
  );
}

export default App;
