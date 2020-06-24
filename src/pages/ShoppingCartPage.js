import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: 'Seu carrinho está vazio',
    };
  }

  render() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">{this.state.cart}</span>
        <Link to="/checkout" data-testid="checkout-products">
          Finalizar a Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCartPage;
