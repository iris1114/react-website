import axios from "axios";
import { AIR_TABLE_KEY } from "./key";

export const getProducts = async () => {
  const productsData = await axios.get(
    `https://api.airtable.com/v0/appVGUlGUw44VRhBm/products/`,
    {
        headers: {
          Authorization: "Bearer " + AIR_TABLE_KEY
        }
      }
  );
  return productsData.data.records;
};

// export const getProduct2 = async () => {
//   const productsData2 = await axios.get(
//     `https://cake-backend-demo.herokuapp.com/products`
//   );
//   console.log(productsData2);
// };


export const getProduct = async (productId) => {
    const productData = await axios.get(
      `https://api.airtable.com/v0/appVGUlGUw44VRhBm/products/${productId}`,
      {
          headers: {
            Authorization: "Bearer " + AIR_TABLE_KEY
          }
        }
    );
    return productData.data.fields;
};