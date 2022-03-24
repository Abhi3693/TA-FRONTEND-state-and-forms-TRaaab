import React from "react";
import data from "../data/data.json";
import Products from "./Products";
import Cart from "./Cart";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      filterByPrice: 0,
      filterBySize: [],
      usersCart: {},
      showCart:false,
    };
  }

  handleSizeFilter = (event) => {
    let { filterBySize } = this.state;
    let value = event.target.innerText;

    if(this.state.filterBySize.indexOf(value) < 0) {
      filterBySize = this.state.filterBySize.concat(value);
    } else {
      this.state.filterBySize.splice(this.state.filterBySize.indexOf(value),1)
    }
    this.setState({filterBySize});
  }

  handlePriceFilter = (event)=> {
    this.setState({
      filterByPrice : (event.target.valueAsNumber) + 1
    })
  }

  handleAddCart = (id) => {
    let { usersCart } = this.state;
    if(usersCart[id]) {
      usersCart[id] = this.state.usersCart[id] + 1;
    } else {
      usersCart[id] = 1;
    }
    this.setState({usersCart});
  }

  handleReduceQuantityFromCart = (id) => {
    let { usersCart } = this.state;
    if(usersCart[id] === 1) {
      usersCart[id] = 1;
    } else {
      usersCart[id] = this.state.usersCart[id] - 1;
    }
    this.setState({usersCart});
  }

  handleShowCart = () => {
    this.setState({showCart:!this.state.showCart});
  }

  handleRemoveItemFromCart = (id) => {
    let { usersCart } = this.state;
    delete usersCart[id];
    this.setState({usersCart});
  }

  handleCheckout = (val) => {
    alert(`Pay $ ${val} to proceed`)
  }
  render() {
    let allSizes = data.products.reduce((prev,curr) => {return prev.concat(curr.availableSizes)},[]);
    let uniqueSizes = [];
    allSizes.forEach((elm) => {
      if(uniqueSizes.indexOf(elm) < 0) {
        uniqueSizes.push(elm);
      }
    });
    let allPrices = data.products.reduce((prev,curr) => {return prev.concat(curr.price)}, []).sort((a,b)=> a - b);
   
    let final;
    final = data.products;

    if (this.state.filterBySize.length) {
      final = data.products.filter((item)=> {
        return item.availableSizes.some(size => this.state.filterBySize.includes(size))
      })
    } 
    if (this.state.filterByPrice > 10) {
      final = data.products.filter((d) => {
        return d.price <= this.state.filterByPrice 
      });
    } 
    if(this.state.filterBySize.length && this.state.filterByPrice > 10) {
      final = data.products.filter((item)=> {
        return item.availableSizes.some(size => this.state.filterBySize.includes(size))
      })
      final = final.filter((d) => {
        return d.price <= this.state.filterByPrice 
      });
    }
    return (
      <>
        <div className="container flex space-btw gap-1">
          <div className="side-bar flex-30">
            <h2 className="size">Filter By Sizes:</h2>
            <div className="size-holder padd-2">
              <ul className="flex gap-2 wrap">
                {uniqueSizes.map((size, i) => {
                  return <li onClick={this.handleSizeFilter} key={i} className={this.state.filterBySize.includes(size) ? "active-size-filter single-size flex justify-center align-center" : "single-size flex justify-center align-center" }>{size.toUpperCase()}</li>
                })}
              </ul>
            </div>
            <h2 className="size padd-2">Filter By Price</h2>
            <div className="range-holder padd-1 flex space-btw">
              <span>Min:${allPrices[0]}</span>
              <span className="current-price">Current: ${this.state.filterByPrice}</span>
              <span>Max:${allPrices[allPrices.length-1]}</span>
            </div>
            <input onChange={this.handlePriceFilter} name="range" className="price-range" type="range" min="9" max="134.9" value={this.state.filterByPrice} />
          </div>
          <div className="products flex-70">
            <h2 className="found-item">Total found Item: {final.length}</h2>
            <Products data = {final} handleAddCart={this.handleAddCart}/>
            <button onClick={this.handleShowCart} className="cart-toggle flex align-center justify-center">
              {this.state.showCart ? "X" : <img src="/static/bag-icon.png"/> }
            </button>
          </div>
          <Cart data = {final} handleShowCart={this.handleShowCart} handleAddCart={this.handleAddCart} handleReduceQuantityFromCart={this.handleReduceQuantityFromCart} handleRemoveItemFromCart={this.handleRemoveItemFromCart} state={this.state} handleCheckout={this.handleCheckout}/>
        </div>
      </>
    )
  }
}

export default Main;