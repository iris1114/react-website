import React from "react";
import Button from "../../components/common/Button";

const CartTotalSection = () => {
  return (
    <>
      <div className="row align-items-center text-right mb-5 mt-5">
        <div className="col-md-6 f-lg-2xl">Cart Total</div>
        <div className="col-md-6 f-lg-2xl">$150</div>
      </div>
      <div className="text-right">
        <Button text="checkout" />
      </div>
    </>
  );
};

export default CartTotalSection;
