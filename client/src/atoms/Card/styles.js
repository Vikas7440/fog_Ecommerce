import styled from "styled-components";
import { variables } from "../../styles/variables";

export const CardStyle = styled.div`
  flex-basis: calc(25% - 30px);
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    &__header {
      display:flex;
      position: relative;
    }


    &__img{

      width: 100%;
    }

    &__ellipse {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 48px;
      height: 48px;
      border-radius: 100%;
      background-color: ${variables.redAccents};
      color: ${variables.white};

      &--new {
        background-color: ${variables.greenAccents};
      }
    }

    &__main {
      padding: 16px 20px 30px 16px;
      background: ${variables.lightBG};

      &-title {
        cursor: pointer;
        color: ${variables.grey1};
        font-size: 24px;
        font-weight: 600;
        line-height: 120%;
        padding-bottom: 8px;
        min-height: 66px;
      }

      &-name {
        color: ${variables.grey3};
        font-size: 16px;
        font-weight: 500;
        line-height: 150%; /* 24px */
      }
    }

    &__prices {
      display: inline-flex;
      align-items: center;
      gap: 16px;
    }

    &__price-now {
      color: ${variables.grey1};
      font-size: 20px;
      font-weight: 600;
      line-height: 150%; /* 30px */
    }

    &__price-decrese {
      color: ${variables.grey4};
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      text-decoration-line: strikethrough;
    }

    &__hovered {
      position: absolute;
      display: flex;
      width: 100%;
      opacity: 0;
      background: ${variables.grey1};
      top: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 100%;

      &-btn {
        width: 202px;
        height: 48px;
        background: ${variables.white};
        color: ${variables.primary};
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        cursor: pointer;
        border: none;
        z-index: 1;
      }

      &-icons {
        display: flex;
        gap: 10px;
      }

      &-shareIcon,
      &-compare,
      &-like {
        display: flex;
        color: ${variables.white};
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        text-decoration: none;
        gap: 2px;
      }

      &-compare img {
        width: 20px;
      }
    }

    &:hover {
      .card__hovered {
        opacity: 0.72;
      }
    }
  }
`;
