import * as types from '../constants/actionTypes.js';

// All actions for redux, these are labeled via 'type' and are sent to HabitsContainer/habitsReducers

export const addHabitActionCreator = () => ({
  type: types.ADD_HABIT,
});

export const deleteHabitActionCreator = (habitId) => ({
  type: types.DELETE_HABIT,
  payload: habitId,
});

export const setNewHabitActionCreator = (newHabit) => ({
  type: types.SET_NEW_HABIT,
  payload: newHabit,
});

export const setHabitTypeActionCreator = (type) => ({
  type: types.SET_HABIT_TYPE,
  payload: type,
});

export const setTotalAmountsWantedActionCreator = (num) => ({
  type: types.SET_TOTAL_AMOUNTS_WANTED,
  payload: Number(num),
});

export const addTotalActionCreator = (habitId) => ({
  type: types.ADD_TOTAL,
  payload: habitId,
});

export const deleteTotalActionCreator = (habitId) => ({
  type: types.DELETE_TOTAL,
  payload: habitId,
});

export const updateListActionCreator = (update) => ({
  type: types.UPDATE_LIST,
  payload: update,
})