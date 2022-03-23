import React from "react";
import SignUp from "./SignUp";
import Message from "./Message";
import CheckBox from "./CheckBox";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 0,
      firstName: "",
      lastName: "",
      date: "",
      email: "",
      address: "",
      message: "",
      selectOptionOne: "",
      selectOptionTwo: "",
      selectOptionThree: "",
      img1: "",
      img2: "",
      error: {
        firstName: "",
        lastName: "",
        date: "",
        email: "",
        address: "",
        message: "",
      }
    }
  }

  handleNext = (event) => {
    event.preventDefault();
    this.setState({
      pageNo: this.state.pageNo + 1
    });
  }

  handleBack = (event) => {
    event.preventDefault();
    this.setState({
      pageNo: this.state.pageNo - 1,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { firstName, lastName, date, email, address, message } = this.state.error
    if(!firstName, !lastName, !date, !email, !address, !message) {
      return console.log("All done");
    } 
  }

  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    let error = this.state.error;
    switch (name) {
      case "email" :
        error.email = this.validateEmail(value) ?  "" : "Email is invalid"
        break;
      case "firstName" :
        error.firstName = value.length < 5 ? "firstname should be atleast 5 charachter" : ""
        break;
      case "lastName" :
        error.lastName = value.length >= 5 ? "" : "lastname should be atleast 5 charachter"
        break;
      case "date" :
        error.date = Number(value.split("-")[0]) + 18 < 2021 ? "" : "User should be 18 complete"
        break;
      case "message" :
        error.message = value.length > 100 ? "" : "Message should be atleast 100 words"
        break;
    }

    let { selectOptionOne, selectOptionTwo, selectOptionThree } = this.state;
    if (name === "selectOptionOne") {
      if(this.state.selectOptionOne === value) {
        selectOptionOne = "";
      } else {
        selectOptionOne = value;
      }
    } else if (name === "selectOptionTwo") {
      if (!this.state.selectOptionTwo) {
        selectOptionTwo = value;
      } else {
        selectOptionTwo = "";
      }
    } else {
      if (!this.state.selectOptionThree) {
        selectOptionThree = value;
      } else {
        selectOptionThree = "";
      }
    }
    this.setState({ [name]: value, error, selectOptionOne, selectOptionTwo, selectOptionThree })
  }

  handleImg = (event) => {
    let src = event.target.src.split("/")
    let { img1, img2 } = this.state;
    if(src[src.length - 1].startsWith("img-1")) {
        if(!this.state.img1) {
          img1 = event.target.src;
        } else {
          img1 = "";
        }
    } else {
        if(!this.state.img2) {
          img2 = event.target.src;
        } else {
          img2 = "";
        }
    }
    this.setState({img1, img2});
  }

  render() {
    return (
      <>
      <header className="">
          <div className="step-number-holder flex gap-2">
            <div className="single-step align-center flex gap-1 flex-10">
              <div className={this.state.pageNo > 0 ? "box flex center box-complete" : "box flex center"}>1</div>
              <span className="step-name">Sign Up</span>
            </div>
            <div className="single-step align-center flex gap-1 flex-10">
              <div className={this.state.pageNo > 1 ? "box flex center box-complete" : "box flex center"}>2</div>
              <span className="step-name">Message</span>
            </div>
            <div className="single-step align-center flex gap-1 flex-10">
              <div className="box flex center">3</div>
              <span className="step-name">CheckBox</span>
            </div>
          </div>
          <div className="empty"></div>
      </header>
      <div className="form-holder">
        {this.state.pageNo === 0 && <SignUp handleBack= {this.handleBack} handleNext= {this.handleNext} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} state= {this.state}/>}
        {this.state.pageNo === 1 && <Message handleBack= {this.handleBack} handleNext= {this.handleNext} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} state= {this.state}/>}
        {this.state.pageNo === 2 && <CheckBox handleBack= {this.handleBack} handleNext= {this.handleNext} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} handleImg = {this.handleImg} state= {this.state}/>}
      </div>
      </>
    )
  }
}

export default Form;