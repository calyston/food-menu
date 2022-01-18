import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className="categories-container">
      <button className="filter-btn" onClick={() =>
        filterItems('breakfast')}>Breakfast</button>
      <button className="filter-btn" onClick={() =>
        filterItems('main')}>Main</button>
      <button className="filter-btn" onClick={() =>
        filterItems('dessert')}>Dessert</button>
      <button className="filter-btn" onClick={() =>
        filterItems('drinks')}>Drinks</button>
    </div>
  );
}

export default Categories;
