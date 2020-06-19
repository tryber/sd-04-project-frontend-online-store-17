import React from 'react';
import * as api from '../services/api';

export default class SideBar extends React.Component {
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
    const { fromCategories } = this.props;
    const { categories } = this.state;
    if (this.state.loaded === false) return <div>L O A D I N G . . . </div>;
    return (
      <div data-testid="side-bar">
        <div data-testid="btn-categorie">
          {categories.map((e) => (
            <button key={e.id} onSubmit={fromCategories} value={e.id}>
              {e.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
