import React from 'react';
import carrinho from '../image/carrinho.png';

class SearchInput extends React.Component {
  render() {
    const { getInput, inputText } = this.props;
    return (
      <div>
        <div>
          <label htmlFor="labelInput">
            Pesquisa
            <input
              type="text"
              name="labelInput"
              id="labelInput"
              onChange={getInput}
              value={inputText}
            />
          </label>
        </div>
        <div>
          <img src={carrinho} alt="imagem carrinho" />
        </div>
      </div>
    );
  }
}

export default SearchInput;
