import React from "react";
import data from "../data/data.json";



class Cart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let { state } = this.props;
     let final =data.products.filter((pro)=>{
       if(state.usersCart[pro.id]) {
         return pro;
       }
     });
     let subTotal = final.reduce((prev, curr)=> {
       let singleItemPrice = curr.price * state.usersCart[curr.id]
        prev = prev + singleItemPrice;
        return Math.floor(prev, -1);
     }, 0);
    return (
      <div className={state.showCart ? "cart-holder-true flex" :  "cart-holder-false flex"}>
       
          <div className="justify-center align-center flex gap-2 padd-2">
            <div className="relative">
              <img className="cart-img" src="/static/bag-icon.png" />
              <span className="product-count flex justify-center align-center absolute">{Object.keys(state.usersCart).length}</span>
            </div>
            <h2 className="font-white cart-heading">Cart</h2>
          </div>
          <ul className="cart-list-holder">
            {final.map((item)=> {
              return <li key={item.id} className="single-cart-item space-btw align-center gap-1 padd-1 flex">
                <div>
                  <img className="cart-img" src={`/static/products/${item.sku}_2.jpg`} />
                </div>
                <div className="product-info flex column gap-1">
                  <h2 className="font-white cart-poroduct-title">{item.title}</h2>
                  <h3 className="font-white cart-product-quantity"> Quantity:{state.usersCart[item.id]}</h3>
                </div>
                <div className="flex column align-center gap-1">
                  <button onClick={()=>this.props.handleRemoveItemFromCart(item.id)} className="font-white remove-item">X</button>
                  <h3 className="product-price-cart font-white">$ {item.price}</h3>
                  <div className="flex">
                    <button onClick={()=>this.props.handleReduceQuantityFromCart(item.id)} className="quantity remove-item font-white">-</button>
                    <button onClick={()=>this.props.handleAddCart(item.id)} className="quantity remove-item font-white">+</button>
                  </div>
                </div>
              </li>
            })}
          </ul>
          <div className="cart-total-box flex column padd-2">
            <div className="sub-total-box flex space-btw padd-1">
              <span className="font-white sub-total">SUBTOTAL</span>
              <span className="font-white count-sub-total">$ {subTotal}</span>
            </div>
            <button onClick={()=>this.props.handleCheckout(subTotal)} className="font-white checkout flex justify-center">CHECKOUT</button>
          </div>
      </div>
    )
  }
}

export default Cart