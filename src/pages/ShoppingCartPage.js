import React from 'react';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = "Carrinho vazio";
  }

  render() {
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default ShoppingCartPage;
