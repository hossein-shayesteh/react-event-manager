import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Events, { loader as eventPageLoader } from "./Events";
import EditEvent from "./EditEvent";
import EventDetail, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from "./EventDetail";
import RootLayout from "../components/RootLayout";
import EventRoot from "../components/EventRoot";
import NewEvent from "./NewEvent";
import Error from "./Error";
import { action as manipulateEventAction } from "../components/EventForm";
import Newsletter, { action as newsletterAction } from "./Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventPageLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);
export default router;
