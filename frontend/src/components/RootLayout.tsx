import React, { useEffect } from "react";

import MainNavigation from "./MainNavigation";
import { Outlet, useSubmit } from "react-router-dom";
import { getAuthToken, getTokenDuration } from "../utility/auth";

const RootLayout = () => {
  const token = getAuthToken();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    if (token === "EXPIRED") {
      submit(null, { method: "post", action: "/logout" });
    }

    setTimeout(() => {
      submit(null, { method: "post", action: "/logout" });
    }, getTokenDuration());
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
