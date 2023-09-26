import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const totalCartItems = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          {totalCartItems > 0 && (
            <span className="cartItemCount">{totalCartItems}</span>
          )}
        </Link>
      </div>
    </div>
  );
};
