import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import ProductList from '../components/ProductList';

class ProductDetails extends React.Component {
  /*   constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  } */

  render() {
    const { location } = this.props;
    const { product } = location;
    console.log(product);

    return (
      <div data-testid="product-detail-link">
        <Link to="/">VOLTAR</Link>

        <p>{product && product.title}</p>
        <img src={product && product.thumbnail} alt="produto" />
        <p>{`R$ ${product && product.price}`}</p>
        <p>{product && product.condition}</p>
        <ul className="product-detail-attribute">
          {product.attributes.map((item) => (
            <li key={item.name}>{`${item.name}: ${item.value_name}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({ price: PropTypes.number }).isRequired };

export default ProductDetails;
