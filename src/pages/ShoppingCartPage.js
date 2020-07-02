import React from 'react';
import { Link } from 'react-router-dom';
import BtnMoreorLess from '../components/BtnMoreorLess';
import ButtonBuy from '../components/ButtonBuy';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
    this.addQuantity = this.addQuantity.bind(this);
    this.state = { cartItens: [], total: 0 };
  }

  componentDidMount() {
    this.getStorage();
    this.valorTotalDaCompra();
  }

  getStorage() {
    if (!localStorage.lista) localStorage.lista = JSON.stringify([]);
    const lista = JSON.parse(localStorage.getItem('lista'));
    let newList = [];
    lista.forEach((e) => {
      const quantidade = lista.filter((ele) => ele.title === e.title).length;
      const newProduct = { ...e, quantidade };
      newList = [...newList, newProduct];
    });
    this.setState({ cartItens: newList });
  }

  addQuantity(elemento, maisoumenos) {
    const { cartItens } = this.state;
    cartItens.forEach((product, aux) => {
      if (maisoumenos === 'more') if (elemento.id === product.id) cartItens[aux].quantidade += 1;
      if (maisoumenos === 'less') if (elemento.id === product.id) cartItens[aux].quantidade -= 1;
    });
    this.valorTotalDaCompra();
  }

  valorTotalDaCompra() {
    const { cartItens } = this.state;
    let totalItem = 0;
    cartItens.forEach((e) => {
      totalItem += e.quantidade * e.price;
    });
    this.setState({ total: totalItem });
    return totalItem;
  }

  render() {
    const { cartItens, total } = this.state;
    if (cartItens.length === 0) {
      return <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>;
    }
    return (
      <div>
        <h2>Carrinho de compras</h2>
        <h3>{`Total da Compra: ${total}`}</h3>
        {cartItens.map((e) => (
          <div key={e.id}>
            <img src={e.thumbnail} alt={e.id} />
            <p data-testid="shopping-cart-product-name">{e.title}</p>
            <BtnMoreorLess e={e} addQuantity={this.addQuantity} />
            <p>{`R$ ${e.price} unidade`}</p>
            <Link data-testid="product-detail-link" to={{ pathname: `/product/${e.id}/detail`, e }}>
              DETALHES
            </Link>
          </div>
        ))}
        <Link to="/checkout" data-testid="checkout-products">
          Finalizar a Compra
        </Link>
        <ButtonBuy product={product} />

      </div>
    );
  }
}

export default ShoppingCartPage;
