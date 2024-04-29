import React from 'react';
import ExpenseDate from './ExpenseDate';
import '../style.css';


const ExpenseItem = (props) => {
  return (
    <div className="card expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
