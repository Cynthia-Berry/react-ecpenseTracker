import ExpenseItem from "./ExpenseItem";
import '../../assets/css/ExpensesList.css';

const ExpenseList = (props) => {
  if (props.listItem.length === 0) return <h2 className='expenses-list__fallback'>Found no expenses</h2>

  return (
    <ul className='expenses-list'>
      {props.listItem.map(expense => (
        <ExpenseItem key={expense.id} title={expense.title} cost={expense.amount} date={expense.date}/>)
      )}
    </ul>
  )
}

export default ExpenseList;
