import axios from "axios";
import { AIR_TABLE_KEY } from "./key";

export const getProducts = async () => {
  const ProductsData = await axios.get(
    `https://api.airtable.com/v0/appVGUlGUw44VRhBm/products/`,
    {
        headers: {
          Authorization: "Bearer " + AIR_TABLE_KEY
        }
      }
  );
  return ProductsData.data.records;
};


export const getProduct = async (productId) => {
    const ProductData = await axios.get(
      `https://api.airtable.com/v0/appVGUlGUw44VRhBm/products/${productId}`,
      {
          headers: {
            Authorization: "Bearer " + AIR_TABLE_KEY
          }
        }
    );
    let data = ProductData.data.fields;
    console.log("data",data);
    return ProductData.data.fields;
};