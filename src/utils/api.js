import axios from "axios";
// import { AIR_TABLE_KEY } from "./key";


export const getProducts = async () => {
  const productsData = await axios.get(
    `https://cake-backend-demo.herokuapp.com/products`
  );
  return productsData.data;
};


export const getProduct = async (productId) => {
    const productData = await axios.get(
      `https://cake-backend-demo.herokuapp.com/products/${productId}`
    );
    return productData.data;
};

export const getFrontCards = async () => {
  const frontCardsData = await axios.get(
    "https://api.airtable.com/v0/appVGUlGUw44VRhBm/card_font/",
    {
        headers: {
          Authorization: "Bearer " + process.env.AIR_TABLE_KEY
        }
      }
  );
  console.log({frontCardsData});
  return frontCardsData.data.records;
};

export const getDecorations = async () => {
  const decorationsData = await axios.get(
    "https://api.airtable.com/v0/appVGUlGUw44VRhBm/card_decorations/",
    {
        headers: {
          Authorization: "Bearer " + process.env.AIR_TABLE_KEY
        }
      }
  );
  console.log({decorationsData});
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

  console.log({loginRes})
  
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

  return cartsData.data;
}

export const addProductToCart = async (token, productId, quantity) =>{
  const addProductToCartRes =  axios.post(
    "https://cake-backend-demo.herokuapp.com/add_product_to_carts",
    {
      "id" : productId ,
      "quantity": quantity
    },
    {
      headers: {
        Authorization: "Bearer " + token,
        Accept : "application/json"
      }
    }
  );

  console.log({addProductToCartRes});

}

export const addCardToCart = async (token, frontImage, backImage) =>{
  
  const addCardToCartRes = axios.post(
    "https://cake-backend-demo.herokuapp.com/add_card_to_carts",
    {
      "name": "Custom Card",
      "front":  frontImage,
      "back": backImage
    },
    {
      headers: {
        Authorization: "Bearer " + token,
        Accept : "application/json"
      }
    }
  );

  console.log({addCardToCartRes});

}

export const updateCarts = async (token, cartId, quantity) =>{
  
  const updateCartsRes = axios.patch(
    "https://cake-backend-demo.herokuapp.com/update_carts",
    {
      "id": cartId,
      "quantity":  quantity
    },
    {
      headers: {
        Authorization: "Bearer " + token,
        Accept : "application/json"
      }
    }
  );

  console.log({updateCartsRes});

}


export const deleteCarts = async (token,cartId) =>{
  
  const deleteCartsRes = axios.delete(
    "https://cake-backend-demo.herokuapp.com/delete_carts",
    {
        headers: {
          "Authorization": "Bearer " + token,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        data: {"id": cartId}
    });

  console.log({deleteCartsRes});

}


export const addOrder = async (token,cartIds) =>{
  
  const addOrdertRes = axios.post(
    "https://cake-backend-demo.herokuapp.com/make_orders",
    {
      ids:cartIds
    },
    {
      headers: {
        Authorization: "Bearer " + token,
        Accept : "application/json"
      }
    }
  );

  return addOrdertRes;

}


export const getOrders = async (token) =>{
  
  const getOrdertRes = await axios.get(
    "https://cake-backend-demo.herokuapp.com/orders",
    {
      headers: {
        Authorization: "Bearer " + token,
        Accept : "application/json"
      }
    }
  );

  return getOrdertRes.data;

}



