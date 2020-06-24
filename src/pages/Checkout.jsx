import React from 'react';

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input data-testid="checkout-fullname" placeholder="Nome Completo" type="text"></input>
        </label>
        <label>
          <input data-testid="checkout-email" placeholder="Seu Email" type="email"></input>
        </label>
        <label>
          <input data-testid="checkout-cpf" placeholder="CPF" type="number"></input>
        </label>
        <label>
          <input
            data-testid="checkout-phone"
            placeholder="Telefone (xx) x xxxx-xxxx"
            type="text"></input>
        </label>
        <label>
          <input data-testid="checkout-cep" placeholder="CEP" type="number"></input>
        </label>
        <label>
          <input data-testid="checkout-address" placeholder="Endereço Completo" type="text"></input>
        </label>
        <button type="submit">Finalizar Compra</button>
      </div>
    );
  }
}
