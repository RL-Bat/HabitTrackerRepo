import React, { Component } from 'react';
import { connect } from 'react-redux';
import toServer from '../functions/functions.js';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 21312322222, 
      user: 'Pikachu',
      profilePic: 'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg',
      /* user_id: this.props.user_id,
         username: this.props.username,
         profileImage: this.props.profileImage,
         */ 
    } 
  }

  //=======Gets user data after login page, wg
  componentDidMount(){
     const urlParams = window.location.search;
     const urlUser = new URLSearchParams(urlParams)
     const userId = urlUser.get('user_id');
     console.log(userId);
    //  const user = urlUser.get('email')
    //  const userImage = urlUser.get('picture')
    // console.log(userId);
    // console.log(user);
    // console.log(userImage);
    //  //const userObj = {
    //   user_id
    //   email,
    //   name,
    //   picture,
    // };
    //this.setState({user: user, userId: userId, profilePic: userImage})

    // axios.get(`/database/?user_id=${userId}`)
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    

    //TEST Pikachu
    axios.get(`/database/?user_id=${userId}`)
    .then(response => {
     console.log(response.data[0]);
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