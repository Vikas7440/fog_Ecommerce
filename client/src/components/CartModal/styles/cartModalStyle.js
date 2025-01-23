import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const CartModalStyle = styled.div`
  font-family: ${variables.fonts.montserrat};
  position: fixed;
  display: flex;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: end;

  .cartModal__body {
    background-color: ${variables.lightwhite};
    padding: 15px;
    border: 1px solid ${variables.lightgrey};
    width: 100%;
    max-width: 450px;
    max-height: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .cartModal__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      margin: 0;
      font-size: 16px;
      text-transform: uppercase;
    }

    .cartModal__close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      color: ${variables.primary};
      transition: color 0.3s;
      &:hover {
        color: ${variables.secondary};
      }
    }
  }

  .cartModal__products {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 60%;
    // flex-grow: 1;

    .cartModal__product {
      display: flex;
      align-items: center;
      justify-content: space-around;

      height: 50px;

      .cartModal__product-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 10px;
        background: ${variables.smoke};
      }

      .cartModal__product-name {
        margin: 0 10px;
        letter-spacing: -0.08em;
        font-size: 12px;
      }
      .cartModal__product-price {
        font-size: 12px;
      }

      .cartModal__remove-button {
        text-transform: uppercase;

        background: none;
        border: none;
        font-size: 12px;
        cursor: pointer;
        color: ${variables.danger};
        transition: color 0.3s;

        &:hover {
          color: darkred;
        }
      }

      div {
        display: flex;
        align-items: center;

        button {
          background: ${variables.secondary};
          border: none;
          cursor: pointer;
          padding: 5px 10px;
          margin: 0 5px;
          border-radius: 4px;
          transition: background 0.3s;
          color: ${variables.grey2};

          &:hover {
            background: ${variables.grey2};
            color: white;
          }

          &:disabled {
            background: ${variables.smoke};
            cursor: not-allowed;
          }

          &.cartModal__select-button-active {
            background: ${variables.greenAccents};
          }
        }
      }
    }
  }

  .cartModal__footer {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid ${variables.smoke};
    gap: 10px;

    &-subtotal {
      display: flex;

      &-price {
        color: ${variables.primary};
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
      }
    }

    &-line {
      width: 100%;
      height: 1px;
      background: ${variables.smoke};
    }

    &-buttons {
      justify-content: center;
      display: flex;
      gap: 14px;

      button {
        border-radius: 50px;
        border: 1px solid ${variables.black};
        display: flex;
        padding: 6px 30px;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: ${variables.primary};
        }
      }
    }
  }

  @media (max-width: 600px) {
    .cartModal__body {
      width: 95%;
    }
  }
`;
