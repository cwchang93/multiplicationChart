import React, { Component } from "react";
class MultiplicationChild extends Component {
  state = {};

  createMultiplicationOut() {
    const containArr = [];
    const startNum = 2;
    const endNum = 9;
    for (let i = startNum; i <= endNum; i++) {
      containArr.push(
        <div className="multiplication__contentbox--content boxSize">
          {i}
          {this.createMultiplicationIn(i, endNum)}
        </div>
      );
    }
    console.log(containArr);
    return containArr;
  }

  createMultiplicationIn(i, endNum) {
    const innerArr = [];
    for (let j = 1; j <= endNum; j++) {
      innerArr.push(
        <div className="innerMultiplication">
          {i}*{j} = {i * j}
        </div>
      );
    }
    return innerArr;
  }

  render() {
    return <React.Fragment>{this.createMultiplicationOut()}</React.Fragment>;
  }
}

export default MultiplicationChild;
