import { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [newTitle,setNewTitle] = useState('');
  const [newAmount,setNewAmount] = useState('');
  const [newDate,setNewDate] = useState('');

  const titleChangeHandler = (event)=> {
    setNewTitle(event.target.value);
  }
  
  const amountChangeHandler = (event)=> {
    setNewAmount(event.target.value);
  }

  const dateChangeHandler = (event)=> {
    setNewDate(event.target.value);
  }
   const SubmitHandler = (event) => {
    event.preventDefault();

     const expenseData = {
        title: newTitle,
        amount: newAmount,
        date : new Date(newDate),
     };


     props.onSaveExpenseData(expenseData)
     setNewTitle ('');
     setNewAmount('');
     setNewDate('');


    };
     
    return(
      <form onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={newTitle}
              onChange = {titleChangeHandler}
            />
         </div>
         <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={newAmount}
              onChange = {amountChangeHandler}
            />
         </div>
         <div className='new-expense__control'>
           <label>Date</label>
           <input
             type="date"
             min='2019-01-01'
             max='2022-12-31'
             value={newDate}
             onChange = {dateChangeHandler}
            />
         </div>
        </div>
        <div className='new-expense__actions'>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
);
};

export default ExpenseForm;