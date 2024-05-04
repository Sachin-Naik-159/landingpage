import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComp.css";
const wLogo = require("../image/pngeggw.png");
const bLogo = require("../image/pngegg.png");

function CarouselComp() {
  return (
    <>
      {/* Small Screen */}
      <>
        <Carousel
          fade
          className="d-block d-md-none d-lg-none d-xl-none d-xxl-none"
        >
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100 relative"
                src="https://www.aesop.com/u1nb1km7t5q7/1IbQtXDUe1Cn9jeMARGUf5/815747c530fcafee8d9d252c4abe9188/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Mobile_900x900px_NO.jpg"
                alt="First slide"
              />
              <img
                className="d-block absolute abs1"
                src={wLogo}
                alt="First slide"
              />
              <i
                className="fa-solid fa-magnifying-glass fa-lg absolute abs5 mt-3"
                style={{ color: "#fffef2" }}
              ></i>
              <i
                className="fa-regular fa-heart fa-lg absolute abs4 mt-3"
                style={{ color: "#fffef2" }}
              ></i>
              <b className="absolute abs3 mt-1" style={{ color: "#fffef2" }}>
                Cart
              </b>
              <i
                className="fa-solid fa-grip-lines fa-lg absolute abs2 mt-3"
                style={{ color: "#fffef2" }}
              ></i>
            </div>
            <div className="pt-5 pb-5" style={{ backgroundColor: "#252525" }}>
              <div className="w-50 cent" style={{ color: "#FFFEF2" }}>
                <p>Mother’s Day</p>
                <h2>For the discerning</h2>
                <p>
                  Our range of products provides ample options for even the most
                  particular of gift-givers and recipients—fitting choices to
                  reciprocate maternal guidance.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-light pt-3 pb-3 w-100"
                >
                  <span>Discover Mother's Day gifts{"    "}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100 relative"
                src="https://www.aesop.com/u1nb1km7t5q7/6UkovD4r4E8hTr5OJw5ezW/304f1dc38d38ca53a3a1f0b29db83b10/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Mobile_900x900px.jpg"
                alt="Second slide"
              />
              <img
                className="d-block absolute abs1"
                src={bLogo}
                alt="First slide"
              />
              <i
                className="fa-solid fa-magnifying-glass fa-lg absolute abs5 mt-3"
                style={{ color: "#252525" }}
              ></i>
              <i
                className="fa-regular fa-heart fa-lg absolute abs4 mt-3"
                style={{ color: "#252525" }}
              ></i>
              <b className="absolute abs3 mt-1" style={{ color: "#252525" }}>
                Cart
              </b>
              <i
                className="fa-solid fa-grip-lines fa-lg absolute abs2 mt-3"
                style={{ color: "#252525" }}
              ></i>
            </div>
            <div className="pt-5 pb-4" style={{ backgroundColor: "#F6F5E8" }}>
              <div className="w-50 cent">
                <p>Warm weather companions</p>
                <h2>Exfoliating and Replenishing Duo</h2>
                <p>
                  Support the skin as humidity rises by polishing away dead skin
                  cells with a cream exfoliant and following with a hydrating,
                  refreshing gel-based masque twice weekly.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-dark pt-3 pb-3 w-100"
                >
                  <span>Discover the duo{"    "}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100 relative"
                src="https://www.aesop.com/u1nb1km7t5q7/6vQCfTOmN0bisdNmJ1t2io/d7272ab3f4f1f0291507099a5bfab16d/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Mobile_900x900px.jpg"
                alt="Third slide"
              />
              <img
                className="d-block absolute abs1"
                src={bLogo}
                alt="First slide"
              />
              <i
                className="fa-solid fa-magnifying-glass fa-lg absolute abs5 mt-3"
                style={{ color: "#252525" }}
              ></i>
              <i
                className="fa-regular fa-heart fa-lg absolute abs4 mt-3"
                style={{ color: "#252525" }}
              ></i>
              <b className="absolute abs3 mt-1" style={{ color: "#252525" }}>
                Cart
              </b>
              <i
                className="fa-solid fa-grip-lines fa-lg absolute abs2 mt-3"
                style={{ color: "#252525" }}
              ></i>
            </div>
            <div className="pt-5 pb-4" style={{ backgroundColor: "#F6F5E8" }}>
              <div className="w-50 cent">
                <p>Skin Care+</p>
                <h2>Vitamin-enriched skin care</h2>
                <p>
                  With generous measures of efficacious botanicals and
                  skin-supportive ingredients, the Skin Care+ range was designed
                  to provide optimal replenishment.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-dark pt-3 pb-3 w-100"
                >
                  <span>Discover the range{"    "}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
      {/* Medium Screen */}
      <>
        <Carousel
          fade
          className="d-none d-md-block d-lg-none d-xl-none d-xxl-none"
        >
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100 relative"
                src="https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg"
                alt="First slide"
              />
              <img className="d-block absolute" src={wLogo} alt="First slide" />
            </div>
            <div className="pt-5 pb-5" style={{ backgroundColor: "#252525" }}>
              <div className="w-50 cent" style={{ color: "#FFFEF2" }}>
                <p>Mother’s Day</p>
                <h2>For the discerning</h2>
                <p>
                  Our range of products provides ample options for even the most
                  particular of gift-givers and recipients—fitting choices to
                  reciprocate maternal guidance.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-light pt-3 pb-3 w-100"
                >
                  <span>Discover Mother's Day gifts{"    "}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100 relative"
                src="https://www.aesop.com/u1nb1km7t5q7/75bEmyIFH0TlczfbHwVoAP/e1af4ae744f84585a8402df82db1f4a2/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_XL_2560x1200px.jpg"
                alt="Second slide"
              />
              <img className="d-block absolute" src={bLogo} alt="First slide" />
            </div>
            <div className="pt-5 pb-4" style={{ backgroundColor: "#F6F5E8" }}>
              <div className="w-50 cent">
                <p>Warm weather companions</p>
                <h2>Exfoliating and Replenishing Duo</h2>
                <p>
                  Support the skin as humidity rises by polishing away dead skin
                  cells with a cream exfoliant and following with a hydrating,
                  refreshing gel-based masque twice weekly.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-dark pt-3 pb-3 w-100"
                >
                  <span>Discover the duo{"    "}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100 relative"
                src="https://www.aesop.com/u1nb1km7t5q7/71RoRqNYT7O7FT9KX1RuzD/97e563bdfe0714e54932dd6d7e1cc50e/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Desktop_XL_2560x1200px.jpg"
                alt="Third slide"
              />
              <img className="d-block absolute" src={bLogo} alt="First slide" />
            </div>
            <div className="pt-5 pb-4" style={{ backgroundColor: "#F6F5E8 " }}>
              <div className="w-50 cent">
                <p>Skin Care+</p>
                <h2>Vitamin-enriched skin care</h2>
                <p>
                  With generous measures of efficacious botanicals and
                  skin-supportive ingredients, the Skin Care+ range was designed
                  to provide optimal replenishment.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-dark pt-3 pb-3 w-100"
                >
                  <span>Discover the range{"    "}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
      {/* Large Screen */}
      <>
        <Carousel
          fade
          className="d-none d-md-none d-lg-block d-xl-block d-xxl-block"
        >
          <Carousel.Item>
            <div>
              <img
                className="d-block w-100 relative"
                src="https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg"
                alt="First slide"
              />
              <img className="d-block absolute" src={wLogo} alt="First slide" />
              <div className="abs0" style={{ color: "#F6F5E8" }}>
                <p className="fontsize">Mother’s Day</p>
                <h2>For the discerning</h2>
                <p className="fontsize">
                  Our range of products provides ample options for even the most
                  particular of gift-givers and recipients—fitting choices to
                  reciprocate maternal guidance.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-light pt-3 pb-3"
                >
                  <span>Discover Mother's Day gifts{"    "}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block absolute" src={bLogo} alt="First slide" />
            <div className="row" style={{ backgroundColor: "#F6F5E8" }}>
              <div className="w-50">
                <div
                  className="pt-5 pb-4"
                  style={{ backgroundColor: "#F6F5E8" }}
                >
                  <div className="w-50 cent1">
                    <p className="fontsize">Warm weather companions</p>
                    <h2>Exfoliating and Replenishing Duo</h2>
                    <p className="fontsize">
                      Support the skin as humidity rises by polishing away dead
                      skin cells with a cream exfoliant and following with a
                      hydrating, refreshing gel-based masque twice weekly.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-dark pt-3 pb-3"
                    >
                      <span>Discover the duo{"    "}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-50">
                <img
                  className="d-block w-100 relative"
                  src="https://www.aesop.com/u1nb1km7t5q7/6UkovD4r4E8hTr5OJw5ezW/304f1dc38d38ca53a3a1f0b29db83b10/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Mobile_900x900px.jpg"
                  alt="Second slide"
                />
                {/* <img className="d-block absolute" src={bLogo} alt="First slide" /> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block absolute" src={bLogo} alt="First slide" />
            <div className="row" style={{ backgroundColor: "#F6F5E8" }}>
              <div className="w-50">
                <div
                  className="pt-5 pb-4"
                  style={{ backgroundColor: "#F6F5E8" }}
                >
                  <div className="w-50 cent1">
                    <p className="fontsize">Skin Care+</p>
                    <h2>Vitamin-enriched skin care</h2>
                    <p className="fontsize">
                      With generous measures of efficacious botanicals and
                      skin-supportive ingredients, the Skin Care+ range was
                      designed to provide optimal replenishment.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-dark pt-3 pb-3"
                    >
                      <span>Discover the range{"    "}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-50">
                <img
                  className="d-block w-100 relative"
                  src="https://www.aesop.com/u1nb1km7t5q7/6vQCfTOmN0bisdNmJ1t2io/d7272ab3f4f1f0291507099a5bfab16d/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Mobile_900x900px.jpg"
                  alt="Second slide"
                />
                {/* <img className="d-block absolute" src={bLogo} alt="First slide" /> */}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    </>
  );
}

export default CarouselComp;
