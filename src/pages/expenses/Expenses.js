import {useState} from "react";
import Card from "../../components/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "../../assets/css/Expenses.css"
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const saveExpenseFilter = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  });


  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilterChange={saveExpenseFilter}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList listItem={filteredExpenses}/>
    </Card>
  )

}

export default Expenses;