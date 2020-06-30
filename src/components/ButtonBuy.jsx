import React, { Component } from 'react';

const addToCart = (product) => {
  if (!localStorage.lista) localStorage.lista = JSON.stringify([]);
  const lista = JSON.parse(localStorage.getItem('lista'));
  const cart = [...lista, product];
  localStorage.setItem('lista', JSON.stringify(cart));
};

class ButtonBuy extends Component {
  render() {
    const { product } = this.props;
    return (
      <button data-testid="product-add-to-cart" type="button" onClick={() => addToCart(product)}>
        Comprar
      </button>
    );
  }
}
export default ButtonBuy;
