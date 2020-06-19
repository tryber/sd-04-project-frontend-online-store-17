import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <div>
        <img src={thumbnail} alt={id} />
        <p>{title}</p>
        <p>{`R$ ${price}`}</p>
        <Link to={`/${product}/${id}/detail`}>DETALHES</Link>
      </div>
    );
  }
}
