import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PopUp from '../components/popUp.jsx';
import TimeClock from '../components/TimeClock.jsx';
import UserProfile from  '../components/UserProfile.jsx'
import '../styles/style.css';
import Newquote from '../components/motivation.jsx';
import HabitsContainer from '../containers/HabitsContainer.jsx'
import * as actions from '../actions/actions.js';


//redux mapStateToProps here
const mapStateToProps = state => ({
  habitList: state.habits.habitList
});

const mapDispatchToProps = dispatch => ({
  updateHabitList: (update) => dispatch(actions.updateListActionCreator(update))
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return(
      <div className="userprofile">
        <h1 id="habbitheader">Habbit Tracker</h1>
        <header className='profile'>
          <UserProfile updateHabitList={this.props.updateHabitList}/>
          <TimeClock />
        </header>
        <div>
          
        </div>
        <main id="habitcontainer">
          <HabitsContainer habitList={this.props.habitList}/>
        </main>
        <footer id="quotefoot">
          <Newquote />
        </footer>
      </div>
    );
  }
}

{/* Habbits Container*/}

{/* Motivation Quote */}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);



// state = {
//   seen: false
// };

// togglePop = () => {
//   this.setState({
//     seen: !this.state.seen
//   });
// };

// <div className="addBtn" onClick={this.togglePop}>
// <button>Add Habit?????</button>
// </div>
// {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
