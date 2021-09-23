import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";
import HabitsDisplay from "../components/HabitsDisplay.jsx";
import PopUp from "../components/popUp.jsx";
import HabitCreator from "../components/HabitCreator.jsx";

//redux mapDispatchToProps here
const mapDispatchToProps = (dispatch) => ({
  addHabit: (e) => dispatch(actions.addHabitActionCreator()),
  deleteHabit: (habitId) => dispatch(actions.deleteHabitActionCreator(habitId)),
  setNewHabit: (e) =>
    dispatch(actions.setNewHabitActionCreator(e.target.value)),
  setHabitType: (e) =>
    dispatch(actions.setHabitTypeActionCreator(e.target.value)),
  setTotalAmountsWanted: (e) =>
    dispatch(actions.setTotalAmountsWantedActionCreator(e.target.value)),
  addTotal: (habitId) => dispatch(actions.addTotalActionCreator(habitId)),
  deleteTotal: (habitId) => dispatch(actions.deleteTotalActionCreator(habitId)),
});

class HabitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {
      addHabit,
      deleteHabit,
      setNewHabit,
      setHabitType,
      setTotalAmountsWanted,
      addTotal,
      deleteTotal,
      habitList,
    } = this.props;

    const modalIsOn = this.state.isOpen;
    // destructure addHabit, +/- days, deleteHabit from this.props
    return (
      //only render button if there is nothing in list
      <div>
        <div className="habitBox">
          <button onClick={this.togglePopup}>Add Interview</button>
        </div>
        <div>
          {this.state.isOpen && (
            <HabitCreator
              show={modalIsOn}
              addHabit={addHabit}
              setNewHabit={setNewHabit}
              setHabitType={setHabitType}
              setTotalAmountsWanted={setTotalAmountsWanted}
              togglePopup={this.togglePopup}
            />
          )}
          <HabitsDisplay
            habitList={habitList}
            deleteHabit={deleteHabit}
            addTotal={addTotal}
            deleteTotal={deleteTotal}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(HabitsContainer);
