import React from 'react';

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
          <button type="submit">Pesquisar</button>
        </div>
      </div>
    );
  }
}


export default SearchInput;
