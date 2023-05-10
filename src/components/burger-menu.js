import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link, useLocation } from 'react-router-dom';

// import logo from 'images/logo-full.png';
// import dignlogo from '../../../static/dign-logo.png';

// import { Icon } from '../common/Icon';


// import { ADMIN_PRODUCTS, ADMIN_ORDERS, ADMIN_POSTS, ADMIN_USERS1, ADMIN_SETTINGS, ADMIN_DASHBOARD, SHOP } from 'constants/routes';



// onClick={onClickLink} to="/"



const MenuBurger = () => {






  return (





    <Menu width={'50%'} {...MenuBurger}>

      <div className="logo">


        {/* <Link



        
        >
          <img alt="Logo" src={dignlogo}
            style={{ width: '100%', borderTop: "none" }}
          />



        </Link> */}


      </div>







      <a className="menu-item" href="/"
        active={window.location.pathname === "/"}

      >
        Home
      </a>

      <a className="menu-item" href="/signin">
        Sign-In
      </a>

      <a className="menu-item" href="/">
        Contact
      </a>

      <a className="menu-item" href="/shop">
        Shop
      </a>

      <a className="menu-item" href="/post">
        Posts
      </a>
    </Menu>



  );

};

export default MenuBurger;
