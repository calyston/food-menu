import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import foodImg from './food.png';
import './style.css';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  }

  return (
    <div className="page-container">
      <img src={foodImg} alt="" />
      <h2>Restaurant Menu</h2>
      <article>
        <Categories categories={categories} filterItems={filterItems} />
      </article>
      <article>
        <Menu items={menuItems} />
      </article>
    </div>
  );
}

export default App;
