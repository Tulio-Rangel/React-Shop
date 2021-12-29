import React from "react";
import "../styles/header.scss";
import Logo from "../../frontend/logos/logo_yard_sale.svg";
import IconMenu from "../../frontend/icons/icon_menu.svg";
import IconShoppingCart from "../../frontend/icons/icon_shopping_cart.svg";

const Header = () => {
  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">amadeus@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={IconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
