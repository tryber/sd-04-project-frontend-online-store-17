import React from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = { lista: [] };
  }

  async addToCart(product) {
    await this.setState({ lista: [...this.state.lista, product] });
    localStorage.setItem("lista", JSON.stringify(this.state.lista));
  }

  render() {
    const { product } = this.props;
    if (product === "") {
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
