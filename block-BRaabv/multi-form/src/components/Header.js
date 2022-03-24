import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="">
          <div className="step-number-holder flex gap-2">
            <div className="single-step align-center flex gap-1 flex-10">
              <div className="box flex center">1</div>
              <span className="step-name">Sign Up</span>
            </div>
            <div className="single-step align-center flex gap-1 flex-10">
              <div className="box flex center">2</div>
              <span className="step-name">Message</span>
            </div>
            <div className="single-step align-center flex gap-1 flex-10">
              <div className="box flex center">3</div>
              <span className="step-name">CheckBox</span>
            </div>
          </div>
          <div className="empty"></div>
        </header>
      </>
    )
  }
}

export default Header;