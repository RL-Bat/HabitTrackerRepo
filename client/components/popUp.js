import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Add Habit</h3>
            <label>
              Habit:
              <input type="text" name="habitName"></input>
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
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
