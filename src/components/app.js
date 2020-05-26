import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./Counters";

class App extends Component {
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
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          //   totalCounters={this.state.counters.map((c) => {
          //     let sum = 0;
          //     sum = sum + c.value;
          //     console.log(typeof c.value);
          //     return sum;
          //   })}
        />
        <br></br>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.btnHandleReset}
            onDelete={this.btnHandlerDelete}
            onIncrement={this.btnHandlerIncr}
            onDecrement={this.btnHandlerDecr}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
