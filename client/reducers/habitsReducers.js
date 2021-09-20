import * as types from '../constants/actionTypes.js';

const initialState = {
  user_id: 0,
  habitId: 100,
  newHabit: '',
  habitType: 'positive',
  totalAmountsWanted: 1,
  habitList: [],
};

const habitsReducer = (state = initialState, action) => {
  let habitList;

  switch (action.type) {
    case types.ADD_HABIT:
      const habitId = ++state.habitId;
      //Habit Card info
      const newHabit = {
        habitId: habitId,
        habit: state.newHabit,
        type: state.habitType,
        totalAmountsWanted: state.totalAmountsWanted,
        total: 0,
      };

      habitList = state.habitList.slice();
      habitList.push(newHabit);
      return {
        ...state,
        habitId,
        habitList,
        newHabit: '',
        habitType: '',
        totalAmountsWanted: 0,
      };

    case types.DELETE_HABIT:
      console.log('delete!');
      const habitToDelete = action.payload;
      console.log(action.payload);
      habitList = state.habitList.slice();
      for (let i = 0; i < habitList.length; i++) {
        if (habitList[i].habitId === habitToDelete) {
          habitList.splice(i, 1);
          console.log(habitList);
          return {
            ...state,
            habitList,
          };
        }
      }

    case types.SET_NEW_HABIT:
      return { ...state, newHabit: action.payload };

    case types.SET_HABIT_TYPE:
      return { ...state, habitType: action.payload };

    case types.SET_TOTAL_AMOUNTS_WANTED:
      return { ...state, totalAmountsWanted: action.payload };

    case types.ADD_TOTAL:
      const habitIdToAdd = action.payload;
      habitList = state.habitList.slice();
      for (let i = 0; i < habitList.length; i++) {
        if (habitList[i].habitId === habitIdToAdd) {
          habitList[i].total += 1;
          return { ...state, habitList };
        }
      }
    case types.DELETE_TOTAL:
      const habitIdToDelete = action.payload;
      habitList = state.habitList.slice();
      for (let i = 0; i < habitList.length; i++) {
        if (habitList[i].habitId === habitIdToDelete) {
          habitList[i].total = 0;
          return { ...state, habitList };
        }
      }
    default: {
      return state;
    }
  }
};

export default habitsReducer;
