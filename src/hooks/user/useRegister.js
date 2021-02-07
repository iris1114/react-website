import { useEffect, useState } from "react";
import { getProduct } from "../../utils/api";


const useProduct = (username,email,password) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProduct(productId)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return {
    product,
    loading: isLoading,
    error
  };
};

export default useProduct;