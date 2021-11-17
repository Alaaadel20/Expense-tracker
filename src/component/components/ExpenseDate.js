import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const day =props.dummyDates.toLocaleString('en-US',{day:"2-digit"});
  const month =props.dummyDates.toLocaleString('en-US',{month:"long"});
  const year =props.dummyDates.getFullYear();
  return(
   <div className='date-style'> 
     <div className='expense-date__month'>{month}</div>
     <div className='expense-date__year'>{year}</div>
     <div className='expense-date__day'>{day}</div>
   </div> 
  );
};
export default ExpenseDate;