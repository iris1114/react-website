import { useEffect, useState, useContext } from "react";
import { getCarts } from "../../utils/api";
import CartsContext from "../../components/cart/CartsContext";

const useCarts = (authToken) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [emptyCarts, setEmptyCarts] = useState(true);
  const { cartsData, setCartsData } = useContext(CartsContext);

  useEffect(() => {
    setIsLoading(true);
    if (authToken) {
    getCarts(authToken)
      .then((res) => {
        setCartsData(res);
        setEmptyCarts(false);
      })
      .then(()=>{
        if(cartsData){
          setEmptyCarts(false);
        }else{
          setEmptyCarts(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }else {
      setIsLoading(false);
      setEmptyCarts(true);
    }
  }, [authToken]);

  return {
    cartsData,
    loading: isLoading,
    error,
    emptyCarts
  };
};

export default useCarts;