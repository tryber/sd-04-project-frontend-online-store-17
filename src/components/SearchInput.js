import React from 'react';
import Categories from './Categories';

class SearchInput extends React.Component {
  render() {
    const { getInput, inputText, selectedCategory, getProductsFromApi, category } = this.props;
    return (
      <div>
        <div>
          <label htmlFor="labelInput">
            Pesquisa
            <input
              data-testid="query-input"
              type="text"
              name="labelInput"
              id="labelInput"
              onChange={getInput}
              value={inputText}
            />
          </label>
          <Categories category={category} selectedCategory={selectedCategory} />
          <button type="submit" data-testid="query-button" onClick={getProductsFromApi}>
            Pesquisar
          </button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
