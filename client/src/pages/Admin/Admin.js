import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaList } from "react-icons/fa";
import "./AdminMenu.css";
import CreateProduct from "./CreateProduct";

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseCart = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="admin-page">
        <div className="admin-header">
          <h1>Welcome to Admin Panel</h1>
          <p>Manage your products efficiently and easily.</p>
        </div>
        <div className="admin-menu-container">
          <h4 className="admin-title">Admin Panel</h4>
          <div className="list-group">
            <button onClick={handleOpenCart} className="list-group-item">
              <FaPlusCircle className="menu-icon" />
              Create Product
            </button>
            <button className="list-group-item">
              <NavLink to="/admin/update_products" className="nav-link">
                <FaList className="menu-icon" />
                Products
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <CreateProduct onClose={handleCloseCart} />}
    </>
  );
};

export default Admin;
