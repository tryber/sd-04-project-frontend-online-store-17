import React, { Component } from 'react';

class BtnMoreorLess extends Component {
  render() {
    const { addQuantity, e } = this.props;
    return (
      <div>
        <div>
          <span>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={() => addQuantity(e, 'more')}
            >
              +
            </button>
            <p data-testid="shopping-cart-product-quantity">{e.quantidade}</p>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={() => addQuantity(e, 'less')}
            >
              -
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default BtnMoreorLess;
