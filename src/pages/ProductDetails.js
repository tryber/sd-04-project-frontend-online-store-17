import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import ShoppingCartButton from '../components/shoppingCartButton';

const addToCartFromDetail = (product) => {
  if (!localStorage.lista) localStorage.lista = JSON.stringify([]);
  const lista = JSON.parse(localStorage.getItem('lista'));
  const cart = [...lista, product];
  localStorage.setItem('lista', JSON.stringify(cart));
};

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { product } = location;
    const { title, thumbnail, price, condition } = product;

    return (
      <div data-testid="product-detail-link">
        <Link to="/">VOLTAR</Link>

        <p data-testid="product-detail-name">{title}</p>
        <img src={thumbnail} alt="produto" />
        <p>{`R$ ${price}`}</p>
        <p>{condition}</p>
        <ul className="product-detail-attribute">
          {product.attributes.map((item) => (
            <li key={item.name}>{`${item.name}: ${item.value_name}`}</li>
          ))}
        </ul>
        <Rating product={product} />
        <button
          type="submit"
          data-testid="product-detail-add-to-cart"
          onClick={() => addToCartFromDetail(product)}
        >
          Add to Cart
        </button>
        <ShoppingCartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = { location: PropTypes.shape({ price: PropTypes.number }).isRequired };

export default ProductDetails;
