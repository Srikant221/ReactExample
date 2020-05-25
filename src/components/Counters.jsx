import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 40 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  btnHandlerDelete = (counterId) => {
    // console.log("Delete Button clicked...", counterId);
    const countersMod = this.state.counters.filter((c) => c.id !== counterId);
    // console.log(countersMod);
    this.setState({ counters: countersMod });
  };

  btnHandleReset = () => {
    // console.log("Reset Clicked...");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  btnHandlerIncr = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // console.log(counters.indexOf(counter));
    // spread operator (...) to clone the objects
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  btnHandlerDecr = (counter) => {
    if (counter.value !== 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  render() {
    return (
      <div className="bg-dark">
        <div>
          <button onClick={this.btnHandleReset} className="btn btn-info">
            Reset
          </button>
        </div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.btnHandlerDelete}
            onIncrement={this.btnHandlerIncr}
            onDecrement={this.btnHandlerDecr}
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
