import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import foodImg from './food.png';
import './style.css';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  }

  return (
    <div className="page-container">
      <img src={foodImg} alt="" />
      <h2>Restaurant Menu</h2>
      <article>
        <Categories filterItems={filterItems} />
      </article>
      <article>
        <Menu items={menuItems} />
      </article>
    </div>
  );
}

export default App;
