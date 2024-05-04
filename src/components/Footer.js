import React from "react";
import "./Footer.css";

function Footer() {
  // d-none d-md-block d-lg-block d-xl-block d-xxl-block
  return (
    <div>
      {/* Footer 1 */}
      <div className="row pt-5 pb-5" style={{ backgroundColor: "#C2C2AF" }}>
        <div className="col-sm-4">
          <div className="w-100 cen">
            <b>Certified B Corp</b>
          </div>
          <p className="cen">
            We meet the highest verified standards of social and environmental
            performance, transparency and accountability.
          </p>
        </div>
        <div className="col-sm-4">
          <div className="w-100 cen">
            <b>Leaping Bunny approved</b>
          </div>
          <p className="cen">
            Our formulations are approved as cruelty free under the Cruelty Free
            International Leaping Bunny programme.
          </p>
        </div>
        <div className="col-sm-4">
          <div className="w-100 cen">
            <b>PETA recognition</b>
          </div>
          <p className="cen">
            We appear on PETA's internationally recognised vegan and
            cruelty-free lists.
          </p>
        </div>
      </div>
      {/* Footer 2 */}
      <div
        className="pt-3 pb-3"
        style={{ backgroundColor: "#252525", color: "#FFFEF2" }}
      >
        <div>
          <div className="foot a c">
            <b>Subscribe to Aesop communications</b>
            <hr className=" border-3  mb-3" />
            <div
              className=" mb-3 search "
              style={{
                display: "flex",
                border: "1px solid white",
                padding: "10px",
                backgroundColor: "#333",
              }}
            >
              <input
                type="text"
                placeholder="Email address"
                style={{
                  flex: 1,
                  color: "white",
                  backgroundColor: "#333",
                  border: "none",
                  outline: "none",
                }}
              />

              <div style={{ color: "white", marginLeft: "10px" }}>
                {" "}
                <i className="fa-solid fa-arrow-right"></i>{" "}
              </div>
            </div>

            <p style={{ lineHeight: "2" }}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                style={{
                  color: "white",
                  backgroundColor: "#333",
                  border: "none",
                  outline: "none",
                }}
              />
              {"   "}
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our{" "}
              <span style={{ textDecoration: "underline" }}>
                privacy policy
              </span>
              .
            </p>
            <br />
            <br />
            <br />
            <br className="disvis" />
          </div>
          <div className="foot b d">
            <b>Orders and support</b>
            <hr className=" border-3" />
            <ul>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Contact us{"    "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                FAQs{"  "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Shipping{"  "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Returns{"   "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Order history
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Check gift card balance
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Terms and conditions
              </li>
            </ul>
          </div>
          <div className="foot b d">
            <b>Location preferences</b>
            <hr className=" border-3" />
            <ul>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Live assistance
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Corporate gifts
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Facial Appointments
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Click and Collect
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Video consultation
              </li>
            </ul>
            <br />
            <br />
          </div>
          <div className="foot b d">
            <b>Services</b>
            <hr className=" border-3" />
            <ul>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Shipping:
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Hong Kong, SAR
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Language:
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                English
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                繁體中文
              </li>
            </ul>
            <br />
            <br />
          </div>
        </div>
        <div>
          <div className="foot a">
            <b>Sustainability</b>
            <hr className=" border-3  mb-3" />
            <p style={{ lineHeight: "1.7" }}>
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </p>
            <br />
            <br />
            <br />
            <br />
            <br className="dis" />
          </div>
          <div className="foot b d">
            <b>About</b>
            <hr className=" border-3" />
            <ul>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Our story
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Foundation
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Careers
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Privacy policy
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Accessibility
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Cookie Policy
              </li>
            </ul>
          </div>{" "}
          <div className="foot b d">
            <b>Social media</b>
            <hr className=" border-3" />
            <ul>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Instagram{"    "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Twitter{"  "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                LinkedIn{"  "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                WeChat
              </li>
              <li className="mb-2" style={{ listStyleType: "none" }}>
                Weibo {"   "}
                <i className="fa-solid fa-location-arrow"></i>
              </li>
              <br />
            </ul>
          </div>
        </div>
        <hr className=" border-5" />
        <div className="foot">
          <b style={{ fontSize: "15px" }}>© A e s o p</b>
        </div>
      </div>
    </div>
  );
}

export default Footer;
