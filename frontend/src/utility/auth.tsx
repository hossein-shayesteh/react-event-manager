import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const getTokenDuration = () => {
  const storedExpirationData = localStorage.getItem("tokenExpiration");

  if (storedExpirationData) {
    const expirationData = new Date(storedExpirationData).getTime();
    const now = new Date().getTime();
    return expirationData - now;
  }
};

export const tokenLoader = () => {
  const tokenDuration = getTokenDuration();
  if (tokenDuration && tokenDuration < 0) {
    return "EXPIRED";
  }
  return getAuthToken();
};

export const checkAuthLoader = async () => {
  const token = getAuthToken();

  if (!token) return redirect("/auth");
  return null;
};
