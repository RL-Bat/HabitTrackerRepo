import React, { Component } from 'react';
import { connect } from 'react-redux';
import toServer from '../functions/functions.js';
import axios from 'axios';
import { updateListActionCreator } from '../actions/actions.js';


//redux mapDispatchToProps here


class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 21312322222, 
      user: 'Pikachu',
      profilePic: 'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg',
    } 
  }





  //=======Gets user data after login page
  componentDidMount(){
     const urlParams = window.location.search;
     const urlUser = new URLSearchParams(urlParams)
     const userId = urlUser.get('user_id');
    axios.get(`/database/?user_id=${userId}`)
    .then(response => {
      this.props.updateHabitList(response.data[0].habitCards)
     this.setState({user: response.data[0].name, userId: response.data[0].user_id, profilePic: response.data[0].picture})
     })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div id="username">
          {this.state.user}
          </div>
        <div id='picture'>
          <img id={"pikachu"} src={this.state.profilePic} alt='User profile picture'/>
        </div> 
      </div>
    )
  }
}

export default UserProfile;



/*
export default function User() {

}

*/