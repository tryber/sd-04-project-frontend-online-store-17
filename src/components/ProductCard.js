import React from 'react';
import { Link } from 'react-router-dom';
// import Frete from './Frete';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    if (!localStorage.lista) localStorage.lista = JSON.stringify([]);
    const lista = JSON.parse(localStorage.getItem('lista'));
    const cart = [...lista, product];
    localStorage.setItem('lista', JSON.stringify(cart));
  }

  render() {
    const { product } = this.props;
    // const { free_shipping } = product.shipping;
    const { id, title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={id} />
        <p>{title}</p>
        <p>{`R$ ${price}`}</p>
        <Link data-testid="product-detail-link" to={{ pathname: `/product/${id}/detail`, product }}>
          DETALHES
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={() => this.addToCart(product)}
        >
          Comprar
        </button>
        {/* <Frete shipping={free_shipping} /> */}
      </div>
    );
  }
}
