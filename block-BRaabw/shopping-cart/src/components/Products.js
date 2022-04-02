import React from 'react';
import OrderBy from './OrderBy';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrder: '',
    };
  }

  // Selected order of product
  handleSelectedOrder = (event) => {
    this.setState({
      selectedOrder: event.target.value,
    });
  };

  // Filter Product by size
  handleDataFilter = (sizes) => {
    let order = this.state.selectedOrder;
    let sortedProducts = [...this.props.data];

    if (sizes.length) {
      sortedProducts = sortedProducts.filter((p) => {
        if (sizes.filter((size) => p.availableSizes.includes(size)).length) {
          return p;
        }
      });
    }

    if (order === 'highest') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === 'lowest') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

  render() {
    let data = this.handleDataFilter(this.props.selectedSizes);
    return (
      <div className=''>
        <div className='products-filter flex space-btw'>
          <p className='found-item'>{`${data.length} product${
            data.length > 1 ? 's' : ''
          } found.`}</p>
          <OrderBy
            handleSelectedOrder={this.handleSelectedOrder}
            selectedOrder={this.state.selectedOrder}
          />
        </div>
        <div>
          <ul className='products-holder flex gap-2 wrap'>
            {data.map((productInfo) => {
              return (
                <Product
                  key={productInfo.id}
                  {...productInfo}
                  handleAddCart={this.props.handleAddCart}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function Product(props) {
  let item = props;

  return (
    <li key={item.id} className='single-product flex-25 center'>
      <div className='img-holder'>
        <img
          className='product-img'
          src={`/static/products/${item.sku}_1.jpg`}
          alt='image'
        />
        {item.isFreeShipping ? (
          <span className='shipping-free'>Shipping Free</span>
        ) : (
          ''
        )}
      </div>
      <div className='product-info'>
        <h3 className='product-name'>{item.title}</h3>
        <h3 className='product-other-info padd-1'>{item.style}</h3>
        <div className='empty'></div>
        <h2 className='product-price padd-1'>${item.price}</h2>
        <button
          onClick={() => props.handleAddCart(item)}
          className='btn add-product flex-100'
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default Products;
