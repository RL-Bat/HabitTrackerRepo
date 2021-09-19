import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Pikachu',
      profilePic: 'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg',
      /* user_id: this.props.user_id,
         username: this.props.username,
         profileImage: this.props.profileImage,
         */ 
    }
  }
  //=======Gets user data after login page, wg
  // componentDidMount(){
  //   
  //   UrlSearchParams
  //   const url = 'userdata'
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(res =>{
  //     this.setState({username: res.data.username?})
  //   })
  // }

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