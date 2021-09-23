import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";

class Select extends Component {
  render() {
    return (
      <div>
        <select name="position" id="position">
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Cybersecurity Engineer">Cybersecurity Engineer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Fullstack Engineer">Fullstack Engineer</option>
          <option value="User Interface Designer">
            User Interface Designer
          </option>
        </select>
      </div>
    );
  }
}

export default Select;
