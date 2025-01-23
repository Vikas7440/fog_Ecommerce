import React from "react";
import { NavLink } from "react-router-dom";
import logoimg from "../../assets/icons/logo.svg";
import acc from "../../assets/icons/acc.svg";
import heart from "../../assets/icons/heart.svg";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import search from "../../assets/icons/search.svg";
import { Navbar } from "./styles";

export default function Header() {
  return (
    <Navbar>
      <NavLink to="/" className="logo">
        <img src={logoimg} alt="Logo" />
        Furniro
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="nav-icons">
        <NavLink to="/">
          <img src={acc} alt="acc" />
        </NavLink>
        <NavLink to="/">
          <img src={search} alt="search" />
        </NavLink>
        <NavLink to="/">
          <img src={heart} alt="heart" />
        </NavLink>
        <NavLink to="/">
          <img src={shoppingCart} alt="cart" />
        </NavLink>
      </div>
    </Navbar>
  );
}
