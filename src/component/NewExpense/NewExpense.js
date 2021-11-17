import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/card";
import './NewExpense.css';
const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);

  const savingExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.saveNewExpense(expenseData)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return(
    <Card className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense </button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData = {savingExpenseDataHandler}
            onCancel = {stopEditingHandler}
          />
        )}
    
    </Card>
  );
};

export default NewExpense; 