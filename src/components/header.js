import React from 'react';
import carrinho from '../image/carrinho.png';

class SearchInput extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="labelInput">Pesquisa</label>
          <input
            type="text"
            name="labelInput"
            id="labelInput"
          />
        </div>
        <div>
          <img src={carrinho} alt="imagem carrinho" />
        </div>
      </div>
    ) };
}


export default SearchInput;
