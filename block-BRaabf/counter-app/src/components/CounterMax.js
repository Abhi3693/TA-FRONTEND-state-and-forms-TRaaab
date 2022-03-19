import React from "react";

class CounterMax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step : 1,
      result : 0,
      max : Infinity,
    }
  }

  handleSteps = (val) => {
    this.setState({
      step : val || 1,
    });
  }

  handleMax = (val) => {
    this.setState({
      max : val || Infinity,
    })
  }

  handleInc = () => {
    if(this.state.result + this.state.step > this.state.max) {
      alert("Can not exceed max value")
      this.setState({
        step : 1,
        result : 0,
        max : Infinity,
      });
    } else {
      this.setState({
        result :  this.state.result + this.state.step ,
      });
    }
  }

  handleDec = () => {
    this.setState({
      result : this.state.result - this.state.step,
    });
  }

  handleReset = () => {
    this.setState({
      step : 1,
      result : 0,
      max : Infinity,
    });
  }

  render() {
    let btn = [5,10,15];
    let max = [15, 100, 200]
    return (
      <center className="container">
        <h1>{this.state.result}</h1>
        <div className="btn-holder">
          <div className="center gap flex">
            <div>
              <h2>Steps</h2>
              <div className="flex gap">
                {btn.map((b)=> {
                  return <button kay= {b} onClick = {() => this.handleSteps(b)} className={`${this.state.step === b ? 'active' : "btn steps" }`}>{b}</button>
                })}
              </div>
            </div>
            <div>
              <h2>Max- Value</h2>
              <div className="flex gap">
                {max.map((b)=> {
                  return <button kay= {b} onClick = {() => this.handleMax(b)} className={`${this.state.max === b ? 'active' : "btn steps" }`}>{b}</button>
                })}
              </div>
            </div>
          </div>
          <div className="main-btn-holder flex center">
            <button className="btn main" onClick = {this.handleInc}>Increment</button>
            <button className="btn main" onClick = {this.handleDec}>Decremant</button>
            <button className="btn main" onClick = {this.handleReset}>Reset</button>
          </div>
        </div>
      </center>
    )
  }
}

export default CounterMax;