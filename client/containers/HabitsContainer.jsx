import React, { Component } from 'react';
import { connect }  from 'react-redux'; 
import * as actions from '../actions/actions.js';
import HabitsDisplay from '../components/HabitsDisplay.jsx';
import PopUp from '../components/popUp.jsx';
import HabitCreator from '../components/HabitCreator.jsx';



//redux mapStateToProps here
const mapStateToProps = state => ({
  habitList: state.habits.habitList
});

//redux mapDispatchToProps here

const mapDispatchToProps = dispatch => ({
  addHabit: (e) => dispatch(actions.addHabitActionCreator()),
  setNewHabit: (e) => dispatch(actions.setNewHabitActionCreator(e.target.value)),
  setHabitType: (e) => dispatch(actions.setHabitTypeActionCreator(e.target.value)),
  setTotalAmountsWanted: (e) => dispatch(actions.setTotalAmountsWantedActionCreator(e.target.value)),
  addTotal: () => dispatch(actions.addTotalActionCreator(habitId)),
  deleteTotal: () => dispatch(actions.deleteTotalActionCreator(habitId)),
});


class HabitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isOpen: false
    }
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { addHabit, setNewHabit, setHabitType, setTotalAmountsWanted, addTotal, deleteTotal, habitList} = this.props
    // destructure addHabit, +/- days, deleteHabit from this.props
    return(
      <div>
        <input id={'poopout'} type="button" value="Add Habit" className="addBtn" onClick={this.togglePopup} />
        {this.state.isOpen && <HabitCreator addHabit={addHabit} setNewHabit={setNewHabit} setHabitType={setHabitType} setTotalAmountsWanted={setTotalAmountsWanted} togglePopup={this.togglePopup}/>}
        <HabitsDisplay habitList={habitList} addTotal={addTotal} deleteTotal={deleteTotal}/>
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer);