
import React from "react";

class SignUp extends React.Component {

  render() {
    let {firstName, lastName, message, email, date } = this.props.state.error;
    return (
      <>
      <form className="signUp">
          <span className="page-info">Step 1/3</span>
          <h2 className="padd-2">SignUp</h2>
          <div className="wrap flex input-holder">
            <div className="flex-40">
              <label className="" htmlFor="firstName">First Name</label>
              <input onChange={this.props.handleChange} className=" flex-20" id="firstName" type="text" name="firstName" className={firstName ? "error" : ""} />
              <span className="err-msg">{firstName ? firstName : ""}</span>
            </div>
            <div className="flex-40">
              <label className="" htmlFor="lastName">Last Name</label>
              <input onChange={this.props.handleChange}  className=" flex-20" id="lastName" type="text" name="lastName" value={this.props.state.lastName} className={lastName ? "error" : ""} />
              <span className="err-msg">{lastName ? lastName : ""}</span>
            </div>
            <div className="flex-40">
              <label className="" htmlFor="date">Date of Birth</label>
              <input onChange={this.props.handleChange}  className="flex-20" id="date" type="date" name="date" value={this.props.state.date} className={date ? "error" : ""}/>
              <span className="err-msg">{date ? date : ""}</span>
            </div>
            <div className="flex-40">
              <label className="" htmlFor="email">Email Address</label>
              <input onChange={this.props.handleChange} className=" flex-20" id="email" type="text" name="email" value={this.props.state.email} className={email ? "error" : ""} />
              <span className="err-msg">{email ? email : ""}</span>
            </div>
            <div className="flex-90">
              <label className="" htmlFor="address">Address</label>
              <input onChange={this.props.handleChange} className="" id="address" type="text" name="address" value={this.props.state.address} />
              <span className="err-msg"></span>
            </div> 
          </div>
          <div className="empty"></div>
          <div className="width-20 flex space-btw">
            <button onClick={this.props.handleNext} className="btn flex ">Next 👉</button>
          </div>
        </form>
      </>
    )
  }
}

export default SignUp;