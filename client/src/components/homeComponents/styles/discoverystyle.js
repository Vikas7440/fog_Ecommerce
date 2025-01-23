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
