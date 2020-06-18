import React from 'react';

export default class SideBar extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <div>
          <p>Categorias:</p>
        </div>
      </div>
    );
  }
}
