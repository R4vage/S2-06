import axios from "axios";

export const axiosDB = axios.create({
    baseURL: "http://localhost:4000/api"
})

export const setHeaders = () => {
  const user = JSON.parse(localStorage.getItem("loginState"))
  console.log(user)
    const headers = {
      headers: {
        "authorization": "Bearer " + user.token,
      },
    };
  
    return headers;
  };