import React from 'react';
import { Link } from 'react-router-dom';
import Frete from './Frete';
import ButtonBuy from './ButtonBuy';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const shipping = Object.values(Object.entries(product.shipping)[0])[1];
    const { id, title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={id} />
        <p>{title}</p>
        <p>{`R$ ${price}`}</p>
        <Link data-testid="product-detail-link" to={{ pathname: `/product/${id}/detail`, product }}>
          DETALHES
        </Link>
        <ButtonBuy product={product} />
        <Frete shipping={shipping} />
      </div>
    );
  }
}
