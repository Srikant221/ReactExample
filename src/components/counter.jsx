import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: 0,
    count: this.props.counter.value,
  };

  btnHandlerIncr = (arg) => {
    // console.log(arg);
    this.setState({ count: this.state.count + 1 });
  };

  btnHandlerDecr = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  // ReactDom.render function
  render() {
    //console.log("props", this.props);
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
          onClick={this.btnHandlerIncr}
          className="btn btn-success mx-2 "
        >
          Increment
        </button>
        <button onClick={this.btnHandlerDecr} className="btn btn-warning ">
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
    style += this.state.count === 0 ? "warning" : "primary";
    return style;
  }

  //set '0' in text => 'Zero'
  getCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
