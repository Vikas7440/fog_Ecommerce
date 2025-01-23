import styled, {css} from "styled-components";
import { variables } from "../../../styles/variables";
import filtering from "../../../assets/icons/filtering.svg";
import gridFiltering from "../../../assets/icons/grid-filtering.svg";
import viewListFiltering from "../../../assets/icons/view-list-filtering.svg";
import shopCover from "../../../assets/images/shopcover.png";
import shopArrow from "../../../assets/icons/shoparrow.svg";

export const VisitStyle = styled.div`
  font-family: ${variables.fonts.montserrat};
  .visit {
    display: flex;
    flex-direction: column;
    height: 316px;
    text-align: center;
    justify-content: center;
    background-image: url(${shopCover});
    background-size: cover;

    &__box {
      width: 124px;
      height: 72px;
      padding-top: 121px;

      &-content {
        &-h5 {
          color: ${variables.black};
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }

      &-links {
        display: flex;
        justify-content: center;

        &-icon {
          width: 20px;
          height: 20px;
          background: url(${shopArrow});
          margin: 2px 0 0 5px;
        }

        &-tohome {
          a {
            text-decoration: none;
            color: ${variables.black};
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            list-style: none;
          }
        }

        &-toshop {
          a {
            text-decoration: none;
            color: ${variables.primary};
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }
        }
      }
    }
  }
`;
export const FilterStyle = styled.div`
  .filter {
    background: ${variables.cream};
    padding: 22px 100px;
    display: flex;

    &__buttons {
      border-right: 1px ${variables.fontLight};
      display: flex;
      gap: 24px;

      &-filtering {
        display: flex;
        gap: 12px;
        align-items: center;

        &-a {
          width: 27px;
          height: 26px;
          background-image: url(${filtering});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        &-h1 {
          color: $black;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      &-listing {
        display: flex;
        gap: 12px;
        align-items: center;

        &-grid {
          width: 27px;
          height: 26px;
          background-image: url(${gridFiltering});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        &-viewlist {
          width: 27px;
          height: 26px;
          background-image: url(${viewListFiltering});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-color: none;
        }
      }
    }

    &__result-text {
      color: $black;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      align-content: center;
    }

    &__inputs {
      border-right: 1px ${variables.fontLight};
      gap: 24px;
      display: flex;
      margin-left: auto;
      align-items: center;

      &-show {
        color: ${variables.black};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        &-count {
          width: 55px;
          height: 55px;
          flex-shrink: 0;
        }
      }

      &-short {
        color: ${variables.black};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      &-select {
        width: 188px;
        height: 55px;
        flex-shrink: 0;
        color: ${variables.fontLight};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        background-color: ${variables.white};
        appearance: none;
        padding-left: 30px;

        option {
          color: ${variables.fontLight};
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }

  input[type="number"] {    
    color: ${variables.fontLight};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    border: none;
  }
`;
export const OurShopStyle = styled.div`

  .shop {
    padding: 56px 102px;

    @media screen and (width >= 1024px) {
      gap: 27px;
    }

    &__nextButton {
      display: flex;
      justify-content: center;
      color: ${variables.primary};
      gap: 38px;
      margin-top: 70px;

      .active,
      &-a:hover {
        background-color: ${variables.primary};
        color: ${variables.white};
      }

      &-btn {
        border: none;
        padding: 15px 30px;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        border-radius: 10px;
        background: ${variables.cream};

        a {
          color: ${variables.black};
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

    &__cards-row {
      margin-top: 32px;
      display: flex;
      justify-content:space-between;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
      flex-direction: row;
      
    }
    &__cards-column {

      margin-top: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content:center;

      gap: 30px;
      flex-wrap: wrap;
      flex-direction: row;
    }
    &__cards-column {
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 30px;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;
export const PriceModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  background: ${variables.black};
  opacity: 0.5;
  z-index: 2;
  height: 100vh;
  top: 0;
}
`;
export const PriceModal = styled.div`
  position: relative
`;
export const PriceModalContainer = styled.div`
    font-family: ${variables.fonts.montserrat};
    background-color: ${variables.white};
    padding: 24px;
    border-radius: 10px;
    box-shadow: black 4px 4px 10px;
    width: 400px;    
    margin: auto;
    position: absolute;
    display: flex;
    flex-direction: column; 
    z-index: 3;
    left: calc(50% - 200px);    
    

`;
export const PriceModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`;
export const PriceModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${variables.greenAccents};
  color: ${variables.black};
  border: none;
  cursor: pointer;

  ${props => props.type === "danger" && css`
      background-color: ${variables.redAccents};

    `}
`
