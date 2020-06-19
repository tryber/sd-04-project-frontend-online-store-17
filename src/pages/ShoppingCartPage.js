import React from 'react';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = "Seu carrinho está vazio";
  }

  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <span data-testid="shopping-cart-empty-message">{this.state}</span>
      </div>
    );
  }
}

export default ShoppingCartPage;
