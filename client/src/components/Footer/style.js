import styled from "styled-components";
import { variables } from "../../styles/variables";

export const FooterStyle = styled.div`
  .footer {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${variables.smoke};
    font-family: ${variables.fonts.poppins};
    display: flex;
    flex-direction: column;

    &__body {
      display: flex;
      justify-content: space-around;
      gap: 50px;
      padding: 48px 0;

      &-logo {
        display: flex;
        flex-direction: column;

        h1 {
          color: ${variables.black};
          font-size: 24px;
          font-weight: 700;
        }

        p {
          color: ${variables.black};
          font-size: 16px;
          font-weight: 400;
          padding-top: 50px;
        }
      }

      &-info {
        display: flex;
        flex-direction: row;
        gap: 70px;

        &-content {
          display: flex;
          flex-direction: column;
          gap: 46px;

          &-link {
            list-style-type: none;

            &-h1 {
              color: ${variables.fontLight};
              font-size: 20px;
              font-weight: 600;
            }

            a {
              text-decoration: none;
              color: ${variables.black};
              font-size: 16px;
              font-weight: 500;
            }
          }
        }
      }

      &-form {
        &-detail {
          display: flex;
          padding-top: 50px;
          gap: 5px;

          button {
            color: ${variables.black};
            font-size: 14px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            background: none;
          }

          &-input {
            width: 200px;
            border: none;
            padding: 5px;
          }
        }
      }

      &-rights {
        margin-bottom: 35px;

        &-data {
          color: ${variables.black};
          font-size: 16px;
          font-weight: 400;
          padding: 0 80px;
        }
      }
    }
  }
`;
