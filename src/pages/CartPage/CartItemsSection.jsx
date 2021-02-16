import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import CartItemBlock from "../../components/cart/CartItemBlock";
import CartsContext from "../../contexts/CartsContext";
import { deleteCarts, updateCarts } from "../../utils/api";
import Swal from "sweetalert2";

const CartItemsSection = () => {
  const { cartsData, setCartsData } = useContext(CartsContext);
  const { authData, setAuthData } = useContext(AuthContext);
  const authToken = authData.access_token;

  const handleMinusClick = (index, quantity, cartId, price) => {
    if (quantity > 1) {
      setCartsData([
        ...cartsData.slice(0, index),
        {
          ...cartsData[index],
          quantity: quantity - 1,
          total_price: (quantity - 1) * price,
        },
        ...cartsData.slice(index + 1),
      ]);
      setAuthData({
        ...authData,
        num_carts: authData.num_carts - 1,
      });

      updateCarts(authToken, cartId, quantity - 1);
    } else {
      setCartsData([
        ...cartsData.slice(0, index),
        {
          ...cartsData[index],
          quantity: 1,
          total_price: 1 * price,
        },
        ...cartsData.slice(index + 1),
      ]);
      updateCarts(authToken, cartId, 1);
    }
  };

  const handlePlusClick = (index, quantity, cartId, price) => {
    setCartsData([
      ...cartsData.slice(0, index),
      {
        ...cartsData[index],
        quantity: quantity + 1,
        total_price: (quantity + 1) * price,
      },
      ...cartsData.slice(index + 1),
    ]);
    setAuthData({
      ...authData,
      num_carts: authData.num_carts + 1,
    });

    updateCarts(authToken, cartId, quantity + 1);
  };

  const handleDeleteClick = (index, quantity, cartId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "has been deleted.",
          showConfirmButton: false,
          timer: 1500,
        });
        setCartsData([
          ...cartsData.slice(0, index),
          ...cartsData.slice(index + 1),
        ]);
        setAuthData({
          ...authData,
          num_carts: authData.num_carts - quantity,
        });
        deleteCarts(authToken, cartId);
      }
    });
  };

  return (
    <div>
      {cartsData.map((cartItem, index) => {
        return (
          <CartItemBlock
            item={cartItem}
            index={index}
            key={cartItem.id}
            onBlockMinus={handleMinusClick}
            onBlockPlus={handlePlusClick}
            onDelete={handleDeleteClick}
          />
        );
      })}
    </div>
  );
};

export default CartItemsSection;
