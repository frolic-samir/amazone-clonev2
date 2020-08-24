import React, { useContext, useState, useEffect } from "react";
import { Store } from "./Provider";

function CheckoutProduct({ id, title, description, price, qty }) {
  const [state, dispatch] = useContext(Store);
  const [qtyValue, setQtyValue] = useState("");

  // useEffect(() => {
  //   const ch = setQtyValue(qty);
  //   return () => {
  //     ch();
  //   };
  // }, []);

  console.log(qtyValue);
  const increaseQty = (id) => {
    dispatch({
      type: "INCREASE_QTY",
      id: id,
    });
  };

  const decreaseQty = (id) => {
    dispatch({
      type: "DECREASE_QTY",
      id: id,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const qtyChange = (e) => {
    setQtyValue(e.target.value);
  };
  return (
    <div className="checkout-product-container mb-2 card mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src="https://images.pexels.com/photos/3959114/pexels-photo-3959114.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text mb-1">
              {description.substring(0, 70) + "..."}
            </p>
            <p className="mb-0 font-weight-bold">$ {price}</p>
            <p className="mb-0 font-weight-bold">*****</p>
            <div className="col-sm-1 d-flex flex-column align-items-center">
              <svg
                role="button"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
                className="bi bi-chevron-compact-up"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => increaseQty(id)}
              >
                <path
                  fillRule="evenodd"
                  d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                />
              </svg>

              <input
                className="text-center form-control form-control-sm col-5"
                type="text"
                value={qty}
                aria-label="deafult input example"
                onChange={qtyChange}
              />

              <svg
                role="button"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
                className="bi bi-chevron-compact-down"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => decreaseQty(id)}
              >
                <path
                  fillRule="evenodd"
                  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                />
              </svg>
            </div>
            <div className="text-center my-3">
              <button
                className="btn btn-primary"
                onClick={() => removeItem(id)}
              >
                Remove from basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
