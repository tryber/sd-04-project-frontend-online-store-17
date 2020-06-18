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

  onClickBtn(event) {
    console.log(event);
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    if (this.state.loaded === false) return <div>Oi</div>;
    return (
      <div data-testid="side-bar">
        <div data-testid="btn-categorie">
          {categories.map((e) => (
            <button onClick={(e) => this.onClickBtn(e)} key={e.id}>
              {e.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
