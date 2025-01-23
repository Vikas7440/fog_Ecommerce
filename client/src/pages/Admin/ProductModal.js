import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductModal.css";

const ProductModal = ({ isOpen, onClose, product, setProduct }) => {
  if (!isOpen) return null;

  // Handle product update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(product._id);
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/product/update-product/${product._id}`,
        product
      );

      if (data?.success) {
        toast.success("Product updated successfully!");
        onClose(); // Close the modal
      } else {
        toast.error(data?.message || "Failed to update the product.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while updating the product.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ToastContainer />
        <h2>Update Product</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              value={product._id}
              disabled
              className="disabled-input"
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={product.name || ""}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={product.description || ""}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={product.price || ""}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              value={product.quantity || ""}
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button type="button" className="btn cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
