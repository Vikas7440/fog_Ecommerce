import styled from "styled-components";
import { variables } from "../../../styles/variables";
import bgimg from "../../../assets/images/discover_bg.png";

export const DiscoveryStyle = styled.div`
  .discover {
    font-family: ${variables.fonts.poppins};
    display: flex;
    background: url(${bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100vh;

    &__content {
      display: flex;

      position: absolute;
      background-color: ${variables.cream2};
      width: 643px;
      height: 443px;
      top: calc(100% - 443px);
      right: 62px;
      border-radius: 10px;

      &-text {
        padding: 37px 39px;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 17px;
        width: 559px;
      }

      &-titleMeta {
        color: ${variables.fontColor};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 3px;
      }

      &-title {
        color: ${variables.primary};
        font-size: 52px;
        font-style: normal;
        font-weight: 700;
        line-height: 65px;
      }

      &-p {
        color: ${variables.fontColor};
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }

      &-button {
        padding: 25px 72px;
        display: inline;
        align-items: center;
        background: ${variables.primary};
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        color: white;
        border: none;
        width: 45%;
        margin-top: 45px;
        white-space: nowrap;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

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
      h1 {
        cursor: pointer;
      }
    }
  }
`;

export const FuniroStyle = styled.section`
  font-family: ${variables.fonts.montserrat};
  display: flex;
  flex-direction: column;
  padding: 65px 0 50px;
  overflow: hidden;
  justify-content: space-between;

  .funiro {
    &-title {
      position: absolute;
    }

    &-p {
      color: ${variables.grey2};
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 150%;
    }

    &-h1 {
      color: ${variables.grey1};
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      line-height: 100%;
    }

    &__images {
      display: flex;
      gap: 16px;
      align-items: center;

      &-left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 16px;
        flex-grow: 1;

        &-top {
          display: flex;
          gap: 16px;
          align-items: baseline;

          &-image1 {
            width: 274px;
            height: 382px;
          }

          &-image3 {
            width: 400px;
            height: 312px;
          }
        }

        &-bot {
          display: flex;
          gap: 16px;
          align-items: flex-start;

          &-image2 {
            width: 270px;
            height: 323px;
          }

          &-image4 {
            width: 344px;
            height: 242px;
          }
        }
      }

      &-center {
        display: flex;
        position: relative;
        width: 100%;

        &-image5 {
          margin: 0 auto;
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-top {
          display: flex;
          gap: 16px;
          align-items: baseline;

          &-image7 {
            width: 290px;
            height: 348px;
          }

          &-image9 {
            width: 425px;
            height: 433px;
          }
        }

        &-bot {
          display: flex;
          gap: 16px;
          align-items: flex-start;

          &-image6 {
            width: 178px;
            height: 242px;
          }

          &-image8 {
            width: 500px;
          }
        }
      }
    }
  }
`;

export const OurProductsStyle = styled.div`
  font-family: ${variables.fonts.montserrat};
  .product {
    padding: 56px 102px 69px;

    &__nextButton {
      display: flex;
      justify-content: center;
      color: ${variables.aqua};
    }

    &__button {
      display: flex;
      justify-content: center;
      color: ${variables.primary};
      margin: 32px;

      &-btn {
        height: 48px;
        background-color: ${variables.white};
        border: 1px solid ${variables.primary};

        a {
          color: ${variables.primary};
          padding: 12px 82px;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 24px */
          text-decoration: none;
        }
      }
    }

    &__title {
      color: ${variables.grey1};
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }

    &__cards {
      margin-top: 32px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
  }
`;

export const InspirationsStyle = styled.div`
  .inspirations {
    font-family: ${variables.fonts.poppins};
    background: ${variables.cream};
    display: flex;

    &__body {
      display: flex;
      width: 100%;
    }

    &__title {
      color: ${variables.grey1};
      display: flex;
      padding: 223px 42px 223px 100px;
      flex-direction: column;

      
      &-h1 {
        text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
      }

      &-p {
        color: $grey2;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        padding: 0 0 25px;
      }

      &-button {
        cursor: pointer;
        background: ${variables.primary};
        border: 0px;
        color: ${variables.white};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        width: 176px;
        height: 48px;
      }
    }

    &__slider {
      display: flex;
      padding: 44px 0;
      gap: 24px;
      position: relative;
      margin-left: auto;

      &-cart {
        display: flex;
        flex-direction: column;
        position: relative;

        &-img {
          display: block;

          &-1 {
            position: relative;
            height: 582px;
            display: flex;
          }

          &-2 {
            width: 372px;
            height: 486px;
          }
        }

        &-title {
          position: absolute;
          top: 428px;
          left: 24px;
          width: 217px;

          
          background: rgb(255 255 255 / 72%);
          backdrop-filter: blur(1.5px);
          gap: 8px;
          max-width: 100%;
          max-height: 100%;
          height: auto;

          
          &-1 {
            display: flex;
            flex-direction: row;
            padding: 32px 43px 0 32px;
            gap: 8px;

            &-img {
              stroke-width: 1px;
              stroke: $grey2;
            }
          }

          
          &-2 {
            display: flex;
            flex-direction: row;
            padding: 24px 8px 32px 32px;

            &-p {
              color: $grey2;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%;
            }

            
            &-h1 {
              color: $grey1;
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: 120%;
            }
          }
        }

        &-button {
          background: ${variables.primary};
          border: 0px;
          color: ${variables.white};
          position: absolute;
          top: 510px;
          left: 241px;
          width: 48px;
          height: 48px;
        }
      }

      &-button {
        position: absolute;
        top: 311px;
        right: 55px;
        width: 72px;
        height: 72px;
        background: none;
        border-radius: 5px;
        fill: $white;

        
        filter: drop-shadow(0 4px 14px rgb(0 0 0 / 16%));
        background-image: url("../src/assets/icons/ellipse4.svg");
        display: flex;
        justify-content: center;
        align-items: center;

        &-icon {
          top: 311px;
          right: 55px;
          width: 18px;
          height: 24px;
          background-image: url("../src/assets/icons/right24px.svg");
          background-repeat: no-repeat;
        }
      }

      &-radio {
        display: inline-flex;
        align-items: center;
        position: absolute;
        top: 570px;
        right: 328px;
        gap: 20px;

        &-buttons {
          width: 11px;
          height: 11px;
          background-image: url("../src/assets/icons/ellipse1.svg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          border: none;

          &:focus {
            width: 27px;
            height: 27px;
            background-image: url("../src/assets/icons/active.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            border: none;
          }
        }
      }
    }
  }
`;
