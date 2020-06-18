import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div>
        <img src={thumbnail} alt={id}></img>
        <p>{title}</p>
        <p>R$ {price}</p>
      </div>
    );
  }
}
