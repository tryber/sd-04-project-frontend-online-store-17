import React from 'react';

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="fullname">
          <input data-testid="checkout-fullname" placeholder="Nome Completo" type="text" />
        </label>
        <label htmlFor="email">
          <input data-testid="checkout-email" placeholder="Seu Email" type="email" />
        </label>
        <label htmlFor="cpf">
          <input data-testid="checkout-cpf" placeholder="CPF" type="number" />
        </label>
        <label htmlFor="phone">
          <input data-testid="checkout-phone" placeholder="Telefone (xx) x xxxx-xxxx" type="text" />
        </label>
        <label htmlFor="cep">
          <input data-testid="checkout-cep" placeholder="CEP" type="number" />
        </label>
        <label htmlFor="address">
          <input data-testid="checkout-address" placeholder="Endereço Completo" type="text" />
        </label>
        <button type="submit">Finalizar Compra</button>
      </div>
    );
  }
}
