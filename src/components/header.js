import React from 'react';

class SearchInput extends React.Component {
  render() {
    const { getInput, inputText } = this.props;
    return (
      <div>
        <div>
          <label htmlFor="labelInput">Pesquisa</label>
          <input
            type="text"
            name="labelInput"
            id="labelInput"
            onChange={getInput}
            value={inputText}
          />
          <button type="submit">Pesquisar</button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
