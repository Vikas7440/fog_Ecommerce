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
    text-transform: uppercase;

    img {
      width: 50px;
      height: auto;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      text-decoration: none;
      color: ${variables.black};
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;

      &:hover {
        color: ${variables.grey2};
      }

      &.active {
        color: ${variables.primary};
      }
    }
  }

  .nav-icons {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      color: black;
      font-size: 16px;

      img {
        width: 20px;
        height: auto;
      }

      &:hover {
        color: gray;
      }

      &.active {
        color: blue;
      }
    }
  }
`;
