import React from "react";

import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const Authentication = () => {
  return (
    <>
      <AuthForm />
    </>
  );
};

export default Authentication;

export const action = async ({ request }: any) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");

  if (mode !== "login" && mode !== "signup")
    throw json({ message: "Unsupported mode." }, { status: 422 });

  const formData = await request.formData();
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const data = await response.json();
  const token = data.token;

  const tokenExpirationTime = new Date();
  tokenExpirationTime.setHours(tokenExpirationTime.getHours() + 1);

  localStorage.setItem("token", token);
  localStorage.setItem("tokenExpiration", tokenExpirationTime.toISOString());

  return redirect("/");
};
