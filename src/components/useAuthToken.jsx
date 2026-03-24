import { useState } from "react";

export default function useAuthToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return tokenString ? JSON.parse(tokenString) : null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}