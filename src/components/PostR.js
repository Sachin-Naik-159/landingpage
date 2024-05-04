import React from "react";
import "./Post.css";
const data = [
  {
    p1: "Options, streamlined",
    b: "The Gift Finder",
    p2: `This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria.`,
    bt: "Discover the gift finder",
    img: "https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg",
  },
  {
    p1: "Facial Appointments",
    b: "Composure for the skin and senses",
    p2: `For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.`,
    bt: "Learn more",
    img: "https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg",
  },
  {
    p1: "",
    b: "Eminently suited to all",
    p2: `An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections. `,
    bt: "Purchase now",
    img: "https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png",
  },
];

function PostR(v) {
  return (
    <div>
      <div>
        <div className="row mb-5">
          {data[v.v].p1 === "" ? (
            <div className="col-8">
              <>
                <img
                  className="w-100 mlline"
                  src={data[v.v].img}
                  alt="Second slide"
                />
              </>
            </div>
          ) : (
            <div className="col-8">
              <>
                <img className="w-100" src={data[v.v].img} alt="Second slide" />
              </>
            </div>
          )}

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
        </div>
      </div>
      <div className="displ-1">
        <div className="ilblock mt-5 mb-5" style={{ fontSize: "0.85rem" }}>
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
    </div>
  );
}

export default PostR;
