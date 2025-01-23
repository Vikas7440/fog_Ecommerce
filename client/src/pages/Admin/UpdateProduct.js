import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./UpdateProducts.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import ProductModal from "./ProductModal";
import getImagePath from "../../utils/getImgPath";

const UpdateProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching products.");
    }
  };

  // Open modal for updating a product
  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  // Handle product update
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/product/update-product/${selectedProduct._id}`,
        selectedProduct
      );
      if (data.success) {
        toast.success("Product updated successfully!");
        setIsModalOpen(false);
        getAllProducts(); // Refresh the product list
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while updating the product.");
    }
  };

  // Handle product deletion
  const handleDeleteClick = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const { data } = await axios.delete(
          `http://localhost:8080/api/v1/product/delete-product/${productId}`
        );
        if (data.success) {
          toast.success("Product deleted successfully!");
          getAllProducts(); // Refresh the product list
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while deleting the product.");
      }
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">All Products List</h1>
      <div className="product-grid">
        {products?.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={getImagePath("image1.png")}
              alt="Product"
              className="product-image"
            />
            <div className="product-info">
              <h5 className="product-name">{product.name}</h5>
              <p className="product-description">
                {product.description?.substring(0, 60)}...
              </p>
            </div>
            <div className="product-actions">
              <FaEdit
                className="action-icon update-icon"
                onClick={() => handleUpdateClick(product)}
              />
              <FaTrash
                className="action-icon delete-icon"
                onClick={() => handleDeleteClick(product._id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Reusable Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        setProduct={setSelectedProduct}
        onSubmit={handleUpdateProduct}
      />
    </div>
  );
};

export default UpdateProducts;
