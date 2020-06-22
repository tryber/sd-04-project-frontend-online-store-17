import React from 'react';
import * as api from '../services/api';
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
              type="text"
              name="labelInput"
              id="labelInput"
              onChange={getInput}
              value={inputText}
            />
          </label>
          <Categories category={category} selectedCategory={selectedCategory} />
          {/* <select onChange={selectedCategory} name="cars" id="cars">
            {category.map((e) => (
              <option value={e.id} key={e.id}>
                {e.name}
              </option>
            ))}
          </select> */}
          <button type="submit" onClick={getProductsFromApi}>
            Pesquisar
          </button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
