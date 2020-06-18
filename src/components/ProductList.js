import React from 'react';
import * as api from '../services/api';
import SideBar from '../pages/SideBar';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categories: '' };
  }

  componentDidMount() {
    api.getCategories().then((data) => this.setState({ categories: data }));
  }

  render() {
    return (
      <div>
        <SideBar />
      </div>
    );
  }
}
