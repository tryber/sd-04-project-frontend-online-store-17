import React from 'react';
import SideBar from '../pages/SideBar';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categories: '' };
  }

  render() {
    return (
      <div>
        <SideBar />
      </div>
    );
  }
}
