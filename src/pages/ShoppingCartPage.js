import React from 'react';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = "Carrinho vazio";
  }

  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <h3>Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default ShoppingCartPage;
