import React from "react";
import PageContent from "../components/PageContent";

import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export interface Error {
  data: { message: string };
  internal: boolean;
  status: number;
  statusText: string;
}

const Error = () => {
  const error = useRouteError() as Error;

  let title = "An Error Occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};
export default Error;
