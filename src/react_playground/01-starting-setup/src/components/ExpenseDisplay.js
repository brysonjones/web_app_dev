import React, { useState } from 'react';
import './ExpenseDisplay.css';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function ExpenseDisplay(props) {
  const {filteredYear, setFilteredYear} = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
    return (
      <div>
        <div className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseItem 
            date={props.expenses[0].date} 
            title={props.expenses[0].title} 
            amount={props.expenses[0].amount}
          />
          <ExpenseItem 
            date={props.expenses[1].date} 
            title={props.expenses[1].title} 
            amount={props.expenses[1].amount}
          />
          <ExpenseItem  
            date={props.expenses[2].date} 
            title={props.expenses[2].title} 
            amount={props.expenses[2].amount}
          />
          <ExpenseItem  
            date={props.expenses[3].date} 
            title={props.expenses[3].title} 
            amount={props.expenses[3].amount}
          />
        </div>
      </div>
    );
  }
  
  export default ExpenseDisplay;