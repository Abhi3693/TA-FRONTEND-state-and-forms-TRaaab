import React from "react";
// import data from "../data/data.json";

class Products extends React.Component {
  constructor() {
    super();
  }

  render() {
    let data = this.props.data;
    return (
      <ul className="products-holder flex space-btw wrap">
        {data.map((item) => {
          return (
            <li key={item.id} className="single-product flex-30 center padd-2">
              <div className="img-holder">
                <img className="product-img" src={`/static/products/${item.sku}_1.jpg`} alt="image"/>
                {item.isFreeShipping ? <span className="shipping-free">Shipping Free</span> : ""}
              </div>
              <div className="product-info">
                <h3 className="product-name padd-1">{item.title}</h3>
                <h3 className="product-other-info padd-1">{item.style}</h3>
                <div className="empty"></div>
                <h2 className="product-price padd-1">${item.price}</h2>
                <button onClick={()=>this.props.handleAddCart(item.id)} className="add-product flex-100">Add to Cart</button>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Products;