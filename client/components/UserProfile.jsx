import React, { Component } from 'react';
import { connect } from 'react-redux';

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
     const userId = urlUser.get('user_id')
     console.log(userId);
     const user = urlUser.get('email')
     console.log(user);
     console.log('test')
    this.setState({user: user, userId: userId})
    //toServer.getUser(url/cookie)
  }

  render() {
    return (
      <div>
        <div id={"username"}>
          {this.state.user}
          </div>
        <div>
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