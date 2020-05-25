import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log("props", this.props.counter);
    return (
      <div className="container text-center">
        <br />
        {/* {this.props.children} */}
        {/* <h3>Counter: {this.props.id}</h3> */}
        <span style={{ fontSize: 25 }} className={this.setCountstyle()}>
          {this.getCount()}
        </span>
        <button
          //onClick={() => this.btnHandlerIncr({ arg: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success mx-2 "
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning "
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger mx-2"
        >
          Delete
        </button>
      </div>
    );
  }

  //dynamic style update
  setCountstyle() {
    let style = "mx-2 badge badge-";
    style += this.props.counter.value === 0 ? "warning" : "primary";
    return style;
  }

  //set '0' in text => 'Zero'
  getCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
