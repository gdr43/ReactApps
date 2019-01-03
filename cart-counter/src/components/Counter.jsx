import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-primary p-2">Zero</span>
        <button className="btn btn-secondary m-2">Increment</button>
        <button className="btn btn-danger m-2">Delete</button>
      </div>
    );
  }
}

export default Counter;
