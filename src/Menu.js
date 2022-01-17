import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <h3>{title}</h3>
              <h4 className="price">£{price}</h4>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;