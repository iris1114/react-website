import React, { useContext, useEffect, useState } from "react";
import CartsContext from "../../components/cart/CartsContext";
import Button from "../../components/common/Button";

const CartTotalSection = () => {
  const { cartsData } = useContext(CartsContext);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const item of cartsData) {
      const totalPrice = item.total_price;
      total += totalPrice;
    }
    setSum(total);
  }, [cartsData]);

  const handleCheckoutClick = () => {};

  return (
    <>
      <div className="row align-items-center text-right mb-5 mt-5">
        <div className="col-md-6 f-lg-2xl">Cart Total</div>
        <div className="col-md-6 f-lg-2xl">{sum}</div>
      </div>
      <div className="text-right" onClick={handleCheckoutClick}>
        <Button text="checkout" />
      </div>
    </>
  );
};

export default CartTotalSection;
