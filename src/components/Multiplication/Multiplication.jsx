import React, { Component } from "react";
import MultiplicationChild from "./MultiplicationChild";
class Multiplication extends Component {
  state = {};
  render() {
    return (
      <div className="multiplication__outline">
        <div className="multiplication__contentbox">
          <div className="multiplication__contentbox--title boxSize">
            九九乘法表
          </div>
          <MultiplicationChild />
        </div>
      </div>
    );
  }
}

export default Multiplication;
