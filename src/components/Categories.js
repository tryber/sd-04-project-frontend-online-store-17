import React from 'react';

export default class Categories extends React.Component {
  render() {
    const { selectedCategory, category } = this.props;
    if (category === '') return '...';
    return (
      <select onChange={selectedCategory} name="categories" id="category">
        {category.map((e) => (
          <option data-testid="category" value={e.id} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    );
  }
}
