import React from 'react';

export default class Categories extends React.Component {
  render() {
    const { selectedCategory, category } = this.props;
    if (category === '') return '...';
    return (
      <div>
        {category.map((e) => (
          <button
            type="button"
            onClick={selectedCategory}
            data-testid="category"
            value={e.id}
            key={e.id}
          >
            {e.name}
          </button>
        ))}
      </div>
    );
  }
}
