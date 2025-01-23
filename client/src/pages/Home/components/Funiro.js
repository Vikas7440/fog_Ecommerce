import React from "react";
import { FuniroStyle } from "./styles";
import image1 from "../../../assets/images/Rectangle 36.png";
import image2 from "../../..//assets/images/Rectangle 37.png";
import image3 from "../../..//assets/images/Rectangle 38.png";
import image4 from "../../..//assets/images/Rectangle 39.png";
import image5 from "../../..//assets/images/Rectangle 40.png";
import image6 from "../../..//assets/images/Rectangle 41.png";
import image7 from "../../..//assets/images/Rectangle 43.png";
import image8 from "../../..//assets/images/Rectangle 44.png";
import image9 from "../../..//assets/images/Rectangle 45.png";

const Funiro = () => {
  return (
    <FuniroStyle>
      <div className="funiro__title">
        <p className="funiro-p">Share Your Setup with</p>
        <h1 className="funiro-h1">#FuniroFurniture</h1>
      </div>
      <div className="funiro__images">
        <div className="funiro__images-left">
          <div className="funiro__images-left-top">
            <img src={image1} alt="Rectangle 36" className="funiro__images-left-top-image1" />
            <img src={image3} alt="Rectangle 38" className="funiro__images-left-top-image3" />
          </div>
          <div className="funiro__images-left-bot">
            <img src={image2} alt="Rectangle 37" className="funiro__images-left-bot-image2" />
            <img src={image4} alt="Rectangle 39" className="funiro__images-left-bot-image4" />
          </div>
        </div>
        <div className="funiro__images-center">
          <img src={image5} alt="Rectangle 40" className="funiro__images-center-image5" />
        </div>
        <div className="funiro__images-right">
          <div className="funiro__images-right-top">
            <img src={image7} alt="Rectangle 43" className="funiro__images-right-top-image7" />
            <img src={image9} alt="Rectangle 45" className="funiro__images-right-top-image9" />
          </div>
          <div className="funiro__images-right-bot">
            <img src={image6} alt="Rectangle 41" className="funiro__images-right-bot-image6" />
            <img src={image8} alt="Rectangle 44" className="funiro__images-right-bot-image8" />
          </div>
        </div>
      </div>
    </FuniroStyle>
  );
};

export default Funiro;
