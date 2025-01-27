import React from 'react';

const CategoryFilter = ({ categories, onCategoryClick, selectedCategory }) => {
  return (
    <div>
      <h2>Filter Tasks by Category</h2>
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => onCategoryClick(category)} 
          className={category === selectedCategory ? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
