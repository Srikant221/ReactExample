import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // following is object destructuring
    const { onDelete, onIncrement, onDecrement, onReset } = this.props;

    return (
      <div className="bg-dark">
        <div>
          <button onClick={onReset} className="btn btn-info">
            Reset
          </button>
        </div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            // value={counter.value}
            // id={counter.id}
            // for passing above as an object below step is done
            counter={counter}
          >
            {/* <h3>Counter: {counter.id}</h3> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
