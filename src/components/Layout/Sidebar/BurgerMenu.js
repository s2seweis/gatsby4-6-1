import React from "react";
import { slide as Menu } from "react-burger-menu";

const MenuBurger = () => {

  return (
    <Menu width={'30%'} {...MenuBurger}>
      <div className="logo">
        {/* <Link
        >
          <img alt="Logo" src={dignlogo}
            style={{ width: '100%', borderTop: "none" }}
          />
        </Link> */}
      </div>
      <a className="menu-item" href="/"
      >
        Home
      </a>
      <a className="menu-item" href="/signin">
        Breakfast
      </a>
      <a className="menu-item" href="/">
        Lunch
      </a>
      <a className="menu-item" href="/shop">
        Dinner
      </a>
      <a className="menu-item" href="/post">
        Desserts
      </a>
      <a className="menu-item" href="/post">
        Fiesta
      </a>
      <a className="menu-item" href="/post">
        Beverage
      </a>
      <a className="menu-item" href="/post">
        Contact
      </a>
    </Menu>
  );
};

export default MenuBurger;
