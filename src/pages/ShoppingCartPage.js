import React from 'react';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = "Carrinho vazio";
  }

  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }
}

export default ShoppingCartPage;
