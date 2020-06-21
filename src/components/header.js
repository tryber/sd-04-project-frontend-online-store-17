import React from 'react';
import * as api from '../services/api';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: '',
      loaded: false,
    };
  }

  componentDidMount() {
    api.getCategories().then((data) => this.setState({ categories: data, loaded: true }));
  }

  render() {
    const { categories, loaded } = this.state;
    const { getInput, inputText, chamaApi, selectedCategory } = this.props;
    if (loaded === false) return <div> </div>;
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
          <button type="submit" onClick={chamaApi}>
            Pesquisar
          </button>
          <select onChange={selectedCategory} name="cars" id="cars">
            {categories.map((e) => (
              <option value={e.id} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchInput;
