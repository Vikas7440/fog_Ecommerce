import styled from "styled-components";
import { variables } from "../../styles/variables";

export const PageWrapper = styled.div`
  padding: 10px;
  text-align: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductCard = styled.div`
  font-family: ${variables.fonts.montserrat};
  align-items: center;
  padding: 10px 0;

  .container {
    text-align: left;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
  }
  img {
    width: 70px;
  }
`;
