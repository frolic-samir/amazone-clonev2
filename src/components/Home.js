import React from "react";
import "./home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="">
      <img
        className="img-fluid home-img"
        src="https://images.pexels.com/photos/1100946/pexels-photo-1100946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="homw-img"
      />

      <div className="cart1 d-flex mb-4">
        <Products
          id="1"
          title="Card title"
          description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="200"
          rating="5"
        />
        <Products
          id="2"
          title="Card title"
          description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="200"
          rating="5"
        />
      </div>

      <div className="cart2 d-flex mb-5">
        <Products
          id="4"
          title="Card title"
          description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="200"
          rating="5"
        />
        <Products
          id="5"
          title="Card title"
          description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="200"
          rating="5"
        />
        <Products
          id="6"
          title="Card title"
          description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="200"
          rating="5"
        />
      </div>
    </div>
  );
}

export default Home;
