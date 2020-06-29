import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItens: [],
    };
    this.filtrar = this.filtrar.bind(this);
  }

  componentDidMount() {
    this.getStorage();
  }

  getStorage() {
    if (!localStorage.lista) localStorage.lista = JSON.stringify([]);
    const lista = JSON.parse(localStorage.getItem('lista'));
    this.setState({ cartItens: lista });
  }

  filtrar(elemento) {
    const carrinho = this.state.cartItens;
    return carrinho.filter((ele) => ele.title === elemento.title).length;
  }

  render() {
    const { cartItens } = this.state;
    if (cartItens.length === 0) {
      return <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>;
    }
    return (
      <div>
        <h2>Carrinho de compras</h2>
        {cartItens.map((e) => (
          <div key={e.id}>
            <img src={e.thumbnail} alt={e.id} />
            <p data-testid="shopping-cart-product-name">{e.title}</p>
            <p data-testid="shopping-cart-product-quantity">{this.filtrar(e)}</p>
            <p>{`R$ ${e.price}`}</p>
            <Link data-testid="product-detail-link" to={{ pathname: `/product/${e.id}/detail`, e }}>
              DETALHES
            </Link>
          </div>
        ))}
        <Link to="/checkout" data-testid="checkout-products">
          Finalizar a Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCartPage;
