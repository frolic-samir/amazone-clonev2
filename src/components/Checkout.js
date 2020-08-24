import React, { useContext } from "react";
import "./checkout.css";
import { Store, subTotal } from "./Provider";

import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useContext(Store);
  return (
    <div className="container mt-3 d-flex">
      {/* <div className="row mt-3"> */}
      <div className="col-xxl-9 col-lg-9">
        {basket.length > 0 ? (
          basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              qty={item.qty}
            />
          ))
        ) : (
          <h1>No items in basket</h1>
        )}
      </div>
      {/* </div> */}

      {basket.length > 0 && (
        <div className="right w-25 ml-5">
          <p>
            Subtotal of {basket.length} items: $
            <span className="font-weight-bold font-normal">
              {subTotal(basket)}
            </span>
          </p>
          <button className="btn btn-warning btn-sm px-3 mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
