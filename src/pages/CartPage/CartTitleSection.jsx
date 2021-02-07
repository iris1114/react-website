import React from "react";

const CartTitleSection = () => {
  return (
    <div className="row align-items-center text-center d-none d-md-flex">
      <div className="col-md-7 d-flex align-items-center">
        <div className="col-md-3">Image</div>
        <div className="col-md-4">Product</div>

        <div className="col-md-5">Price</div>
      </div>
      <div className="col-md-5 d-flex align-items-center justify-content-center">
        <div className="col-md-5">Quantity</div>
        <div className="col-md-5">Total</div>
        <div className="col-md-2">Delete</div>
      </div>
    </div>
  );
};

export default CartTitleSection;
