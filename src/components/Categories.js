import React from 'react';

export default class Categories extends React.Component {
  render() {
    const { selectedCategory, category } = this.props;
    return (
      <select onChange={selectedCategory} name="cars" id="cars">
        {category.map((e) => (
          <option value={e.id} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    );
  }
}
