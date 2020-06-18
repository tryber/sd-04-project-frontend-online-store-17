import React from 'react';
import * as api from '../services/api';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categories: '' };
  }

  componentDidMount() {
    this.categories();
  }

  async categories() {
    console.log('Montou!');
    console.log(await api.getCategories());
    this.setState({ categories: await api.getCategories() });
    console.log(this.state.categories);
  }

  render() {
    return (
      <div>
        <h1>OI </h1>
      </div>
    );
  }
}
