import React, { Component } from "react";
// import logo from "./logo.svg";
import "../App.css";
import { ComponentChild, FunctionalChild, PureChild } from "./Children";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyState: new Date().valueOf(),
      data: {a: '111'}
    };
    this.interval = null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <PureChild data={this.state.data}/>
          <FunctionalChild data={this.state.data}/>
          <ComponentChild />
          <button
            onClick={() => {
              clearInterval(this.interval);
              console.log("Stopped Interval");
            }}
            style={{
              marginTop: 10,
              width: 100,
              height: 35,
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            Stop Interval
          </button>
        </header>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        const data = this.state.data;
        data.a = new Date().valueOf();
      this.setState({
        dummyState: new Date().valueOf(),
        data
      });
    //   this.state.data.a = '-222';
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Parent;