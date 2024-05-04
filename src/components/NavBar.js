import React from "react";

function NavBar() {
  return (
    <div>
      <nav
        className="navbar d-none d-md-block d-lg-none d-xl-none d-xxl-none"
        style={{ backgroundColor: "#FFFEF2" }}
      >
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Shop</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Read</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Stores</p>
            </a>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Login</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Cabinate</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Cart</p>
            </a>
          </div>
        </div>
      </nav>
      <nav
        className="navbar d-none d-lg-block"
        style={{ backgroundColor: "#FFFEF2" }}
      >
        <div className="container-fluid ">
          <div>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Skin Care</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Body & Hand</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Hair</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Fragrance</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Home</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Kits & Travel</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Gifts</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Read</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Stores</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Facial Appointments</p>
            </a>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Login</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Cabinate</p>
            </a>
            <a className="navbar-brand" href="#">
              <p className="p-in-line">Cart</p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
