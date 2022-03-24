import React from "react";

class Message extends React.Component {
  render() {
    let {message} = this.props.state.error;
    return (
      <>
      <form className="signUp">
          <span className="page-info">Step 2/3</span>
          <h2 className="padd-2">Message</h2>
          <div className="wrap flex input-holder">
            <div className="flex-90">
              <label className="" htmlFor="message">Message</label>
              <textarea onChange={this.props.handleChange} className=" flex-40" rows="5" id="message" type="text" name="message"  value={this.props.state.message} className={message ? "error" : ""}></textarea>
              <span className="err-msg">{message ? message : ""}</span>
            </div>
            <div className="padd-2 flex-90 flex gap-2">
              <div className="flex gap-1">
                <input onChange={this.props.handleChange} className="radio" type="radio" id="one" name="selectOptionOne" value="The number One Choice" />
                <label className="radio-label" htmlFor="one">The Number One choice</label>
              </div>
              <div className="flex gap-1">
                <input onChange={this.props.handleChange} className="radio" type="radio" id="two" name="selectOptionOne" value="The number Two Choice"/>
                <label className="radio-label" htmlFor="two">The number Two Choice</label>
              </div>
            </div>
          </div>
          <div className="empty"></div>
          <div className="width-20 flex space-btw">
            <button onClick={this.props.handleBack} className="back ">Back</button>
            <button onClick={this.props.handleNext} className="btn flex ">Next 👉</button>
          </div>
        </form>
      </>
    )
  }
}

export default Message;