import React, { useState, useEffect } from 'react';

const DailyCaloriesCard = (props) => {
  const [calorieData, updateCalorieData] = useState({
      //Get the current value of caloriesConsumedToday and caloriesRemainingToday from database call done in DashboardContainer
    addedCalories: 0,
  });

  const { addedCalories } = calorieData;

  //When user enters input, capture that amount in the state in onChange
  const onInputChange = (e) => {
    updateCalorieData({...calorieData, [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value }  )
  };


//Clear addedCalories input upon submit
const clearInput = (e) => {
    updateCalorieData({...calorieData, addedCalories: 0});
}

  return (
    <div className='card'>
      <h2 className='card-title'>Daily Calories Tracker</h2>
      <div className='card-stats'>
        <div className='card-item'>
          <p className='card-label'>Calories Consumed:</p>
          <p className='card-value'>{props.caloriesConsumedToday}</p>
        </div>
        <div className='card-item'>
          <p className='card-label'>Calories Remaining:</p>
          <p className='card-value'>{props.caloriesRemainingToday}</p>
        </div>
      </div>
      <div className='card-item calories-input'>
        <input
          className='card-input'
          type='number'
          name='addedCalories'
          value={addedCalories}
          onChange={(e) => onInputChange(e)}
        ></input>
        <button className='card-button' onClick={(e) => { props.addCalories(addedCalories); clearInput(e)}}>
          Add Calories
        </button>
      </div>
    </div>
  );
};

export default DailyCaloriesCard;
