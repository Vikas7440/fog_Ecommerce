import styled from "styled-components";
import { variables } from "../../styles/variables";
import shopCover from "../../assets/images/shopcover.png";

export const ProductStyle = styled.div`
  font-family: ${variables.fonts.montserrat};
  display: flex;
  flex-direction: column;

  .product__details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
    padding: 20px;
  }

  .product__description {
    width: 50%;
  }

  .grey_{
    color : #9f9f9f;
    padding : 5px;
    margin : 5px;
  }

  .blue_bg{
    border-radius : 100%;
    background-color: #816dfa;
    width: 32px;
    padding : 5px;
    margin : 5px;
    color : #816dfa;
    border : none;
  }

  .black_bg{
    border-radius : 100%;
    background-color: black;
    width: 32px;
    padding : 5px;
    margin : 5px;
    color : black;
    border : none;
  }

  .brown_bg{
    border-radius : 100%;
    background-color: #b88e2f;
    width: 32px;
    padding : 5px;
    margin : 5px;
    color : #b88e2f;
    border : none;
  }

  .size_btn{
    background-color: #f9f1e7;
    width: 32px;
    padding : 5px;
    margin : 5px;
    border : none;
    border-radius : 20%;
  }

  .qty{
  border : none;
  padding-left : 12px;
  width: 64px;
  height: 36px;
  padding-right : 12px;
  
  }
  .product__img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .product__name {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
    padding-20px;
  }

  .product__paragraph {
    font-size: 16px;
    margin: 10px 0;
    padding-20px;
  }

  .product__price {
    font-size: 18px;
    margin: 10px 0;
    font-weight: 600;
    padding-20px;
  }

  .product__add-to-cart {
    padding: 10px 20px;
    margin : 5px;
    font-size : 20px; 
    color: black;
    border: none;
    border-radius: 12px;
    border-style : solid;
    border-color : black;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${variables.grey2}; // Change this to your preferred hover color
    }
  }


`;
