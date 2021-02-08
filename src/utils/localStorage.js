
export const localAuthData = (data) =>{
    localStorage.setItem("authToken", data.access_token);
    localStorage.setItem("authUsername", data.username);
    localStorage.setItem("authCartNum", data.num_carts);
}