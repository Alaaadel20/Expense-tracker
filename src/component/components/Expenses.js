import { useState } from "react";

import Card from '../UI/card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');

  const saveFilteredYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.dummyItems.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return(
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          saveFilteredYearHandler={saveFilteredYear}
        />
        <ExpensesChart dummyExpenses={filteredExpenses} />
        <ExpensesList dummyExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses; 