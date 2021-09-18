import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopUp from '../components/popUp.js';
import TimeClock from '../components/TimeClock.jsx';
import UserProfile from  '../components/UserProfile.jsx'
import '../styles/style.css';
import Quote from '../components/motivation.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return(
      <div className="userprofile">
        <h1 id="habbitheader">Habbit Tracker</h1>
        <header className='profile'>
          <TimeClock />
          <UserProfile />
        </header>
        <div>
          <div className="addBtn" onClick={this.togglePop}>
            <button>Add Habit?????</button>
          </div>
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </div>
        <div>
          <Quote />
        </div>
      </div>
    );
  }
}

{/* Habbits Container*/}

{/* Motivation Quote */}

export default MainContainer