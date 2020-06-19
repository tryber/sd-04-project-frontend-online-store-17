import React from 'react';
import { Link } from 'react-router-dom';
import carrinho from '../image/carrinho.png';
import './shoppingCartButton.css';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to={'/ShoppingCart'}><img src={carrinho} alt='imagem do carrinho' className="imagemCarrinho" /></Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
