import "./App.css";
import CarouselComp from "./components/CarouselComp";
import CarouselProd from "./components/CarouselProd";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PostL from "./components/PostL";
import PostR from "./components/PostR";

function App() {
  return (
    <div style={{ fontSize: "0.8rem", backgroundColor: "#FFFEF2" }}>
      <div>
        <div style={{ backgroundColor: "#C2C2AF" }} className="pt-2 pb-1">
          <p className="txt">
            Purchase two eligible seasonal products to receive a Karst Eau de
            Parfum sample. <b className="text"> Browse formulations </b>
          </p>
        </div>
        <div style={{ backgroundColor: "#252525" }} className="pt-1 pb-1">
          <p style={{ color: "#C2C2AF" }} className="txt text">
            Click and Collect is now available in Hong Kong. Enjoy complimentary
            shipping on all orders. <i className="fa-solid fa-plus"></i>
          </p>
        </div>
      </div>
      <NavBar />
      <CarouselComp />
      <CarouselProd className="special" v={0} />
      <PostL v={0} />
      <PostR v={0} />
      <CarouselProd className="special" v={1} />
      <PostL v={1} />
      <CarouselProd className="special" v={2} />
      <PostR v={1} />
      <PostL v={2} />
      <PostR v={2} />
      {/* Quote */}
      <div className="row w-100 mt-5 mb-5">
        <div className="col">
          <b style={{ fontSize: "20px" }}>
            ‘Your best and wisest refuge from all troubles is in your science.’
          </b>
          <br />
          <br />
          <p>Ada Lovelace</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
