import React from 'react';
import data from '../data';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  handleClick = (i) => {
    this.setState({
      activeIndex: this.state.activeIndex === i ? null : i,
    });
  };

  render() {
    return (
      <>
        <div className='container'>
          {data.map((d, i) => {
            return (
              <>
                <div
                  key={i + 100}
                  onClick={() => this.handleClick(i)}
                  className={
                    i === this.state.activeIndex
                      ? 'qus-holder-with-ans flex space-btw'
                      : 'qus-holder flex space-btw'
                  }
                >
                  <span className='qus'>{d.Q}</span>
                  <i
                    className={
                      i === this.state.activeIndex
                        ? 'fa-solid fa-hand-point-up'
                        : 'fa-solid fa-hand-point-down'
                    }
                  ></i>
                </div>
                <div
                  key={i + 10}
                  className={i === this.state.activeIndex ? 'ans-holder' : ''}
                >
                  <p className={i === this.state.activeIndex ? 'ans' : ''}>
                    {i === this.state.activeIndex ? d.A : ''}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Questions;
