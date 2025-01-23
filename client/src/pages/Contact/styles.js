import styled from "styled-components";
import { variables } from "../../styles/variables";
import shopCover from "../../assets/images/shopcover.png";

export const ContactStyle = styled.div`
  .get {
    font-family: ${variables.fonts.montserrat};
    text-align: center;
    font-size: 16px;
    width: 400px;
    margin: 0 auto;
  }
  .contact-cover {
    font-family: ${variables.fonts.montserrat};
    display: flex;
    background: url(${shopCover}) no-repeat center center;
    background-size: cover;
    height: 316px;
    justify-content: center;
    align-items: center;
    color: ${variables.fontColor};

    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }

  .contact-container {
    font-family: ${variables.fonts.montserrat};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 50px;

    .contact-info {
      flex: 0 0 300px;

      display: flex;
      flex-direction: column;

      .info-item {
        padding: 15px;
        img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          vertical-align: middle;
        }

        p {
          margin: 5px 0;
          color: ${variables.fontColor};
        }
      }
    }

    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: 0;

      label {
        margin: 0.5rem 0 0.2rem;
        font-weight: bold;
      }

      input,
      textarea {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: none;
        border-radius: 4px;
        font-family: ${variables.fonts.montserrat};
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }

      button {
        background-color: #007bff;
        color: ${variables.fontColor};
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
        background-color: ${variables.cream2};

        &:hover {
          background-color: ${variables.cream};
        }
      }
    }
  }

  // Media queries for responsiveness
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      gap: 20px;

      .contact-info {
        flex: 1; // Makes contact-info full width on smaller screens
      }

      form {
        max-width: 100%; // Makes form full width on smaller screens
      }
    }
  }

  @media (max-width: 480px) {
    .contact-cover h1 {
      font-size: 1.5rem; // Smaller font size for smaller screens
    }

    .contact-container {
      gap: 10px;
    }

    form {
      input,
      textarea {
        padding: 0.4rem; // Smaller padding for inputs on smaller screens
      }

      button {
        padding: 0.4rem; // Smaller button padding on smaller screens
      }
    }
  }
`;
