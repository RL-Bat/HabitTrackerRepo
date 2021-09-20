import React, { Component } from "react";
import { connect }  from 'react-redux'; 
import * as actions from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
  addHabit: () => dispatch(actions.addHabitActionCreator()),
  setNewHabit: (e) => dispatch(actions.setNewHabitActionCreator(e.target.value))
});
//At the moment this entire page is not being called or used, we are simply keeping it 
// increase we need to use it later on for another popup, variables can be later changed
// and made to be dynamic for whatever the need is 
const PopUp = props => {


    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={props.handleClick}>
            &times;
          </span>
          <form>
            <h3>Add Habit</h3>
            <label>
              Habit:
              <input type="text" name="habitName" onChange={(e) => setNewHabit(e)}></input>
            </label>
            <label>
              To Do/Don't?
              <input type="text" name="toDoDont"></input>
            </label>
            <label>
              Times?
              <input type="text" name="times"></input>
            </label>
            <br />
            <input type="submit" value="Add Habit" onClick={() => addHabit()}/>
          </form>
        </div>
      </div>
    ); 
}

export default connect(null, mapDispatchToProps)(PopUp);