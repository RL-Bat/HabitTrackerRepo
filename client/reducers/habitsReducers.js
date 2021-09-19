import * as types from '../constants/actionTypes.js';

const initialState = {
  habitId: 100,
  newHabit: '',
  habitType: 'positive',
  totalAmountsWanted: 1,
  habitList: [],
};

const habitsReducer = (state=initialState, action) => {
  let habitList;

  switch (action.type) {
    case types.ADD_HABIT:
      const habitId = ++state.habitId;
      //Habit Card info
      const newHabit = {
        newhabitId: habitId,
        habit: state.newHabit,
        type: state.habitType,
        totalAmountsWanted: state.totalAmountsWanted,
        total: 0
      }

      habitList = state.habitList.slice();
      habitList.push(newHabit);
      return {
        ...state,
        habitId,
        habitList,
        newHabit: '',  
        habitType: '',
        totalAmountsWanted: 0      
      };
    
    case types.SET_NEW_HABIT:
      return {...state, newHabit: action.payload};
      
    case types.SET_HABIT_TYPE:
      return {...state, habitType: action.payload};  

    case types.SET_TOTAL_AMOUNTS_WANTED:
      console.log(action.payload)
      return {...state, totalAmountsWanted: action.payload};
     
    case types.ADD_TOTAL:
      console.log(action.payload)
        const habitIdToAdd = action.payload;
        habitList = state.habitList.slice();
        for(let i = 0; i < habitList.length; i++) {
          if(habitList[i].habitId === habitIdToAdd){
            habitList[i].total += 1;
            return {...state, habitList}
          }
        }
    case types.DELETE_TOTAL:
      console.log(action.payload)
      const habitIdToDelete = action.payload;
      habitList = state.habitList.slice();
      for(let i = 0; i < habitList.length; i++) {
        if(habitList[i].habitId === habitIdToDelete){
          habitList[i].total = 0;
          return {...state, habitList}
        }
      }  
    default: {
      return state;
    }  
  } 
}


export default habitsReducer;