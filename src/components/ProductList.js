import React from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {
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
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    );
  }
}
