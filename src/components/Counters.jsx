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
    console.log("Delete Button clicked...", counterId);
    const countersMod = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: countersMod });
  };

  render() {
    return (
      <div className="bg-dark">
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.btnHandlerDelete}
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
