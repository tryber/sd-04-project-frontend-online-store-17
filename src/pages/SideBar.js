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
    const { fromCategories } = this.props;
    const { categories, loaded } = this.state;
    if (loaded === false) return <div>L O A D I N G . . . </div>;
    return (
      <div data-testid="side-bar">
        <div className="sidebar">
          {categories.map((e) => (
            <button
              data-testid="category"
              type="button"
              key={e.id}
              onClick={fromCategories}
              value={e.id}>
              {e.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
