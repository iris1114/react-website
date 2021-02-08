import axios from "axios";
import { AIR_TABLE_KEY } from "./key";


export const getProducts = async () => {
  const productsData = await axios.get(
    `https://cake-backend-demo.herokuapp.com/products`
  );
  console.log(productsData);
  return productsData.data;
};


export const getProduct = async (productId) => {
    const productData = await axios.get(
      `https://cake-backend-demo.herokuapp.com/products/${productId}`
    );
    console.log(productData);
    return productData.data;
};

export const getFrontCards = async () => {
  const frontCardsData = await axios.get(
    "https://api.airtable.com/v0/appVGUlGUw44VRhBm/card_font/",
    {
        headers: {
          Authorization: "Bearer " + AIR_TABLE_KEY
        }
      }
  );
  return frontCardsData.data.records;
};

export const getDecorations = async () => {
  const decorationsData = await axios.get(
    "https://api.airtable.com/v0/appVGUlGUw44VRhBm/card_decorations/",
    {
        headers: {
          Authorization: "Bearer " + AIR_TABLE_KEY
        }
      }
  );
  return decorationsData.data.records;
};


export const getSignUp = async (signUpData) =>{
  const registerRes = axios.post(
    "https://cake-backend-demo.herokuapp.com/signup",
    {
      "username": signUpData.username,
      "email": signUpData.email,
      "password": signUpData.password
    }
  );
  return registerRes;
}
export const getLogin =  (username,password) =>{
  const details = {
    "grant_type" : "",
    "username": username,
    "password": password,
    "scope": "",
    "client_id" : "",
    "client_secret" : ""
  }
  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  const loginRes = axios.post(
    "https://cake-backend-demo.herokuapp.com/auth/token",
    {
      formBody
    },
    {
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
        "accept": "application/json"
      }
    }
    
  );
  
  return loginRes;
}


export const getCarts = async (token) => {
  
  const cartsData = await axios.get(
    "https://cake-backend-demo.herokuapp.com/carts",
    {
      headers: {
        Authorization: "Bearer " +token,
        Accept : "application/json"
      }
    }
  );

  console.log(cartsData.data)
  return cartsData.data;
}