import styled from "styled-components";
import { variables } from "../../../styles/variables";



export const Browsetherangestyle = styled.div`
.browsetherange {
    display: flex;
    flex-direction: column;
    padding: 56px 126px;
    font-family: ${variables.fonts.poppins};
    
    &__header-h1 {
      color: ${variables.fontColor};
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
    }
  
    &__header-p {
      color: ${variables.fontColor1};
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  
    &__carts {
      display: flex;
      padding: 56px 0;
      justify-content: center;
      gap: 16px;
    }
  
    &__cart {
      gap: 20px;
      display: flex;
      flex-direction: column;
      color: ${variables.fontColor};
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
  
      &-img {
        display: flex;
        max-width: 100%;
        max-height: 100%;
        height: auto;
      }
    }
  }
  
`;
