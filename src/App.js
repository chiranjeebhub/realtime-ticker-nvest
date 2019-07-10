import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import RTChart from "react-rt-chart";

class App extends Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }
  getBTC = () => {};
  render() {
    var data = {
      date: new Date(),
      BTC: Math.random(),
      ETH: Math.random()
    };
    return (
      <div className="App">
        <h1>Nvest BTC & ETH Ticker</h1>
        <RTChart fields={["BTC", "ETH"]} data={data} />
      </div>
    );
  }
}

export default App;
