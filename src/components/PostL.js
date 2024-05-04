import React from "react";
import "./Post.css";
import Carousel from "react-bootstrap/Carousel";
const data = [
  {
    p1: "A seasonal offer",
    b: "Experience Karst Eau de Parfum",
    p2: `In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.)`,
    bt: "Explore summer formulations",
    img: "https://www.aesop.com/u1nb1km7t5q7/3UWzrNrjTbNjBomL9WkVaS/4aa0066ec853b88cfc0bd209174785c2/Aesop_Travel_2023_Web_Landing_Page_2_Secondary_Mid_Desktop_2560x1440px.jpg",
  },
  {
    p1: "High time for high coverage",
    b: "Protective Facial Lotion SPF50",
    p2: `Introducing a daily-use formulation offering broad-spectrum UV protection and sustained hydration—come rain or shine.`,
    bt: "Discover Protective Facial Lotion SPF50",
    img: "https://www.aesop.com/u1nb1km7t5q7/6fNN0BAQNyzP9A9eOwmcaE/cb660d194f4078aa1e4e09b2da3983d5/Aesop_SPF50_2023_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg",
  },
  {
    p1: "",
    b: "Store locator",
    p2: `Our consultants are available to host you in-store and provide tailored guidance on gift purchases.`,
    bt: "Find a nearby store",
    img: null,
  },
];

function PostL(v) {
  return (
    <div>
      <div className="displ-1">
        <div className="ilblock mt-5" style={{ fontSize: "0.85rem" }}>
          <p className="w-100 cen">{data[v.v].p1}</p>
          <b className="w-100 cen">{data[v.v].b}</b> <br />
          <br />
          <p className="w-100 cen">{data[v.v].p2} </p>
          <div className="w-100 cen">
            <button type="button" className="btn btn-outline-dark pt-3 pb-3">
              <span>
                {data[v.v].bt}
                {"    "}
              </span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-5 mb-5">
          <div className="col-4 displ">
            <div className="ilblock mt-5" style={{ fontSize: "0.85rem" }}>
              <p>{data[v.v].p1}</p>
              <b>{data[v.v].b}</b> <br />
              <br />
              <p>{data[v.v].p2} </p>
              <button type="button" className="btn btn-outline-dark pt-3 pb-3">
                <span>
                  {data[v.v].bt}
                  {"    "}
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="col-8 mlimg">
            {data[v.v].img === null ? (
              <>
                <Carousel>
                  <Carousel.Item>
                    <img
                      src="https://www.aesop.com/u1nb1km7t5q7/3zcvjyxtts2FpeU5DHqO93/d075d2ac71f0a36fe38fce6fd2fb8155/Aesop_Hollywood_Road_II_Hero_Bleed_Desktop_2880x1620px.jpg"
                      className="d-block w-100 imgconf"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="https://www.aesop.com/u1nb1km7t5q7/smo9jFDCxanZL9fgDNpek/cc6a6a583ca0035cc39dc45ef792aaa7/Aesop_MO_Stores_DFS_Macau_Four_Seasons_Hero_Bleed_Desktop_2880x1620px.jpg"
                      className="d-block w-100 imgconf"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="https://www.aesop.com/u1nb1km7t5q7/3qMKbyDUTGRWyBlMLWxsRu/24c4cbb32427080bbb48dca6d5161962/Aesop_Fashion_Walk_II_Hero_Bleed_Desktop_2880x1620px.jpg"
                      className="d-block w-100 imgconf"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </>
            ) : (
              <>
                <img className="w-100" src={data[v.v].img} alt="Second slide" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostL;
