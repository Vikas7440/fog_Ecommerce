import styled from "styled-components";
import { variables } from "../../styles/variables";

export const Navbar = styled.nav`
  font-family: ${variables.fonts.montserrat};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${variables.black};
    font-size: 28px;
    font-weight: 600;
    // text-transform: uppercase;

    img {
      width: 40px;
      height: auto;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      color: black;
      font-size: 16px;

      &:hover {
        color: gray;
      }

      &.active {
        color: blue;
      }
    }
  }

  .nav-icons {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      position: relative;

      img {
        width: 20px;
        height: auto;
      }

      .cart-count {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: ${variables.primary};
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        font-weight: 600;
      }

      &:hover {
        color: gray;
      }
    }
  }
`;
