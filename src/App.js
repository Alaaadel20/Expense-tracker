import { useState } from "react";
import Expenses from "./component/components/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const dummy_data = [
  {
    id: 'e1',
    title: 'Eyeliner',
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense,setExpense] = useState(dummy_data)
  const addingNewExpenseHandler = (newExpense) =>{
    setExpense((prevExpense) => {
      return [newExpense,...prevExpense];
    }
    )};
  return (
    <div>
      <NewExpense saveNewExpense = {addingNewExpenseHandler}/>
      <Expenses dummyItems={expense}/>
    </div>
  );
}

export default App;

