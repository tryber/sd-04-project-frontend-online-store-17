import React from 'react';
import { Link } from 'react-router-dom';
import carrinho from '../image/carrinho.png'

class ShoppingCartButton extends React.Component {
  Render() {
    return (
      <div>
        <Link to={'shoppingCartPage'}><img src={carrinho} alt="imagem do carrinho" className="imagemCarrinho" /></Link>        
      </div>
    )
  }
}

export default ShoppingCartButton;