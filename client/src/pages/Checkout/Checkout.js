import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckoutStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";

const Checkout = () => {
  const location = useLocation();


  const { cart } = location.state || { cart: [] };


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      city: "",
      zip: "",
      phone: "",
      email: "",
    });

  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CheckoutStyle>
      <div className="checkout-cover">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          <p>Billing details</p>
          {[
            "firstName",
            "lastName",
            "companyName",
            "country",
            "city",
            "zip",
            "phone",
            "email",
          ].map((field) => (
            <div key={field}>
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/([A-Z])/g, " $1")}
                {field === "companyName" ? " (Optional)" : ""}
              </label>
              <input
                type={
                  field === "phone"
                    ? "tel"
                    : field === "email"
                    ? "email"
                    : "text"
                }
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "companyName"} // Optional field
              />
            </div>
          ))}

          <button type="submit">Place order</button>
        </form>

        <div className="order-summary-container">
          <h2>Order Summary</h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="order-summary-item">
                <img
                  src={getImagePath(item.img)}
                  alt={item.name}
                  className="order-summary-image"
                />
                <p>
                  Product: {item.name} (x{item.count})
                </p>
                <p>Subtotal: Rs. {item.price * item.count}</p>
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
          <div className="order-summary-item">
            <p>Total: Rs. {totalAmount.toFixed(2)}</p>
            {/* <p>Total: Rs. {totalAmount}</p> */}
          </div>
          <div className="order-summary-item">
            <p>Direct Bank Transfer</p>
          </div>
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
    </CheckoutStyle>
  );
};

export default Checkout;
