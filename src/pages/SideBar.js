import React from 'react';
import * as api from '../services/api';
import './SideBar.css';

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
    const { categories } = this.state;
    if (this.state.loaded === false) return <div>Oi</div>;
    return (
      <div data-testid="side-bar">
        <div data-testid="btn-categorie" className="sidebar">
          {categories.map((e) => (
            <button key={e.id}>{e.name}</button>
          ))}
        </div>
      </div>
    );
  }
}
