import React from "react";
import { render } from "react-dom";

class CounterTwist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step : 1,
      result : 0
    }
  }

  handleSteps = (val) => {
    this.setState({
      step : val || 1,
    });
  }

  handleInc = () => {
    this.setState({
      result : this.state.result + this.state.step,
    });
  }

  handleDec = () => {
    this.setState({
      result : this.state.result - this.state.step,
    });
  }

  handleReset = () => {
    this.setState({
      step : 1,
      result : 0
    });
  }

  render() {
    let btn = [5,10,15];
    return (
      <center className="container">
        <h1>{this.state.result}</h1>
        <div className="btn-holder">
          <h2>Steps</h2>
          <div className="step-btn-holder flex">
            {btn.map((b)=> {
              return <button kay= {b} onClick = {() => this.handleSteps(b)} className={`${this.state.step === b ? 'active' : "btn steps" }`}>{b}</button>
            })}
          </div>
          <div className="main-btn-holder flex gap">
            <button className="btn main" onClick = {this.handleInc}>Increment</button>
            <button className="btn main" onClick = {this.handleDec}>Decremant</button>
            <button className="btn main" onClick = {this.handleReset}>Reset</button>
          </div>
        </div>
      </center>
    )
  }
}

export default CounterTwist;