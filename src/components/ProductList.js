import React from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {
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
    // console.log(product);
    if (product === '') {
      return (
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      );
    }
    return (
      <div>
        {product.map((e) => (
          <ProductCard key={e.id} product={e} addToCart={this.addToCart} />
        ))}
      </div>
    );
  }
}
