import React from "react";

class CheckBox extends React.Component {
  render() {
    return (
      <>
        <form className="signUp">
          <span className="page-info">Step 3/3</span>
          <h2 className="padd-2">CheckBox</h2>
          <div className="wrap flex input-holder padd-2">
            <img className={this.props.state.img1 ? "selected" : ""} onClick={this.props.handleImg} src="/media/img-1.jpeg" alt="img"/>
            <img className={this.props.state.img2 ? "selected" : ""} onClick={this.props.handleImg} src="/media/img-2.jpeg" alt="img"/>
          </div>
          <div className="wrap flex input-holder">
            <input onChange={this.props.handleChange} className="checkBox" type="checkbox" id="three" name="selectOptionTwo" value="I want to add this option"/>
            <label htmlFor="three" >I want to add this option</label>
          </div>
          <div className="wrap flex input-holder">
            <input onChange={this.props.handleChange} className="checkBox" type="checkbox" id="four"  name="selectOptionThree" value="Let me click on this checkBox and choose some cool stuff" />
            <label htmlFor="four" >Let me click on this checkBox and choose some cool stuff</label>
          </div>
          <div className="empty"></div>
          <div className="flex gap-2">
            <button onClick={this.props.handleBack} className="back ">Back </button>
            <button onClick={this.props.handleSubmit} className="btn submit flex ">Submit</button>
          </div>
        </form>
      </>
    )
  }
}

export default CheckBox;