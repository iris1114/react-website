import React, { useContext, useEffect, useState } from "react";
import CartsContext from "../../contexts/CartsContext";
import Button from "../../components/common/Button";
import { addOrder } from "../../utils/api";
import AuthContext from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const CartTotalSection = () => {
  const { cartsData } = useContext(CartsContext);
  const [sum, setSum] = useState(0);
  const { authData, setAuthData } = useContext(AuthContext);
  const authToken = authData.access_token;
  const history = useHistory();

  useEffect(() => {
    let total = 0;
    for (const item of cartsData) {
      const totalPrice = item.total_price;
      total += totalPrice;
    }
    setSum(total);
  }, [cartsData]);

  const handleCheckoutClick = () => {
    const cartIds = [];

    for (const item of cartsData) {
      cartIds.push(item.id);
    }

    addOrder(authToken, cartIds)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Order Successfully Placed!",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push("/complete");
          setAuthData({
            ...authData,
            num_carts: 0,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Unable to make order",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      <div className="row align-items-center text-right mb-5 mt-5">
        <div className="col-md-6 f-lg-2xl">Cart Total</div>
        <div className="col-md-6 f-lg-2xl">${sum.toLocaleString()}</div>
      </div>
      <div className="text-right" onClick={handleCheckoutClick}>
        <Button text="checkout" />
      </div>
    </>
  );
};

export default CartTotalSection;
