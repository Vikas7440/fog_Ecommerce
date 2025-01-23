import styled from "styled-components";
import { variables } from "../../styles/variables";

export const CardCarouselStyle = styled.div`
     .card__carousel {
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
}

`;
