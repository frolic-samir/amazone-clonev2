import React, { useContext } from "react";
import { Store } from "./Provider";

function Products({ id, title, description, price, rating }) {
  const [state, dispatch] = useContext(Store);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        description,
        price,
        rating,
      },
    });
  };
  return (
    <div className="card mx-3" key={id}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span>$ {price}</span>
        <span>*****</span>
      </div>
      <img
        src="https://images.pexels.com/photos/3959114/pexels-photo-3959114.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        className="card-img-top"
        alt="..."
      />
      <div className="text-center my-3">
        <button className="btn btn-warning btn-sm px-4" onClick={addToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
